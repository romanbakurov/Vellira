# Virelia Storybook

Web Storybook app for `@romanbakurov/virelia-web`.

Use this app to develop, document, and visually review web components. Web stories live next to components in `packages/virelia-web/src/**/*.stories.tsx`.

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

## Tests And Visual Review

Component behavior tests live in `packages/virelia-web/src/**/*.test.tsx` and run with:

```bash
pnpm --filter @romanbakurov/virelia-web test
```

Chromatic publishes the hosted visual review build from this Storybook app.

## Notes

- Uses Storybook React Vite.
- Uses Chromatic for hosted visual review.
- Fonts used by Storybook are served from `apps/storybook/public/fonts`.
