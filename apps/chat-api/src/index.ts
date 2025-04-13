import { serve } from '@hono/node-server';
import createApp from './lib/app';
import prisma from './lib/db';

createApp()
  .then((app) => {
    serve(
      {
        fetch: app.fetch,
        port: 3000,
      },
      (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
      },
    );
  })
  .catch(async (error) => {
    console.error(`Error during app start: ${error}`);
    prisma.$disconnect();
  });
