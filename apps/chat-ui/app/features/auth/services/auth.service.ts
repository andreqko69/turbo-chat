import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginSchema, SignupSchema } from '@repo/shared-schemas';

const authService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api/v1/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: typeof SignupSchema.infer) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body: typeof LoginSchema.infer) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export default authService;
