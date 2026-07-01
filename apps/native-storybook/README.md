# Native Storybook

Expo app for running on-device React Native Storybook for `@romanbakurov/vellira-native`.

Native Storybook reads stories from `packages/vellira-native/src/**/*.stories.@(ts|tsx)`, so package-level stories appear here automatically after running the Storybook generation step.

## Start

```bash
pnpm --filter native-storybook start
```

## Platforms

```bash
pnpm --filter native-storybook ios
pnpm --filter native-storybook android
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
