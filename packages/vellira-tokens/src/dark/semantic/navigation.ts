import { colors } from '../../primitives/colors.js';

import { surface } from './surface.js';
import { text } from './text.js';

export const navigation = {
  hover: {
    bg: surface.active,
    fg: text.primary,
  },
  active: {
    bg: surface.active,
    fg: text.primary,
  },
  brandHover: {
    bg: surface.hover,
    fg: colors.primary[200],
  },
  triggerHover: {
    bg: surface.hover,
    fg: colors.vellira[50],
  },
} as const;
