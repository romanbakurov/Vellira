# @romanbakurov/virelia-native

React Native component package for Virelia.

This package contains iOS-inspired native components built with React Native `StyleSheet`. Components use shared colors, typography, spacing, and radius from `@romanbakurov/virelia-tokens`, while native-only props and behavior stay inside this package.

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
pnpm add @romanbakurov/virelia-native
```

Peer dependencies:

- `react`
- `react-native`

## Usage

```tsx
import { Button, Input } from '@romanbakurov/virelia-native';
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
pnpm --filter @romanbakurov/virelia-native build
```

Run the Expo playground:

```bash
pnpm --filter native-playground start
```
