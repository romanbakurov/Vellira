# Flux UI Storybook

Web Storybook app for `@romanbakurov/flux-ui-web`.

Use this app to develop, document, and visually review web components.

## Development

From the workspace root:

```bash
pnpm --filter @flux-ui/storybook dev
```

Storybook runs on port `6006`.

## Build

```bash
pnpm --filter @flux-ui/storybook build-storybook
```

## Notes

- Uses Storybook React Vite.
- Uses Chromatic for hosted visual review.
- Fonts used by Storybook are served from `apps/storybook/public/fonts`.
