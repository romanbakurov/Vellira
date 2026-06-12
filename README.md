# Flux UI

A modern React component library built with TypeScript, SCSS Modules, and design tokens.

Flux UI provides a scalable foundation for building consistent, accessible, and maintainable user interfaces across web and native platforms.

## ✨ Features

* React 19 + TypeScript
* Design token-driven architecture
* Modular component library
* Storybook documentation
* Vite-powered development workflow
* Accessibility-first approach
* pnpm workspace monorepo
* Platform-agnostic design tokens

---

## Live Demo

Storybook:
https://6a07269cf7126a71ef2f62ca-byvnojtjdx.chromatic.com

---

## Packages

### @romanbakurov/flux-ui-web

React component library.

### @romanbakurov/flux-ui-tokens

Platform-agnostic design tokens.

### @romanbakurov/flux-ui-native

React Native package (work in progress).

---

## Installation

### React Components

```bash
npm install @romanbakurov/flux-ui-web
```

### Design Tokens

```bash
npm install @romanbakurov/flux-ui-tokens
```

---

## Usage

```tsx
import {
  Input,
  Checkbox,
  Modal,
} from '@romanbakurov/flux-ui-web';

export function App() {
  return (
    <>
      <Input
        label="Name"
        value=""
        onChange={() => {}}
      />

      <Checkbox
        label="Accept terms"
        checked={false}
        onChange={() => {}}
      />
    </>
  );
}
```

---

## Design Tokens

Flux UI tokens are distributed as CSS custom properties.

```css
:root {
  --color-primary: #4c8bf5;
  --color-error: #e5484d;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;

  --radius-sm: 4px;
  --radius-md: 8px;

  --z-index-modal: 1000;
}
```

---

## Package Contents

### UI Primitives

Foundation building blocks used to compose higher-level components.

* Button
* Input

### Accessibility

Utilities for building accessible interfaces.

* VisuallyHidden

### Infrastructure

Internal primitives used by complex components.

* Portal

### Components

Reusable UI components built on top of primitives.

* Checkbox
* Dropdown
* Modal
* RadioGroup
* Select
* Tabs
* Tooltip

### Patterns

Higher-level composition abstractions.

* FormField

---

## Hooks

State and behavior utilities used throughout the library.

* useControllableState
* useDisclosure
* useFloatingPosition
* useFocusManager
* useFocusTrap
* useKeyboardNavigation
* useModalKeyboard
* useOutsideClick
* useTabsKeyboard

---

## Development

Install dependencies:

```bash
pnpm install
```

Run Storybook:

```bash
pnpm --filter @flux-ui/storybook storybook
```

Run playground application:

```bash
pnpm --filter test-app dev
```

Run linting:

```bash
pnpm lint
```

Run tests:

```bash
pnpm test
```

Build all packages:

```bash
pnpm -r build
```

---

## Workspace Structure

```text
apps/
├── storybook
└── test-app

packages/
├── flux-ui-tokens
├── flux-ui-web
└── flux-ui-native
```

---

## Design Principles

Flux UI is built around:

* Consistency over flexibility
* Composition over duplication
* Predictable UI behavior
* Accessibility by default
* Token-driven styling
* Platform independence

---

## Roadmap

### Web Components

* [x] Button
* [x] Input
* [x] Checkbox
* [x] Dropdown
* [x] Modal
* [x] RadioGroup
* [x] Select
* [x] Tabs
* [x] Tooltip
* [x] FormField

### Design Tokens

* [x] Colors
* [x] Spacing
* [x] Typography
* [x] Radius
* [x] Shadows
* [x] Z-Index

### Upcoming

* [ ] Dark theme
* [ ] Theme switching
* [ ] Data display components
* [ ] Animation primitives
* [ ] Accessibility audit
* [ ] React Native implementation
* [ ] Documentation website

---

## License

MIT © Roman Bakurov
