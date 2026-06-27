import { colors } from '../../primitives/colors.js';

export const text = {
  primary: colors.gray[50],
  secondary: colors.gray[200],
  muted: colors.gray[400],
  disabled: colors.gray[500],

  inverse: colors.gray[0],

  brand: colors.primary[300],
} as const;
