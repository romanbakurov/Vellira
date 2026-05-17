import type { Meta, StoryObj } from '@storybook/react-vite';

import { InfoBlock } from './InfoBlock.tsx';

const meta = {
  /* Название компонента и путь, по которому его нужно отобразить на витрине */
  title: 'Components/InfoBlock',

  /* Передаём сам компонент */
  component: InfoBlock,

  /* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div style={{ maxWidth: '360px' }}>
        <Story />
      </div>
    ),
  ],

  /* satisfies помогает точнее определить тип */
} satisfies Meta<typeof InfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Hello',
    caption: 'I am — white InfoBlock',
    color: 'primary',
  },
};

export const Info: Story = {
  args: {
    title: 'Hello',
    caption: 'I am — green InfoBlock',
    color: 'info',
  },
};

export const Warning: Story = {
  args: {
    title: 'Hello',
    caption: 'I am — green InfoBlock',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Hello',
    caption: 'I am — green InfoBlock',
    color: 'error',
  },
};
