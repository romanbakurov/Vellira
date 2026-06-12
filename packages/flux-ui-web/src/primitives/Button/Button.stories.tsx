import Delete from '@assets/icons/Delete.svg?react';
import Download from '@assets/icons/Download.svg?react';
import Filter from '@assets/icons/Filter.svg?react';
import Profile from '@assets/icons/Profile.svg?react';
import Save from '@assets/icons/Save.svg?react';
import Search from '@assets/icons/Search.svg?react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';

import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    iconPosition: {
      control: 'radio',
      options: ['none', 'left', 'right', 'both'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Download',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
    ariaLabel: 'Download',
  },
  render: ({ iconPosition, ...args }) => {
    const icon = <Download />;

    return (
      <Button
        {...args}
        leftIcon={
          iconPosition === 'left' || iconPosition === 'both' ? icon : undefined
        }
        rightIcon={
          iconPosition === 'right' || iconPosition === 'both' ? icon : undefined
        }
      />
    );
  },
};

export const Variants: Story = {
  args: {
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
  },

  render: ({ iconPosition, ...args }) => {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          {...args}
          variant='primary'
          leftIcon={
            iconPosition === 'left' || iconPosition === 'both' ? (
              <Profile />
            ) : undefined
          }
          rightIcon={
            iconPosition === 'right' || iconPosition === 'both' ? (
              <Profile />
            ) : undefined
          }
        >
          Primary
        </Button>
        <Button
          {...args}
          variant='secondary'
          leftIcon={
            iconPosition === 'left' || iconPosition === 'both' ? (
              <Search />
            ) : undefined
          }
          rightIcon={
            iconPosition === 'right' || iconPosition === 'both' ? (
              <Search />
            ) : undefined
          }
        >
          Secondary
        </Button>
        <Button
          {...args}
          variant='danger'
          leftIcon={
            iconPosition === 'left' || iconPosition === 'both' ? (
              <Delete />
            ) : undefined
          }
          rightIcon={
            iconPosition === 'right' || iconPosition === 'both' ? (
              <Delete />
            ) : undefined
          }
        >
          Delete
        </Button>
      </div>
    );
  },
};

export const Sizes: Story = {
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
        <Button {...args} size='small'>
          Small
        </Button>
        <Button {...args} size='medium'>
          Medium
        </Button>
        <Button {...args} size='large'>
          Large
        </Button>
      </div>
    );
  },
};

export const WidthComparison: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 400 }}
    >
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <p>Default (inline)</p>
        <Button {...args}>Normal Width</Button>
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <p>Full Width</p>
        <Button {...args} fullWidth>
          Full Width
        </Button>
      </div>
    </div>
  ),
};

export const WithoutIcons: Story = {
  args: {
    children: 'Save',
    variant: 'primary',
  },
  render: ({ iconPosition, ...args }) => {
    const icon = <Save />;

    return (
      <Button
        {...args}
        leftIcon={
          iconPosition === 'left' || iconPosition === 'both' ? icon : undefined
        }
        rightIcon={
          iconPosition === 'right' || iconPosition === 'both' ? icon : undefined
        }
      />
    );
  },
};

export const OnlyIcon: Story = {
  argTypes: {
    iconPosition: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    ariaLabel: 'Filter',
  },
  render: (args) => {
    return <Button {...args} leftIcon={<Filter />} />;
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};
