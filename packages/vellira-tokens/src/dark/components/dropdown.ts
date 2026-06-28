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
      bg: surface.hover,
      fg: colors.primary[200],
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
      border: border.default,
    },
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
      bg: surface.active,
      fg: text.primary,
    },

    active: {
      bg: surface.active,
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
        bg: status.error.border,
        fg: status.error.fg,
        ring: 'transparent',
      },
    },
  },

  groupLabel: {
    fg: text.secondary,
  },

  separator: {
    bg: border.muted,
    fg: text.muted,
  },
} as const;
