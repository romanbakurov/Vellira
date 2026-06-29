import { navigation } from '../semantic/navigation.js';
import { status } from '../semantic/status.js';
import { text } from '../semantic/text.js';

export const menu = {
  itemFg: text.primary,

  itemHoverBg: navigation.hover.bg,
  itemHoverFg: navigation.hover.fg,

  itemActiveBg: navigation.active.bg,
  itemActiveFg: navigation.active.fg,
  itemFocusRing: navigation.hover.bg,

  itemDangerFg: status.error.fg,
  itemDangerHoverBg: navigation.hover.bg,
  itemDangerHoverFg: navigation.hover.fg,
  itemDangerActiveBg: navigation.active.bg,
  itemDangerActiveFg: navigation.active.fg,

  triggerFg: text.primary,
  triggerHoverBg: navigation.brandHover.bg,
  triggerHoverFg: navigation.brandHover.fg,
  triggerHoverRing: 'transparent',

  itemDisabledFg: navigation.disabled.fg,
  itemDisabledBg: navigation.disabled.bg,

  groupLabelFg: navigation.groupLabel.fg,
} as const;
