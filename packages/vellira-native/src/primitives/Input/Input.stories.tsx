import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import type { InputProps } from './types';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  args: {
    label: 'Email',
    placeholder: 'name@company.com',
    size: 'md',
    type: 'email',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const ControlledInputDemo = (args: InputProps) => {
  const [value, setValue] = useState(args.value ?? '');

  const handleChange = (nextValue: string) => {
    setValue(nextValue);
    args.onChange?.(nextValue);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default: Story = {
  render: (args) => <ControlledInputDemo {...args} />,
};

export const WithValue: Story = {
  args: {
    value: 'hello@vellira.dev',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Full name',
    placeholder: 'Roman Bakurov',
    type: 'text',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: 'Password is required',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    value: 'Not editable',
    disabled: true,
    type: 'text',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search components...',
    type: 'search',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: '32',
    type: 'number',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small input',
    type: 'text',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large input',
    type: 'text',
  },
  render: (args) => <ControlledInputDemo {...args} />,
};
