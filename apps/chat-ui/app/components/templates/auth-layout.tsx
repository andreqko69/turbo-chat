import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex h-lvh max-w-[400px] items-center justify-center">
      {children}
    </div>
  );
}
