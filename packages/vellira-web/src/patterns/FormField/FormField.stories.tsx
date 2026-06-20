import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '../../primitives/Checkbox';
import { FormField } from '../FormField';

const meta = {
  title: 'Patterns/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### FormField Pattern

Layout wrapper for composing labels, validation text, and custom form controls.

**Features**
- Label rendering
- Required marker
- Error message area
- Disabled state styling
- Works with native inputs or custom Vellira controls

### Usage

Use FormField when a control needs consistent spacing and validation presentation but the control itself is custom.

Correct usage:

\`\`\`tsx
<FormField label='Email' required error={emailError}>
  <input value={email} onChange={handleEmailChange} />
</FormField>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    id: {
      description: 'ID used to associate the label with the form control.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      description: 'Field label displayed above the control.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'Form control rendered inside the field.',
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    required: {
      description: 'Displays a required indicator next to the label.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Applies disabled styling to the field.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      description: 'Validation error message displayed below the field.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Email',
    children: (
      <input
        type='text'
        placeholder='Enter email'
        style={{
          padding: '10px 16px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
        }}
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters',
    children: (
      <input
        type='text'
        placeholder='Enter password'
        style={{
          padding: '10px 16px',
          border: '1px solid #cf2333',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
        }}
      />
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    children: (
      <input
        type='text'
        placeholder='Enter username'
        style={{
          padding: '10px 16px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
        }}
      />
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    children: (
      <input
        disabled
        type='text'
        placeholder='Enter email'
        style={{
          padding: '10px 16px',
          border: '1px solid #d8d8d8',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
        }}
      />
    ),
  },
};

export const WithCheckbox: Story = {
  args: {
    label: 'Agreement',
    children: <Checkbox label='Accept terms' />,
  },
};

export const CompleteExample: Story = {
  args: {
    label: 'Email',
    required: true,
    error: 'Email is required',
    children: (
      <input
        type='email'
        placeholder='Enter email'
        style={{
          padding: '10px 16px',
          border: '1px solid #cf2333',
          borderRadius: '6px',
          fontSize: '14px',
          width: '100%',
        }}
      />
    ),
  },
};
