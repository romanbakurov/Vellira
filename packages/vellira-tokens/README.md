# @romanbakurov/vellira-tokens

Shared design tokens for Vellira.

This package is the single source of truth for colors, typography, spacing, radius, shadows, and z-index values used by both the Web and React Native packages.

## Features

- Shared design tokens
- Semantic color system
- Renderer-neutral theme object
- Generated CSS variables
- TypeScript-first API

---

## Usage

```ts
import { theme } from '@romanbakurov/vellira-tokens';

theme.colors.primary;
theme.colors.surface.default;
theme.colors.text.primary;
theme.colors.interactive.primary;

theme.typography.family.regular;
theme.spacing[4];
theme.radius.md;
```

---

## Semantic Color Tokens

The package provides semantic color groups in addition to the base palette.

Current semantic groups include:

- `surface`
- `text`
- `border`
- `interactive`
- `status`
- `focus`
- `overlay`
- `divider`
- `selection`
- `skeleton`

Example:

```ts
theme.colors.surface.default;
theme.colors.surface.elevated;

theme.colors.text.primary;
theme.colors.text.secondary;

theme.colors.border.default;

theme.colors.interactive.primary;
theme.colors.interactive.primaryHover;

theme.colors.status.success;
theme.colors.status.error;
```

Using semantic tokens instead of raw palette values makes components easier to maintain and prepares the design system for future theming.

---

## CSS Variables

Generated CSS variables are available for Web projects.

```ts
import '@romanbakurov/vellira-tokens/css';
```

Examples:

```css
--color-primary
--color-surface-default
--color-text-primary
--color-border-default
--color-interactive-primary
```

---

## Development

Build the package:

```bash
pnpm --filter @romanbakurov/vellira-tokens build
```

The build generates:

- TypeScript declarations
- CSS variables
- distributable artifacts

---

## Principles

The token system follows a few core principles:

- Semantic tokens over hardcoded colors
- Shared across Web and React Native
- Stable public API
- Predictable naming
- Easy future support for multiple themes
