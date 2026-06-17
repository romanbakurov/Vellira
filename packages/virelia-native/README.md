# @romanbakurov/virelia-native

React Native component package for Virelia.

This package contains iOS-inspired native components built with React Native `StyleSheet`. Components use shared colors, typography, spacing, and radius from `@romanbakurov/virelia-tokens`, shared behavior from `@romanbakurov/virelia-core`, and renderer-neutral contracts from `@romanbakurov/virelia-types`.

## Components

- Button
- Checkbox
- Input
- FormField
- RadioGroup
- Select
- Dropdown
- Tabs
- Tooltip
- Modal

Each public native component has React Native Storybook coverage and Vitest unit coverage.

## Installation

```bash
pnpm add @romanbakurov/virelia-native
```

Peer dependencies:

- `react`
- `react-native`

## Usage

```tsx
import { Button, Checkbox, Input } from '@romanbakurov/virelia-native';
import { useState } from 'react';
import { View } from 'react-native';

export function Example() {
  const [email, setEmail] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Input label='Email' value={email} onChange={setEmail} />
      <Checkbox label='Accept terms' />
      <Button variant='primary'>Continue</Button>
    </View>
  );
}
```

## Testing

Run only native tests:

```bash
pnpm --filter @romanbakurov/virelia-native test
```

The native package uses Vitest with a lightweight local `react-native` mock. These tests validate component state, callbacks, accessibility props, and conditional rendering without requiring an iOS or Android simulator.

Native tests and test utilities are excluded from the package build through `tsconfig.json`.

## Storybook

Native stories live next to components as `*.stories.tsx` and are consumed by the Expo playground React Native Storybook app.

Run on-device Storybook from the workspace root:

```bash
pnpm --filter native-playground storybook:ios
pnpm --filter native-playground storybook:android
```

## Development

```bash
pnpm --filter @romanbakurov/virelia-native build
pnpm --filter @romanbakurov/virelia-native test
```

Run the Expo playground:

```bash
pnpm --filter native-playground start
```
