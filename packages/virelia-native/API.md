# Virelia Native Component API

API reference for `@romanbakurov/virelia-native`.

Import public components from the package root:

```tsx
import { Button, Input, Modal, Select } from '@romanbakurov/virelia-native';
```

The native package uses React Native `StyleSheet` styles and consumes shared design tokens from `@romanbakurov/virelia-tokens`.

## API Conventions

- Shared base contracts come from `@romanbakurov/virelia-types`.
- Native-only props such as `onPress`, `style`, `textStyle`, `ViewStyle`, and `TextStyle` stay in the native package.
- Text and icons that render React elements use `ReactNode`.
- Components that support both controlled and uncontrolled usage expose `value` or `checked` plus `defaultValue` or `defaultChecked`.
- `disabled` prevents user interaction where the component supports it.
- `error` is a display prop. Validation still belongs to the consuming app.

## Shared Types

| Type                | Values                                                                      |
| ------------------- | --------------------------------------------------------------------------- |
| `ButtonColor`       | `'primary'`, `'secondary'`, `'danger'`                                      |
| `ButtonSize`        | `'sm'`, `'md'`, `'lg'`                                                      |
| `InputSize`         | `'sm'`, `'md'`, `'lg'`                                                      |
| `InputType`         | `'text'`, `'email'`, `'password'`, `'number'`, `'search'`, `'tel'`, `'url'` |
| `Orientation`       | `'horizontal'`, `'vertical'`                                                |
| `TextWrap`          | `'nowrap'`, `'wrap'`, `'truncate'`                                          |
| `TabsAppearance`    | `'default'`, `'underline'`, `'pills'`                                       |
| `FloatingPlacement` | `'top'`, `'bottom'`, `'left'`, `'right'`                                    |

`TooltipDelay` uses this shape:

```ts
type TooltipDelay = {
  open?: number;
  close?: number;
};
```

## Button

Pressable action component with variants and sizes.

```tsx
import { Button } from '@romanbakurov/virelia-native';

<Button variant='primary' size='md' onPress={handleSave}>
  Save
</Button>;
```

| Prop       | Type          | Required | Description                 |
| ---------- | ------------- | -------- | --------------------------- |
| `children` | `ReactNode`   | Yes      | Button content.             |
| `variant`  | `ButtonColor` | No       | Visual color variant.       |
| `size`     | `ButtonSize`  | No       | Button size.                |
| `disabled` | `boolean`     | No       | Disables interaction.       |
| `onPress`  | `() => void`  | No       | React Native press handler. |

## Badge

Small status marker.

```tsx
import { Badge } from '@romanbakurov/virelia-native';

<Badge />;
```

| Prop       | Type      | Required | Description                       |
| ---------- | --------- | -------- | --------------------------------- |
| `disabled` | `boolean` | No       | Renders the disabled badge state. |

## Checkbox

Boolean input with controlled and uncontrolled modes.

```tsx
import { Checkbox } from '@romanbakurov/virelia-native';

<Checkbox
  checked={accepted}
  onCheckedChange={setAccepted}
  label='Accept terms'
/>;
```

| Prop              | Type                         | Required | Description                                   |
| ----------------- | ---------------------------- | -------- | --------------------------------------------- |
| `checked`         | `boolean`                    | No       | Controlled checked state.                     |
| `defaultChecked`  | `boolean`                    | No       | Initial checked state for uncontrolled usage. |
| `onCheckedChange` | `(checked: boolean) => void` | No       | Called when the user changes the state.       |
| `disabled`        | `boolean`                    | No       | Disables interaction.                         |
| `label`           | `string`                     | No       | Text label rendered next to the control.      |
| `children`        | `ReactNode`                  | No       | Custom label/content.                         |
| `style`           | `ViewStyle`                  | No       | Extra container style.                        |

## Input

Labeled native text input with shared value contract.

```tsx
import { Input } from '@romanbakurov/virelia-native';

<Input
  label='Email'
  value={email}
  onChange={setEmail}
  type='email'
  placeholder='name@example.com'
/>;
```

`Input` also accepts React Native `TextInputProps`, except `value`, `onChange`, `onChangeText`, and `editable`, which are controlled by the Virelia API.

