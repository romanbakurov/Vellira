import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';
import Restart from '@/assets/icons/Restart.svg?react';
import Edit from '@/assets/icons/Edit.svg?react';
import Delete from '@/assets/icons/Delete.svg?react';
import DropdownMenuIcon from '@/assets/icons/DropdownMenu.svg?react';
import DefaultArrowIcon from '@/assets/icons/ChevronDown.svg?react';
import DefaultFilterIcon from '@/assets/icons/Filter.svg?react';
import SettingsIcon from '@/assets/icons/Settings.svg?react';
import UserIcon from '@/assets/icons/Profile.svg?react';
import PlusIcon from '@/assets/icons/Plus.svg?react';
import CopyIcon from '@/assets/icons/Copy.svg?react';
import LogOutIcon from '@/assets/icons/Exit.svg?react';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Dropdown Component

Fully accessible dropdown menu with comprehensive keyboard support.

**Keyboard Navigation:**
- \`Enter/Space\` - open/close menu
- \`ArrowUp/ArrowDown\` - navigate through items
- \`Escape\` - close menu
- \`Home/End\` - go to first/last item
        `,
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  {
    label: 'Edit',
    value: 'edit',
    icon: <Edit />,
  },
  { label: 'Refresh', value: 'refresh', icon: <Restart /> },
  {
    label: 'Delete',
    value: 'delete',
    icon: <Delete />,
    danger: true,
  },
];

export const Basic: Story = {
  args: {
    label: 'Active menu',
    icon: <DropdownMenuIcon style={{ width: 20, height: 20 }} />,
    items: defaultOptions,
  },
};

export const TextOnly: Story = {
  args: {
    label: 'Text menu',
    trigger: 'Actions',
    arrowIcon: <DefaultArrowIcon />,
    items: [
      { label: 'Edit', value: 'edit' },
      { label: 'Copy', value: 'copy' },
      { label: 'Delete', value: 'delete', danger: true },
    ],
  },
};

export const IconAndText: Story = {
  args: {
    label: 'Actions',
    icon: <DefaultFilterIcon style={{ width: 16, height: 16 }} />,
    trigger: 'Menu',
    items: defaultOptions,
  },
};

export const IconSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Dropdown
        label='Small'
        icon={<SettingsIcon style={{ width: 16, height: 16 }} />}
        items={defaultOptions}
      />
      <Dropdown
        label='Medium'
        icon={<SettingsIcon style={{ width: 20, height: 20 }} />}
        items={defaultOptions}
      />
      <Dropdown
        label='Large'
        icon={<SettingsIcon style={{ width: 24, height: 24 }} />}
        items={defaultOptions}
      />
    </div>
  ),
};

