import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '~/components/atoms/input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Group settings
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'password',
        'email',
        'number',
        'search',
        'tel',
        'url',
        'date',
        'time',
        'datetime-local',
      ],
      description: 'The type of the input field',
      table: {
        category: 'Controls',
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      table: {
        category: 'Content',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        category: 'State',
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        category: 'Validation',
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when the input value changes',
      table: {
        category: 'Events',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        category: 'Styling',
      },
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text here...',
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (props) => <Input {...props} />,
};
