import { Checkbox } from '@romanbakurov/flux-ui-native';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultChecked: true,
  },
};
