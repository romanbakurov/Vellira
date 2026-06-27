import { describe, expect, it } from 'vitest';

import { darkTheme, highContrastTheme, lightTheme } from './index';

describe('theme presets', () => {
  it('exports all theme presets', () => {
    expect(lightTheme).toBeDefined();
    expect(darkTheme).toBeDefined();
    expect(highContrastTheme).toBeDefined();
  });

  it('keeps the same top-level structure', () => {
    expect(Object.keys(darkTheme)).toEqual(Object.keys(lightTheme));
    expect(Object.keys(highContrastTheme)).toEqual(Object.keys(lightTheme));
  });

  it('keeps the same semantic color groups', () => {
    expect(Object.keys(darkTheme.colors)).toEqual(
      Object.keys(lightTheme.colors)
    );

    expect(Object.keys(highContrastTheme.colors)).toEqual(
      Object.keys(lightTheme.colors)
    );
  });

  it('uses different semantic values for dark theme', () => {
    expect(darkTheme.colors.surface.default).not.toBe(
      lightTheme.colors.surface.default
    );

    expect(darkTheme.colors.text.primary).not.toBe(
      lightTheme.colors.text.primary
    );
  });

  it('uses different semantic values for high contrast theme', () => {
    expect(highContrastTheme.colors.focus.ring).not.toBe(
      lightTheme.colors.focus.ring
    );
  });

  it('provides theme-specific CSS variable values', () => {
    expect(lightTheme.colors.surface.default).toEqual(expect.any(String));
    expect(darkTheme.colors.surface.default).toEqual(expect.any(String));

    expect(highContrastTheme.colors.surface.default).toBe('#000000');
    expect(highContrastTheme.colors.text.primary).toBe('#FFFFFF');
    expect(highContrastTheme.colors.border.default).toBe('#FFFFFF');
    expect(highContrastTheme.colors.focus.ring).toMatch(/^#[0-9A-Fa-f]{6}$/);

    expect(highContrastTheme.colors.interactive.primary).toEqual(
      expect.any(String)
    );

    expect(highContrastTheme.colors.surface.elevated).toEqual(
      expect.any(String)
    );
    expect(highContrastTheme.colors.text.muted).toEqual(expect.any(String));
    expect(highContrastTheme.colors.action.primaryFg).toEqual(
      expect.any(String)
    );
    expect(highContrastTheme.colors.action.dangerHoverBg).toEqual(
      expect.any(String)
    );
    expect(highContrastTheme.colors.action.dangerHoverFg).toEqual(
      expect.any(String)
    );
    expect(highContrastTheme.colors.control.selectedFg).toEqual(
      expect.any(String)
    );
    expect(highContrastTheme.colors.menu.itemHoverFg).toEqual(
      expect.any(String)
    );
    expect(highContrastTheme.colors.menu.itemFocusRing).toEqual(
      expect.any(String)
    );
  });
});
