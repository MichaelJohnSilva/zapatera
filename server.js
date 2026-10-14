const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const rateLimit = require('express-rate-limit');
const { DatabaseSync } = require('node:sqlite');

const { ADMIN_USERNAME = 'admin', ADMIN_PASSWORD, PORT = 3000, NODE_ENV } = process.env;

// ---------- Database ----------
fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
const db = new DatabaseSync(path.join(__dirname, 'data', 'zapatera.db'));
db.exec('PRAGMA journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    topic TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    position TEXT NOT NULL,
    role TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    must_change INTEGER NOT NULL DEFAULT 1,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    expires_at INTEGER NOT NULL
  );
`);
// upgrade older databases (ignored if the column already exists)
for (const sql of [
  'ALTER TABLE messages ADD COLUMN handled_by TEXT',
  'ALTER TABLE announcements ADD COLUMN author_id INTEGER',
  'ALTER TABLE announcements ADD COLUMN author_name TEXT',
  'ALTER TABLE messages ADD COLUMN ref TEXT',
  'ALTER TABLE messages ADD COLUMN updated_at TEXT',
  'ALTER TABLE announcements ADD COLUMN event_date TEXT',
  'ALTER TABLE announcements ADD COLUMN event_time TEXT',
  'ALTER TABLE announcements ADD COLUMN event_end TEXT',
  'ALTER TABLE announcements ADD COLUMN venue TEXT',
  'ALTER TABLE announcements ADD COLUMN edited_at TEXT',
  'ALTER TABLE users ADD COLUMN email TEXT',
  'ALTER TABLE users ADD COLUMN phone TEXT',
  'ALTER TABLE users ADD COLUMN bio TEXT',
  'ALTER TABLE users ADD COLUMN avatar TEXT',
  'ALTER TABLE users ADD COLUMN updated_at TEXT'
]) { try { db.exec(sql); } catch {} }

// reference numbers so residents can check their request
const REF_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const newRef = () => 'ZAP-' + Array.from(crypto.randomBytes(6), b => REF_CHARS[b % REF_CHARS.length]).join('');
for (const r of db.prepare('SELECT id FROM messages WHERE ref IS NULL').all()) {
  db.prepare('UPDATE messages SET ref = ? WHERE id = ?').run(newRef(), r.id);
}
db.exec('CREATE UNIQUE INDEX IF NOT EXISTS idx_messages_ref ON messages(ref)');

// proof of resolution: history log and photos
const PROOF_DIR = path.join(__dirname, 'data', 'proofs');
fs.mkdirSync(PROOF_DIR, { recursive: true });
db.exec(`
  CREATE TABLE IF NOT EXISTS message_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    photo TEXT,
    by_id INTEGER,
    by_name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);
// one resolution can have several proof photos
db.exec(`
  CREATE TABLE IF NOT EXISTS proof_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    log_id INTEGER NOT NULL,
    file TEXT NOT NULL
  )
`);
// move photos saved by the old version into the new table (safe to run every start)
db.exec('INSERT INTO proof_photos (log_id, file) SELECT id, photo FROM message_log WHERE photo IS NOT NULL AND id NOT IN (SELECT log_id FROM proof_photos)');

// resident evidence photos (sent together with a message)
const EVIDENCE_DIR = path.join(__dirname, 'data', 'evidence');
fs.mkdirSync(EVIDENCE_DIR, { recursive: true });
db.exec(`
  CREATE TABLE IF NOT EXISTS message_evidence (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    file TEXT NOT NULL
  )
`);
const EVIDENCE_TOPICS = ['Report a concern', 'Suggestion', 'Other'];

