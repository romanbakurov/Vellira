# @romanbakurov/virelia-tokens

Design tokens for Virelia.

This package is the shared source for color, typography, spacing, radius, shadows, and z-index values used by both web and native components.

## Usage

```ts
import { theme } from '@romanbakurov/virelia-tokens';

theme.colors.primary;
theme.typography.family.regular;
theme.spacing[4];
theme.radius.md;
```

## CSS

The package also exposes generated CSS variables:

```ts
import '@romanbakurov/virelia-tokens/css';
```

## Development

```bash
pnpm --filter @romanbakurov/virelia-tokens build
```

The build generates CSS tokens and TypeScript declarations.
