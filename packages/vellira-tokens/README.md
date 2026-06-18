# @romanbakurov/vellira-tokens

Design tokens for Vellira.

This package is the shared source for color, typography, spacing, radius, shadows, and z-index values used by both web and native components.

## Usage

```ts
import { theme } from '@romanbakurov/vellira-tokens';

theme.colors.primary;
theme.typography.family.regular;
theme.spacing[4];
theme.radius.md;
```

## CSS

The package also exposes generated CSS variables:

```ts
import '@romanbakurov/vellira-tokens/css';
```

## Development

```bash
pnpm --filter @romanbakurov/vellira-tokens build
```

The build generates CSS tokens and TypeScript declarations.
