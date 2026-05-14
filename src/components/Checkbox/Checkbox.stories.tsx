import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox.tsx';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Interactive: Story = {
  args: {
    label: 'Accept the terms',
    checked: false,
    onChange: () => {},
  },

  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(value) => setChecked({ value })}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: true,
  },
};
