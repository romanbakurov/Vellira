# Virelia Web Component API

API reference for `@romanbakurov/virelia-web`.

Import the package styles once in your application entry point:

```tsx
import '@romanbakurov/virelia-web/styles';
```

Then import public components from the package root:

```tsx
import { Button, Input, Modal, Select } from '@romanbakurov/virelia-web';
```

## API Conventions

- Shared base contracts come from `@romanbakurov/virelia-types`.
- Web-only props such as `className`, `onClick`, DOM ids, and browser accessibility attributes stay in the web package.
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

Clickable action component with variants, sizes, optional icons, and full-width layout support.

```tsx
import { Button } from '@romanbakurov/virelia-web';

<Button variant='primary' size='md' onClick={handleSave}>
  Save
</Button>;
```

| Prop        | Type              | Required | Description                                                   |
| ----------- | ----------------- | -------- | ------------------------------------------------------------- |
| `children`  | `ReactNode`       | Yes      | Button content.                                               |
| `variant`   | `ButtonColor`     | No       | Visual color variant.                                         |
| `size`      | `ButtonSize`      | No       | Button size.                                                  |
| `disabled`  | `boolean`         | No       | Disables interaction.                                         |
| `onClick`   | `() => void`      | No       | Click handler for web.                                        |
| `leftIcon`  | `ReactNode`       | No       | Icon rendered before content.                                 |
| `rightIcon` | `ReactNode`       | No       | Icon rendered after content.                                  |
| `fullWidth` | `boolean`         | No       | Makes the button fill its container width.                    |
| `ariaLabel` | `string \| false` | No       | Accessible label for icon-only or visually ambiguous buttons. |
| `className` | `string`          | No       | Extra CSS class for the root element.                         |

## Badge

Small status marker.

```tsx
import { Badge } from '@romanbakurov/virelia-web';

<Badge />;
```

| Prop       | Type      | Required | Description                       |
| ---------- | --------- | -------- | --------------------------------- |
| `disabled` | `boolean` | No       | Renders the disabled badge state. |

## Checkbox

Boolean input with controlled and uncontrolled modes.

```tsx
import { Checkbox } from '@romanbakurov/virelia-web';

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
| `className`       | `string`                     | No       | Extra CSS class for the root element.         |

## Input

Labeled text input with shared value contract and web input attributes.

```tsx
import { Input } from '@romanbakurov/virelia-web';

<Input
  label='Email'
  value={email}
  onChange={setEmail}
  type='email'
  placeholder='name@example.com'
/>;
```

| Prop           | Type                      | Required | Description                                  |
| -------------- | ------------------------- | -------- | -------------------------------------------- |
| `label`        | `string`                  | Yes      | Visible label.                               |
| `value`        | `string`                  | Yes      | Controlled value.                            |
| `onChange`     | `(value: string) => void` | Yes      | Called with the next value.                  |
| `placeholder`  | `string`                  | No       | Placeholder text.                            |
| `size`         | `InputSize`               | No       | Input size.                                  |
| `type`         | `InputType`               | No       | HTML input type.                             |
| `error`        | `string`                  | No       | Error message rendered under the input.      |
| `id`           | `string`                  | No       | Input id. Generated internally when omitted. |
| `autoComplete` | `string`                  | No       | HTML autocomplete value.                     |
| `required`     | `boolean`                 | No       | Marks the field as required.                 |
| `disabled`     | `boolean`                 | No       | Disables the input.                          |
| `className`    | `string`                  | No       | Extra CSS class for the root element.        |

## FormField

Layout helper for labels, errors, and custom field controls.

```tsx
import { FormField, Input } from '@romanbakurov/virelia-web';

<FormField label='Email' error={error}>
  <Input label='Email' value={email} onChange={setEmail} />
</FormField>;
```

| Prop       | Type        | Required | Description                                    |
| ---------- | ----------- | -------- | ---------------------------------------------- |
| `children` | `ReactNode` | Yes      | Field control or custom content.               |
| `id`       | `string`    | No       | Id used to connect the label with the control. |
| `label`    | `string`    | No       | Field label.                                   |
| `error`    | `string`    | No       | Error message.                                 |
| `required` | `boolean`   | No       | Marks the field as required.                   |
| `disabled` | `boolean`   | No       | Renders the disabled field state.              |

## RadioGroup

Single-selection group with controlled and uncontrolled modes.

```tsx
import { RadioGroup } from '@romanbakurov/virelia-web';

