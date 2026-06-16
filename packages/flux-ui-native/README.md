# @romanbakurov/flux-ui-native

React Native component package for Flux UI.

This package contains iOS-inspired native components built with React Native `StyleSheet`. Components use shared colors, typography, spacing, and radius from `@romanbakurov/flux-ui-tokens`, while native-only props and behavior stay inside this package.

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

## Installation

```bash
pnpm add @romanbakurov/flux-ui-native
```

Peer dependencies:

- `react`
- `react-native`

## Usage

```tsx
import { Button, Input } from '@romanbakurov/flux-ui-native';
import { useState } from 'react';
import { View } from 'react-native';

export function Example() {
  const [email, setEmail] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Input label='Email' value={email} onChange={setEmail} />
      <Button variant='primary'>Continue</Button>
    </View>
  );
}
```

## Development

```bash
pnpm --filter @romanbakurov/flux-ui-native build
```

Run the Expo playground:

```bash
pnpm --filter native-playground start
```
