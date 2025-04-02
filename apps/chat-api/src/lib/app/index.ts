import { Hono } from 'hono';
import { intializeDb } from '../db';

const createApp = async () => {
  const app = new Hono();

  await intializeDb();

  return app;
};

export default createApp;
