import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const input = {
  default: {
    bg: surface.default,
    fg: text.primary,
    border: border.default,
    placeholder: text.muted,
  },

  hover: {
    bg: colors.gray[100],
    fg: text.primary,
    border: colors.primary[700],
    placeholder: text.muted,
  },

  focus: {
    bg: surface.default,
    fg: text.primary,
    border: border.focus,
    ring: focus.ring,
    placeholder: text.muted,
  },

  disabled: {
    bg: surface.subtle,
    fg: text.disabled,
    border: border.default,
    placeholder: text.disabled,
  },

  error: {
    border: status.error.strong,
    ring: status.error.fg,
  },

  success: {
    border: status.success.strong,
    ring: status.success.fg,
  },
} as const;
