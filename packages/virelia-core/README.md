# @romanbakurov/virelia-core

Shared interaction and state logic for Virelia.

This package contains hooks that can be reused by web and native packages when the behavior is platform-neutral.

## Exports

- `useControllableState`
- `useKeyboardNavigation`
- `useTabsKeyboard`

## Usage

```ts
import { useControllableState } from '@romanbakurov/virelia-core';

const [value, setValue] = useControllableState({
  value,
  defaultValue: '',
  onChange,
});
```

## Development

```bash
pnpm --filter @romanbakurov/virelia-core build
```
