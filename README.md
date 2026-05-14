# Flux UI

Flux UI is a lightweight, flexible React design system built with SCSS Modules and design tokens.  
It provides a consistent foundation for building modern, accessible, and scalable user interfaces.

---

## ✨ Features

- ⚛️ React components with TypeScript support
- 🎨 SCSS Modules for styling
- 🎯 Design tokens (colors, spacing, typography, radius)
- 🧩 Reusable UI components (Input, Checkbox, etc.)
- 📚 Storybook for component documentation
- ⚡ Vite-based development setup
- ♿ Accessibility-friendly components (WIP)

---

## 📦 Installation

Flux UI is designed to be used with React + TypeScript.

```bash
npm install flux-ui
````

## 🚀 Usage

```tsx
import { Input, Checkbox } from 'flux-ui';

export default function App() {
  return (
    <div>
      <Input
        label="Name"
        value=""
        onChange={(v) => console.log(v)}
      />

      <Checkbox
        label="Accept terms"
        checked={false}
        onChange={(v) => console.log(v)}
      />
    </div>
  );
}
```

## 🎨 Design Tokens

Flux UI uses CSS variables for consistent styling across the system.
#### Example:
```css
:root {
  --color-primary: #4c8bf5;
  --color-error: #e5484d;

  --font-size-md: 16px;
  --font-size-lg: 20px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;

  --radius-md: 8px;
}
```

## 🧱 Component Philosophy

Flux UI follows a controlled component pattern:

- All form components are controlled (value / checked + onChange)
- Styling is fully separated via SCSS modules
- No internal state in UI components
- Behavior is predictable and reusable


## 📚 Storybook

Run Storybook locally:
```bash
npm run storybook
```

Build static documentation:
```bash
npm run build-storybook
```

## 🧪 Development

Start development server:
```bash
npm run dev
```
Run lint:
```bash
npm run lint
```

Run tests:
```bash
npm run test
```

## 📁 Project Structure

```bash
src/
  components/
    Input/
    Checkbox/
  styles/
    abstracts/
      _tokens.scss
      _mixins.scss
      _spacing.scss
  utils/
    cn.ts
```


## 🧠 Principles
Flux UI is built around:

- Consistency over flexibility
- Composition over duplication
- Predictable UI behavior
- Minimal abstraction leakage
- Token-driven styling system

---

## 📌 Roadmap

- [x] Input component
- [x] Checkbox component
- [ ] Select component
- [ ] FormField wrapper
- [ ] Modal / Dialog system
- [ ] Dark mode tokens
- [ ] Animation system
- [ ] Accessibility audit
- [ ] Documentation site

