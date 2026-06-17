import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { RadioGroup } from '../RadioGroup';

import type { RadioGroupProps } from './types';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'RadioGroup is a web form component for selecting exactly one option from a group. It supports vertical and horizontal layouts, required and disabled states, disabled options, and validation errors.',
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message (string)',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Germany', value: 'de' },
];

const RadioGroupWithState = (args: RadioGroupProps) => {
  const [value, setValue] = useState(args.defaultValue || '');
  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

export const Basic: Story = {
  args: {
    label: 'Country',
    required: false,
    defaultValue: 'fr',
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const Required: Story = {
  args: {
    label: 'Country',
    required: true,
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Country',
    error: 'Please select a country',
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    disabled: true,
    defaultValue: 'fr',
    options: defaultOptions,
    orientation: 'vertical',
  },
};

export const DisabledOption: Story = {
  args: {
    label: 'Country',
    defaultValue: 'fr',
    options: [
      { label: 'France', value: 'fr' },
      { label: 'Spain', value: 'es', disabled: true },
      { label: 'Germany', value: 'de' },
    ],
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const Horizontal: Story = {
  args: {
    label: 'Country',
    defaultValue: 'fr',
    options: defaultOptions,
    orientation: 'horizontal',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};
