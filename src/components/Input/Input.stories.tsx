import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    label: 'Name',
    placeholder: 'Type name...',
    required: false,
    value: '',
    size: 'md',
  },

  render: (args, { updateArgs }) => {
    return <Input {...args} onChange={(value) => updateArgs({ value })} />;
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type email...',
    required: true,
    value: '',
    error: 'This field is required',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Phone',
    placeholder: '+33 ___-__-__-__',
    value: '123456',
    disabled: true,
    size: 'md',
  },
};

export const Sizes: Story = {
  args: {
    label: 'Name',
    value: '',
  },

  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Input {...args} size='sm' />
        <Input {...args} size='md' />
        <Input {...args} size='lg' />
      </div>
    );
  },
};
