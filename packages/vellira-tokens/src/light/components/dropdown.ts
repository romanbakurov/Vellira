import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const dropdown = {
  trigger: {
    default: {
      bg: 'transparent',
      fg: text.brand,
      border: 'transparent',
    },

    hover: {
      bg: colors.vellira[100],
      fg: colors.primary[900],
      ring: 'transparent',
    },

    focus: {
      bg: 'transparent',
      fg: text.brand,
      border: border.focus,
      ring: focus.ring,
    },

    disabled: {
      bg: surface.subtle,
      fg: text.disabled,
      border: border.muted,
    },
  },

  content: {
    bg: surface.elevated,
    fg: text.primary,
    border: colors.vellira[200],
  },

  item: {
    default: {
      bg: 'transparent',
      fg: text.primary,
    },

    hover: {
      bg: colors.vellira[100],
      fg: text.primary,
    },

    active: {
      bg: colors.vellira[100],
      fg: text.primary,
      ring: 'transparent',
    },

    focus: {
      ring: focus.ring,
    },

    disabled: {
      bg: 'transparent',
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
        bg: status.error.bg,
        fg: status.error.fg,
        ring: 'transparent',
      },
    },
  },

  groupLabel: {
    fg: text.muted,
  },

  separator: {
    bg: border.muted,
    fg: text.muted,
  },
} as const;
