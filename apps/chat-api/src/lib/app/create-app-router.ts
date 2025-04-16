import { Hono } from 'hono';

import createAuthHandlers from '~/features/auth/auth.handlers';

const createAppRouter = () => {
  const router = new Hono();

  const authRoutes = createAuthHandlers();

  router.route('/auth', authRoutes);

  return router;
};

export default createAppRouter;
