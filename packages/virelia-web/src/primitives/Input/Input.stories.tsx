import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../Input';

import type { InputProps } from './types';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Input is a labeled web text-field primitive. It supports controlled values, required and disabled states, validation errors, placeholders, and size variants for compact or spacious form layouts.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// Компонент-обертка для базовой демонстрации
const BasicStoryDemo = (args: InputProps) => {
  const [value, setValue] = useState('');

  return <Input {...args} value={value} onChange={setValue} />;
};

// Компонент-обертка для демонстрации разных размеров
const InputSizesDemo = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Input
        id='name-sm'
        label='Small'
        size='sm'
        value={value}
        onChange={setValue}
      />

      <Input
        id='name-md'
        label='Medium'
        size='md'
        value={value}
        onChange={setValue}
      />

      <Input
        id='name-lg'
        label='Large'
        size='lg'
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Basic: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type email...',
    required: false,
    value: '',
    size: 'md',
  },
  render: (args) => <BasicStoryDemo {...args} />,
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type email...',
    required: true,
    value: '',
    error: 'This field is required',
    size: 'md',
  },
  render: (args) => <Input {...args} />,
};

export const Disabled: Story = {
  args: {
    label: 'Phone',
    placeholder: '+33 ___-__-__-__',
    value: '123456',
    disabled: true,
    size: 'md',
  },
  render: (args) => <Input {...args} />,
};

export const Sizes: Story = {
  render: () => <InputSizesDemo />,
};
