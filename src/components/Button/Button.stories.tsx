import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'violet', 'blue'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: 'Clicked me',
    color: 'red',
    size: 'medium',
    disabled: false,
  },
};
