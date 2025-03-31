import { CardContent, CardHeader, CardTitle } from '~/components/atoms/card';
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
  return (
    <>
      <CardHeader>
        <CardTitle>Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
    </>
  );
}
