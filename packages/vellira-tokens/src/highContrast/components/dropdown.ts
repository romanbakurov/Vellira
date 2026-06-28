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
      fg: colors.mono[50],
      border: 'transparent',
    },

    hover: {
      bg: 'transparent',
      fg: colors.mono[50],
      border: colors.warning[500],
      ring: focus.ring,
    },

    focus: {
      bg: 'transparent',
      fg: colors.mono[50],
      border: colors.warning[500],
      ring: focus.ring,
    },

    disabled: {
      bg: surface.muted,
      fg: text.disabled,
      border: border.muted,
    },
  },

  content: {
    bg: surface.elevated,
    fg: text.primary,
    border: colors.gray[200],
  },

  item: {
    default: {
      bg: 'transparent',
      fg: text.primary,
    },

    hover: {
      bg: surface.hover,
      fg: text.primary,
    },

    active: {
      bg: surface.hover,
      fg: text.primary,
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
        bg: surface.hover,
        fg: status.error.fg,
      },

      active: {
        bg: surface.hover,
        fg: status.error.fg,
        ring: focus.ring,
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
