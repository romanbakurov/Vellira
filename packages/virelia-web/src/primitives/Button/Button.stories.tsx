import {
  Delete,
  Download,
  Filter,
  Profile,
  Save,
  Search,
} from '@romanbakurov/virelia-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../Button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Button Component

Clickable action primitive for web interfaces.

**Features**
- Visual variants: primary, secondary, and danger
- Sizes: sm, md, and lg
- Disabled and full-width states
- Left and right icon support
- Icon-only actions with accessible labels

### Accessibility

Use a clear text label whenever possible. For icon-only buttons, provide an accessible label so screen readers can announce the action.

Correct usage:

\`\`\`tsx
<Button variant='primary' onClick={handleSave}>
  Save changes
</Button>

<Button ariaLabel='Search' leftIcon={<Search />} />
\`\`\`
`,
      },
    },
  },
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    leftIcon: {
      control: false,
      table: { disable: true },
    },
    rightIcon: {
      control: false,
      table: { disable: true },
    },
    iconPosition: {
      control: 'radio',
      options: ['none', 'left', 'right', 'both'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Download',
    variant: 'primary',
    size: 'md',
    disabled: false,
    iconPosition: 'left',
    ariaLabel: 'Download',
  },
  render: ({ iconPosition, ...args }) => {
    const icon = <Download />;

    return (
      <Button
        ariaLabel='Download'
        {...args}
        leftIcon={
          iconPosition === 'left' || iconPosition === 'both' ? icon : undefined
        }
        rightIcon={
          iconPosition === 'right' || iconPosition === 'both' ? icon : undefined
        }
      />
    );
  },
};

export const Variants: Story = {
  args: {
    size: 'md',
    disabled: false,
    iconPosition: 'left',
  },

  render: ({ iconPosition, ...args }) => {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          ariaLabel='Profile'
          {...args}
          variant='primary'
          leftIcon={
            iconPosition === 'left' || iconPosition === 'both' ? (
              <Profile />
            ) : undefined
          }
          rightIcon={
            iconPosition === 'right' || iconPosition === 'both' ? (
              <Profile />
            ) : undefined
          }
        >
          Primary
        </Button>
        <Button
          ariaLabel='Search'
          {...args}
          variant='secondary'
          leftIcon={
            iconPosition === 'left' || iconPosition === 'both' ? (
              <Search />
            ) : undefined
          }
          rightIcon={
            iconPosition === 'right' || iconPosition === 'both' ? (
              <Search />
            ) : undefined
          }
        >
          Secondary
        </Button>
        <Button
          ariaLabel='Delete'
          {...args}
          variant='danger'
          leftIcon={
            iconPosition === 'left' || iconPosition === 'both' ? (
              <Delete />
            ) : undefined
          }
          rightIcon={
            iconPosition === 'right' || iconPosition === 'both' ? (
              <Delete />
            ) : undefined
          }
        >
          Delete
        </Button>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'flex-start',
        }}
      >
        <Button {...args} ariaLabel={false} size='sm'>
          Small
        </Button>
        <Button {...args} ariaLabel={false} size='md'>
          Medium
        </Button>
        <Button {...args} ariaLabel={false} size='lg'>
          Large
        </Button>
      </div>
    );
  },
};

export const WidthComparison: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 400 }}
    >
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <p>Default (inline)</p>
        <Button {...args} ariaLabel={false}>
          Normal Width
        </Button>
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <p>Full Width</p>
        <Button {...args} ariaLabel={false} fullWidth>
          Full Width
        </Button>
      </div>
    </div>
  ),
};

export const WithoutIcons: Story = {
  args: {
    children: 'Save',
    variant: 'primary',
  },
  render: ({ iconPosition, ...args }) => {
    const icon = <Save />;

    return (
      <Button
        ariaLabel='Save'
        {...args}
        leftIcon={
          iconPosition === 'left' || iconPosition === 'both' ? icon : undefined
        }
        rightIcon={
          iconPosition === 'right' || iconPosition === 'both' ? icon : undefined
        }
      />
    );
  },
};

export const OnlyIcon: Story = {
  argTypes: {
    iconPosition: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    variant: 'primary',
    size: 'md',
    ariaLabel: 'Filter',
  },
  render: (args) => {
    return <Button {...args} ariaLabel='Filter' leftIcon={<Filter />} />;
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};
