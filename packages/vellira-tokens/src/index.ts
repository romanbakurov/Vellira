import { darkTheme } from './dark/theme.js';
import { overlay } from './semantic/overlay.js';

export { darkTheme } from './dark/theme.js';
export type {
  BaseCssVariableName,
  BaseTokenPath,
  ColorTokenPath,
  ComponentTokenPath,
  CssVariableName,
  SemanticTokenPath,
  ThemeCssVariableName,
  ThemeName,
  TokenPath,
} from './generated/token-types.js';
export {
  baseCssVariableNames,
  baseTokenPaths,
  colorTokenPaths,
  componentTokenPaths,
  cssVariableNames,
  semanticTokenPaths,
  themeCssVariableNames,
  themeNames,
  tokenPaths,
} from './generated/token-types.js';
export { highContrastTheme } from './highContrast/theme.js';
export { lightTheme } from './light/theme.js';

export const theme = {
  ...darkTheme.tokens,

  colors: {
    ...darkTheme.semantic,
    ...darkTheme.components,

    overlay,

    interactive: {
      primary: darkTheme.components.button.primary.default.bg,
      secondary: darkTheme.components.button.secondary.default.bg,
      neutral: darkTheme.semantic.surface.subtle,
      disabledForeground: darkTheme.components.checkbox.disabled.fg,
    },

    status: {
      error: darkTheme.semantic.status.error.strong,
      errorMuted: darkTheme.semantic.status.error.bg,
    },

    border: {
      ...darkTheme.semantic.border,
      danger: darkTheme.semantic.status.error.strong,
    },

    text: {
      ...darkTheme.semantic.text,
      danger: darkTheme.semantic.status.error.fg,
    },
  },

  semantic: darkTheme.semantic,
  components: darkTheme.components,
  tokens: darkTheme.tokens,
} as const;
