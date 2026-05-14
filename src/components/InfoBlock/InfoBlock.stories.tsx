// src/InfoBlock/InfoBlock.stories.tsx

/* Импорт из @storybook/react, потому что пишем на React */
import type { Meta, StoryObj } from '@storybook/react-vite';

import { InfoBlock } from './InfoBlock.tsx';

const meta = {
  /* Название компонента и путь, по которому его нужно отобразить на витрине */
  title: 'components/InfoBlock',

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

/* История с компонентом белого цвета */
export const White: Story = {
  /* Для React-компонентов args === props */
  args: {
    title: 'Hello',
    caption: 'I am — white InfoBlock',
    color: 'white',
  },
};

/* История с компонентом красного цвета */
export const Green: Story = {
  args: {
    title: 'Hello',
    caption: 'I am — green InfoBlock',
    color: 'green',
  },
};
