# @romanbakurov/flux-ui-web

React component package for Flux UI.

This package contains the web implementation of the design system. It extends shared contracts from `@romanbakurov/flux-ui-types`, uses shared tokens from `@romanbakurov/flux-ui-tokens`, and keeps DOM/CSS-specific behavior inside the web layer.

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
pnpm add @romanbakurov/flux-ui-web
```

If consuming from GitHub Packages, configure the scope registry:

```bash
@romanbakurov:registry=https://npm.pkg.github.com
```

## Usage

```tsx
import '@romanbakurov/flux-ui-web/styles';
import { Button, Input } from '@romanbakurov/flux-ui-web';
import { useState } from 'react';

export function Example() {
  const [email, setEmail] = useState('');

  return (
    <>
      <Input label='Email' value={email} onChange={setEmail} />
      <Button variant='primary'>Submit</Button>
    </>
  );
}
```

## Development

```bash
pnpm --filter @romanbakurov/flux-ui-web build
pnpm --filter @romanbakurov/flux-ui-web test
```

Run web Storybook from the workspace root:

```bash
pnpm --filter @flux-ui/storybook dev
```
