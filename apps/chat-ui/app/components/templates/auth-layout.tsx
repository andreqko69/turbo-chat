import React from 'react';
import { Card } from '~/components/atoms/card';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex h-lvh max-w-[400px] items-center justify-center">
      <Card className="w-full">{children}</Card>
    </div>
  );
}
