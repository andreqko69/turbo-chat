import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Button } from '~/components/atoms/button';
import { Input } from '~/components/atoms/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/molecules/form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Molecules/Form',
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
    const form = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
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
                  <FormDescription>Enter your email address.</FormDescription>
                  <FormMessage>email is invalid</FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    );
  },
};
