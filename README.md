# Vellira

TypeScript-first design system monorepo for React and React Native.

Vellira is built around shared design tokens, shared interaction logic, renderer-neutral base types, and platform-specific component implementations for Web and Native.

![React](https://img.shields.io/badge/React-19.2.3-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.85.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x%20%2F%206.x-blue)
![Storybook](https://img.shields.io/badge/Storybook-10.4-ff4785)
![License](https://img.shields.io/github/license/romanbakurov/Vellira)

## Links

- [Storybook Demo](https://main--6a07269cf7126a71ef2f62ca.chromatic.com)
- [Chromatic Library](https://www.chromatic.com/library?appId=6a07269cf7126a71ef2f62ca&branch=main)
- [Web Component API](./packages/vellira-web/API.md)
- [Native Component API](./packages/vellira-native/API.md)
- [GitHub Repository](https://github.com/romanbakurov/Vellira)

## Packages

| Package                        | Purpose                                    |
| ------------------------------ | ------------------------------------------ |
| `@romanbakurov/vellira-web`    | React web components                       |
| `@romanbakurov/vellira-native` | React Native components                    |
| `@romanbakurov/vellira-core`   | Shared hooks and interaction logic         |
| `@romanbakurov/vellira-types`  | Platform-agnostic base types               |
| `@romanbakurov/vellira-icons`  | Shared icon package for web and native     |
| `@romanbakurov/vellira-tokens` | Colors, typography, spacing, radius, theme |

## Apps

| App                      | Purpose                                       |
| ------------------------ | --------------------------------------------- |
| `apps/storybook`         | Web Storybook for `vellira-web` components    |
| `apps/native-playground` | Expo app and React Native on-device Storybook |
| `apps/test-app`          | Vite app for local web package smoke testing  |

## Architecture

```text
apps/
├── storybook
├── native-playground
└── test-app

packages/
├── vellira-web
├── vellira-native
├── vellira-core
├── vellira-types
├── vellira-icons
└── vellira-tokens
```

The packages are intentionally split by responsibility:

- `tokens` are the source of truth for colors, typography, spacing, radius, shadows, and z-index.
- `types` contains base contracts that avoid React, DOM, CSS, and React Native-specific props.
- `core` contains reusable state and keyboard-navigation hooks.
- `web` and `native` extend the shared base contracts with platform-specific props and rendering.

## Component Support

| Component  | Web | Native | Web tests | Native tests | Web stories | Native stories |
| ---------- | --- | ------ | --------- | ------------ | ----------- | -------------- |
| Button     | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Checkbox   | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Input      | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| FormField  | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| RadioGroup | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Select     | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Dropdown   | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Tabs       | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Tooltip    | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |
| Modal      | Yes | Yes    | Yes       | Yes          | Yes         | Yes            |

Native components use iOS-inspired `StyleSheet` styles and consume shared tokens from `@romanbakurov/vellira-tokens`.

## Installation

Packages are published under the `@romanbakurov` scope. If you consume them from GitHub Packages, configure the registry first:

```bash
@romanbakurov:registry=https://npm.pkg.github.com
```

Install the package you need:

```bash
pnpm add @romanbakurov/vellira-web
pnpm add @romanbakurov/vellira-native
pnpm add @romanbakurov/vellira-tokens
```

## Web Example

```tsx
import '@romanbakurov/vellira-web/styles';
import { Button, Checkbox, Input } from '@romanbakurov/vellira-web';
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
import { Button, Checkbox, Input } from '@romanbakurov/vellira-native';
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

`@romanbakurov/vellira-tokens` exposes the shared `theme` object:

```ts
import { theme } from '@romanbakurov/vellira-tokens';

theme.colors.primary;
theme.typography.family.regular;
theme.spacing[4];
theme.radius.md;
```

Tokens are available as:

- TypeScript objects for web and native
- generated CSS variables for web styles

## Shared Core

`@romanbakurov/vellira-core` currently exports:

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
pnpm --filter @vellira/storybook dev
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

Run package-specific tests:

```bash
pnpm --filter @romanbakurov/vellira-web test
pnpm --filter @romanbakurov/vellira-native test
```

Build a single package:

```bash
pnpm --filter @romanbakurov/vellira-web build
pnpm --filter @romanbakurov/vellira-native build
pnpm --filter @romanbakurov/vellira-tokens build
```

## Development Tooling

Create a new component:

```bash
pnpm create:component Button web primitives
pnpm create:component Switch native primitives
pnpm create:component Badge both primitives
```

## Quality

The project uses:

- ESLint and Prettier
- TypeScript strict mode
- Vitest for web and native unit tests
- React Native unit tests through a lightweight `react-native` Vitest mock
- Web Storybook and React Native on-device Storybook for component review
- Chromatic for hosted web visual review
- Husky and lint-staged for pre-commit checks
- Semantic Release for automated package publishing

## Principles

- Keep shared tokens and behavior platform-neutral.
- Keep DOM, CSS, React Native, and renderer-specific props in platform packages.
- Prefer predictable controlled/uncontrolled APIs.
- Use TypeScript types as public API documentation.
- Build web and native components from the same design language, not the same rendering code.
