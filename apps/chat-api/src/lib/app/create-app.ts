import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { intializeDb } from '../db';

const createApp = async () => {
  const app = new Hono();

  app.use(
    '*',
    cors({
      origin: 'http://localhost:5173',
      allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    }),
  );

  await intializeDb();

  return app;
};

export default createApp;
