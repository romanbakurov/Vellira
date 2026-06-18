# Native Playground

Expo app for developing and testing `@romanbakurov/vellira-native`.

The app can run as a normal Expo playground or with React Native Storybook enabled. Native Storybook reads stories from `packages/vellira-native/src/**/*.stories.@(ts|tsx)`, so package-level stories appear here automatically after running the Storybook generation step.

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

If stories are added or removed, regenerate the React Native Storybook registry:

```bash
pnpm --filter native-playground exec sb-rn-get-stories
```

## Testing

Native package unit tests run outside the simulator:

```bash
pnpm --filter @romanbakurov/vellira-native test
```

The playground itself is mainly for manual Expo and on-device Storybook checks.

## Notes

- Built with Expo `56`.
- Uses React Native `0.85`.
- Consumes `@romanbakurov/vellira-native` from the workspace.
- Native stories cover Button, Checkbox, Input, FormField, RadioGroup, Select, Dropdown, Tabs, Tooltip, and Modal.
