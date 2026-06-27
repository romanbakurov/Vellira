import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { text } from '../semantic/text.js';

export const tabs = {
  list: {
    border: border.default,
  },

  trigger: {
    default: {
      bg: 'transparent',
      fg: text.muted,
      border: 'transparent',
    },

    hover: {
      bg: colors.gray[800],
      fg: text.primary,
      border: 'transparent',
    },

    active: {
      bg: colors.primary[600],
      fg: text.primary,
      border: colors.primary[600],
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  indicator: {
    bg: colors.primary[500],
  },

  panel: {
    fg: text.primary,
  },
} as const;
