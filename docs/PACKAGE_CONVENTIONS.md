# Package Conventions

This document defines the standards for all packages in the Vellira monorepo.

The goal is to keep every package consistent, maintainable, and easy to understand.

---

# Package Responsibilities

Each package should have a single responsibility.

Current packages:

| Package                        | Responsibility                 |
| ------------------------------ | ------------------------------ |
| `@romanbakurov/vellira-web`    | Web components                 |
| `@romanbakurov/vellira-native` | React Native components        |
| `@romanbakurov/vellira-core`   | Shared hooks and runtime logic |
| `@romanbakurov/vellira-types`  | Shared TypeScript contracts    |
| `@romanbakurov/vellira-icons`  | Cross-platform icon library    |
| `@romanbakurov/vellira-tokens` | Design tokens                  |

A package should not take responsibilities that belong to another package.

---

# Package Structure

Every package should follow the same structure whenever possible.

```text
package/
├── src/
├── dist/
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── vite.config.ts (if applicable)
├── vitest.config.ts (if applicable)
└── README.md
```

Generated files must never be edited manually.

---

# Package Naming

All public packages use the following naming convention:

```text
@romanbakurov/vellira-*
```

Examples:

```text
@romanbakurov/vellira-web
@romanbakurov/vellira-native
@romanbakurov/vellira-core
```

---

# Dependencies

Packages should depend only on what they actually use.

Avoid unnecessary dependencies.

Prefer:

* peerDependencies for frameworks
* dependencies for runtime requirements
* devDependencies for tooling

---

# Package Relationships

Dependencies should follow this direction:

```text
tokens
   │
   ├──────────────┐
   │              │
icons          types
   │              │
   └──────┐       │
          │       │
        core      │
          │       │
          ├───────┘
          │
     web / native
```

Rules:

* web must not depend on native
* native must not depend on web
* tokens must remain independent
* types must not import runtime code
* core must not import renderer-specific code

---

# Public API

Only expose supported public APIs.

Do not expose:

* internal utilities
* implementation details
* internal contexts
* internal styles
* internal hooks unless intentionally public

Every public export becomes part of the package contract.

---

# Exports

Prefer explicit exports.

Good:

```json
{
  "exports": {
    ".": "./dist/index.js",
    "./styles": "./dist/styles.css"
  }
}
```

Avoid wildcard exports.

---

# Build

Every package must build independently.

Packages should produce:

* JavaScript
* TypeScript declarations
* assets when applicable

Generated output belongs only inside:

```text
dist/
```

---

# Type Safety

Packages must compile with:

```bash
pnpm typecheck
```

No TypeScript errors are allowed.

Avoid using:

* any
* ts-ignore

unless absolutely necessary.

---

# Testing

Every public package should contain automated tests.

Tests should verify:

* runtime behavior
* public API
* edge cases
* accessibility when applicable

Packages should maintain healthy coverage.

---

# Storybook

Renderer packages should include Storybook stories.

Stories demonstrate:

* default usage
* variants
* disabled states
* controlled examples
* real-world examples

---

# Documentation

Each public package should include:

* README
* API documentation
* usage examples
* installation instructions (if necessary)

Documentation should stay synchronized with implementation.

---

# Versioning

Package versions are managed automatically.

Do not edit versions manually.

Semantic Release updates versions during the release process.

---

# Release Requirements

Before a package can be released, all checks must pass:

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

---

# Package Smoke Tests

Every published package must pass package smoke tests.

Smoke tests verify:

* installation from packed tarballs
* runtime imports
* public exports
* cross-package compatibility

Smoke tests should simulate real consumer usage.

---

# Backward Compatibility

Public APIs should remain stable.

Breaking changes require:

* a major version
* updated documentation
* migration notes when appropriate

Avoid unnecessary breaking changes.

---

# General Principles

Every package should follow these principles:

* Single responsibility
* Minimal public API
* Explicit exports
* Stable contracts
* Strong typing
* Consistent structure
* Comprehensive tests
* Clear documentation
* Predictable releases

Keep packages focused, reusable, and easy to maintain.
