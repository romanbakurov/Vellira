import { describe, expect, it } from 'vitest';

import { theme } from './theme';

describe('theme', () => {
  it('exposes base token groups', () => {
    expect(theme.colors).toBeDefined();
    expect(theme.spacing).toBeDefined();
    expect(theme.radius).toBeDefined();
    expect(theme.shadows).toBeDefined();
    expect(theme.typography).toBeDefined();
    expect(theme.zIndex).toBeDefined();
  });

  it('exposes semantic surface color tokens', () => {
    expect(theme.colors.surface.default).toBe('#ffffff');
    expect(theme.colors.surface.muted).toBe('#f8fafc');
    expect(theme.colors.surface.subtle).toBe('#f3f4f6');
    expect(theme.colors.surface.elevated).toBe('#ffffff');
    expect(theme.colors.surface.inverse).toBe('#111827');
  });

  it('exposes semantic text color tokens', () => {
    expect(theme.colors.text.primary).toBe('#111827');
    expect(theme.colors.text.secondary).toBe('#4b5563');
    expect(theme.colors.text.muted).toBe('#6b7280');
    expect(theme.colors.text.inverse).toBe('#ffffff');
    expect(theme.colors.text.disabled).toBe('#9ca3af');
    expect(theme.colors.text.brand).toBe('#4f46e5');
    expect(theme.colors.text.danger).toBe('#e11d48');
    expect(theme.colors.text.success).toBe('#008f6a');
    expect(theme.colors.text.warning).toBe('#c05621');
    expect(theme.colors.text.info).toBe('#0ea5e9');
  });

  it('exposes semantic border color tokens', () => {
    expect(theme.colors.border.default).toBe('#e5e7eb');
    expect(theme.colors.border.muted).toBe('#eceff3');
    expect(theme.colors.border.strong).toBe('#d1d5db');
    expect(theme.colors.border.focus).toBe('#4f46e5');
    expect(theme.colors.border.danger).toBe('#e11d48');
    expect(theme.colors.border.success).toBe('#008f6a');
    expect(theme.colors.border.warning).toBe('#c05621');
    expect(theme.colors.border.info).toBe('#0ea5e9');
  });

  it('exposes semantic interactive color tokens', () => {
    expect(theme.colors.interactive.primary).toBe('#4f46e5');
    expect(theme.colors.interactive.primaryHover).toBe('#4338ca');
    expect(theme.colors.interactive.primaryPressed).toBe('#3730a3');
    expect(theme.colors.interactive.primaryMuted).toBe('#eef2ff');

    expect(theme.colors.interactive.secondary).toBe('#2563eb');
    expect(theme.colors.interactive.secondaryHover).toBe('#1d4ed8');
    expect(theme.colors.interactive.secondaryPressed).toBe('#1e40af');
    expect(theme.colors.interactive.secondaryMuted).toBe('#eff6ff');

    expect(theme.colors.interactive.neutral).toBe('#f3f4f6');
    expect(theme.colors.interactive.neutralHover).toBe('#e5e7eb');
    expect(theme.colors.interactive.neutralPressed).toBe('#d1d5db');

    expect(theme.colors.interactive.disabled).toBe('#e5e7eb');
    expect(theme.colors.interactive.disabledForeground).toBe('#9ca3af');
  });

  it('exposes semantic status color tokens', () => {
    expect(theme.colors.status.success).toBe('#008f6a');
    expect(theme.colors.status.successHover).toBe('#00785a');
    expect(theme.colors.status.successMuted).toBe('#ecfdf5');

    expect(theme.colors.status.error).toBe('#e11d48');
    expect(theme.colors.status.errorHover).toBe('#be123c');
    expect(theme.colors.status.errorMuted).toBe('#fff1f2');

    expect(theme.colors.status.warning).toBe('#c05621');
    expect(theme.colors.status.warningHover).toBe('#a74308');
    expect(theme.colors.status.warningMuted).toBe('#fff7ed');

    expect(theme.colors.status.info).toBe('#0ea5e9');
    expect(theme.colors.status.infoHover).toBe('#0284c7');
    expect(theme.colors.status.infoMuted).toBe('#f0f9ff');
  });

  it('exposes semantic utility color tokens', () => {
    expect(theme.colors.focus.ring).toBe('#4f46e5');
    expect(theme.colors.focus.ringOffset).toBe('#ffffff');

    expect(theme.colors.overlay.backdrop).toBe('rgba(17, 24, 39, 0.45)');
    expect(theme.colors.overlay.inverseBackdrop).toBe(
      'rgba(255, 255, 255, 0.72)'
    );

    expect(theme.colors.divider.default).toBe('#e5e7eb');
    expect(theme.colors.divider.muted).toBe('#eceff3');

    expect(theme.colors.skeleton.base).toBe('#e5e7eb');
    expect(theme.colors.skeleton.highlight).toBe('#f3f4f6');

    expect(theme.colors.selection.background).toBe('#eef2ff');
    expect(theme.colors.selection.foreground).toBe('#4338ca');
  });
});
