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
    border: border.muted,
  },

  hover: {
    bg: colors.gray[900],
    fg: text.inverse,
    border: colors.primary[500],
  },

  checked: {
    default: {
      bg: colors.primary[500],
      fg: text.primary,
      border: colors.primary[500],
    },

    hover: {
      bg: colors.info[500],
      fg: text.inverse,
      border: colors.info[500],
    },

    pressed: {
      bg: colors.primary[800],
      fg: text.inverse,
      border: colors.primary[800],
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
