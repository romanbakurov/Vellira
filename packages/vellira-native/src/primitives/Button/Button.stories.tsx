import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Button Component

Native pressable action for React Native screens.

**Features**
- Primary, secondary, and danger variants
- Native \`onPress\` handling
- Token-based colors and typography
- Touch-friendly visual states

### Usage

Use Button for screen actions, form submits, and destructive confirmations.

Correct usage:

\`\`\`tsx
<Button variant='primary' onPress={handleSave}>
  Save changes
</Button>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Cancel',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};
