# Native Playground

Expo app for developing and testing `@romanbakurov/virelia-native`.

The app can run as a normal Expo playground or with React Native Storybook enabled.

## Start

```bash
pnpm --filter native-playground start
```

## Platforms

```bash
pnpm --filter native-playground ios
pnpm --filter native-playground android
pnpm --filter native-playground web
```

## Native Storybook

```bash
pnpm --filter native-playground storybook:ios
pnpm --filter native-playground storybook:android
```

## Notes

- Built with Expo `56`.
- Uses React Native `0.85`.
- Consumes `@romanbakurov/virelia-native` from the workspace.
