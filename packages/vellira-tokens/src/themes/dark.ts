import { lightTheme } from './light.js';

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    primary: '#6D5BD0',
    'primary-accent': '#5B4BEA',
    'primary-soft': '#A78BFA',
    'primary-bg': '#2E234A',

    secondary: '#5F64B8',
    'secondary-accent': '#555AA8',
    'secondary-soft': '#8B8FD6',
    'secondary-bg': '#20234A',

    error: '#fb7185',
    'error-accent': '#e11d48',
    'error-soft': '#fda4af',
    'error-bg': '#4c0519',

    surface: {
      default: '#17151F',
      muted: '#1D1A29',
      subtle: '#252134',
      elevated: '#312C44',
      inverse: '#FAFAFC',
    },

    text: {
      ...lightTheme.colors.text,
      primary: '#F7F4FF',
      secondary: '#D8D3E8',
      muted: '#A8A1BA',
      inverse: '#17151F',
      disabled: '#746F86',
      brand: '#C4B5FD',
      danger: '#FB7185',
      success: '#4ADE80',
      warning: '#FBBF24',
      info: '#60A5FA',
    },

    border: {
      ...lightTheme.colors.border,
      default: '#3A334D',
      muted: '#2B263A',
      strong: '#514766',
      focus: '#A78BFA',
    },

    interactive: {
      primary: '#6D5BD0',
      primaryHover: '#5B4BEA',
      primaryPressed: '#4936D9',
      primaryMuted: '#2D2145',
      primaryForeground: '#ffffff',

      secondary: '#5F64B8',
      secondaryHover: '#555AA8',
      secondaryPressed: '#494F95',
      secondaryMuted: '#20234A',
      secondaryForeground: '#ffffff',

      neutral: '#2B263A',
      neutralHover: '#413957',
      neutralPressed: '#554A70',

      disabled: '#252334',
      disabledForeground: '#746F86',
    },

    action: {
      primaryBg: '#6D5BD0',
      primaryFg: '#ffffff',
      primaryHoverBg: '#5B4BEA',
      primaryHoverFg: '#ffffff',

      secondaryBg: '#5F64B8',
      secondaryFg: '#ffffff',
      secondaryHoverBg: '#555AA8',
      secondaryHoverFg: '#ffffff',

      dangerBg: '#DC2626',
      dangerFg: '#ffffff',
      dangerHoverBg: '#B91C1C',
      dangerHoverFg: '#ffffff',

      disabledBg: '#252334',
      disabledFg: '#A8A1BA',
      disabledBorder: '#3A334D',
    },

    control: {
      bg: '#17151F',
      fg: '#F7F4FF',
      border: '#3A334D',
      hoverBorder: '#A78BFA',
      focusBorder: '#A78BFA',
      selectedBg: '#6D5BD0',
      selectedFg: '#ffffff',
      hoverBg: '#2D2145',
      hoverFg: '#F7F4FF',
      disabledBg: '#252334',
      disabledFg: '#A8A1BA',
      disabledBorder: '#3A334D',
    },

    menu: {
      itemFg: '#F7F4FF',
      itemHoverBg: '#413957',
      itemHoverFg: '#F7F4FF',
      itemActiveBg: '#413957',
      itemActiveFg: '#F7F4FF',
      itemFocusRing: 'transparent',

      itemDangerFg: '#FB7185',
      itemDangerHoverBg: 'rgba(251, 113, 133, 0.16)',
      itemDangerHoverFg: '#FB7185',
      itemDangerActiveBg: 'rgba(251, 113, 133, 0.16)',
      itemDangerActiveFg: '#FB7185',

      triggerFg: '#C4B5FD',
      triggerHoverBg: '#2D2145',
      triggerHoverFg: '#F7F4FF',
      triggerHoverRing: 'transparent',

      itemDisabledFg: '#746F86',
      itemDisabledBg: '#211D2D',

      groupLabelFg: '#A8A1BA',
    },

    status: {
      success: '#4ADE80',
      successHover: '#22C55E',
      successMuted: 'rgba(74, 222, 128, 0.14)',

      error: '#DC2626',
      errorHover: '#B91C1C',
      errorMuted: 'rgba(251, 113, 133, 0.16)',
      errorForeground: '#ffffff',

      warning: '#FBBF24',
      warningHover: '#F59E0B',
      warningMuted: 'rgba(251, 191, 36, 0.14)',

      info: '#60A5FA',
      infoHover: '#3B82F6',
      infoMuted: 'rgba(96, 165, 250, 0.14)',
    },

    focus: {
      ring: '#C4B5FD',
      ringOffset: '#17151F',
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
      background: '#3B2A63',
      foreground: '#F1EAFE',
    },
  },
} as const;
