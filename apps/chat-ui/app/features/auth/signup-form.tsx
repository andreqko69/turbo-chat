import { useForm } from 'react-hook-form';
import { arktypeResolver } from '@hookform/resolvers/arktype';
import { SignupSchema } from '@repo/shared-types';
import { NavLink } from 'react-router';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/molecules/form';
import { Input } from '~/components/atoms/input';
import { Button } from '~/components/atoms/button';

type SignupData = typeof SignupSchema.infer;

const SignupForm = () => {
  const form = useForm<SignupData>({
    resolver: arktypeResolver(SignupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (data: SignupData) => {
    console.log('data', data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="firstName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {form.formState.errors.firstName && (
                <FormMessage>
                  First name {form.formState.errors.firstName.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="lastName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {form.formState.errors.lastName && (
                <FormMessage>
                  Last name {form.formState.errors.lastName.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              {form.formState.errors.password && (
                <FormMessage>
                  Password {form.formState.errors.password.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              {form.formState.errors.confirmPassword && (
                <FormMessage>
                  Confirm password{' '}
                  {form.formState.errors.confirmPassword.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-3 flex justify-end">
        <NavLink to="/auth/login" className="text-cold">
          Sign in
        </NavLink>
      </div>
    </Form>
  );
};

export default SignupForm;
