import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
import { useState } from 'react';
import SearchIcon from '@/assets/icons/Search.svg?react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Tooltip Component

A fully accessible tooltip that appears on hover or focus.

**Features:**
- Multiple placements (top, bottom, left, right)
- Keyboard support (focus)
- Customizable delay
- Arrow pointer
- Smooth animations
- Support for rich content
        `,
      },
    },
  },
  args: {
    onOpenChange: fn(),
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to children',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable tooltip',
    },
    delay: {
      control: 'object',
      description: 'Delay in ms { open: number, close: number }',
    },
    maxWidth: {
      control: 'number',
      description: 'Maximum width of tooltip',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const InteractivePlacementDemo = () => {
  const [placement, setPlacement] = useState<
    'top' | 'bottom' | 'left' | 'right'
  >('top');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => setPlacement('top')}>Top</Button>
        <Button onClick={() => setPlacement('bottom')}>Bottom</Button>
        <Button onClick={() => setPlacement('left')}>Left</Button>
        <Button onClick={() => setPlacement('right')}>Right</Button>
      </div>

      <Tooltip content={`Tooltip on ${placement}`} placement={placement}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};

export const Basic: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
  },
  render: (args) => {
    return (
      <Tooltip {...args} placement='top'>
        <Button>Hover me</Button>
      </Tooltip>
    );
  },
};

export const Placement: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        paddingTop: '50px',
      }}
    >
      <Tooltip content='Top tooltip' placement='top'>
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content='Bottom tooltip' placement='bottom'>
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip content='Left tooltip' placement='left'>
        <Button>Left</Button>
      </Tooltip>

      <Tooltip content='Right tooltip' placement='right'>
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content:
      'This is a very very very long tooltip content that will wrap to multiple lines automatically',
    placement: 'top',
  },
  render: (args) => {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
      >
        <Tooltip {...args}>
          <Button>Hover for long text</Button>
        </Tooltip>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button disabled>Disabled Button</Button>
    </Tooltip>
  ),
};

export const CustomDelay: Story = {
  args: {
    content: 'Appears after 500ms',
    delay: { open: 500, close: 200 },
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Slow Tooltip</Button>
    </Tooltip>
  ),
};

export const NoDelay: Story = {
  args: {
    content: 'Appears instantly',
    delay: { open: 0, close: 0 },
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Instant Tooltip</Button>
    </Tooltip>
  ),
};

export const RichContent: Story = {
  args: {
    content: (
      <div>
        <strong>Rich content</strong>
        <p style={{ margin: 0 }}>Can contain any React node</p>
        <code>Even code blocks</code>
      </div>
    ),
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Rich Tooltip</Button>
    </Tooltip>
  ),
};

export const AllTogether: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3>Tooltip Examples</h3>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Tooltip content='Basic tooltip' placement='top'>
          <Button>Basic</Button>
        </Tooltip>

        <Tooltip content='With long text that wraps nicely' placement='top'>
          <Button>Long</Button>
        </Tooltip>

        <Tooltip content='Disabled tooltip' disabled={true}>
          <Button>Disabled</Button>
        </Tooltip>

        <Tooltip content='Fast tooltip' delay={{ open: 0, close: 0 }}>
          <Button>Instant</Button>
        </Tooltip>

        <Tooltip
          content={
            <div style={{ textAlign: 'left' }}>
              <strong>Rich content</strong>
              <br />
              With <em>formatting</em>
            </div>
          }
        >
          <Button>Rich</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const DifferentTriggers: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Tooltip content='Small button'>
        <Button size='small'>Small</Button>
      </Tooltip>

      <Tooltip content='Medium button'>
        <Button size='medium'>Medium</Button>
      </Tooltip>

      <Tooltip content='Large button'>
        <Button size='large'>Large</Button>
      </Tooltip>

      <Tooltip content='Icon only'>
        <Button leftIcon={<SearchIcon />} />
      </Tooltip>
    </div>
  ),
};

export const InteractivePlacement: Story = {
  render: () => <InteractivePlacementDemo />,
};
