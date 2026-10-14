const path = require('path');
const crypto = require('crypto');
const express = require('express');
const rateLimit = require('express-rate-limit');
const { createClient } = require('@libsql/client');

const {
  ADMIN_USERNAME = 'admin', ADMIN_PASSWORD, PORT = 3000, NODE_ENV,
  TURSO_DATABASE_URL, TURSO_AUTH_TOKEN
} = process.env;

if (!TURSO_DATABASE_URL) {
  console.error('TURSO_DATABASE_URL is not set. Add it (and TURSO_AUTH_TOKEN) in the Render Environment settings.');
  process.exit(1);
}

// ---------- Database (Turso) ----------
const client = createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN });

const toObjs = r => r.rows.map(row => {
  const o = {};
  r.columns.forEach((c, i) => { o[c] = row[i]; });
  return o;
});
const all = async (sql, args = [], x = client) => toObjs(await x.execute({ sql, args }));
const get = async (sql, args = [], x = client) => (await all(sql, args, x))[0];
const run = (sql, args = [], x = client) => x.execute({ sql, args });
const blob = v => Buffer.from(v);
const marks = a => a.map(() => '?').join(',');
const idParam = req => { const n = Number(req.params.id); return Number.isInteger(n) ? n : -1; };

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    position TEXT NOT NULL,
    role TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    must_change INTEGER NOT NULL DEFAULT 1,
    active INTEGER NOT NULL DEFAULT 1,
    email TEXT,
    phone TEXT,
    bio TEXT,
    avatar BLOB,
    updated_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    expires_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    topic TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    handled_by TEXT,
    ref TEXT UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT
  );
  CREATE TABLE IF NOT EXISTS message_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    by_id INTEGER,
    by_name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_log_message ON message_log(message_id);
  CREATE TABLE IF NOT EXISTS proof_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    log_id INTEGER NOT NULL,
    data BLOB NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_proof_log ON proof_photos(log_id);
  CREATE TABLE IF NOT EXISTS evidence_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    data BLOB NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_evidence_message ON evidence_photos(message_id);
  CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL DEFAULT '',
    author_id INTEGER,
    author_name TEXT,
    event_date TEXT,
    event_time TEXT,
    event_end TEXT,
    venue TEXT,
    edited_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS announcement_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    announcement_id INTEGER NOT NULL,
    data BLOB NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_news_photos ON announcement_photos(announcement_id);
