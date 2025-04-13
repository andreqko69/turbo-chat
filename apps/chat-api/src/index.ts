import { serve } from '@hono/node-server';

import env from './env';
import createApp from './lib/app/create-app';
import { shutdownDb } from './lib/db';

createApp()
  .then((app) => {
    serve(
      {
        fetch: app.fetch,
        port: env.PORT,
      },
      (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
      },
    );
  })
  .catch(async (error) => {
    console.error(`Error during app start: ${error}`);
    await shutdownDb();
  });
