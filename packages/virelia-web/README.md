# @romanbakurov/virelia-web

React component package for Virelia.

This package contains the web implementation of the design system. It extends shared contracts from `@romanbakurov/virelia-types`, uses shared tokens from `@romanbakurov/virelia-tokens`, and keeps DOM, CSS, accessibility ids, and browser events inside the web layer.

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

Each public component has Storybook coverage and Vitest unit coverage.

For detailed props, shared types, examples, and compound component APIs, see
[Web Component API](./API.md).

## Installation

```bash
pnpm add @romanbakurov/virelia-web
```

If consuming from GitHub Packages, configure the scope registry:

```bash
@romanbakurov:registry=https://npm.pkg.github.com
```

## Usage

Import the stylesheet once in your app entry point:

```tsx
import '@romanbakurov/virelia-web/styles';
```

Then use the components:

```tsx
import { Button, Checkbox, Input } from '@romanbakurov/virelia-web';
import { useState } from 'react';

export function Example() {
  const [email, setEmail] = useState('');

  return (
    <form>
      <Input
        label='Email'
        value={email}
        onChange={setEmail}
        placeholder='name@example.com'
      />
      <Checkbox label='Accept terms' />
      <Button variant='primary'>Submit</Button>
    </form>
  );
}
```

## Testing

Run only web tests:

```bash
pnpm --filter @romanbakurov/virelia-web test
```

The web package uses Vitest with `jsdom`. Tests live next to components as `*.test.tsx` and use a small local render helper based on `react-dom/client`.

## Storybook

Run web Storybook from the workspace root:

```bash
pnpm --filter @virelia/storybook dev
```

Stories live next to components as `*.stories.tsx` and are also used for Chromatic visual review.

## Development

```bash
pnpm --filter @romanbakurov/virelia-web build
pnpm --filter @romanbakurov/virelia-web test
```
