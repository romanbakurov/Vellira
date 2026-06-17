import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Checkbox } from './index';

const meta = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Checkbox Component

Boolean form control for turning a single option on or off.

**Features**
- Controlled checked state
- Optional label
- Disabled checked and unchecked states
- Change callback for form integration

### Usage

Use Checkbox for independent choices such as accepting terms, enabling settings, or selecting optional preferences.

Correct usage:

\`\`\`tsx
<Checkbox
  label='Accept terms'
  checked={accepted}
  onCheckedChange={setAccepted}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Accept the terms',
    checked: true,
  },
};

export const BasicUnchecked: Story = {
  args: {
    label: 'Accept the terms',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: false,
  },
};
