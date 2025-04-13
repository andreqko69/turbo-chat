import { type } from 'arktype';
import dotenv from 'dotenv';

dotenv.config();

const EnvSchema = type({
  NODE_ENV: "'development'|'production'",
  PORT: 'string.digits == 4',
  DATABASE_URL: 'string',
  BETTER_AUTH_SECRET: 'string >= 32',
});

const envVariables = EnvSchema({
  PORT: process.env.PORT ?? '3000',
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
});

if (envVariables instanceof type.errors) {
  throw new Error(`Invalid environment variables! ${envVariables.summary}`);
}

export default { ...envVariables, PORT: parseInt(envVariables.PORT) };
