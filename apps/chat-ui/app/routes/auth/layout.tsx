import { Outlet } from 'react-router';
import { Card } from '~/components/ui/card';

export default function AuthLayout() {
  return (
    <div className="mx-auto flex h-lvh max-w-[400px] items-center justify-center">
      <Card className="w-full">
        <Outlet />
      </Card>
    </div>
  );
}
