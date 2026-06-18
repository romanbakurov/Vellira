# @romanbakurov/vellira-web

React component package for Vellira.

This package contains the web implementation of the design system. It extends shared contracts from `@romanbakurov/vellira-types`, uses shared tokens from `@romanbakurov/vellira-tokens`, and keeps DOM, CSS, accessibility ids, and browser events inside the web layer.

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
pnpm add @romanbakurov/vellira-web
```

If consuming from GitHub Packages, configure the scope registry:

```bash
@romanbakurov:registry=https://npm.pkg.github.com
```

## Usage

Import the stylesheet once in your app entry point:

```tsx
import '@romanbakurov/vellira-web/styles';
```

Then use the components:

```tsx
import { Button, Checkbox, Input } from '@romanbakurov/vellira-web';
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
pnpm --filter @romanbakurov/vellira-web test
```

The web package uses Vitest with `jsdom`. Tests live next to components as `*.test.tsx` and use a small local render helper based on `react-dom/client`.

## Storybook

Run web Storybook from the workspace root:

```bash
pnpm --filter @vellira/storybook dev
```

Stories live next to components as `*.stories.tsx` and are also used for Chromatic visual review.

## Development

```bash
pnpm --filter @romanbakurov/vellira-web build
pnpm --filter @romanbakurov/vellira-web test
```
