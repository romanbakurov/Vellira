import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const options = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Germany', value: 'de' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {
    label: 'Country',
    placeholder: 'Select country...',
    options,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'fr',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Country is required',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'de',
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: 'France', value: 'fr' },
      { label: 'Spain', value: 'es', disabled: true },
      { label: 'Germany', value: 'de' },
    ],
  },
};
