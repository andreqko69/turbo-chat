import { useForm } from 'react-hook-form';
import { arktypeResolver } from '@hookform/resolvers/arktype';
import { LoginSchema } from '@repo/shared-types';
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
import { Spinner } from '~/components/atoms/spinner';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/atoms/card';

type LoginData = typeof LoginSchema.infer;

const LoginForm = () => {
  const form = useForm<LoginData>({
    resolver: arktypeResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginData) => {
    console.log('data', data);
  };

  const { isSubmitting } = form.formState;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
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
                    <FormMessage>
                      {form.formState.errors.email.message}
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
            <Button type="submit" disabled={isSubmitting}>
              Login {isSubmitting && <Spinner size="default" />}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-end">
        <NavLink to="/auth/register" className="text-cold">
          Register
        </NavLink>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
