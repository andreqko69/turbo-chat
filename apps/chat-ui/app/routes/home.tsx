import { Welcome } from '../welcome/welcome';

export function meta() {
  return [
    { title: 'Turbo chat' },
    {
      name: 'description',
      content: 'Turbo chat - the best chat you have ever saw!',
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
