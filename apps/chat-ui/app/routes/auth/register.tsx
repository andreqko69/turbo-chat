import SignupForm from '~/features/auth/signup-form';

export function meta() {
  return [
    { title: 'Register' },
    {
      name: 'description',
      content: 'Turbo chat registration page',
    },
  ];
}

export default function Register() {
  return <SignupForm />;
}
