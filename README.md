# Barangay Zapatera Website

Node.js + Express + SQLite. Needs Node 20.6 or newer.

## Run it
1. `npm install`
2. Copy `.env.example` to `.env` and set `ADMIN_PASSWORD` and `SESSION_SECRET`
3. `npm start`
4. Open http://localhost:3000 (site) and http://localhost:3000/admin.html (admin)

## What it does
- Contact form saves messages to SQLite (`data/zapatera.db`)
- Admin page: read messages, mark new / in progress / resolved, delete, post announcements
- Announcements show on the homepage News section automatically

## Before going live
- Replace every [bracketed] placeholder in `public/index.html`
- Set `NODE_ENV=production` and host behind HTTPS
- Back up `data/zapatera.db` regularly
