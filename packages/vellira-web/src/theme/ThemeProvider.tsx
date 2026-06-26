import { useMemo } from 'react';

import { useControllableState } from '@romanbakurov/vellira-core';

import { ThemeContext } from './ThemeContext';
import type { ThemeProviderProps } from './types';

export const ThemeProvider = ({
  theme,
  defaultTheme = 'light',
  onThemeChange,
  children,
}: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useControllableState({
    value: theme,
    defaultValue: defaultTheme,
    onChange: onThemeChange,
  });

  const value = useMemo(
    () => ({
      theme: currentTheme,
      setTheme: setCurrentTheme,
    }),
    [currentTheme, setCurrentTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div data-vellira-theme={currentTheme}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