| Prop             | Type                      | Required | Description                                |
| ---------------- | ------------------------- | -------- | ------------------------------------------ |
| `label`          | `string`                  | Yes      | Visible label.                             |
| `value`          | `string`                  | Yes      | Controlled value.                          |
| `onChange`       | `(value: string) => void` | Yes      | Called with the next value.                |
| `placeholder`    | `string`                  | No       | Placeholder text.                          |
| `size`           | `InputSize`               | No       | Input size.                                |
| `type`           | `InputType`               | No       | Semantic input type used by the component. |
| `error`          | `string`                  | No       | Error message rendered under the input.    |
| `required`       | `boolean`                 | No       | Marks the field as required.               |
| `disabled`       | `boolean`                 | No       | Disables the input.                        |
| `containerStyle` | `ViewStyle`               | No       | Extra style for the field container.       |
| `inputStyle`     | `TextStyle`               | No       | Extra style for the input element.         |

## FormField

Layout helper for labels, errors, and custom field controls.

```tsx
import { FormField, Input } from '@romanbakurov/virelia-native';

<FormField label='Email' error={error}>
  <Input label='Email' value={email} onChange={setEmail} />
</FormField>;
```

| Prop         | Type        | Required | Description                       |
| ------------ | ----------- | -------- | --------------------------------- |
| `children`   | `ReactNode` | Yes      | Field control or custom content.  |
| `label`      | `string`    | No       | Field label.                      |
| `error`      | `string`    | No       | Error message.                    |
| `required`   | `boolean`   | No       | Marks the field as required.      |
| `disabled`   | `boolean`   | No       | Renders the disabled field state. |
| `style`      | `ViewStyle` | No       | Extra container style.            |
| `labelStyle` | `TextStyle` | No       | Extra label text style.           |
| `errorStyle` | `TextStyle` | No       | Extra error text style.           |

## RadioGroup

Single-selection group with controlled and uncontrolled modes.

```tsx
import { RadioGroup } from '@romanbakurov/virelia-native';

<RadioGroup
  label='Plan'
  defaultValue='basic'
  orientation='vertical'
  options={[
    { value: 'basic', label: 'Basic' },
    { value: 'pro', label: 'Pro' },
  ]}
/>;
```

### RadioGroup Props

| Prop           | Type                      | Required | Description                           |
| -------------- | ------------------------- | -------- | ------------------------------------- |
| `options`      | `RadioOption[]`           | Yes      | Options rendered by the group.        |
| `defaultValue` | `string`                  | Yes      | Initial value for uncontrolled usage. |
| `value`        | `string`                  | No       | Controlled selected value.            |
| `onChange`     | `(value: string) => void` | No       | Called when selection changes.        |
| `label`        | `string`                  | No       | Group label.                          |
| `orientation`  | `Orientation`             | No       | Layout direction.                     |
| `error`        | `string`                  | No       | Error message.                        |
| `required`     | `boolean`                 | No       | Marks the group as required.          |
| `disabled`     | `boolean`                 | No       | Disables the whole group.             |
| `style`        | `ViewStyle`               | No       | Extra group style.                    |
| `optionStyle`  | `ViewStyle`               | No       | Extra option style.                   |
| `labelStyle`   | `TextStyle`               | No       | Extra label text style.               |

### RadioOption

| Prop       | Type      | Required | Description           |
| ---------- | --------- | -------- | --------------------- |
| `value`    | `string`  | Yes      | Option value.         |
| `label`    | `string`  | Yes      | Visible option label. |
| `disabled` | `boolean` | No       | Disables this option. |

## Select

Single-selection native dropdown field.

```tsx
import { Select } from '@romanbakurov/virelia-native';

<Select
  label='Country'
  value={country}
  onChange={setCountry}
  placeholder='Choose country'
  options={[
    { value: 'fr', label: 'France' },
    { value: 'us', label: 'United States' },
  ]}
/>;
```

### Select Props

