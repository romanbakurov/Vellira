import { colors } from '../../primitives/colors.js';

export const text = {
  primary: colors.vellira[100],
  secondary: colors.vellira[300],
  muted: colors.vellira[500],
  disabled: colors.vellira[400],

  inverse: colors.mono[50],

  brand: colors.primary[200],
} as const;
