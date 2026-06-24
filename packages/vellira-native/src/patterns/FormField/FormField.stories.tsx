import { theme } from '@romanbakurov/vellira-tokens';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextInput, View } from 'react-native';

import { FormField } from './FormField';

const controlStyle = {
  width: '100%',
  minHeight: 44,
  paddingHorizontal: theme.spacing[4],
  paddingVertical: theme.spacing[3],
  color: theme.colors.gray[900],
  fontFamily: theme.typography.family.regular,
  fontSize: theme.typography.size.md,
  backgroundColor: theme.colors.gray[0],
  borderColor: theme.colors.gray[200],
  borderRadius: theme.radius.lg,
  borderWidth: 1,
};

const errorControlStyle = {
  ...controlStyle,
  borderColor: theme.colors.error,
};

const disabledControlStyle = {
  ...controlStyle,
  color: theme.colors.gray[500],
  backgroundColor: theme.colors.gray[55],
};

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
    (Story) => (
      <View style={{ width: '100%', padding: theme.spacing[4] }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    label: 'Username',
    description:
      'Use 3–20 characters. Letters, numbers, and underscores are allowed.',
    children: (
      <TextInput
        placeholder='roman_bakurov'
        placeholderTextColor={theme.colors.gray[400]}
        style={controlStyle}
      />
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    required: true,
    children: (
      <TextInput
        placeholder='Roman Bakurov'
        placeholderTextColor={theme.colors.gray[400]}
        style={controlStyle}
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    required: true,
    error: 'Enter a valid email',
    children: (
      <TextInput
        placeholder='name@company.com'
        placeholderTextColor={theme.colors.gray[400]}
        style={errorControlStyle}
      />
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    children: (
      <TextInput
        editable={false}
        placeholder='Not editable'
        placeholderTextColor={theme.colors.gray[400]}
        style={disabledControlStyle}
      />
    ),
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
    children: (
      <TextInput
        placeholder='name@company.com'
        placeholderTextColor={theme.colors.gray[400]}
        style={errorControlStyle}
      />
    ),
  },
};
