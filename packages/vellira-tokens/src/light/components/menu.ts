import { colors } from '../../primitives/colors.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const menu = {
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

    focus: {
      ring: 'transparent',
    },

    disabled: {
      bg: surface.subtle,
      fg: text.disabled,
    },

    danger: {
      default: {
        fg: status.error.fg,
      },

      hover: {
        bg: status.error.bg,
        fg: status.error.fg,
      },

      active: {
        bg: status.error.border,
        fg: status.error.fg,
      },
    },
  },

  trigger: {
    default: {
      fg: text.brand,
    },

    hover: {
      bg: colors.primary[50],
      fg: colors.primary[700],
      ring: 'transparent',
    },
  },

  groupLabel: {
    fg: text.muted,
  },
} as const;
