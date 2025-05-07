import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '~/components/atoms/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/atoms/card';

const meta: Meta<typeof Card> = {
  title: 'Design System/Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is the card description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can add any elements here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};
