import { httpServerHandler } from 'cloudflare:node';
import { env } from 'cloudflare:workers';
import app from './server.js';

globalThis.__AI = env.AI;

app.listen(3000);
export default httpServerHandler({ port: 3000 });