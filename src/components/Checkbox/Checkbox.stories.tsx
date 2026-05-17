import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox.tsx';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Accept the terms',
    checked: true,
  },
};

export const BasicUnchecked: Story = {
  args: {
    label: 'Accept the terms',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: false,
  },
};