`;

// reference numbers so residents can check their request
const REF_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const newRef = () => 'ZAP-' + Array.from(crypto.randomBytes(6), b => REF_CHARS[b % REF_CHARS.length]).join('');

const EVIDENCE_TOPICS = ['Report a concern', 'Suggestion', 'Other'];

const withPhotos = async rows => {
  if (!rows.length) return [];
  const ids = rows.map(r => r.id);
  const ph = await all(`SELECT id, announcement_id FROM announcement_photos WHERE announcement_id IN (${marks(ids)}) ORDER BY id`, ids);
  return rows.map(r => ({
    ...r,
    photos: ph.filter(p => p.announcement_id === r.id).map(p => '/news-photos/' + p.id + '.jpg')
  }));
};

// ---------- Roles ----------
// admin     = everything + manage accounts
// staff     = read and update messages, post announcements
// announcer = post announcements only
const POSITIONS = {
  'Punong Barangay (Chairman)': 'admin',
  'Barangay Secretary': 'admin',
  'Barangay Kagawad': 'staff',
  'SK Chairperson': 'announcer'
};
const TOPICS = ['Request a document', 'Report a concern', 'Suggestion', 'Other'];
const STATUSES = ['new', 'in progress', 'resolved'];

// ---------- Passwords and sessions ----------
const hashPw = pw => {
  const salt = crypto.randomBytes(16);
  return salt.toString('hex') + ':' + crypto.scryptSync(pw, salt, 64).toString('hex');
};
const verifyPw = (pw, stored) => {
  const [s, h] = String(stored).split(':');
  if (!s || !h) return false;
  const calc = crypto.scryptSync(String(pw), Buffer.from(s, 'hex'), 64);
  const hb = Buffer.from(h, 'hex');
  return hb.length === calc.length && crypto.timingSafeEqual(calc, hb);
};
const DUMMY = hashPw('not-a-real-password');
const sha = t => crypto.createHash('sha256').update(t).digest('hex');
const SESSION_MS = 8 * 60 * 60 * 1000;
const secure = NODE_ENV === 'production' ? '; Secure' : '';

const getCookie = (req, name) => {
  const m = (req.headers.cookie || '').split(';').map(s => s.trim()).find(s => s.startsWith(name + '='));
  return m ? decodeURIComponent(m.slice(name.length + 1)) : '';
};
const startSession = async (res, userId) => {
  const token = crypto.randomBytes(32).toString('hex');
  await run('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)', [sha(token), userId, Date.now() + SESSION_MS]);
  res.setHeader('Set-Cookie', `sid=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_MS / 1000}${secure}`);
};

// user columns without the photo itself (has_avatar tells if a photo exists)
const USER_COLS = 'id, username, full_name, position, role, must_change, active, email, phone, bio, updated_at, (avatar IS NOT NULL) AS has_avatar';
const userById = id => get(`SELECT ${USER_COLS} FROM users WHERE id = ?`, [id]);

// ---------- Middleware ----------
// lets async route handlers send their errors to the error handler
const h = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const auth = h(async (req, res, next) => {
  const t = getCookie(req, 'sid');
  if (!t) return res.status(401).json({ error: 'Not signed in' });
  const u = await get(`
    SELECT u.id, u.username, u.full_name, u.position, u.role, u.must_change, u.email, u.phone, u.bio, u.updated_at,
           (u.avatar IS NOT NULL) AS has_avatar
    FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ? AND u.active = 1`, [sha(t), Date.now()]);
  if (!u) return res.status(401).json({ error: 'Not signed in' });
  req.user = u; req.sid = sha(t);
  next();
});
const ready = (req, res, next) =>
  req.user.must_change ? res.status(403).json({ error: 'Please change your temporary password first.', mustChange: true }) : next();
const can = (...roles) => (req, res, next) =>
  roles.includes(req.user.role) ? next() : res.status(403).json({ error: 'You do not have access to this.' });

const limit = (max, minutes) => rateLimit({
  windowMs: minutes * 60 * 1000, max, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many attempts. Please try again later.' }
});
const clean = (v, max) => String(v ?? '').trim().slice(0, max);
const me = u => ({
  id: u.id, username: u.username, full_name: u.full_name, position: u.position, role: u.role,
  must_change: !!u.must_change,
  email: u.email || '', phone: u.phone || '', bio: u.bio || '',
  has_avatar: !!u.has_avatar, updated_at: u.updated_at || ''
});

// ---------- Shared validation ----------
const validDate = s => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + 'T00:00:00Z');
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
};
const validTime = s => /^([01]\d|2[0-3]):[0-5]\d$/.test(s);

// announcement fields: returns { error } or the cleaned fields
function readAnnouncement(body) {
  const title = clean(body?.title, 120), text = clean(body?.body, 3000);
  if (title.length < 3) return { error: 'Title is too short' };

  const event_date = clean(body?.event_date, 10);
  const event_time = clean(body?.event_time, 5);
  const event_end = clean(body?.event_end, 5);
  const venue = clean(body?.venue, 150);
  if (event_date && !validDate(event_date)) return { error: 'Event date is not valid.' };
  if ((event_time && !validTime(event_time)) || (event_end && !validTime(event_end))) return { error: 'Event time is not valid.' };
  if (event_end && !event_time) return { error: 'Add a start time before the end time.' };
  if (event_end && event_time && event_end <= event_time) return { error: 'End time must be after the start time.' };

  return { title, body: text, event_date: event_date || null, event_time: event_time || null, event_end: event_end || null, venue: venue || null };
}

// profile fields: returns { error } or the cleaned fields
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-\s]{7,20}$/;
function readProfile(body) {
  const full_name = clean(body?.full_name, 100);
  const email = clean(body?.email, 120).toLowerCase();
  const phone = clean(body?.phone, 20);
  const bio = clean(body?.bio, 200);
  if (full_name.length < 2) return { error: 'Enter the full name.' };
  if (email && !EMAIL_RE.test(email)) return { error: 'Enter a valid email address.' };
  if (phone && !PHONE_RE.test(phone)) return { error: 'Enter a valid phone number (digits, +, -, spaces).' };
  return { full_name, email: email || null, phone: phone || null, bio: bio || null };
}

// JPEG photos sent as data URLs: returns { error } or { bufs }
function readPhotos(raw) {
  const bufs = [];
  for (const p of raw) {
    const mm = /^data:image\/jpeg;base64,([A-Za-z0-9+/=]+)$/.exec(String(p));
    const buf = mm ? Buffer.from(mm[1], 'base64') : null;
    if (!buf || buf.length > 2 * 1024 * 1024 || buf[0] !== 0xFF || buf[1] !== 0xD8 || buf[2] !== 0xFF) {
      return { error: 'Each photo must be a JPEG image under 2 MB.' };
    }
    bufs.push(buf);
  }
  return { bufs };
}

const sendJpeg = (res, data, cache) => {
  res.set({ 'Content-Type': 'image/jpeg', 'Cache-Control': cache, 'X-Content-Type-Options': 'nosniff' });
  res.send(blob(data));
};

// ---------- App ----------
const app = express();
app.set('trust proxy', 1);
// routes that can carry photos read their own larger body; everything else stays small
const bigBody = req =>
  (req.method === 'PATCH' && (req.path.startsWith('/api/admin/messages/') || req.path.startsWith('/api/staff/announcements/') || req.path === '/api/staff/profile')) ||
  (req.method === 'POST' && (req.path === '/api/staff/announcements' || req.path === '/api/messages'));
app.use((req, res, next) => bigBody(req) ? next() : express.json({ limit: '20kb' })(req, res, next));

app.use(express.static(path.join(__dirname, 'public')));

// ---------- Public ----------
// Real time from the internet, so a wrong clock or time zone does not affect the site
let timeOffset = 0, timeSource = 'device';
async function syncTime() {
  for (const url of ['https://www.google.com', 'https://www.cloudflare.com', 'https://api.github.com']) {
    try {
      const t0 = Date.now();
      const r = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      const t1 = Date.now();
      const d = Date.parse(r.headers.get('date'));
      if (!Number.isNaN(d)) {
        timeOffset = d + 500 - (t0 + t1) / 2;
        timeSource = 'internet';
        console.log(`Time synced from ${new URL(url).hostname}. Server clock is off by ${Math.round(timeOffset / 1000)} seconds.`);
        return;
      }
    } catch {}
  }
  timeSource = 'device';
  console.log('WARNING: could not reach an internet time source. Using the server clock.');
}
syncTime();
setInterval(syncTime, 10 * 60 * 1000).unref();

app.get('/api/time', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ now: Math.round(Date.now() + timeOffset), source: timeSource });
});

// announcement photo (public, ids never repeat so it can be cached)
app.get('/news-photos/:name', h(async (req, res) => {
  const id = parseInt(req.params.name, 10);
  if (!Number.isInteger(id)) return res.status(404).end();
  const p = await get('SELECT data FROM announcement_photos WHERE id = ?', [id]);
  if (!p) return res.status(404).end();
  sendJpeg(res, p.data, 'public, max-age=604800, immutable');
}));

app.get('/api/announcements', h(async (req, res) => {
  const rows = await all('SELECT id, title, body, created_at, edited_at, event_date, event_time, event_end, venue FROM announcements ORDER BY id DESC LIMIT 30');
  res.json(await withPhotos(rows));
}));

app.post('/api/messages', limit(5, 15), express.json({ limit: '9mb' }), h(async (req, res) => {
  const { name, contact, topic, message, website } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot
  const n = clean(name, 100), c = clean(contact, 120), m = clean(message, 2000);
  const t = TOPICS.includes(topic) ? topic : 'Other';
  if (n.length < 2 || c.length < 5 || m.length < 5) {
    return res.status(400).json({ error: 'Please fill in your name, contact, and message.' });
  }

  // optional evidence photos (only for concern, suggestion, other)
  let bufs = [];
  const raw = Array.isArray(req.body?.evidence) ? req.body.evidence : [];
  if (raw.length) {
    if (!EVIDENCE_TOPICS.includes(t)) return res.status(400).json({ error: 'Photos cannot be attached to this topic.' });
    if (raw.length > 3) return res.status(400).json({ error: 'You can attach up to 3 photos.' });
    const ph = readPhotos(raw);
    if (ph.error) return res.status(400).json({ error: ph.error });
    bufs = ph.bufs;
  }

  const tx = await client.transaction('write');
  let ref, id;
  try {
    for (let i = 0; i < 5; i++) {
      ref = newRef();
      try {
        const r = await run('INSERT INTO messages (name, contact, topic, message, ref) VALUES (?, ?, ?, ?, ?)', [n, c, t, m, ref], tx);
        id = Number(r.lastInsertRowid);
        break;
      } catch (e) { if (i === 4) throw e; }
    }
    for (const buf of bufs) await run('INSERT INTO evidence_photos (message_id, data) VALUES (?, ?)', [id, buf], tx);
    await tx.commit();
  } catch (e) {
    await tx.rollback().catch(() => {});
    throw e;
  } finally {
    tx.close();
  }
  res.status(201).json({ ok: true, ref });
}));

// latest "resolved" entry of a request
const latestProof = id => get("SELECT id, note, created_at FROM message_log WHERE message_id = ? AND status = 'resolved' ORDER BY id DESC LIMIT 1", [id]);

// status check for residents: status, and the proof of resolution once resolved
// (no name, contact, message, or staff names)
app.get('/api/status/:ref', limit(20, 15), h(async (req, res) => {
  const ref = clean(req.params.ref, 20).toUpperCase();
  const m = /^ZAP-[A-Z0-9]{6}$/.test(ref)
    ? await get('SELECT id, ref, topic, status, created_at, updated_at FROM messages WHERE ref = ?', [ref])
    : null;
  if (!m) return res.status(404).json({ error: 'Reference number not found. Check the number and try again.' });

  const proof = m.status === 'resolved' ? await latestProof(m.id) : null;
  const photo_count = proof ? (await get('SELECT COUNT(*) AS n FROM proof_photos WHERE log_id = ?', [proof.id])).n : 0;
  res.set('Cache-Control', 'no-store');
  res.json({
    ref: m.ref, topic: m.topic, status: m.status, created_at: m.created_at, updated_at: m.updated_at,
    resolution: proof ? proof.note : null,
    resolved_at: proof ? proof.created_at : null,
    photo_count
  });
}));

// proof photo number n (0, 1, 2, 3) for residents: only when resolved, only with the reference number
app.get('/api/status/:ref/photo/:n', limit(120, 15), h(async (req, res) => {
  const ref = clean(req.params.ref, 20).toUpperCase();
  const n = Number(req.params.n);
  const m = /^ZAP-[A-Z0-9]{6}$/.test(ref)
    ? await get('SELECT id, status FROM messages WHERE ref = ?', [ref])
    : null;
  if (!m || m.status !== 'resolved' || !Number.isInteger(n) || n < 0) return res.status(404).end();
  const proof = await latestProof(m.id);
  if (!proof) return res.status(404).end();
  const ids = await all('SELECT id FROM proof_photos WHERE log_id = ? ORDER BY id', [proof.id]);
  if (!ids[n]) return res.status(404).end();
  const f = await get('SELECT data FROM proof_photos WHERE id = ?', [ids[n].id]);
  if (!f) return res.status(404).end();
  sendJpeg(res, f.data, 'private, no-store');
}));

// ---------- Sign in / out ----------
app.post('/api/auth/login', limit(30, 15), h(async (req, res) => {
  const username = clean(req.body?.username, 30).toLowerCase();
  const password = String(req.body?.password ?? '');
  const u = await get(`SELECT ${USER_COLS}, password_hash FROM users WHERE username = ?`, [username]);
  const good = verifyPw(password, u ? u.password_hash : DUMMY);
  if (!u || !good || !u.active) return res.status(401).json({ error: 'Wrong username or password.' });
  await startSession(res, u.id);
  res.json({ user: me(u) });
}));

app.post('/api/auth/logout', h(async (req, res) => {
  const t = getCookie(req, 'sid');
  if (t) await run('DELETE FROM sessions WHERE token_hash = ?', [sha(t)]);
  res.setHeader('Set-Cookie', 'sid=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
  res.json({ ok: true });
}));

app.get('/api/auth/me', auth, (req, res) => res.json({ user: me(req.user) }));

app.post('/api/auth/change-password', auth, limit(10, 15), h(async (req, res) => {
  const current = String(req.body?.current ?? ''), next = String(req.body?.next ?? '');
  const row = await get('SELECT password_hash FROM users WHERE id = ?', [req.user.id]);
  if (!verifyPw(current, row.password_hash)) return res.status(400).json({ error: 'Current password is wrong.' });
  if (next.length < 8) return res.status(400).json({ error: 'New password must be at least 8 characters.' });
  if (next === current) return res.status(400).json({ error: 'New password must be different.' });
  await client.batch([
    { sql: 'UPDATE users SET password_hash = ?, must_change = 0 WHERE id = ?', args: [hashPw(next), req.user.id] },
    { sql: 'DELETE FROM sessions WHERE user_id = ? AND token_hash <> ?', args: [req.user.id, req.sid] }
  ], 'write');
  res.json({ ok: true });
}));

// ---------- My profile (every account) ----------
app.patch('/api/staff/profile', auth, ready, express.json({ limit: '2mb' }), h(async (req, res) => {
  const f = readProfile(req.body);
  if (f.error) return res.status(400).json({ error: f.error });

  let sql = "UPDATE users SET full_name = ?, email = ?, phone = ?, bio = ?, updated_at = datetime('now')";
  const args = [f.full_name, f.email, f.phone, f.bio];
  if (req.body?.avatar) {
    const ph = readPhotos([req.body.avatar]);
    if (ph.error) return res.status(400).json({ error: 'Profile photo must be a JPEG image under 2 MB.' });
    sql += ', avatar = ?'; args.push(ph.bufs[0]);
  } else if (req.body?.remove_avatar) {
    sql += ', avatar = NULL';
  }
  sql += ' WHERE id = ?'; args.push(req.user.id);

  await client.batch([
    { sql, args },
    { sql: 'UPDATE announcements SET author_name = ? WHERE author_id = ?', args: [f.full_name, req.user.id] }
  ], 'write');

  res.json({ user: me(await userById(req.user.id)) });
}));

// profile photo of any staff member (signed-in staff only)
app.get('/api/staff/avatar/:id', auth, ready, h(async (req, res) => {
  const row = await get('SELECT avatar FROM users WHERE id = ?', [idParam(req)]);
  if (!row || !row.avatar) return res.status(404).end();
  sendJpeg(res, row.avatar, 'private, max-age=3600');
}));

// ---------- Messages (admin and kagawad) ----------
app.get('/api/admin/messages', auth, ready, can('admin', 'staff'), h(async (req, res) => {
  const rows = await all('SELECT * FROM messages ORDER BY id DESC LIMIT 500');
  let ev = [];
  if (rows.length) {
    const ids = rows.map(r => r.id);
    ev = await all(`SELECT id, message_id FROM evidence_photos WHERE message_id IN (${marks(ids)}) ORDER BY id`, ids);
  }
  res.json(rows.map(m => ({ ...m, evidence: ev.filter(e => e.message_id === m.id).map(e => e.id) })));
}));

// staff view of one resident evidence photo (by photo id)
app.get('/api/admin/evidence/:id', auth, ready, can('admin', 'staff'), h(async (req, res) => {
  const p = await get('SELECT data FROM evidence_photos WHERE id = ?', [idParam(req)]);
  if (!p) return res.status(404).end();
  sendJpeg(res, p.data, 'private, no-store');
}));

app.patch('/api/admin/messages/:id', auth, ready, can('admin', 'staff'), express.json({ limit: '9mb' }), h(async (req, res) => {
  const id = idParam(req);
  const status = req.body?.status;
  if (!STATUSES.includes(status)) return res.status(400).json({ error: 'Invalid status' });
  if (!(await get('SELECT 1 AS x FROM messages WHERE id = ?', [id]))) return res.status(404).json({ error: 'Message not found.' });
  const note = clean(req.body?.note, 500);
  if (status === 'resolved' && note.length < 5) {
    return res.status(400).json({ error: 'Describe what was done before marking this as resolved.' });
  }

  const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
  if (raw.length > 4) return res.status(400).json({ error: 'You can add up to 4 proof photos.' });
  const ph = readPhotos(raw);
  if (ph.error) return res.status(400).json({ error: ph.error });

  const tx = await client.transaction('write');
  try {
    await run("UPDATE messages SET status = ?, handled_by = ?, updated_at = datetime('now') WHERE id = ?", [status, req.user.full_name, id], tx);
    const info = await run('INSERT INTO message_log (message_id, status, note, by_id, by_name) VALUES (?, ?, ?, ?, ?)', [id, status, note, req.user.id, req.user.full_name], tx);
    const logId = Number(info.lastInsertRowid);
    for (const buf of ph.bufs) await run('INSERT INTO proof_photos (log_id, data) VALUES (?, ?)', [logId, buf], tx);
    await tx.commit();
  } catch (e) {
    await tx.rollback().catch(() => {});
    throw e;
  } finally {
    tx.close();
  }
  res.json({ ok: true });
}));

app.get('/api/admin/messages/:id/log', auth, ready, can('admin', 'staff'), h(async (req, res) => {
  const logs = await all('SELECT id, status, note, by_name, created_at FROM message_log WHERE message_id = ? ORDER BY id', [idParam(req)]);
  let ph = [];
  if (logs.length) {
    const ids = logs.map(l => l.id);
    ph = await all(`SELECT id, log_id FROM proof_photos WHERE log_id IN (${marks(ids)}) ORDER BY id`, ids);
  }
  res.json(logs.map(l => ({ ...l, photos: ph.filter(p => p.log_id === l.id).map(p => p.id) })));
}));

// staff view of one proof photo (by photo id)
app.get('/api/admin/proof/:id', auth, ready, can('admin', 'staff'), h(async (req, res) => {
  const p = await get('SELECT data FROM proof_photos WHERE id = ?', [idParam(req)]);
  if (!p) return res.status(404).end();
  sendJpeg(res, p.data, 'private, no-store');
}));

app.delete('/api/admin/messages/:id', auth, ready, can('admin'), h(async (req, res) => {
  const id = idParam(req);
  // photos and history are removed together with the message
  await client.batch([
    { sql: 'DELETE FROM evidence_photos WHERE message_id = ?', args: [id] },
    { sql: 'DELETE FROM proof_photos WHERE log_id IN (SELECT id FROM message_log WHERE message_id = ?)', args: [id] },
    { sql: 'DELETE FROM message_log WHERE message_id = ?', args: [id] },
    { sql: 'DELETE FROM messages WHERE id = ?', args: [id] }
  ], 'write');
  res.json({ ok: true });
}));

// ---------- Announcements (everyone with an account) ----------
app.get('/api/staff/announcements', auth, ready, h(async (req, res) => {
  const rows = await all('SELECT id, title, body, created_at, edited_at, author_id, author_name, event_date, event_time, event_end, venue FROM announcements ORDER BY id DESC LIMIT 50');
  res.json(await withPhotos(rows));
}));

app.post('/api/staff/announcements', auth, ready, express.json({ limit: '9mb' }), h(async (req, res) => {
  const a = readAnnouncement(req.body);
  if (a.error) return res.status(400).json({ error: a.error });

  const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
  if (raw.length > 4) return res.status(400).json({ error: 'You can add up to 4 photos.' });
  const ph = readPhotos(raw);
  if (ph.error) return res.status(400).json({ error: ph.error });

  const tx = await client.transaction('write');
  try {
    const info = await run('INSERT INTO announcements (title, body, author_id, author_name, event_date, event_time, event_end, venue) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [a.title, a.body, req.user.id, req.user.full_name, a.event_date, a.event_time, a.event_end, a.venue], tx);
    const id = Number(info.lastInsertRowid);
    for (const buf of ph.bufs) await run('INSERT INTO announcement_photos (announcement_id, data) VALUES (?, ?)', [id, buf], tx);
    await tx.commit();
  } catch (e) {
    await tx.rollback().catch(() => {});
    throw e;
  } finally {
    tx.close();
  }
  res.status(201).json({ ok: true });
}));

// edit an announcement (admins: any, others: only their own)
app.patch('/api/staff/announcements/:id', auth, ready, express.json({ limit: '9mb' }), h(async (req, res) => {
  const id = idParam(req);
  const cur = await get('SELECT author_id FROM announcements WHERE id = ?', [id]);
  if (!cur) return res.status(404).json({ error: 'Announcement not found.' });
  if (req.user.role !== 'admin' && cur.author_id !== req.user.id) {
    return res.status(403).json({ error: 'You can only edit your own announcements.' });
  }

  const a = readAnnouncement(req.body);
  if (a.error) return res.status(400).json({ error: a.error });

  const existing = await all('SELECT id FROM announcement_photos WHERE announcement_id = ?', [id]);
  const removeNames = new Set(Array.isArray(req.body?.remove) ? req.body.remove.map(String) : []);
  const toRemove = existing.filter(p => removeNames.has(p.id + '.jpg'));
  const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
  if (existing.length - toRemove.length + raw.length > 4) {
    return res.status(400).json({ error: 'An announcement can have up to 4 photos.' });
  }
  const ph = readPhotos(raw);
  if (ph.error) return res.status(400).json({ error: ph.error });

  const stmts = [{
    sql: "UPDATE announcements SET title = ?, body = ?, event_date = ?, event_time = ?, event_end = ?, venue = ?, edited_at = datetime('now') WHERE id = ?",
    args: [a.title, a.body, a.event_date, a.event_time, a.event_end, a.venue, id]
  }];
  for (const p of toRemove) stmts.push({ sql: 'DELETE FROM announcement_photos WHERE id = ?', args: [p.id] });
  for (const buf of ph.bufs) stmts.push({ sql: 'INSERT INTO announcement_photos (announcement_id, data) VALUES (?, ?)', args: [id, buf] });
  await client.batch(stmts, 'write');
  res.json({ ok: true });
}));

app.delete('/api/staff/announcements/:id', auth, ready, h(async (req, res) => {
  const id = idParam(req);
  const a = await get('SELECT author_id FROM announcements WHERE id = ?', [id]);
  if (!a) return res.json({ ok: true });
  if (req.user.role !== 'admin' && a.author_id !== req.user.id) {
    return res.status(403).json({ error: 'You can only delete your own announcements.' });
  }
  await client.batch([
    { sql: 'DELETE FROM announcement_photos WHERE announcement_id = ?', args: [id] },
    { sql: 'DELETE FROM announcements WHERE id = ?', args: [id] }
  ], 'write');
  res.json({ ok: true });
}));

// ---------- Accounts (admin only) ----------
app.get('/api/admin/users', auth, ready, can('admin'), h(async (req, res) => {
  res.json(await all('SELECT id, username, full_name, position, role, active, must_change, created_at, email, phone, updated_at, (avatar IS NOT NULL) AS has_avatar FROM users ORDER BY id'));
}));

app.post('/api/admin/users', auth, ready, can('admin'), h(async (req, res) => {
  const full_name = clean(req.body?.full_name, 100);
  const username = clean(req.body?.username, 30).toLowerCase();
  const position = req.body?.position;
  const password = String(req.body?.password ?? '');
  if (full_name.length < 2) return res.status(400).json({ error: 'Enter the full name.' });
  if (!/^[a-z0-9._-]{3,30}$/.test(username)) return res.status(400).json({ error: 'Username: 3 to 30 letters, numbers, dot, dash or underscore.' });
  if (!POSITIONS[position]) return res.status(400).json({ error: 'Choose a position.' });
  if (password.length < 8) return res.status(400).json({ error: 'Temporary password must be at least 8 characters.' });
  if (await get('SELECT 1 AS x FROM users WHERE username = ?', [username])) return res.status(409).json({ error: 'That username is taken.' });
  await run('INSERT INTO users (username, full_name, position, role, password_hash, must_change) VALUES (?, ?, ?, ?, ?, 1)',
    [username, full_name, position, POSITIONS[position], hashPw(password)]);
  res.status(201).json({ ok: true });
}));

const activeAdmins = async () => (await get("SELECT COUNT(*) AS n FROM users WHERE role = 'admin' AND active = 1")).n;

app.patch('/api/admin/users/:id', auth, ready, can('admin'), h(async (req, res) => {
  const id = idParam(req);
  const target = await get('SELECT id, position, role, active FROM users WHERE id = ?', [id]);
  if (!target) return res.status(404).json({ error: 'Account not found.' });

  if (typeof req.body?.active === 'boolean') {
    if (!req.body.active) {
      if (id === req.user.id) return res.status(400).json({ error: 'You cannot disable your own account.' });
      if (target.role === 'admin' && target.active && (await activeAdmins()) <= 1) return res.status(400).json({ error: 'At least one admin must stay active.' });
      await run('DELETE FROM sessions WHERE user_id = ?', [id]);
    }
    await run('UPDATE users SET active = ? WHERE id = ?', [req.body.active ? 1 : 0, id]);
    return res.json({ ok: true });
  }

  if (typeof req.body?.password === 'string') {
    if (req.body.password.length < 8) return res.status(400).json({ error: 'Temporary password must be at least 8 characters.' });
    await client.batch([
      { sql: 'UPDATE users SET password_hash = ?, must_change = 1 WHERE id = ?', args: [hashPw(req.body.password), id] },
      { sql: 'DELETE FROM sessions WHERE user_id = ?', args: [id] }
    ], 'write');
    return res.json({ ok: true });
  }

  // edit account information (name, position, email, phone)
  if (typeof req.body?.full_name === 'string') {
    const f = readProfile(req.body);
    if (f.error) return res.status(400).json({ error: f.error });

    let position = target.position, role = target.role;
    const wanted = req.body.position;
    if (wanted !== undefined && wanted !== target.position) {
      if (!POSITIONS[wanted]) return res.status(400).json({ error: 'Choose a valid position.' });
      if (id === req.user.id) return res.status(400).json({ error: 'You cannot change your own position.' });
      position = wanted; role = POSITIONS[wanted];
      if (target.role === 'admin' && role !== 'admin' && target.active && (await activeAdmins()) <= 1) {
        return res.status(400).json({ error: 'At least one admin must stay active.' });
      }
    }
    await client.batch([
      { sql: "UPDATE users SET full_name = ?, position = ?, role = ?, email = ?, phone = ?, updated_at = datetime('now') WHERE id = ?", args: [f.full_name, position, role, f.email, f.phone, id] },
      { sql: 'UPDATE announcements SET author_name = ? WHERE author_id = ?', args: [f.full_name, id] }
    ], 'write');
    return res.json({ ok: true });
  }

  res.status(400).json({ error: 'Nothing to update.' });
}));

// ---------- Errors (always answer the site with JSON) ----------
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  if (err.type === 'entity.too.large') return res.status(413).json({ error: 'That upload is too large. Use fewer or smaller photos.' });
  if (err.type === 'entity.parse.failed') return res.status(400).json({ error: 'Invalid request.' });
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

// ---------- Start ----------
async function start() {
  await client.executeMultiple(SCHEMA);
  await run('DELETE FROM sessions WHERE expires_at < ?', [Date.now()]);
  setInterval(() => run('DELETE FROM sessions WHERE expires_at < ?', [Date.now()]).catch(() => {}), 60 * 60 * 1000).unref();

  // first run: create the starting admin from the environment settings
  const n = (await get('SELECT COUNT(*) AS n FROM users')).n;
  if (n === 0) {
    if (!ADMIN_PASSWORD) {
      console.error('No accounts yet. Set ADMIN_PASSWORD in the environment settings to create the first admin, then restart.');
      process.exit(1);
    }
    await run('INSERT INTO users (username, full_name, position, role, password_hash, must_change) VALUES (?, ?, ?, ?, ?, 1)',
      [ADMIN_USERNAME.toLowerCase(), 'Administrator', 'Administrator', 'admin', hashPw(ADMIN_PASSWORD)]);
    console.log(`First admin created. Username: ${ADMIN_USERNAME.toLowerCase()} (you will be asked to change the password at first login)`);
  }

  app.listen(PORT, () => console.log(`Barangay Zapatera site running on port ${PORT}`));
}

start().catch(e => { console.error('Could not start:', e); process.exit(1); });