import { colors } from '../../primitives/colors.js';

export const border = {
  default: colors.gray[0],
  muted: colors.gray[300],
  strong: colors.gray[0],

  focus: colors.warning[300],
} as const;
