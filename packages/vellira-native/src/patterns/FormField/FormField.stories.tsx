import type { Meta, StoryObj } from '@storybook/react';
import { Text, View } from 'react-native';

import { Input } from '../../primitives/Input';
import { useTheme } from '../../theme';

import { FormField } from './FormField';

const meta = {
  title: 'Patterns/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    children: <Text>Field content</Text>,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => {
      const { theme } = useTheme();

      return (
        <View
          style={{
            width: '100%',
            padding: theme.tokens.spacing[4],
          }}
        >
          <Story />
        </View>
      );
    },
  ],
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Full name',
    children: <Input placeholder='Alex Johnson' />,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Username',
    description:
      'Use 3–20 characters. Letters, numbers, and underscores are allowed.',
    children: <Input placeholder='alex_johnson' />,
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    required: true,
    children: <Input placeholder='Alex Johnson' />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    required: true,
    error: 'Enter a valid email',
    children: <Input placeholder='name@company.com' error />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    children: <Input placeholder='Not editable' disabled />,
  },
};

export const CustomContent: Story = {
  args: {
    label: 'Custom content',
    description: 'FormField can wrap any custom form control.',
    children: <Text>Field content</Text>,
  },
};

export const CompleteExample: Story = {
  args: {
    label: 'Email',
    description: 'We will use this email for account notifications.',
    required: true,
    error: 'Email is required',
    children: <Input placeholder='name@company.com' error />,
  },
};
