import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, type SelectProps } from './Select.tsx';
import { useState } from 'react';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message (string)',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SelectWithState = (args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue);
      }}
    />
  );
};

export const Basic: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    disabled: false,
    options: [
      { label: 'France', value: 'fr' },
      { label: 'Spain', value: 'es' },
      { label: 'Germany', value: 'de' },
    ],
    onChange: (value) => console.log('Selected:', value),
  },

  render: (args) => <SelectWithState {...args} />,
};

export const WithError: Story = {
  args: {
    ...Basic.args,
    error: 'This field is required',
  },

  render: (args) => <SelectWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    value: 'usa',
  },

  render: (args) => <SelectWithState {...args} />,
};