| Prop           | Type                      | Required | Description                                    |
| -------------- | ------------------------- | -------- | ---------------------------------------------- |
| `options`      | `SelectOption[]`          | Yes      | Options rendered in the dropdown.              |
| `value`        | `string`                  | No       | Controlled selected value.                     |
| `defaultValue` | `string`                  | No       | Initial selected value for uncontrolled usage. |
| `onChange`     | `(value: string) => void` | No       | Called when the user selects an option.        |
| `label`        | `string`                  | No       | Visible field label.                           |
| `placeholder`  | `string`                  | No       | Text shown when no value is selected.          |
| `error`        | `string`                  | No       | Error message.                                 |
| `required`     | `boolean`                 | No       | Marks the field as required.                   |
| `disabled`     | `boolean`                 | No       | Disables interaction.                          |
| `style`        | `ViewStyle`               | No       | Extra container style.                         |
| `triggerStyle` | `ViewStyle`               | No       | Extra trigger style.                           |
| `optionStyle`  | `ViewStyle`               | No       | Extra option style.                            |
| `textStyle`    | `TextStyle`               | No       | Extra text style.                              |

### SelectOption

| Prop       | Type      | Required | Description           |
| ---------- | --------- | -------- | --------------------- |
| `value`    | `string`  | Yes      | Option value.         |
| `label`    | `string`  | Yes      | Visible option label. |
| `disabled` | `boolean` | No       | Disables this option. |

## Dropdown

Native menu component with item, group, and separator entries.

```tsx
import { Dropdown } from '@romanbakurov/virelia-native';

<Dropdown
  label='Actions'
  items={[
    { type: 'item', value: 'edit', label: 'Edit' },
    { type: 'separator' },
    { type: 'item', value: 'delete', label: 'Delete', danger: true },
  ]}
  onSelect={handleSelect}
/>;
```

### Dropdown Props

| Prop           | Type                      | Required | Description                          |
| -------------- | ------------------------- | -------- | ------------------------------------ |
| `items`        | `DropdownItem[]`          | Yes      | Menu model.                          |
| `onSelect`     | `(value: string) => void` | No       | Called when a menu item is selected. |
| `disabled`     | `boolean`                 | No       | Disables the trigger.                |
| `label`        | `string`                  | No       | Default trigger label.               |
| `trigger`      | `ReactNode`               | No       | Custom trigger content.              |
| `style`        | `ViewStyle`               | No       | Extra root style.                    |
| `triggerStyle` | `ViewStyle`               | No       | Extra trigger style.                 |
| `itemStyle`    | `ViewStyle`               | No       | Extra item style.                    |
| `textStyle`    | `TextStyle`               | No       | Extra text style.                    |

### Dropdown Items

| Shape               | Required Props                    | Optional Props                                   | Description                                   |
| ------------------- | --------------------------------- | ------------------------------------------------ | --------------------------------------------- |
| `DropdownMenuItem`  | `value`, `label`                  | `type`, `disabled`, `icon`, `danger`, `textWrap` | Selectable item. `type` defaults to `'item'`. |
| `DropdownGroup`     | `type: 'group'`, `label`, `items` | None                                             | Labeled group of menu entries.                |
| `DropdownSeparator` | `type: 'separator'`               | None                                             | Visual separator.                             |

## Tabs

Compound tab navigation for native screens.

```tsx
import { Tabs } from '@romanbakurov/virelia-native';

<Tabs defaultActiveIndex={0} orientation='horizontal' appearance='underline'>
  <Tabs.List>
    <Tabs.Tab index={0}>Overview</Tabs.Tab>
    <Tabs.Tab index={1}>Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel index={0}>Overview content</Tabs.Panel>
  <Tabs.Panel index={1}>Settings content</Tabs.Panel>
</Tabs>;
```

### Tabs Props

| Prop                 | Type             | Required | Description                                        |
| -------------------- | ---------------- | -------- | -------------------------------------------------- |
| `children`           | `ReactNode`      | Yes      | `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel` content. |
| `orientation`        | `Orientation`    | Yes      | Layout orientation.                                |
| `defaultActiveIndex` | `number`         | No       | Initially active tab index.                        |
| `appearance`         | `TabsAppearance` | No       | Visual style.                                      |
| `style`              | `ViewStyle`      | No       | Extra root style.                                  |

### Tabs.List Props

| Prop       | Type        | Required | Description       |
| ---------- | ----------- | -------- | ----------------- |
| `children` | `ReactNode` | Yes      | Tab buttons.      |
| `style`    | `ViewStyle` | No       | Extra list style. |

### Tabs.Tab Props

