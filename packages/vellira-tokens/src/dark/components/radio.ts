import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const radio = {
  default: {
    bg: surface.default,
    fg: text.primary,
    border: border.subtle,
  },

  hover: {
    bg: surface.hover,
    fg: text.brand,
    border: colors.primary[300],
  },

  checked: {
    default: {
      bg: colors.primary[600],
      fg: text.brand,
      border: colors.primary[600],
    },

    hover: {
      bg: colors.primary[700],
      fg: text.brand,
      border: colors.primary[700],
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
    border: border.default,
  },
} as const;
