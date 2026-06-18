# @romanbakurov/vellira-icons

Shared icon package for Vellira.

Icons are generated for both web and React Native entry points. Web consumers resolve the default web entry, while React Native can use the `react-native` export condition.

## Development

Generate icons:

```bash
pnpm --filter @romanbakurov/vellira-icons generate
```

Build icons:

```bash
pnpm --filter @romanbakurov/vellira-icons build
```

## Notes

- Source SVG assets live in `assets/`.
- Generated files live in `src/generated/`.
- The generator currently emits TSX-compatible icon files for native usage.
