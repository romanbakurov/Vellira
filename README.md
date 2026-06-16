# Flux UI

TypeScript-first design system monorepo for React and React Native.

Flux UI is built around shared design tokens, shared state logic, platform-agnostic base types, and platform-specific component implementations for Web and Native.

![React](https://img.shields.io/badge/React-19.2.3-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.85.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x%20%2F%206.x-blue)
![Storybook](https://img.shields.io/badge/Storybook-10.4-ff4785)
![License](https://img.shields.io/github/license/romanbakurov/Flux-UI)

## Links

- [Storybook Demo](https://main--6a07269cf7126a71ef2f62ca.chromatic.com)
- [Chromatic Library](https://www.chromatic.com/library?appId=6a07269cf7126a71ef2f62ca&branch=main)
- [GitHub Repository](https://github.com/romanbakurov/Flux-UI)

## Packages

| Package                        | Purpose                                    |
| ------------------------------ | ------------------------------------------ |
| `@romanbakurov/flux-ui-web`    | React web components                       |
| `@romanbakurov/flux-ui-native` | React Native components                    |
| `@romanbakurov/flux-ui-core`   | Shared hooks and interaction logic         |
| `@romanbakurov/flux-ui-types`  | Platform-agnostic base types               |
| `@romanbakurov/flux-ui-icons`  | Shared icon package for web and native     |
| `@romanbakurov/flux-ui-tokens` | Colors, typography, spacing, radius, theme |

## Apps

| App                      | Purpose                        |
| ------------------------ | ------------------------------ |
| `apps/storybook`         | Web Storybook                  |
| `apps/native-playground` | Expo app and native Storybook  |
| `apps/test-app`          | Vite app for local web testing |

## Architecture

```text
apps/
├── storybook
├── native-playground
└── test-app

packages/
├── flux-ui-web
├── flux-ui-native
├── flux-ui-core
├── flux-ui-types
├── flux-ui-icons
└── flux-ui-tokens
```

The packages are intentionally split by responsibility:

- `tokens` are the source of truth for colors, typography, spacing, radius, shadows, and z-index.
- `types` contains base contracts that avoid React, DOM, CSS, and React Native-specific props.
- `core` contains reusable state and keyboard-navigation hooks.
- `web` and `native` extend the shared base with platform-specific props and rendering.

## Component Support

| Component  | Web | Native |
| ---------- | --- | ------ |
| Button     | Yes | Yes    |
| Checkbox   | Yes | Yes    |
| Input      | Yes | Yes    |
| FormField  | Yes | Yes    |
| RadioGroup | Yes | Yes    |
| Select     | Yes | Yes    |
| Dropdown   | Yes | Yes    |
| Tabs       | Yes | Yes    |
| Tooltip    | Yes | Yes    |
| Modal      | Yes | Yes    |

Native components use iOS-inspired `StyleSheet` styles and consume shared tokens from `@romanbakurov/flux-ui-tokens`.

## Installation

Packages are published under the `@romanbakurov` scope. If you consume them from GitHub Packages, configure the registry first:

```bash
@romanbakurov:registry=https://npm.pkg.github.com
```

Install the package you need:

```bash
pnpm add @romanbakurov/flux-ui-web
pnpm add @romanbakurov/flux-ui-native
pnpm add @romanbakurov/flux-ui-tokens
```

## Web Example

```tsx
import { Button, Checkbox, Input } from '@romanbakurov/flux-ui-web';
import { useState } from 'react';

export function App() {
  const [email, setEmail] = useState('');

  return (
    <>
      <Input
        label='Email'
        value={email}
        onChange={setEmail}
        placeholder='name@example.com'
      />

      <Checkbox label='Accept terms' defaultChecked />

      <Button variant='primary' size='md'>
        Submit
      </Button>
    </>
  );
}
```

## React Native Example

```tsx
import { Button, Checkbox, Input } from '@romanbakurov/flux-ui-native';
import { useState } from 'react';
import { View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={{ gap: 16, padding: 24 }}>
      <Input
        label='Email'
        value={email}
        onChange={setEmail}
        placeholder='name@example.com'
      />

      <Checkbox label='Accept terms' />

      <Button variant='primary' size='md'>
        Continue
      </Button>
    </View>
  );
}
```

## Design Tokens

`@romanbakurov/flux-ui-tokens` exposes the shared `theme` object:

```ts
import { theme } from '@romanbakurov/flux-ui-tokens';

theme.colors.primary;
theme.typography.family.regular;
theme.spacing[4];
theme.radius.md;
```

Tokens are available as:

- TypeScript objects for web and native
- generated CSS variables for web styles

## Shared Core

`@romanbakurov/flux-ui-core` currently exports:

- `useControllableState`
- `useKeyboardNavigation`
- `useTabsKeyboard`

## Development

Install dependencies:

```bash
pnpm install
```

Run web Storybook:

```bash
pnpm --filter @flux-ui/storybook dev
```

Run native playground:

```bash
pnpm --filter native-playground start
```

Run native Storybook:

```bash
pnpm --filter native-playground storybook:ios
pnpm --filter native-playground storybook:android
```

Run the web test app:

```bash
pnpm --filter test-app dev
```

Run checks:

```bash
pnpm lint
pnpm test
pnpm build
```

Build a single package:

```bash
pnpm --filter @romanbakurov/flux-ui-web build
pnpm --filter @romanbakurov/flux-ui-native build
pnpm --filter @romanbakurov/flux-ui-tokens build
```

## Quality

The project uses:

- ESLint and Prettier
- TypeScript strict mode
- Vitest for web component tests
- Storybook and Chromatic for visual review
- Husky and lint-staged for pre-commit checks
- Semantic Release for automated package publishing

## Principles

- Keep shared tokens and behavior platform-neutral.
- Keep DOM, CSS, React Native, and renderer-specific props in platform packages.
- Prefer predictable controlled/uncontrolled APIs.
- Use TypeScript types as public API documentation.
- Build web and native components from the same design language, not the same rendering code.
