import { useState } from 'react';

import { ChevronDown, DropdownMenu } from '@romanbakurov/vellira-icons';
import { theme } from '@romanbakurov/vellira-tokens';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Dropdown } from './Dropdown';

const items = [
  { type: 'group' as const, label: 'Actions' },
  { label: 'Edit profile', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { type: 'separator' as const },
  { label: 'Delete account', value: 'delete', danger: true },
];

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
### Dropdown Component

Contextual action menu for React Native applications.

**Features**
- Text trigger
- Icon-only trigger
- Custom trigger content
- Groups and separators
- Disabled items
- Danger actions
- Long text support
- Controlled selection callback

### Usage

Use Dropdown when secondary actions should be hidden until requested by the user.

Correct usage:

\`\`\`tsx
<Dropdown
  label="Actions"
  items={[
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete', danger: true },
  ]}
  onSelect={(value) => console.log(value)}
/>
\`\`\`

### Accessibility

- Accessible button trigger
- Expanded/collapsed state
- Disabled state support
- Screen reader friendly labels

### Common use cases

- Row actions
- Settings menus
- Context menus
- Overflow actions (three dots menu)
- Account actions
`,
      },
    },
  },
  args: {
    label: 'Open menu',
    items,
    showArrow: false,
  },
  argTypes: {
    label: {
      description: 'Accessible label for the dropdown trigger.',
      control: 'text',
    },

    trigger: {
      description: 'Custom trigger content.',
      control: false,
    },

    icon: {
      description: 'Icon displayed inside the trigger.',
      control: false,
    },

    arrowIcon: {
      description: 'Custom arrow icon.',
      control: false,
    },

    showArrow: {
      description: 'Controls arrow visibility.',
      control: 'boolean',
    },

    items: {
      description: 'Dropdown items, groups and separators.',
      control: 'object',
    },

    disabled: {
      description: 'Disables the dropdown.',
      control: 'boolean',
    },

    onSelect: {
      description: 'Called when a menu item is selected.',
      action: 'selected',
    },

    style: {
      table: { disable: true },
    },

    triggerStyle: {
      table: { disable: true },
    },

    itemStyle: {
      table: { disable: true },
    },

    textStyle: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Actions',
    icon: <DropdownMenu size={20} color={theme.colors.primary} />,
    showArrow: false,
    items,
  },
};

export const TextOnly: Story = {
  args: {
    label: 'Actions',
    trigger: <Text>Actions</Text>,
    arrowIcon: <ChevronDown size={16} color={theme.colors.gray[700]} />,
    showArrow: true,
    items,
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: <Text>Account actions</Text>,
    items,
  },
};

export const WithGroupsAndSeparator: Story = {
  args: {
    label: 'Documents',
    items: [
      { type: 'group', label: 'Recent' },
      { label: 'Document 1', value: 'doc1' },
      { label: 'Document 2', value: 'doc2' },
      { type: 'separator' },
      { type: 'group', label: 'Actions' },
      { label: 'Duplicate', value: 'duplicate' },
      { label: 'Delete', value: 'delete', danger: true },
    ],
  },
};

export const WithDisabledItems: Story = {
  args: {
    label: 'Project menu',
    items: [
      { label: 'Rename', value: 'rename' },
      { label: 'Archive', value: 'archive', disabled: true },
      { label: 'Delete', value: 'delete', danger: true },
    ],
  },
};

export const LongText: Story = {
  args: {
    label: 'Long labels',
    items: [
      {
        label: 'This option has a long label and wraps onto another line',
        value: 'long',
        textWrap: 'wrap',
      },
      { label: 'Short option', value: 'short' },
    ],
  },
};

const DropdownWithState = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <Dropdown
        label='Select action'
        items={[
          { label: 'Edit', value: 'edit' },
          { label: 'Duplicate', value: 'duplicate' },
          { label: 'Delete', value: 'delete', danger: true },
        ]}
        onSelect={setValue}
      />

      <Text style={{ marginTop: 12 }}>Selected: {value ?? 'none'}</Text>
    </>
  );
};

export const Selection: Story = {
  render: () => <DropdownWithState />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled menu',
    items,
  },
};
