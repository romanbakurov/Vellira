import { colors } from '../../primitives/colors.js';

export const text = {
  primary: colors.mono[50],
  secondary: colors.vellira[150],
  muted: colors.gray[200],
  disabled: colors.gray[500],

  inverse: colors.mono[950],
  onInverse: colors.mono[950],

  brand: colors.primary[300],
} as const;
