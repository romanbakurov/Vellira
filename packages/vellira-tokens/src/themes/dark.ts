import { lightTheme } from './light.js';

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    surface: {
      default: '#030712',
      muted: '#0b1120',
      subtle: '#111827',
      elevated: '#111827',
      inverse: '#ffffff',
    },

    text: {
      ...lightTheme.colors.text,
      primary: '#f9fafb',
      secondary: '#d1d5db',
      muted: '#9ca3af',
      inverse: '#111827',
      disabled: '#6b7280',
    },

    border: {
      ...lightTheme.colors.border,
      default: '#1f2937',
      muted: '#111827',
      strong: '#374151',
    },

    focus: {
      ring: '#818cf8',
      ringOffset: '#030712',
    },

    overlay: {
      backdrop: 'rgba(0, 0, 0, 0.72)',
      inverseBackdrop: 'rgba(255, 255, 255, 0.12)',
    },

    divider: {
      default: '#1f2937',
      muted: '#111827',
    },

    skeleton: {
      base: '#1f2937',
      highlight: '#374151',
    },

    selection: {
      background: '#312e81',
      foreground: '#e0e7ff',
    },
  },
} as const;
