import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { surface } from '../semantic/surface.js';

export const tooltip = {
  content: {
    bg: surface.inverse,
    fg: colors.gray[950],
    border: border.default,
  },

  arrow: {
    bg: surface.inverse,
  },
} as const;
