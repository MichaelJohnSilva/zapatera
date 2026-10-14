// Usage:  node reset-admin.js NewPassword123 [username]
// Sets a new temporary password for an account (default: admin). The person must change it at next login.
const path = require('path');
const crypto = require('crypto');
const { DatabaseSync } = require('node:sqlite');

const [pw, uname = 'admin'] = process.argv.slice(2);
if (!pw || pw.length < 8) {
  console.log('Usage: node reset-admin.js NewPassword [username]   (password must be at least 8 characters)');
  process.exit(1);
}

const db = new DatabaseSync(path.join(__dirname, 'data', 'zapatera.db'));
let rows;
try { rows = db.prepare('SELECT id, username, position, active FROM users ORDER BY id').all(); }
catch { console.log('No accounts table yet. Run "npm start" once, stop it, then run this again.'); process.exit(1); }

const u = rows.find(r => r.username === uname.toLowerCase());
if (!u) {
  console.log(`No account named "${uname}". Existing accounts:`);
  rows.forEach(r => console.log(`  ${r.username}  (${r.position})${r.active ? '' : '  [disabled]'}`));
  process.exit(1);
}

const salt = crypto.randomBytes(16);
const hash = salt.toString('hex') + ':' + crypto.scryptSync(pw, salt, 64).toString('hex');
db.prepare('UPDATE users SET password_hash = ?, must_change = 1, active = 1 WHERE id = ?').run(hash, u.id);
db.prepare('DELETE FROM sessions WHERE user_id = ?').run(u.id);
console.log(`Done. Sign in as "${u.username}" with the new password. You will be asked to choose your own.`);