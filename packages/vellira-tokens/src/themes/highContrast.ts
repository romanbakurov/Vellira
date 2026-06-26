import { lightTheme } from './light.js';

export const highContrastTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    surface: {
      default: '#ffffff',
      muted: '#ffffff',
      subtle: '#ffffff',
      elevated: '#ffffff',
      inverse: '#000000',
    },

    text: {
      ...lightTheme.colors.text,
      primary: '#000000',
      secondary: '#000000',
      muted: '#1f2937',
      inverse: '#ffffff',
      disabled: '#4b5563',
    },

    border: {
      ...lightTheme.colors.border,
      default: '#000000',
      muted: '#000000',
      strong: '#000000',
      focus: '#000000',
    },

    focus: {
      ring: '#000000',
      ringOffset: '#ffffff',
    },

    overlay: {
      backdrop: 'rgba(0, 0, 0, 0.85)',
      inverseBackdrop: 'rgba(255, 255, 255, 0.9)',
    },

    divider: {
      default: '#000000',
      muted: '#000000',
    },

    selection: {
      background: '#000000',
      foreground: '#ffffff',
    },
  },
} as const;
