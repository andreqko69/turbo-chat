import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/auth`,
});

export default authClient;
