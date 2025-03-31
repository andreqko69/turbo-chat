import { CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import LoginForm from '~/features/auth/login-form';

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
  return (
    <>
      <CardHeader>
        <CardTitle>Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </>
  );
}
