import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { RadioGroup } from '../RadioGroup';

import type { RadioGroupProps } from './types';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### RadioGroup Component

Grouped radio control for selecting exactly one option.

**Features**
- Controlled selected value
- Vertical and horizontal orientation
- Required state
- Disabled group state
- Disabled individual options
- Validation error message

### Usage

Use RadioGroup when users need to compare a small set of mutually exclusive choices.

Correct usage:

\`\`\`tsx
<RadioGroup
  name='plan'
  label='Plan'
  value={plan}
  onChange={setPlan}
  options={plans}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    label: {
      description: 'Text label displayed above the RadioGroup.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      description: 'Radio group name shared by all radio options.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Current selected value for controlled usage.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      description: 'Initial selected value for uncontrolled usage.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      description: 'List of radio options.',
      control: 'object',
      table: {
        type: {
          summary:
            'Array<{ label: string; value: string; disabled?: boolean }>',
        },
      },
    },
    orientation: {
      description: 'Layout direction of the radio options.',
      control: 'radio',
      options: ['vertical', 'horizontal'],
      table: {
        type: { summary: `'vertical' | 'horizontal'` },
        defaultValue: { summary: 'vertical' },
      },
    },
    required: {
      description: 'Marks the radio group as required.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables all radio options in the group.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      description: 'Validation error message displayed below the group.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Called when the selected value changes.',
      action: 'changed',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Germany', value: 'de' },
];

const RadioGroupWithState = (args: RadioGroupProps) => {
  const [value, setValue] = useState(args.defaultValue ?? '');

  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

export const Basic: Story = {
  args: {
    label: 'Country',
    required: false,
    defaultValue: 'fr',
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const Required: Story = {
  args: {
    name: 'country',
    label: 'Country',
    required: true,
    defaultValue: 'fr',
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const WithError: Story = {
  args: {
    name: 'country',
    label: 'Country',
    required: false,
    defaultValue: 'fr',
    error: 'Please select a country',
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    name: 'country',
    label: 'Country',
    disabled: true,
    defaultValue: 'fr',
    required: false,
    options: defaultOptions,
    orientation: 'vertical',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const DisabledOption: Story = {
  args: {
    name: 'country',
    label: 'Country',
    defaultValue: 'fr',
    required: false,
    orientation: 'vertical',
    options: [
      { label: 'France', value: 'fr' },
      { label: 'Spain', value: 'es', disabled: true },
      { label: 'Germany', value: 'de' },
    ],
  },
  render: (args) => <RadioGroupWithState {...args} />,
};

export const Horizontal: Story = {
  args: {
    name: 'country',
    label: 'Country',
    defaultValue: 'fr',
    required: false,
    options: defaultOptions,
    orientation: 'horizontal',
  },
  render: (args) => <RadioGroupWithState {...args} />,
};
