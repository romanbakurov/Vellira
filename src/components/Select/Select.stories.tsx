import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Select, type SelectProps } from './Select.tsx';
import { useState } from 'react';

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
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    await expect(combobox).not.toBeDisabled();
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(combobox);
    await new Promise((resolve) => setTimeout(resolve, 100));
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

    await expect(combobox).toBeInTheDocument();
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

    const combobox = canvas.getByRole('alert');
    await expect(combobox).toBeInTheDocument();
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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    // Попробовать кликнуть
    await userEvent.click(combobox);

    // Проверить, что не открылся
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');

    // Проверить, что onChange не вызван
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};
