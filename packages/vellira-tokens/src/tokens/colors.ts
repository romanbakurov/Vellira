export const colors = {
  primary: '#5B4BEA',
  'primary-accent': '#4936D9',
  'primary-soft': '#7C6CF2',
  'primary-bg': '#eef0ff',

  secondary: '#4C4F8F',
  'secondary-accent': '#42477C',
  'secondary-soft': '#8B8FD6',
  'secondary-bg': '#F0F1FF',

  tertiary: '#7c3aed',
  'tertiary-accent': '#6d28d9',
  'tertiary-soft': '#8b5cf6',
  'tertiary-bg': '#f5f3ff',

  info: '#0ea5e9',
  'info-accent': '#0284c7',
  'info-bg': '#f0f9ff',

  success: '#008f6a',
  'success-accent': '#00785a',
  'success-soft': '#00b956',
  'success-bg': '#ecfdf5',

  error: '#DC2626',
  'error-accent': '#B91C1C',
  'error-soft': '#F87171',
  'error-bg': '#FEF2F2',

  warning: '#c05621',
  'warning-accent': '#a74308',
  'warning-soft': '#ffa717',
  'warning-bg': '#fff7ed',

  gray: {
    950: '#030712',
    900: '#111827',
    800: '#1f2937',
    700: '#374151',
    600: '#4b5563',
    500: '#6b7280',
    400: '#9ca3af',
    300: '#d1d5db',
    200: '#e5e7eb',
    150: '#eceff3',
    100: '#f3f4f6',
    55: '#f8fafc',
    50: '#f9fafb',
    0: '#ffffff',
  },

  'gray-blue': {
    950: '#0b1120',
    900: '#111c2e',
    800: '#1e2a44',
    700: '#33435f',
    600: '#4b5f7a',
    500: '#6b7f99',
    400: '#98a8bd',
    300: '#c4d0dd',
    200: '#d8e4f2',
    100: '#edf5ff',
    50: '#f7fbff',
  },

  surface: {
    default: '#ffffff',
    muted: '#f8fafc',
    subtle: '#f3f4f6',
    elevated: '#ffffff',
    inverse: '#111827',
  },

  text: {
    primary: '#111827',
    secondary: '#4b5563',
    muted: '#6b7280',
    inverse: '#ffffff',
    disabled: '#9ca3af',
    brand: '#5B4BEA',
    danger: '#DC2626',
    success: '#008f6a',
    warning: '#c05621',
    info: '#0ea5e9',
  },

  border: {
    default: '#e5e7eb',
    muted: '#eceff3',
    strong: '#d1d5db',
    focus: '#5B4BEA',
    danger: '#DC2626',
    success: '#008f6a',
    warning: '#c05621',
    info: '#0ea5e9',
  },

  interactive: {
    primary: '#5B4BEA',
    primaryHover: '#4936D9',
    primaryPressed: '#3B2BBF',
    primaryMuted: '#eef0ff',
    primaryForeground: '#ffffff',

    secondary: '#4C4F8F',
    secondaryHover: '#42477C',
    secondaryPressed: '#373B68',
    secondaryMuted: '#F0F1FF',
    secondaryForeground: '#ffffff',

    neutral: '#f3f4f6',
    neutralHover: '#e5e7eb',
    neutralPressed: '#d1d5db',

    disabled: '#e5e7eb',
    disabledForeground: '#9ca3af',
  },

  action: {
    primaryBg: '#5B4BEA',
    primaryFg: '#ffffff',
    primaryHoverBg: '#4936D9',
    primaryHoverFg: '#ffffff',

    secondaryBg: '#4C4F8F',
    secondaryFg: '#ffffff',
    secondaryHoverBg: '#42477C',
    secondaryHoverFg: '#ffffff',

    dangerBg: '#DC2626',
    dangerFg: '#ffffff',
    dangerHoverBg: '#B91C1C',
    dangerHoverFg: '#ffffff',

    disabledBg: '#e5e7eb',
    disabledFg: '#6b7280',
    disabledBorder: '#d1d5db',
  },

  control: {
    bg: '#ffffff',
    fg: '#111827',
    border: '#e5e7eb',
    hoverBorder: '#5B4BEA',
    focusBorder: '#5B4BEA',
    selectedBg: '#5B4BEA',
    selectedFg: '#ffffff',
    hoverBg: '#eef0ff',
    hoverFg: '#4338ca',
    disabledBg: '#f3f4f6',
    disabledFg: '#6b7280',
    disabledBorder: '#e5e7eb',
  },

  menu: {
    itemFg: '#111827',
    itemHoverBg: '#e5e7eb',
    itemHoverFg: '#111827',
    itemActiveBg: '#e5e7eb',
    itemActiveFg: '#111827',
    itemFocusRing: 'transparent',

    itemDangerFg: '#DC2626',
    itemDangerHoverBg: '#FEF2F2',
    itemDangerHoverFg: '#DC2626',
    itemDangerActiveBg: '#FEF2F2',
    itemDangerActiveFg: '#DC2626',

    triggerFg: '#5B4BEA',
    triggerHoverBg: '#eef0ff',
    triggerHoverFg: '#4338ca',
    triggerHoverRing: 'transparent',

    itemDisabledFg: '#9ca3af',
    itemDisabledBg: '#f3f4f6',

    groupLabelFg: '#6B7280',
  },

  status: {
    success: '#008f6a',
    successHover: '#00785a',
    successMuted: '#ecfdf5',

    error: '#DC2626',
    errorHover: '#B91C1C',
    errorMuted: '#FEF2F2',
    errorForeground: '#ffffff',

    warning: '#c05621',
    warningHover: '#a74308',
    warningMuted: '#fff7ed',

    info: '#0ea5e9',
    infoHover: '#0284c7',
    infoMuted: '#f0f9ff',
  },

  focus: {
    ring: '#5B4BEA',
    ringOffset: '#ffffff',
  },

  overlay: {
    backdrop: 'rgba(17, 24, 39, 0.45)',
    inverseBackdrop: 'rgba(255, 255, 255, 0.72)',
  },

  divider: {
    default: '#e5e7eb',
    muted: '#eceff3',
  },

  skeleton: {
    base: '#e5e7eb',
    highlight: '#f3f4f6',
  },

  selection: {
    background: '#eef2ff',
    foreground: '#4338ca',
  },
} as const;
