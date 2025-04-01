import { Suspense } from 'react';
import { Outlet } from 'react-router';

import AuthLayout from '~/components/templates/auth-layout';

export default function Layout() {
  return (
    <AuthLayout>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
}
