import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '../../primitives/Checkbox';
import { FormField } from '../FormField';

const meta = {
  title: 'Patterns/FormField',
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
          padding: '10px 16px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
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
          padding: '10px 16px',
          border: '1px solid #cf2333',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
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
          padding: '10px 16px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
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
          padding: '10px 16px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
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
