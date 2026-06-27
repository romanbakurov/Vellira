import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const button = {
  primary: {
    default: {
      bg: colors.primary[600],
      fg: text.inverse,
      border: colors.primary[600],
    },

    hover: {
      bg: colors.primary[700],
      fg: text.inverse,
      border: colors.primary[700],
    },

    pressed: {
      bg: colors.primary[800],
      fg: text.inverse,
      border: colors.primary[800],
    },
  },

  secondary: {
    default: {
      bg: colors.secondary[600],
      fg: text.inverse,
      border: colors.secondary[600],
    },

    hover: {
      bg: colors.secondary[700],
      fg: text.inverse,
      border: colors.secondary[700],
    },

    pressed: {
      bg: colors.secondary[800],
      fg: text.inverse,
      border: colors.secondary[800],
    },
  },

  danger: {
    default: {
      bg: colors.error[600],
      fg: text.inverse,
      border: colors.error[600],
    },

    hover: {
      bg: colors.error[700],
      fg: text.inverse,
      border: colors.error[700],
    },

    pressed: {
      bg: colors.error[800],
      fg: text.inverse,
      border: colors.error[800],
    },
  },

  disabled: {
    bg: surface.subtle,
    fg: text.disabled,
    border: border.default,
  },
} as const;
