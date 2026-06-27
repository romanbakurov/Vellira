import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const select = {
  trigger: {
    default: {
      bg: surface.default,
      fg: text.primary,
      border: border.default,
    },

    hover: {
      bg: colors.gray[100],
      fg: text.primary,
      border: colors.primary[700],
    },

    focus: {
      bg: surface.default,
      fg: text.primary,
      border: border.focus,
      ring: focus.ring,
    },

    disabled: {
      bg: surface.subtle,
      fg: text.disabled,
      border: border.default,
    },
  },
} as const;