| Prop        | Type        | Required | Description                                  |
| ----------- | ----------- | -------- | -------------------------------------------- |
| `index`     | `number`    | Yes      | Tab index used to connect the tab and panel. |
| `children`  | `ReactNode` | Yes      | Tab label.                                   |
| `disabled`  | `boolean`   | No       | Disables this tab.                           |
| `icon`      | `ReactNode` | No       | Icon rendered inside the tab.                |
| `style`     | `ViewStyle` | No       | Extra tab style.                             |
| `textStyle` | `TextStyle` | No       | Extra label text style.                      |

### Tabs.Panel Props

| Prop       | Type        | Required | Description                      |
| ---------- | ----------- | -------- | -------------------------------- |
| `index`    | `number`    | Yes      | Panel index matching `Tabs.Tab`. |
| `children` | `ReactNode` | No       | Panel content.                   |
| `style`    | `ViewStyle` | No       | Extra panel style.               |

## Tooltip

Floating helper text around a native target.

```tsx
import { Tooltip, Button } from '@romanbakurov/virelia-native';

<Tooltip content='More actions' placement='top'>
  <Button>More</Button>
</Tooltip>;
```

| Prop          | Type                | Required | Description                           |
| ------------- | ------------------- | -------- | ------------------------------------- |
| `content`     | `ReactNode`         | Yes      | Tooltip content.                      |
| `children`    | `ReactNode`         | Yes      | Trigger element.                      |
| `placement`   | `FloatingPlacement` | No       | Preferred tooltip placement.          |
| `delay`       | `TooltipDelay`      | No       | Open and close delay in milliseconds. |
| `disabled`    | `boolean`           | No       | Prevents the tooltip from opening.    |
| `maxWidth`    | `number`            | No       | Maximum tooltip width.                |
| `style`       | `ViewStyle`         | No       | Extra root style.                     |
| `bubbleStyle` | `ViewStyle`         | No       | Extra tooltip bubble style.           |
| `textStyle`   | `TextStyle`         | No       | Extra tooltip text style.             |

## Modal

Native dialog with backdrop close behavior and compound content sections.

```tsx
import { Button, Modal } from '@romanbakurov/virelia-native';

<Modal isOpen={isOpen} onClose={closeModal}>
  <Modal.Content>
    <Modal.Header title='Delete file' />
    <Modal.Body>Are you sure you want to delete this file?</Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onPress={closeModal}>
        Cancel
      </Button>
    </Modal.Footer>
  </Modal.Content>
</Modal>;
```

### Modal Props

| Prop              | Type         | Required | Description                                       |
| ----------------- | ------------ | -------- | ------------------------------------------------- |
| `isOpen`          | `boolean`    | Yes      | Controls dialog visibility.                       |
| `onClose`         | `() => void` | Yes      | Called when the modal requests to close.          |
| `children`        | `ReactNode`  | Yes      | Modal content.                                    |
| `title`           | `string`     | No       | Optional title for simple modal usage.            |
| `closeOnBackdrop` | `boolean`    | No       | Allows closing by pressing the backdrop.          |
| `closeOnEsc`      | `boolean`    | No       | Shared contract prop. Useful for parity with web. |
| `closeOnClick`    | `boolean`    | No       | Deprecated alias kept for compatibility.          |
| `overlayStyle`    | `ViewStyle`  | No       | Extra overlay style.                              |
| `contentStyle`    | `ViewStyle`  | No       | Extra content style.                              |

### Modal Compound Components

| Component       | Props                                                                                  | Description            |
| --------------- | -------------------------------------------------------------------------------------- | ---------------------- |
| `Modal.Content` | `children?: ReactNode`, `style?: ViewStyle`                                            | Main dialog surface.   |
| `Modal.Header`  | `children?: ReactNode`, `title?: string`, `style?: ViewStyle`, `textStyle?: TextStyle` | Header/title section.  |
| `Modal.Body`    | `children?: ReactNode`, `style?: ViewStyle`                                            | Body section.          |
| `Modal.Footer`  | `children?: ReactNode`, `style?: ViewStyle`                                            | Action/footer section. |

### Modal Accessibility

Provide a clear title and body copy for screen reader users. The native implementation exposes modal structure and close behavior, while the consuming app remains responsible for meaningful labels and actions.
