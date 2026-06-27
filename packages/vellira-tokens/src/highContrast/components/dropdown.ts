import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const dropdown = {
  trigger: {
    fg: text.primary,
  },

  content: {
    bg: surface.elevated,
    fg: text.primary,
    border: border.default,
  },

  item: {
    default: {
      bg: 'transparent',
      fg: text.primary,
    },

    hover: {
      bg: colors.gray[100],
      fg: text.primary,
    },

    active: {
      bg: colors.gray[200],
      fg: text.primary,
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
    },
  },

  separator: {
    bg: border.muted,
  },
} as const;
