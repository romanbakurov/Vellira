# @romanbakurov/virelia-web

React component package for Virelia.

This package contains the web implementation of the design system. It extends shared contracts from `@romanbakurov/virelia-types`, uses shared tokens from `@romanbakurov/virelia-tokens`, and keeps DOM/CSS-specific behavior inside the web layer.

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
pnpm add @romanbakurov/virelia-web
```

If consuming from GitHub Packages, configure the scope registry:

```bash
@romanbakurov:registry=https://npm.pkg.github.com
```

## Usage

```tsx
import '@romanbakurov/virelia-web/styles';
import { Button, Input } from '@romanbakurov/virelia-web';
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
pnpm --filter @romanbakurov/virelia-web build
pnpm --filter @romanbakurov/virelia-web test
```

Run web Storybook from the workspace root:

```bash
pnpm --filter @virelia/storybook dev
```
