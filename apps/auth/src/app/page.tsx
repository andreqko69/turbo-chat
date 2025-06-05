'use client';

import { redirect } from 'next/navigation';

import { ROTUES } from '../shared/utils/routes';

export default function Home() {
  redirect(ROTUES.Login);

  return null;
}
