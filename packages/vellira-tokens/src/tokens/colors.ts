export const colors = {
  primary: '#4f46e5',
  'primary-accent': '#4338ca',
  'primary-soft': '#6366f1',
  'primary-bg': '#eef2ff',

  secondary: '#2563eb',
  'secondary-accent': '#1d4ed8',
  'secondary-soft': '#60a5fa',
  'secondary-bg': '#eff6ff',

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

  error: '#e11d48',
  'error-accent': '#be123c',
  'error-bg': '#fff1f2',

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
    brand: '#4f46e5',
    danger: '#e11d48',
    success: '#008f6a',
    warning: '#c05621',
    info: '#0ea5e9',
  },

  border: {
    default: '#e5e7eb',
    muted: '#eceff3',
    strong: '#d1d5db',
    focus: '#4f46e5',
    danger: '#e11d48',
    success: '#008f6a',
    warning: '#c05621',
    info: '#0ea5e9',
  },

  interactive: {
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    primaryPressed: '#3730a3',
    primaryMuted: '#eef2ff',

    secondary: '#2563eb',
    secondaryHover: '#1d4ed8',
    secondaryPressed: '#1e40af',
    secondaryMuted: '#eff6ff',

    neutral: '#f3f4f6',
    neutralHover: '#e5e7eb',
    neutralPressed: '#d1d5db',

    disabled: '#e5e7eb',
    disabledForeground: '#9ca3af',
  },

  status: {
    success: '#008f6a',
    successHover: '#00785a',
    successMuted: '#ecfdf5',

    error: '#e11d48',
    errorHover: '#be123c',
    errorMuted: '#fff1f2',

    warning: '#c05621',
    warningHover: '#a74308',
    warningMuted: '#fff7ed',

    info: '#0ea5e9',
    infoHover: '#0284c7',
    infoMuted: '#f0f9ff',
  },

  focus: {
    ring: '#4f46e5',
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
