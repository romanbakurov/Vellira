import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Checkbox } from './index';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    onCheckedChange: fn(),
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
