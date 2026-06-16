# Virelia Storybook

Web Storybook app for `@romanbakurov/virelia-web`.

Use this app to develop, document, and visually review web components.

## Development

From the workspace root:

```bash
pnpm --filter @virelia/storybook dev
```

Storybook runs on port `6006`.

## Build

```bash
pnpm --filter @virelia/storybook build-storybook
```

## Notes

- Uses Storybook React Vite.
- Uses Chromatic for hosted visual review.
- Fonts used by Storybook are served from `apps/storybook/public/fonts`.
