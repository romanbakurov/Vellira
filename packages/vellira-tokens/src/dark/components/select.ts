import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const select = {
  trigger: {
    default: {
      bg: surface.default,
      fg: text.brand,
      border: border.subtle,
    },

    hover: {
      bg: surface.hover,
      fg: text.primary,
      border: colors.primary[300],
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

    placeholder: {
      fg: text.secondary,
    },

    error: {
      border: status.error.fg,
      ring: status.error.bg,
    },
  },

  dropdown: {
    bg: surface.elevated,
    fg: text.primary,
    border: border.default,
  },

  option: {
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

    selected: {
      bg: colors.primary[500],
      fg: text.inverse,
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
    },
  },
} as const;
