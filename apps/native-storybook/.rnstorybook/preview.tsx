import type { Preview } from '@storybook/react-native';
import { View } from 'react-native';
import { useState } from 'react';

import {
  ThemeProvider,
  nativeThemes,
  type NativeThemeName,
} from '@romanbakurov/vellira-native';

import { DeveloperPanel } from './DeveloperPanel';

const themes: NativeThemeName[] = ['light', 'dark', 'highContrast'];

const preview: Preview = {
  decorators: [
    (Story) => {
      const [themeName, setThemeName] = useState<NativeThemeName>('light');
      const theme = nativeThemes[themeName];

      const nextTheme = () => {
        const currentIndex = themes.indexOf(themeName);
        const nextIndex = (currentIndex + 1) % themes.length;

        setThemeName(themes[nextIndex]);
      };

      return (
        <ThemeProvider theme={themeName}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: theme.semantic.surface.default,
            }}
          >
            <DeveloperPanel themeName={themeName} onChangeTheme={nextTheme} />
            <View
              style={{
                flex: 1,
                width: '100%',
                padding: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Story />
            </View>
          </View>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
