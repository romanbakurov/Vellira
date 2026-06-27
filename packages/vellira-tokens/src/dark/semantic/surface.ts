import { colors } from '../../primitives/colors.js';

export const surface = {
  default: colors.vellira[950],
  muted: colors.vellira[900],
  subtle: colors.vellira[800],
  elevated: colors.vellira[900],

  hover: colors.vellira[700],
  active: colors.vellira[600],

  inverse: colors.gray[50],
} as const;