<RadioGroup
  name='plan'
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
| `name`         | `string`                  | Yes      | Radio input name.                     |
| `options`      | `RadioOption[]`           | Yes      | Options rendered by the group.        |
| `defaultValue` | `string`                  | Yes      | Initial value for uncontrolled usage. |
| `value`        | `string`                  | No       | Controlled selected value.            |
| `onChange`     | `(value: string) => void` | No       | Called when selection changes.        |
| `label`        | `string`                  | No       | Group label.                          |
| `orientation`  | `Orientation`             | Yes      | Layout direction.                     |
| `error`        | `string`                  | No       | Error message.                        |
| `required`     | `boolean`                 | No       | Marks the group as required.          |
| `disabled`     | `boolean`                 | No       | Disables the whole group.             |
| `className`    | `string`                  | No       | Extra CSS class for the root element. |

### RadioOption

| Prop       | Type      | Required | Description           |
| ---------- | --------- | -------- | --------------------- |
| `value`    | `string`  | Yes      | Option value.         |
| `label`    | `string`  | Yes      | Visible option label. |
| `disabled` | `boolean` | No       | Disables this option. |

## Select

Single-selection dropdown field.

```tsx
import { Select } from '@romanbakurov/virelia-web';

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
| `id`           | `string`                  | No       | Trigger id.                                    |
| `name`         | `string`                  | No       | Field name.                                    |
| `error`        | `string`                  | No       | Error message.                                 |
| `required`     | `boolean`                 | No       | Marks the field as required.                   |
| `disabled`     | `boolean`                 | No       | Disables interaction.                          |
| `className`    | `string`                  | No       | Extra CSS class for the root element.          |

### SelectOption

| Prop       | Type      | Required | Description           |
| ---------- | --------- | -------- | --------------------- |
| `value`    | `string`  | Yes      | Option value.         |
| `label`    | `string`  | Yes      | Visible option label. |
| `disabled` | `boolean` | No       | Disables this option. |

## Dropdown

Menu component with item, group, and separator entries.

```tsx
import { Dropdown } from '@romanbakurov/virelia-web';

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

| Prop                | Type                      | Required | Description                               |
| ------------------- | ------------------------- | -------- | ----------------------------------------- |
| `items`             | `DropdownItem[]`          | Yes      | Menu model.                               |
| `onSelect`          | `(value: string) => void` | No       | Called when a menu item is selected.      |
| `disabled`          | `boolean`                 | No       | Disables the trigger.                     |
| `label`             | `string`                  | No       | Default trigger label.                    |
| `trigger`           | `ReactNode`               | No       | Custom trigger content.                   |
| `icon`              | `ReactNode`               | No       | Icon rendered in the default trigger.     |
| `placement`         | `Placement`               | No       | Floating UI menu placement.               |
| `rotateAngle`       | `number`                  | No       | Rotation angle for the trigger arrow.     |
| `matchTriggerWidth` | `boolean`                 | No       | Makes the menu match the trigger width.   |
| `textWrap`          | `TextWrap`                | No       | Default text wrapping behavior for items. |
| `className`         | `string`                  | No       | Extra CSS class for the root element.     |

### Dropdown Items

| Shape               | Required Props                    | Optional Props                                   | Description                                   |
| ------------------- | --------------------------------- | ------------------------------------------------ | --------------------------------------------- |
| `DropdownMenuItem`  | `value`, `label`                  | `type`, `disabled`, `icon`, `danger`, `textWrap` | Selectable item. `type` defaults to `'item'`. |
| `DropdownGroup`     | `type: 'group'`, `label`, `items` | None                                             | Labeled group of menu entries.                |
| `DropdownSeparator` | `type: 'separator'`               | None                                             | Visual separator.                             |

## Tabs

Compound tab navigation with keyboard support.

