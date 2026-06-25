# Component Conventions

This document defines the architectural and implementation standards for all Vellira components. Every new component should follow these conventions to ensure consistency, maintainability, and predictable APIs across web and native packages.

---

# Directory Structure

## Simple component

```text
Component/
├── Component.tsx
├── Component.styles.ts
├── Component.stories.tsx
├── Component.test.tsx
├── types.ts
└── index.ts
```

## Compound component

```text
Component/
├── Component.tsx
├── ComponentContext.tsx
├── types.ts
├── index.ts
├── Part/
│   ├── Part.tsx
│   ├── Part.styles.ts
│   ├── types.ts
│   └── index.ts
├── AnotherPart/
│   ├── AnotherPart.tsx
│   ├── AnotherPart.styles.ts
│   ├── types.ts
│   └── index.ts
```

---

# Public API

The package root must expose only public runtime components.

Allowed exports:

- Button
- Checkbox
- Dropdown
- FormField
- Input
- Modal
- RadioGroup
- Select
- Tabs
- Tooltip

Do **not** export:

- internal hooks
- contexts
- utilities
- styles
- implementation details
- helper functions

Internal modules should remain private.

---

# Component API

Every component should expose a clean, predictable API.

Prefer:

- controlled mode
- uncontrolled mode
- event callbacks
- composition over configuration

Example:

```tsx
<Tabs
  activeIndex={activeIndex}
  onChange={setActiveIndex}
/>

<Tabs defaultActiveIndex={0} />
```

---

# Controlled vs Uncontrolled

Whenever appropriate, support both modes.

Examples:

```tsx
value / defaultValue;

checked / defaultChecked;

open / defaultOpen;

activeIndex / defaultActiveIndex;
```

Callbacks:

```tsx
onChange;

onCheckedChange;

onOpenChange;

onValueChange;
```

---

# Types

Shared component contracts belong in:

```
@romanbakurov/vellira-types
```

Platform-specific props stay inside each renderer.

Example:

```ts
export interface ButtonProps extends BaseButtonProps {
  className?: string;
}
```

Avoid duplicating shared interfaces.

---

# Styling

Use design tokens exclusively.

Good:

```ts
padding: theme.spacing[3];
borderRadius: theme.radius.md;
color: theme.colors.primary;
```

Avoid hardcoded values whenever a token exists.

Bad:

```ts
padding: 12;
borderRadius: 8;
color: '#4F46E5';
```

---

# Component Styles

Every component owns its styling.

```
Component.styles.ts
```

Do not inline large style objects inside component files.

---

# Accessibility

Every interactive component must be accessible.

## Web

Required:

- semantic HTML
- keyboard navigation
- focus management
- ARIA roles
- ARIA attributes

## Native

Required:

- accessibilityRole
- accessibilityState
- accessibilityLabel (when appropriate)
- accessibilityHint (when appropriate)

Accessibility is considered part of the component API.

---

# Icons

Icons should come only from:

```
@romanbakurov/vellira-icons
```

Do not import SVGs directly inside components.

Icons must inherit component color automatically.

---

# State Management

Prefer reusable hooks from:

```
@romanbakurov/vellira-core
```

Examples:

- useControllableState
- useModal
- useDropdown
- useTabs

Avoid duplicating logic between components.

---

# Context

Compound components should communicate through Context.

Avoid prop drilling.

Example:

```
Tabs
 ├── Tabs.List
 ├── Tabs.Tab
 └── Tabs.Panel
```

---

# Stories

Every public component must include Storybook stories.

Minimum stories:

- Default
- Disabled
- Variants
- Controlled example (if applicable)
- Real-world example

Stories should demonstrate real usage rather than implementation details.

---

# Tests

Every component should include tests for:

- rendering
- user interaction
- disabled state
- controlled mode
- uncontrolled mode
- accessibility (where applicable)

New features should include corresponding tests.

---

# Documentation

Every public component must provide:

- Storybook documentation
- generated API documentation
- examples
- prop descriptions

Documentation should stay synchronized with implementation.

---

# Package Readiness Checklist

Before opening a Pull Request:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:coverage
pnpm build
pnpm smoke:packages
pnpm check:public-api
pnpm docs:api:check
```

All checks must pass before merging.

---

# General Principles

Follow these principles throughout the project:

- Keep components small and focused.
- Prefer composition over configuration.
- Avoid unnecessary abstractions.
- Keep APIs stable.
- Keep runtime exports minimal.
- Favor readability over cleverness.
- Use design tokens consistently.
- Write tests alongside features.
- Treat accessibility as a first-class feature.
- Preserve backward compatibility whenever possible.
