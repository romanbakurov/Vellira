import { lightTheme } from './light.js';

export const highContrastTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    surface: {
      default: '#000000',
      muted: '#0A0A0A',
      subtle: '#121212',
      elevated: '#1A1A1A',
      inverse: '#FFFFFF',
    },

    text: {
      ...lightTheme.colors.text,
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      muted: '#E5E5E5',
      inverse: '#000000',
      disabled: '#A3A3A3',
      brand: '#4DA3FF',
      danger: '#FF8A8A',
      success: '#9AFFB8',
      warning: '#FFFF00',
      info: '#4DA3FF',
    },

    border: {
      ...lightTheme.colors.border,
      default: '#FFFFFF',
      muted: '#D4D4D4',
      strong: '#FFFFFF',
      focus: '#FFFF00',
      danger: '#FF8A8A',
      success: '#9AFFB8',
      warning: '#FFFF00',
      info: '#4DA3FF',
    },

    interactive: {
      primary: '#66B3FF',
      primaryHover: '#99CCFF',
      primaryPressed: '#3399FF',
      primaryMuted: '#002B55',

      secondary: '#FFFFFF',
      secondaryHover: '#E5E5E5',
      secondaryPressed: '#CCCCCC',
      secondaryMuted: '#0F0F0F',

      neutral: '#0F0F0F',
      neutralHover: '#1A1A1A',
      neutralPressed: '#333333',

      disabled: '#0F0F0F',
      disabledForeground: '#737373',
    },

    action: {
      primaryBg: '#4DA3FF',
      primaryFg: '#000000',
      primaryHoverBg: '#7BBCFF',
      primaryHoverFg: '#000000',

      secondaryBg: '#FFFFFF',
      secondaryFg: '#000000',
      secondaryHoverBg: '#E5E5E5',
      secondaryHoverFg: '#000000',

      dangerBg: '#FF8A8A',
      dangerFg: '#000000',
      dangerHoverBg: '#FFC1C1',
      dangerHoverFg: '#000000',

      disabledBg: '#0F0F0F',
      disabledFg: '#E5E5E5',
      disabledBorder: '#A3A3A3',
    },

    control: {
      bg: '#000000',
      fg: '#FFFFFF',
      border: '#FFFFFF',
      hoverBorder: '#4DA3FF',
      focusBorder: '#FFFF00',
      selectedBg: '#4DA3FF',
      selectedFg: '#000000',
      hoverBg: '#0F0F0F',
      hoverFg: '#FFFFFF',
      disabledBg: '#111111',
      disabledFg: '#808080',
      disabledBorder: '#5A5A5A',
    },

    menu: {
      itemFg: '#FFFFFF',
      itemHoverBg: '#1A1A1A',
      itemHoverFg: '#FFFFFF',
      itemActiveBg: '#1A1A1A',
      itemActiveFg: '#FFFFFF',
      itemFocusRing: '#FFFF00',

      itemDangerFg: '#FF8A8A',
      itemDangerHoverBg: '#FF8A8A',
      itemDangerHoverFg: '#000000',
      itemDangerActiveBg: '#FF8A8A',
      itemDangerActiveFg: '#000000',

      triggerFg: '#FFFFFF',
      triggerHoverBg: '#0F0F0F',
      triggerHoverFg: '#FFFFFF',
      triggerHoverRing: '#FFFF00',

      itemDisabledFg: '#737373',
      itemDisabledBg: '#0F0F0F',

      groupLabelFg: '#CFCFCF',
    },

    status: {
      success: '#9AFFB8',
      successHover: '#C7FFD7',
      successMuted: '#0F0F0F',

      error: '#FF8A8A',
      errorHover: '#FFC1C1',
      errorMuted: '#0F0F0F',
      errorForeground: '#000000',

      warning: '#FFFF00',
      warningHover: '#FFFF99',
      warningMuted: '#0F0F0F',

      info: '#4DA3FF',
      infoHover: '#7BBCFF',
      infoMuted: '#0F0F0F',
    },

    focus: {
      ring: '#FFEA00',
      ringOffset: '#000000',
    },

    overlay: {
      backdrop: 'rgba(0, 0, 0, 0.85)',
      inverseBackdrop: 'rgba(255, 255, 255, 0.9)',
    },

    divider: {
      default: '#FFFFFF',
      muted: '#737373',
    },

    skeleton: {
      base: '#0F0F0F',
      highlight: '#4DA3FF',
    },

    selection: {
      background: '#4DA3FF',
      foreground: '#000000',
    },
  },
} as const;
