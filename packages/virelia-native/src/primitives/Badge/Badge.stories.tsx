import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Badge Component

Describe when to use Badge and what problem it solves.

**Features**
- Add the main supported states
- Document important behavior
- Mention platform-specific details when needed

### Usage

Replace this section with a real example before publishing the component.

Correct usage:

\`\`\`tsx
<Badge />
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
