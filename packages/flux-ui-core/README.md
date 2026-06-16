# @romanbakurov/flux-ui-core

Shared interaction and state logic for Flux UI.

This package contains hooks that can be reused by web and native packages when the behavior is platform-neutral.

## Exports

- `useControllableState`
- `useKeyboardNavigation`
- `useTabsKeyboard`

## Usage

```ts
import { useControllableState } from '@romanbakurov/flux-ui-core';

const [value, setValue] = useControllableState({
  value,
  defaultValue: '',
  onChange,
});
```

## Development

```bash
pnpm --filter @romanbakurov/flux-ui-core build
```
