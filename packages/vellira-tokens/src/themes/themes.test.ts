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
});
