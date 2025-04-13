import { SignupSchema } from '@repo/shared-schemas';
import { Hono } from 'hono';

const createAuthHandlers = () => {
  const authRoutes = new Hono().basePath('/auth');

  authRoutes.post('/signup', async (c) => {
    const body = await c.req.json();
    const validatedBody = SignupSchema(body);
    console.log('validatedBody', validatedBody);
  });
};

export default createAuthHandlers;
