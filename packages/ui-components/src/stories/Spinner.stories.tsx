import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '@/components/atoms/spinner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 6, 8],
      description: 'The size of the spinner.',
      defaultValue: 'default',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-4">
        <Spinner size="default" />
        <Spinner size={6} />
        <Spinner size={8} />
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-4">
        <Spinner size="default" className="border-red-500" />
        <Spinner size="default" className="border-blue-500" />
        <Spinner size="default" className="border-green-500" />
      </div>
    );
  },
};
