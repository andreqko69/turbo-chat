import { redirect } from 'react-router';

export function meta() {
  return [
    { title: 'Turbo chat' },
    {
      name: 'description',
      content: 'Turbo chat - the best chat you have ever saw!',
    },
  ];
}

export function loader() {
  return redirect('/auth/login');
}

export default function Home() {
  return null;
}
