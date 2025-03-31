import { type } from 'arktype';

const EmailSchema = type('string.email')
  .describe('a valid email address')
  .configure({ actual: () => '' });

const PasswordSchema = type.string
  .atLeastLength(6)
  .describe('at least 6 characters long');

export const LoginSchema = type({
  email: EmailSchema,
  password: PasswordSchema,
});
