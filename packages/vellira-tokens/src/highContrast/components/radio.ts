import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const radio = {
  default: {
    bg: surface.default,
    fg: text.primary,
    border: border.default,
  },

  hover: {
    bg: colors.gray[900],
    fg: colors.primary[500],
    border: colors.primary[300],
  },

  checked: {
    default: {
      bg: colors.primary[400],
      fg: colors.primary[600],
      border: colors.primary[500],
    },

    hover: {
      bg: colors.info[500],
      fg: text.primary,
      border: colors.info[500],
    },

    pressed: {
      bg: colors.primary[800],
      fg: text.primary,
      border: colors.primary[800],
    },
  },

  focus: {
    ring: focus.ring,
  },

  disabled: {
    bg: surface.subtle,
    fg: text.disabled,
    border: border.default,
  },
} as const;
