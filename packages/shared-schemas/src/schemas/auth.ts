import { type } from 'arktype';

const PASSWORD_LENGTH = 6;
const NAME_LENGTH = 2;

export const EmailSchema = type('string.email').configure({
  message: 'Invalid email',
});

export const PasswordSchema = type.string
  .atLeastLength(PASSWORD_LENGTH)
  .configure({
    message: `must be at least ${PASSWORD_LENGTH} characters long`,
  });

export const NameSchema = type.string
  .atLeastLength(NAME_LENGTH)
  .configure({ message: `must be at least ${NAME_LENGTH} characters long` });

export const LoginSchema = type({
  email: EmailSchema,
  password: PasswordSchema,
});

export const SignupSchema = type({
  email: EmailSchema,
  password: PasswordSchema,
  confirmPassword: PasswordSchema,
  firstName: NameSchema,
  lastName: NameSchema,
}).narrow((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    return ctx.reject({
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });
  }

  return true;
});
