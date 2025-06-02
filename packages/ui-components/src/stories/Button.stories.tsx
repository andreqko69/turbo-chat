import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { User } from 'lucide-react';

import { Button } from '@/components/atoms/button';
import { Card, CardContent } from '@/components/atoms/card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'ghost',
        'outline',
        'link',
      ],
      description: 'The variant of the button.',
      defaultValue: 'default',
      type: 'string',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button.',
      defaultValue: 'default',
      type: 'string',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when the button is clicked.',
    },
    asChild: {
      control: 'boolean',
      description:
        'If true, the button will be rendered as a child component. Use this when you want to use a different element as the button.',
      defaultValue: false,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Button {...args}>Default Button</Button>;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Variants: Story = {
  render: () => {
    return (
      <Card className="flex gap-2">
        <CardContent className="flex items-center gap-4 p-6">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <Card className="flex gap-2">
        <CardContent className="flex items-center gap-4 p-6">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <User />
          </Button>
        </CardContent>
      </Card>
    );
  },
};
