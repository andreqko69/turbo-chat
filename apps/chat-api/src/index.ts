import { serve } from '@hono/node-server';
import createApp from './lib/app';

createApp().then((app) => {
  serve(
    {
      fetch: app.fetch,
      port: 3000,
    },
    (info) => {
      console.log(`Server is running on http://localhost:${info.port}`);
    },
  );
});
