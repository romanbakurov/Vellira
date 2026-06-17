import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Button } from '../../primitives/Button';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'Helpful native tooltip content',
    children: <Button>Press and hold</Button>,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    content:
      'Use this tooltip for short contextual help. Keep content concise on small screens.',
    maxWidth: 280,
  },
};

export const CustomContent: Story = {
  args: {
    content: <Text>Custom tooltip node</Text>,
    children: <Button variant='secondary'>Show custom content</Button>,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Button variant='secondary'>Disabled tooltip</Button>,
  },
};
