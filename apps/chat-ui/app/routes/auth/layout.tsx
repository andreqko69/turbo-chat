import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <div className="mx-auto flex h-lvh max-w-[400px] items-center justify-center">
      <Outlet />
    </div>
  );
}
