import LoginForm from '~/features/auth/login-form';

export function meta() {
  return [
    { title: 'Login' },
    {
      name: 'description',
      content: 'Turbo chat login page',
    },
  ];
}

export default function Login() {
  return <LoginForm />;
}
