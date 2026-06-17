import { Checkbox } from '@romanbakurov/virelia-native';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Checkbox Component

Native boolean control with an optional label.

**Features**
- Default checked state
- Disabled checked and unchecked states
- Optional label
- Long label wrapping
- Unlabeled usage when surrounding copy provides context

### Usage

Use Checkbox for a single on/off choice in native forms or settings screens.

Correct usage:

\`\`\`tsx
<Checkbox label='Accept terms' defaultChecked />
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const LongLabel: Story = {
  args: {
    label: 'I agree to the Terms of Service and Privacy Policy of Virelia',
  },
};
