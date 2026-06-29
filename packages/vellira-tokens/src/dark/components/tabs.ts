import { border } from '../semantic/border.js';
import { control } from '../semantic/control.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const tabs = {
  list: {
    border: border.default,
  },

  trigger: {
    default: {
      bg: 'transparent',
      fg: text.secondary,
      border: 'transparent',
    },

    hover: {
      bg: surface.hover,
      fg: text.hover,
      border: 'transparent',
    },

    active: {
      bg: control.selected.default.bg,
      fg: text.brand,
      border: control.selected.default.border,
    },

    focus: {
      ring: text.brand,
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  pills: {
    default: {
      bg: 'transparent',
      fg: text.primary,
      border: 'transparent',
    },

    hover: {
      bg: surface.hover,
      fg: text.primary,
      border: 'transparent',
    },

    active: {
      bg: control.selected.muted.bg,
      fg: control.selected.muted.fg,
      border: control.selected.muted.border,
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  indicator: {
    default: {
      bg: text.brand,
    },

    hover: {
      bg: control.selected.muted.bg,
    },

    active: {
      bg: text.brand,
    },
  },

  panel: {
    fg: text.primary,
  },
} as const;