export const WithDisabledItems: Story = {
  args: {
    label: 'Menu with disabled',
    trigger: 'Available actions',
    items: [
      { label: 'Edit', value: 'edit', icon: <Edit /> },
      { label: 'Refresh', value: 'refresh', icon: <Restart />, disabled: true },
      {
        label: 'Delete',
        value: 'delete',
        icon: <Delete />,
        danger: true,
        disabled: true,
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled menu',
    trigger: 'Not available',
    disabled: true,
    items: defaultOptions,
  },
};

export const AllItemsDisabled: Story = {
  args: {
    trigger: 'Disabled items',
    items: [
      { label: 'Option 1', value: 'option 1', disabled: true },
      { label: 'Option 2', value: 'option 2', disabled: true },
      { label: 'Option 3', value: 'option 3', disabled: true },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    trigger: 'Single',
    items: [{ label: 'Open', value: 'open' }],
  },
};

export const ManyItems: Story = {
  args: {
    label: 'Long menu',
    trigger: 'Select option',
    items: Array.from({ length: 20 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option${i + 1}`,
      ...(i === 5 && { icon: <Edit /> }),
      ...(i === 10 && { disabled: true }),
      ...(i === 15 && { danger: true }),
    })),
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DangerZone: Story = {
  args: {
    label: 'Danger zone',
    trigger: 'Delete actions',
    items: [
      { label: 'Delete draft', value: 'draft', danger: true },
      { label: 'Delete published', value: 'published', danger: true },
      { label: 'Delete all', value: 'all', danger: true },
      { label: 'Cancel', value: 'cancel' },
    ],
  },
};

export const DifferentTriggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Dropdown
        label='Menu'
        icon={<DropdownMenuIcon style={{ width: 20, height: 20 }} />}
        items={defaultOptions}
      />
      <Dropdown
        label='Settings'
        icon={<SettingsIcon style={{ width: 20, height: 20 }} />}
        items={defaultOptions}
        rotateAngle={360}
      />
      <Dropdown
        label='User'
        icon={<UserIcon style={{ width: 20, height: 20 }} />}
        rotateAngle={0}
        items={[
          { label: 'Profile', value: 'profile' },
          { label: 'Settings', value: 'settings' },
          { label: 'Logout', value: 'logout', danger: true },
        ]}
      />
      <Dropdown
        label='Add'
        icon={<PlusIcon style={{ width: 20, height: 20 }} />}
        items={[
          { label: 'Add file', value: 'file' },
          { label: 'Add folder', value: 'folder' },
          { label: 'Add user', value: 'user' },
        ]}
      />
    </div>
  ),
};

export const TableActions: Story = {
  render: () => {
    const rows = [
      { id: 1, name: 'Document.pdf', status: 'Active' },
      { id: 2, name: 'Image.png', status: 'Processing' },
      { id: 3, name: 'Archive.zip', status: 'Archived' },
    ];

    return (
      <table
        style={{ borderCollapse: 'collapse', width: '100%', minWidth: '300px' }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Status</th>
            <th style={{ width: '50px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} style={{ borderTop: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>{row.name}</td>
              <td style={{ padding: '8px' }}>{row.status}</td>
              <td style={{ padding: '8px' }}>
                <Dropdown
                  placement='left-start'
                  label='Row actions'
                  icon={<DropdownMenuIcon style={{ width: 20, height: 20 }} />}
                  items={[
                    { label: 'Edit', value: 'edit', icon: <Edit /> },
                    { label: 'Copy', value: 'copy', icon: <CopyIcon /> },
                    {
                      label: 'Delete',
                      value: 'delete',
                      icon: <Delete />,
                      danger: true,
                    },
                  ]}
                  onSelect={(value) => console.log(`Row ${row.id}: ${value}`)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export const CustomTrigger: Story = {
  args: {
    label: 'Custom trigger',
    trigger: (
      <div
        style={{
          padding: '8px 16px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
        }}
      >
        <SettingsIcon style={{ width: 16, height: 16 }} />
        Custom Button
      </div>
    ),
    items: defaultOptions,
  },
};

export const NoIconsInItems: Story = {
  args: {
    label: 'Simple menu',
    trigger: 'Options',
    items: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    label: 'Menu with groups',
    trigger: 'Select',
    items: [
      { label: 'Recent', type: 'group' },
      { label: 'Document 1', value: 'doc1' },
      { label: 'Document 2', value: 'doc2' },
      { type: 'separator' },
      { label: 'Actions', type: 'group' },
      { label: 'New document', value: 'new', icon: <PlusIcon /> },
      {
        label: 'Settings',
        value: 'settings',
        icon: <SettingsIcon />,
        danger: true,
      },
    ],
  },
};

export const DifferentPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Dropdown label='Left' trigger='Left aligned' items={defaultOptions} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dropdown
          placement='bottom-start'
          label='Center'
          trigger='Center aligned'
          items={defaultOptions}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Dropdown
          placement='bottom-end'
          label='Right'
          trigger='Right aligned'
          items={defaultOptions}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Dropdown
          placement='left-start'
          label='Top'
          trigger='Top'
          items={defaultOptions}
        />
        <Dropdown
          placement='right-start'
          label='Bottom'
          trigger='Bottom'
          items={defaultOptions}
        />
      </div>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  args: {
    label: 'Screen reader menu',
    trigger: 'Accessible menu',
    items: [
      {
        label: 'First item with long description',
        value: '1',
        id: 'aria-required-children',
        enabled: true,
      },
      {
        label: 'Second item',
        value: '2',
        id: 'aria-required-parent',
        enabled: true,
      },
      {
        label: 'Dangerous action',
        value: 'danger',
        danger: true,
        id: 'aria-allowed-role',
        enabled: true,
      },
    ],
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'button-name', enabled: true },
          { id: 'aria-valid-attr-value', enabled: true },
        ],
      },
    },
  },
};

export const LongLabelsTruncate: Story = {
  args: {
    trigger: 'Long labels (truncate)',
    textWrap: 'truncate',
    items: [
      {
        label:
          'Very very very very very very very long menu item label that will be truncated with ellipsis',
        value: '1',
      },
      {
        label: 'Another long label that also gets truncated',
        value: '2',
      },
      {
        label: 'Short label',
        value: '3',
      },
    ],
  },
};

export const LongLabelsWrap: Story = {
  args: {
    trigger: 'Long labels (wrap)',
    textWrap: 'wrap',
    items: [
      {
        label:
          'Very very very very very very very long menu item label that will wrap to multiple lines for better readability',
        value: '1',
      },
      {
        label: 'Another long label that also wraps to show full content',
        value: '2',
      },
    ],
  },
};

export const MixedTextWrap: Story = {
  args: {
    trigger: 'Mixed text wrap modes',
    items: [
      {
        label: 'This item will truncate very long text with ellipsis...',
        value: '1',
        textWrap: 'truncate',
      },
      {
        label:
          'This item will wrap long text onto multiple lines for better readability when content needs to be fully visible',
        value: '2',
        textWrap: 'wrap',
      },
      {
        label: 'Normal item without special wrapping',
        value: '3',
      },
    ],
  },
};

export const WithIconsAndLongText: Story = {
  args: {
    trigger: 'With icons',
    textWrap: 'truncate',
    items: [
      {
        label: 'Very long user profile name that needs truncation',
        value: 'profile',
        icon: <UserIcon size={16} />,
      },
      {
        label: 'Very long settings menu option with description',
        value: 'settings',
        icon: <SettingsIcon size={16} />,
      },
      {
        label: 'Log out from the system',
        value: 'logout',
        icon: <LogOutIcon size={16} />,
        danger: true,
      },
    ],
  },
};
