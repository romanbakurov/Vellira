import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'delete'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Clicked me',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Colors: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },

  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Button {...args} color='primary' title='Primary' />
        <Button {...args} color='secondary' title='Secondary' />
        <Button {...args} color='delete' title='Delete' />
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    title: 'Clicked me',
    color: 'primary',
    disabled: false,
  },

  render: (args) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'flex-start',
        }}
      >
        <Button {...args} size='small' title='Small' />
        <Button {...args} size='medium' title='Medium' />
        <Button {...args} size='large' title='Large' />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    color: 'primary',
    size: 'medium',
    disabled: true,
  },
};
