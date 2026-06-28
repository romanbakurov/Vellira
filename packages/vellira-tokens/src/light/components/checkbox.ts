import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const checkbox = {
  default: {
    bg: surface.default,
    fg: text.primary,
    border: border.subtle,
  },

  hover: {
    bg: colors.primary[50],
    fg: colors.primary[900],
    border: colors.primary[700],
  },

  checked: {
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

  focus: {
    ring: focus.ring,
  },

  disabled: {
    bg: surface.subtle,
    fg: text.disabled,
    border: border.muted,
  },

  error: {
    border: status.error.fg,
    fg: status.error.fg,
  },
} as const;
