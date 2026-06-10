import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, screen, userEvent, within } from 'storybook/test';

import { Select } from './Select';
import type { SelectProps } from './types';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message (string)',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Germany', value: 'de' },
];

const optionsWithDisabled = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es', disabled: true },
  { label: 'Germany', value: 'de' },
];

const SelectWithState = (args: SelectProps) => {
  const [value, setValue] = useState(args.value);

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
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    await expect(combobox).not.toBeDisabled();
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'true');
  },
};

export const CloseOnEscape: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    // Открыть кликом
    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'true');

    // Навигация стрелками
    await userEvent.keyboard('{Escape}');
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');
  },
};

export const WithValue: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    await userEvent.click(combobox);

    const option = await screen.findByText('France');
    await userEvent.click(option);

    await expect(combobox).toHaveTextContent('France');
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
    error: 'This field is required',
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Проверить наличие сообщения об ошибке
    const errorMessage = canvas.getByRole('alert');
    await expect(errorMessage).toHaveTextContent('This field is required');

    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toBeInTheDocument();
  },
};

export const OptionWithDisabled: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: optionsWithDisabled,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    await expect(combobox).not.toBeDisabled();
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'true');
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    value: 'fr',
    placeholder: 'Select country...',
    options: defaultOptions,
    disabled: true,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    await expect(combobox).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');
  },
};