```tsx
import { Tabs } from '@romanbakurov/virelia-web';

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
| `children`           | `ReactNode`      | No       | `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel` content. |
| `orientation`        | `Orientation`    | Yes      | Keyboard and layout orientation.                   |
| `defaultActiveIndex` | `number`         | No       | Initially active tab index.                        |
| `appearance`         | `TabsAppearance` | No       | Visual style.                                      |
| `className`          | `string`         | No       | Extra CSS class for the root element.              |

### Tabs.List Props

| Prop        | Type        | Required | Description      |
| ----------- | ----------- | -------- | ---------------- |
| `children`  | `ReactNode` | No       | Tab buttons.     |
| `className` | `string`    | No       | Extra CSS class. |

### Tabs.Tab Props

| Prop        | Type        | Required | Description                                  |
| ----------- | ----------- | -------- | -------------------------------------------- |
| `index`     | `number`    | Yes      | Tab index used to connect the tab and panel. |
| `children`  | `ReactNode` | No       | Tab label.                                   |
| `disabled`  | `boolean`   | No       | Disables this tab.                           |
| `className` | `string`    | No       | Extra CSS class.                             |

### Tabs.Panel Props

| Prop        | Type        | Required | Description                      |
| ----------- | ----------- | -------- | -------------------------------- |
| `index`     | `number`    | Yes      | Panel index matching `Tabs.Tab`. |
| `children`  | `ReactNode` | No       | Panel content.                   |
| `className` | `string`    | No       | Extra CSS class.                 |

## Tooltip

Floating helper text that appears around a target element.

```tsx
import { Tooltip, Button } from '@romanbakurov/virelia-web';

<Tooltip content='More actions' placement='top' className=''>
  <Button ariaLabel='More actions'>...</Button>
</Tooltip>;
```

| Prop        | Type                | Required | Description                           |
| ----------- | ------------------- | -------- | ------------------------------------- |
| `content`   | `ReactNode`         | Yes      | Tooltip content.                      |
| `children`  | `ReactNode`         | Yes      | Trigger element.                      |
| `placement` | `FloatingPlacement` | No       | Preferred tooltip placement.          |
| `delay`     | `TooltipDelay`      | No       | Open and close delay in milliseconds. |
| `disabled`  | `boolean`           | No       | Prevents the tooltip from opening.    |
| `maxWidth`  | `number \| string`  | No       | Maximum tooltip width.                |
| `className` | `string`            | Yes      | Extra CSS class for the tooltip root. |

## Modal

Accessible dialog with backdrop, keyboard close behavior, and compound content sections.

```tsx
import { Button, Modal } from '@romanbakurov/virelia-web';

<Modal isOpen={isOpen} onClose={closeModal}>
  <Modal.Content>
    <Modal.Header>Delete file</Modal.Header>
    <Modal.Body>Are you sure you want to delete this file?</Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={closeModal}>
        Cancel
      </Button>
    </Modal.Footer>
  </Modal.Content>
</Modal>;
```

### Modal Props

| Prop              | Type         | Required | Description                              |
| ----------------- | ------------ | -------- | ---------------------------------------- |
| `isOpen`          | `boolean`    | Yes      | Controls dialog visibility.              |
| `onClose`         | `() => void` | Yes      | Called when the modal requests to close. |
| `children`        | `ReactNode`  | Yes      | Modal content.                           |
| `closeOnBackdrop` | `boolean`    | No       | Allows closing by clicking the backdrop. |
| `closeOnEsc`      | `boolean`    | No       | Allows closing with the Escape key.      |
| `closeOnClick`    | `boolean`    | No       | Deprecated alias kept for compatibility. |

### Modal Compound Components

| Component       | Props                  | Description            |
| --------------- | ---------------------- | ---------------------- |
| `Modal.Content` | `children?: ReactNode` | Main dialog surface.   |
| `Modal.Header`  | `children?: ReactNode` | Header/title section.  |
| `Modal.Body`    | `children?: ReactNode` | Body section.          |
| `Modal.Footer`  | `children?: ReactNode` | Action/footer section. |

### Modal Accessibility

Use `Modal.Header` for a visible title and `Modal.Body` for descriptive content. The web implementation wires dialog semantics and keyboard behavior inside the component, while the consuming app remains responsible for meaningful text and focusable actions.
