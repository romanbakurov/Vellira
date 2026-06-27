import { colors } from '../../primitives/colors.js';

export const text = {
  primary: colors.gray[900],
  secondary: colors.gray[600],
  muted: colors.gray[500],
  disabled: colors.gray[400],

  inverse: colors.gray[0],

  brand: colors.primary[700],
} as const;
