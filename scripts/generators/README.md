# Virelia Component Generator

Internal scaffolding tool used to generate components for Virelia Web and Native packages.

## Usage

Generate a component:

```bash
pnpm create:component <Name> <platform> <layer>
```

Examples:

```bash
pnpm create:component Badge web primitives
pnpm create:component Badge native primitives
pnpm create:component Badge both primitives
```

## Platforms

| Platform | Description                            |
| -------- | -------------------------------------- |
| web      | Generate component in `virelia-web`    |
| native   | Generate component in `virelia-native` |
| both     | Generate component in both packages    |

## Layers

| Layer      | Location         |
| ---------- | ---------------- |
| primitives | `src/primitives` |
| components | `src/components` |
| patterns   | `src/patterns`   |

## Generated Structure

The generator creates:

```txt
Badge/
├── Badge.tsx
├── Badge.stories.tsx
├── index.ts
├── types.ts
├── Badge.test.tsx
└── Badge.module.scss
```

Generated files depend on the selected platform and enabled templates.

## Template Architecture

Templates are stored in:

```txt
scripts/
└── generators/
    ├── create-component.ts
    └── templates/
        ├── index.ts
        ├── component-web.ts
        ├── component-native.ts
        ├── component-story.ts
        ├── component-styles.ts
        ├── component-test.ts
        └── component-types.ts
```

### Template Responsibilities

| Template            | Purpose                    |
| ------------------- | -------------------------- |
| web-component.ts    | React Web component        |
| native-component.ts | React Native component     |
| story.ts            | Storybook stories          |
| styles.ts           | SCSS module template       |
| test.ts             | Component test template    |
| types.ts            | Component type definitions |
| index.ts            | Template exports           |

## Features

The generator automatically:

* Creates component directories
* Generates platform-specific component implementations
* Generates Storybook stories
* Generates component tests
* Generates style templates
* Generates type definitions
* Creates component barrel exports
* Updates layer barrel exports
* Supports Web and Native packages
* Supports multi-platform generation (`both`)

## Supported Targets

```txt
packages/
├── virelia-web
└── virelia-native
```

## Notes

The generator assumes the standard Virelia package structure and updates exports automatically after component creation.

All generated files are intended as starting points and may require manual refinement depending on component complexity.
