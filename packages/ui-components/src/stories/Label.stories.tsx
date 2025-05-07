import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '~/components/atoms/input';
import { Label } from '~/components/atoms/label';

const meta = {
  title: 'Design System/Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Label htmlFor="terms">
        Name
        <Input id="terms" className="ml-2" />
      </Label>
    </div>
  ),
};
