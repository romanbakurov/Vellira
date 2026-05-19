import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField';
import { Checkbox } from '@ui/components/Checkbox';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Email',
    children: (
      <input
        type='text'
        placeholder='Enter email'
        style={{
          padding: '8px 12px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
        }}
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters',
    children: (
      <input
        type='text'
        placeholder='Enter email'
        style={{
          padding: '8px 12px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
        }}
      />
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    children: (
      <input
        type='text'
        placeholder='Enter email'
        style={{
          padding: '8px 12px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
        }}
      />
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    children: (
      <input
        type='text'
        placeholder='Enter email'
        style={{
          padding: '8px 12px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
        }}
      />
    ),
  },
};

export const WithCheckbox: Story = {
  args: {
    children: <Checkbox label='Accept terms' />,
  },
};
