import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
