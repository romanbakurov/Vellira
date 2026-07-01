# Native Playground

Expo app for developing and testing `@romanbakurov/vellira-native`.

The app runs as a normal Expo playground for `@romanbakurov/vellira-native`. Use `apps/native-storybook` for on-device React Native Storybook.

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
pnpm --filter native-storybook ios
pnpm --filter native-storybook android
```

If stories are added or removed, regenerate the React Native Storybook registry:

```bash
pnpm --filter native-storybook exec sb-rn-get-stories
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
