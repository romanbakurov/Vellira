import type { Preview } from '@storybook/react-native';
import { View } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
