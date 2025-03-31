import { useForm } from 'react-hook-form';
import { arktypeResolver } from '@hookform/resolvers/arktype';
import { LoginSchema } from '@repo/shared-types';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

type LoginData = typeof LoginSchema.infer;

const LoginForm = () => {
  const form = useForm<LoginData>({
    resolver: arktypeResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginData) => {
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
                  {form.formState.errors.password.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