// announcement photos
const NEWS_DIR = path.join(__dirname, 'data', 'news');
fs.mkdirSync(NEWS_DIR, { recursive: true });
db.exec(`
  CREATE TABLE IF NOT EXISTS announcement_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    announcement_id INTEGER NOT NULL,
    file TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);
const withPhotos = rows => rows.map(r => ({
  ...r,
  photos: db.prepare('SELECT file FROM announcement_photos WHERE announcement_id = ? ORDER BY id').all(r.id).map(p => '/news-photos/' + p.file)
}));

// staff profile photos
const AVATAR_DIR = path.join(__dirname, 'data', 'avatars');
fs.mkdirSync(AVATAR_DIR, { recursive: true });

const cleanSessions = () => db.prepare('DELETE FROM sessions WHERE expires_at < ?').run(Date.now());
cleanSessions();
setInterval(cleanSessions, 60 * 60 * 1000).unref();

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
const startSession = (res, userId) => {
  const token = crypto.randomBytes(32).toString('hex');
  db.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)').run(sha(token), userId, Date.now() + SESSION_MS);
  res.setHeader('Set-Cookie', `sid=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_MS / 1000}${secure}`);
};

// first run: create the starting admin from .env
if (db.prepare('SELECT COUNT(*) AS n FROM users').get().n === 0) {
  if (!ADMIN_PASSWORD) {
    console.error('No accounts yet. Set ADMIN_PASSWORD in .env to create the first admin, then start again.');
    process.exit(1);
  }
  db.prepare('INSERT INTO users (username, full_name, position, role, password_hash, must_change) VALUES (?, ?, ?, ?, ?, 1)')
    .run(ADMIN_USERNAME.toLowerCase(), 'Administrator', 'Administrator', 'admin', hashPw(ADMIN_PASSWORD));
  console.log(`First admin created. Username: ${ADMIN_USERNAME.toLowerCase()} (you will be asked to change the password at first login)`);
}

// ---------- Middleware ----------
const auth = (req, res, next) => {
  const t = getCookie(req, 'sid');
  if (!t) return res.status(401).json({ error: 'Not signed in' });
  const u = db.prepare(`
    SELECT u.id, u.username, u.full_name, u.position, u.role, u.must_change, u.email, u.phone, u.bio, u.avatar, u.updated_at
    FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ? AND u.active = 1`).get(sha(t), Date.now());
  if (!u) return res.status(401).json({ error: 'Not signed in' });
  req.user = u; req.sid = sha(t);
  next();
};
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
  has_avatar: !!u.avatar, updated_at: u.updated_at || ''
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

// ---------- App ----------
const app = express();
app.set('trust proxy', 1);
// routes that can carry photos read their own larger body; everything else stays small
const bigBody = req =>
  (req.method === 'PATCH' && (req.path.startsWith('/api/admin/messages/') || req.path.startsWith('/api/staff/announcements/') || req.path === '/api/staff/profile')) ||
  (req.method === 'POST' && (req.path === '/api/staff/announcements' || req.path === '/api/messages'));
app.use((req, res, next) => bigBody(req) ? next() : express.json({ limit: '20kb' })(req, res, next));
app.use('/news-photos', express.static(NEWS_DIR, { maxAge: '7d', setHeaders: r => r.setHeader('X-Content-Type-Options', 'nosniff') }));

app.use(express.static(path.join(__dirname, 'public')));

// ---------- Public ----------
// Real time from the internet, so a wrong PC clock or time zone does not affect the site
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
        console.log(`Time synced from ${new URL(url).hostname}. PC clock is off by ${Math.round(timeOffset / 1000)} seconds.`);
        return;
      }
    } catch {}
  }
  timeSource = 'device';
  console.log('WARNING: could not reach an internet time source. Using the PC clock.');
}
syncTime();
setInterval(syncTime, 10 * 60 * 1000).unref();

app.get('/api/time', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ now: Math.round(Date.now() + timeOffset), source: timeSource });
});

app.get('/api/announcements', (req, res) => {
  res.json(withPhotos(db.prepare('SELECT id, title, body, created_at, edited_at, event_date, event_time, event_end, venue FROM announcements ORDER BY id DESC LIMIT 30').all()));
});

app.post('/api/messages', limit(5, 15), express.json({ limit: '9mb' }), (req, res) => {
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

  let ref, id;
  for (let i = 0; i < 5; i++) {
    ref = newRef();
    try {
      id = Number(db.prepare('INSERT INTO messages (name, contact, topic, message, ref) VALUES (?, ?, ?, ?, ?)').run(n, c, t, m, ref).lastInsertRowid);
      break;
    } catch (e) { if (i === 4) throw e; }
  }
  for (const buf of bufs) {
    const f = crypto.randomBytes(16).toString('hex') + '.jpg';
    fs.writeFileSync(path.join(EVIDENCE_DIR, f), buf);
    db.prepare('INSERT INTO message_evidence (message_id, file) VALUES (?, ?)').run(id, f);
  }
  res.status(201).json({ ok: true, ref });
});

// latest "resolved" entry of a request
const latestProof = id => db.prepare("SELECT id, note, created_at FROM message_log WHERE message_id = ? AND status = 'resolved' ORDER BY id DESC LIMIT 1").get(id);

// status check for residents: status, and the proof of resolution once resolved
// (no name, contact, message, or staff names)
app.get('/api/status/:ref', limit(20, 15), (req, res) => {
  const ref = clean(req.params.ref, 20).toUpperCase();
  const m = /^ZAP-[A-Z0-9]{6}$/.test(ref)
    ? db.prepare('SELECT id, ref, topic, status, created_at, updated_at FROM messages WHERE ref = ?').get(ref)
    : null;
  if (!m) return res.status(404).json({ error: 'Reference number not found. Check the number and try again.' });

  const proof = m.status === 'resolved' ? latestProof(m.id) : null;
  const photo_count = proof ? db.prepare('SELECT COUNT(*) AS n FROM proof_photos WHERE log_id = ?').get(proof.id).n : 0;
  res.set('Cache-Control', 'no-store');
  res.json({
    ref: m.ref, topic: m.topic, status: m.status, created_at: m.created_at, updated_at: m.updated_at,
    resolution: proof ? proof.note : null,
    resolved_at: proof ? proof.created_at : null,
    photo_count
  });
});

// proof photo number n (0, 1, 2, 3) for residents: only when resolved, only with the reference number
app.get('/api/status/:ref/photo/:n', limit(120, 15), (req, res) => {
  const ref = clean(req.params.ref, 20).toUpperCase();
  const n = Number(req.params.n);
  const m = /^ZAP-[A-Z0-9]{6}$/.test(ref)
    ? db.prepare('SELECT id, status FROM messages WHERE ref = ?').get(ref)
    : null;
  if (!m || m.status !== 'resolved' || !Number.isInteger(n) || n < 0) return res.status(404).end();
  const proof = latestProof(m.id);
  if (!proof) return res.status(404).end();
  const f = db.prepare('SELECT file FROM proof_photos WHERE log_id = ? ORDER BY id').all(proof.id)[n];
  if (!f) return res.status(404).end();
  res.set({ 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' });
  res.sendFile(path.join(PROOF_DIR, f.file));
});

// ---------- Sign in / out ----------
app.post('/api/auth/login', limit(30, 15), (req, res) => {
  const username = clean(req.body?.username, 30).toLowerCase();
  const password = String(req.body?.password ?? '');
  const u = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  const good = verifyPw(password, u ? u.password_hash : DUMMY);
  if (!u || !good || !u.active) return res.status(401).json({ error: 'Wrong username or password.' });
  startSession(res, u.id);
  res.json({ user: me(u) });
});

app.post('/api/auth/logout', (req, res) => {
  const t = getCookie(req, 'sid');
  if (t) db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha(t));
  res.setHeader('Set-Cookie', 'sid=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
  res.json({ ok: true });
});

app.get('/api/auth/me', auth, (req, res) => res.json({ user: me(req.user) }));

app.post('/api/auth/change-password', auth, limit(10, 15), (req, res) => {
  const current = String(req.body?.current ?? ''), next = String(req.body?.next ?? '');
  const row = db.prepare('SELECT password_hash FROM users WHERE id = ?').get(req.user.id);
  if (!verifyPw(current, row.password_hash)) return res.status(400).json({ error: 'Current password is wrong.' });
  if (next.length < 8) return res.status(400).json({ error: 'New password must be at least 8 characters.' });
  if (next === current) return res.status(400).json({ error: 'New password must be different.' });
  db.prepare('UPDATE users SET password_hash = ?, must_change = 0 WHERE id = ?').run(hashPw(next), req.user.id);
  db.prepare('DELETE FROM sessions WHERE user_id = ? AND token_hash <> ?').run(req.user.id, req.sid);
  res.json({ ok: true });
});

// ---------- My profile (every account) ----------
app.patch('/api/staff/profile', auth, ready, express.json({ limit: '2mb' }), (req, res) => {
  const f = readProfile(req.body);
  if (f.error) return res.status(400).json({ error: f.error });

  const cur = db.prepare('SELECT avatar FROM users WHERE id = ?').get(req.user.id);
  let avatar = cur.avatar, newFile = null;
  if (req.body?.avatar) {
    const ph = readPhotos([req.body.avatar]);
    if (ph.error) return res.status(400).json({ error: 'Profile photo must be a JPEG image under 2 MB.' });
    newFile = crypto.randomBytes(16).toString('hex') + '.jpg';
    fs.writeFileSync(path.join(AVATAR_DIR, newFile), ph.bufs[0]);
    avatar = newFile;
  } else if (req.body?.remove_avatar) {
    avatar = null;
  }

  db.prepare("UPDATE users SET full_name = ?, email = ?, phone = ?, bio = ?, avatar = ?, updated_at = datetime('now') WHERE id = ?")
    .run(f.full_name, f.email, f.phone, f.bio, avatar, req.user.id);
  db.prepare('UPDATE announcements SET author_name = ? WHERE author_id = ?').run(f.full_name, req.user.id);
  if (cur.avatar && cur.avatar !== avatar) { try { fs.unlinkSync(path.join(AVATAR_DIR, cur.avatar)); } catch {} }

  res.json({ user: me(db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id)) });
});

// profile photo of any staff member (signed-in staff only)
app.get('/api/staff/avatar/:id', auth, ready, (req, res) => {
  const row = db.prepare('SELECT avatar FROM users WHERE id = ?').get(Number(req.params.id));
  if (!row || !row.avatar) return res.status(404).end();
  res.set({ 'Cache-Control': 'private, max-age=3600', 'X-Content-Type-Options': 'nosniff' });
  res.sendFile(path.join(AVATAR_DIR, row.avatar));
});

// ---------- Messages (admin and kagawad) ----------
app.get('/api/admin/messages', auth, ready, can('admin', 'staff'), (req, res) => {
  const rows = db.prepare('SELECT * FROM messages ORDER BY id DESC LIMIT 500').all();
  res.json(rows.map(m => ({
    ...m,
    evidence: db.prepare('SELECT id FROM message_evidence WHERE message_id = ? ORDER BY id').all(m.id).map(e => e.id)
  })));
});

// staff view of one resident evidence photo (by photo id)
app.get('/api/admin/evidence/:id', auth, ready, can('admin', 'staff'), (req, res) => {
  const p = db.prepare('SELECT file FROM message_evidence WHERE id = ?').get(req.params.id);
  if (!p) return res.status(404).end();
  res.set({ 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' });
  res.sendFile(path.join(EVIDENCE_DIR, p.file));
});

app.patch('/api/admin/messages/:id', auth, ready, can('admin', 'staff'), express.json({ limit: '9mb' }), (req, res) => {
  const id = Number(req.params.id);
  const status = req.body?.status;
  if (!STATUSES.includes(status)) return res.status(400).json({ error: 'Invalid status' });
  if (!db.prepare('SELECT 1 FROM messages WHERE id = ?').get(id)) return res.status(404).json({ error: 'Message not found.' });
  const note = clean(req.body?.note, 500);
  if (status === 'resolved' && note.length < 5) {
    return res.status(400).json({ error: 'Describe what was done before marking this as resolved.' });
  }

  const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
  if (raw.length > 4) return res.status(400).json({ error: 'You can add up to 4 proof photos.' });
  const ph = readPhotos(raw);
  if (ph.error) return res.status(400).json({ error: ph.error });
  const files = ph.bufs.map(buf => {
    const f = crypto.randomBytes(16).toString('hex') + '.jpg';
    fs.writeFileSync(path.join(PROOF_DIR, f), buf);
    return f;
  });

  db.prepare("UPDATE messages SET status = ?, handled_by = ?, updated_at = datetime('now') WHERE id = ?")
    .run(status, req.user.full_name, id);
  const info = db.prepare('INSERT INTO message_log (message_id, status, note, by_id, by_name) VALUES (?, ?, ?, ?, ?)')
    .run(id, status, note, req.user.id, req.user.full_name);
  const logId = Number(info.lastInsertRowid);
  for (const f of files) db.prepare('INSERT INTO proof_photos (log_id, file) VALUES (?, ?)').run(logId, f);
  res.json({ ok: true });
});

app.get('/api/admin/messages/:id/log', auth, ready, can('admin', 'staff'), (req, res) => {
  const logs = db.prepare('SELECT id, status, note, by_name, created_at FROM message_log WHERE message_id = ? ORDER BY id').all(req.params.id);
  res.json(logs.map(l => ({
    ...l,
    photos: db.prepare('SELECT id FROM proof_photos WHERE log_id = ? ORDER BY id').all(l.id).map(p => p.id)
  })));
});

// staff view of one proof photo (by photo id)
app.get('/api/admin/proof/:id', auth, ready, can('admin', 'staff'), (req, res) => {
  const p = db.prepare('SELECT file FROM proof_photos WHERE id = ?').get(req.params.id);
  if (!p) return res.status(404).end();
  res.set({ 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' });
  res.sendFile(path.join(PROOF_DIR, p.file));
});

app.delete('/api/admin/messages/:id', auth, ready, can('admin'), (req, res) => {
  // remove resident evidence photos
  for (const p of db.prepare('SELECT file FROM message_evidence WHERE message_id = ?').all(req.params.id)) {
    try { fs.unlinkSync(path.join(EVIDENCE_DIR, p.file)); } catch {}
  }
  db.prepare('DELETE FROM message_evidence WHERE message_id = ?').run(req.params.id);
  // remove proof photos and history together with the message
  for (const p of db.prepare('SELECT p.file FROM proof_photos p JOIN message_log l ON l.id = p.log_id WHERE l.message_id = ?').all(req.params.id)) {
    try { fs.unlinkSync(path.join(PROOF_DIR, p.file)); } catch {}
  }
  db.prepare('DELETE FROM proof_photos WHERE log_id IN (SELECT id FROM message_log WHERE message_id = ?)').run(req.params.id);
  db.prepare('DELETE FROM message_log WHERE message_id = ?').run(req.params.id);
  db.prepare('DELETE FROM messages WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ---------- Announcements (everyone with an account) ----------
app.get('/api/staff/announcements', auth, ready, (req, res) => {
  res.json(withPhotos(db.prepare('SELECT id, title, body, created_at, edited_at, author_id, author_name, event_date, event_time, event_end, venue FROM announcements ORDER BY id DESC LIMIT 50').all()));
});

app.post('/api/staff/announcements', auth, ready, express.json({ limit: '9mb' }), (req, res) => {
  const a = readAnnouncement(req.body);
  if (a.error) return res.status(400).json({ error: a.error });

  const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
  if (raw.length > 4) return res.status(400).json({ error: 'You can add up to 4 photos.' });
  const ph = readPhotos(raw);
  if (ph.error) return res.status(400).json({ error: ph.error });

  const info = db.prepare('INSERT INTO announcements (title, body, author_id, author_name, event_date, event_time, event_end, venue) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .run(a.title, a.body, req.user.id, req.user.full_name, a.event_date, a.event_time, a.event_end, a.venue);
  const id = Number(info.lastInsertRowid);
  for (const buf of ph.bufs) {
    const f = crypto.randomBytes(16).toString('hex') + '.jpg';
    fs.writeFileSync(path.join(NEWS_DIR, f), buf);
    db.prepare('INSERT INTO announcement_photos (announcement_id, file) VALUES (?, ?)').run(id, f);
  }
  res.status(201).json({ ok: true });
});

// edit an announcement (admins: any, others: only their own)
app.patch('/api/staff/announcements/:id', auth, ready, express.json({ limit: '9mb' }), (req, res) => {
  const id = Number(req.params.id);
  const cur = db.prepare('SELECT author_id FROM announcements WHERE id = ?').get(id);
  if (!cur) return res.status(404).json({ error: 'Announcement not found.' });
  if (req.user.role !== 'admin' && cur.author_id !== req.user.id) {
    return res.status(403).json({ error: 'You can only edit your own announcements.' });
  }

  const a = readAnnouncement(req.body);
  if (a.error) return res.status(400).json({ error: a.error });

  const existing = db.prepare('SELECT id, file FROM announcement_photos WHERE announcement_id = ?').all(id);
  const removeNames = new Set(Array.isArray(req.body?.remove) ? req.body.remove.map(String) : []);
  const toRemove = existing.filter(p => removeNames.has(p.file));
  const raw = Array.isArray(req.body?.photos) ? req.body.photos : [];
  if (existing.length - toRemove.length + raw.length > 4) {
    return res.status(400).json({ error: 'An announcement can have up to 4 photos.' });
  }
  const ph = readPhotos(raw);
  if (ph.error) return res.status(400).json({ error: ph.error });

  db.prepare("UPDATE announcements SET title = ?, body = ?, event_date = ?, event_time = ?, event_end = ?, venue = ?, edited_at = datetime('now') WHERE id = ?")
    .run(a.title, a.body, a.event_date, a.event_time, a.event_end, a.venue, id);

  for (const p of toRemove) {
    try { fs.unlinkSync(path.join(NEWS_DIR, p.file)); } catch {}
    db.prepare('DELETE FROM announcement_photos WHERE id = ?').run(p.id);
  }
  for (const buf of ph.bufs) {
    const f = crypto.randomBytes(16).toString('hex') + '.jpg';
    fs.writeFileSync(path.join(NEWS_DIR, f), buf);
    db.prepare('INSERT INTO announcement_photos (announcement_id, file) VALUES (?, ?)').run(id, f);
  }
  res.json({ ok: true });
});

app.delete('/api/staff/announcements/:id', auth, ready, (req, res) => {
  const a = db.prepare('SELECT author_id FROM announcements WHERE id = ?').get(req.params.id);
  if (!a) return res.json({ ok: true });
  if (req.user.role !== 'admin' && a.author_id !== req.user.id) {
    return res.status(403).json({ error: 'You can only delete your own announcements.' });
  }
  for (const p of db.prepare('SELECT file FROM announcement_photos WHERE announcement_id = ?').all(req.params.id)) {
    try { fs.unlinkSync(path.join(NEWS_DIR, p.file)); } catch {}
  }
  db.prepare('DELETE FROM announcement_photos WHERE announcement_id = ?').run(req.params.id);
  db.prepare('DELETE FROM announcements WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ---------- Accounts (admin only) ----------
app.get('/api/admin/users', auth, ready, can('admin'), (req, res) => {
  res.json(db.prepare('SELECT id, username, full_name, position, role, active, must_change, created_at, email, phone, updated_at, (avatar IS NOT NULL) AS has_avatar FROM users ORDER BY id').all());
});

app.post('/api/admin/users', auth, ready, can('admin'), (req, res) => {
  const full_name = clean(req.body?.full_name, 100);
  const username = clean(req.body?.username, 30).toLowerCase();
  const position = req.body?.position;
  const password = String(req.body?.password ?? '');
  if (full_name.length < 2) return res.status(400).json({ error: 'Enter the full name.' });
  if (!/^[a-z0-9._-]{3,30}$/.test(username)) return res.status(400).json({ error: 'Username: 3 to 30 letters, numbers, dot, dash or underscore.' });
  if (!POSITIONS[position]) return res.status(400).json({ error: 'Choose a position.' });
  if (password.length < 8) return res.status(400).json({ error: 'Temporary password must be at least 8 characters.' });
  if (db.prepare('SELECT 1 FROM users WHERE username = ?').get(username)) return res.status(409).json({ error: 'That username is taken.' });
  db.prepare('INSERT INTO users (username, full_name, position, role, password_hash, must_change) VALUES (?, ?, ?, ?, ?, 1)')
    .run(username, full_name, position, POSITIONS[position], hashPw(password));
  res.status(201).json({ ok: true });
});

app.patch('/api/admin/users/:id', auth, ready, can('admin'), (req, res) => {
  const id = Number(req.params.id);
  const target = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  if (!target) return res.status(404).json({ error: 'Account not found.' });

  if (typeof req.body?.active === 'boolean') {
    if (!req.body.active) {
      if (id === req.user.id) return res.status(400).json({ error: 'You cannot disable your own account.' });
      const admins = db.prepare("SELECT COUNT(*) AS n FROM users WHERE role = 'admin' AND active = 1").get().n;
      if (target.role === 'admin' && target.active && admins <= 1) return res.status(400).json({ error: 'At least one admin must stay active.' });
      db.prepare('DELETE FROM sessions WHERE user_id = ?').run(id);
    }
    db.prepare('UPDATE users SET active = ? WHERE id = ?').run(req.body.active ? 1 : 0, id);
    return res.json({ ok: true });
  }

  if (typeof req.body?.password === 'string') {
    if (req.body.password.length < 8) return res.status(400).json({ error: 'Temporary password must be at least 8 characters.' });
    db.prepare('UPDATE users SET password_hash = ?, must_change = 1 WHERE id = ?').run(hashPw(req.body.password), id);
    db.prepare('DELETE FROM sessions WHERE user_id = ?').run(id);
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
      if (target.role === 'admin' && role !== 'admin' && target.active) {
        const admins = db.prepare("SELECT COUNT(*) AS n FROM users WHERE role = 'admin' AND active = 1").get().n;
        if (admins <= 1) return res.status(400).json({ error: 'At least one admin must stay active.' });
      }
    }
    db.prepare("UPDATE users SET full_name = ?, position = ?, role = ?, email = ?, phone = ?, updated_at = datetime('now') WHERE id = ?")
      .run(f.full_name, position, role, f.email, f.phone, id);
    db.prepare('UPDATE announcements SET author_name = ? WHERE author_id = ?').run(f.full_name, id);
    return res.json({ ok: true });
  }

  res.status(400).json({ error: 'Nothing to update.' });
});

// ---------- Errors (always answer the site with JSON) ----------
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  if (err.type === 'entity.too.large') return res.status(413).json({ error: 'That upload is too large. Use fewer or smaller photos.' });
  if (err.type === 'entity.parse.failed') return res.status(400).json({ error: 'Invalid request.' });
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

app.listen(PORT, () => console.log(`Barangay Zapatera site running at http://localhost:${PORT}`));