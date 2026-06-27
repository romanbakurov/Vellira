import { colors } from '../../primitives/colors.js';

export const status = {
  success: {
    fg: colors.success[400],
    bg: colors.success[50],
    border: colors.success[300],
    strong: colors.success[600],
  },

  error: {
    fg: colors.error[400],
    bg: colors.error[50],
    border: colors.error[300],
    strong: colors.error[600],
  },

  warning: {
    fg: colors.warning[400],
    bg: colors.warning[50],
    border: colors.warning[300],
    strong: colors.warning[600],
  },

  info: {
    fg: colors.info[400],
    bg: colors.info[50],
    border: colors.info[300],
    strong: colors.info[600],
  },
} as const;
