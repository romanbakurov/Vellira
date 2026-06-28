import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const button = {
  primary: {
    default: {
      bg: colors.primary[700],
      fg: text.inverse,
      border: colors.primary[700],
    },

    hover: {
      bg: colors.primary[800],
      fg: text.inverse,
      border: colors.primary[800],
    },

    pressed: {
      bg: colors.primary[950],
      fg: text.inverse,
      border: colors.primary[950],
    },
  },

  secondary: {
    default: {
      bg: colors.secondary[500],
      fg: text.inverse,
      border: colors.secondary[500],
    },

    hover: {
      bg: colors.secondary[900],
      fg: text.inverse,
      border: colors.secondary[900],
    },

    pressed: {
      bg: colors.secondary[950],
      fg: text.inverse,
      border: colors.secondary[950],
    },
  },

  danger: {
    default: {
      bg: colors.error[700],
      fg: text.inverse,
      border: colors.error[700],
    },

    hover: {
      bg: colors.error[800],
      fg: text.inverse,
      border: colors.error[800],
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
    border: border.muted,
  },
} as const;
