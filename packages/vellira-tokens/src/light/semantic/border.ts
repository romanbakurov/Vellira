import { colors } from '../../primitives/colors.js';

export const border = {
  default: colors.gray[200],
  muted: colors.gray[150],
  strong: colors.gray[300],

  focus: colors.primary[700],
} as const;
