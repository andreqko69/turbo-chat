import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Button } from '~/components/atoms/button';
import { Card, CardContent, CardHeader } from '~/components/atoms/card';
import { Input } from '~/components/atoms/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ogranisms/form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Organisms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Form>;

export default meta;

export const Default = {
  render: () => {
    const onSubmit = (data: unknown) => console.log(data);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm({
      defaultValues: {
        name: '',
        email: '',
      },
    });

    return (
      <Card className="w-96">
        <CardHeader>Login</CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Enter your full name.</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage>Email is invalid</FormMessage>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  },
};
