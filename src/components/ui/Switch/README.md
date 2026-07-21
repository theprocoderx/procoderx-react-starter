# Switch

A production-ready, accessible, and theme-aware Switch component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML switch behavior while providing consistent styling, validation states, helper text, accessibility, controlled and uncontrolled usage, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Controlled and uncontrolled usage
- Validation states
- Helper, error, and success messages
- Disabled and read-only states
- Required support
- Theme-aware styling
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Native HTML support
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Switch } from '@/components/ui';
```

Or directly:

```jsx
import Switch from '@/components/ui/Switch';
```

---

## Basic Usage

```jsx
<Switch aria-label='Enable notifications' />
```

---

## Variants

```jsx
<Switch
  variant="default"
  aria-label="Notifications"
/>

<Switch
  variant="outline"
  aria-label="Notifications"
/>
```

---

## Sizes

```jsx
<Switch
  size="sm"
  aria-label="Notifications"
/>

<Switch
  size="md"
  aria-label="Notifications"
/>

<Switch
  size="lg"
  aria-label="Notifications"
/>
```

---

## Validation

### Error

```jsx
<Switch invalid errorMessage='This setting is required.' aria-label='Notifications' />
```

### Success

```jsx
<Switch success successMessage='Settings saved successfully.' aria-label='Notifications' />
```

---

## Helper Text

```jsx
<Switch helperText='Receive email notifications.' aria-label='Notifications' />
```

---

## States

### Disabled

```jsx
<Switch disabled aria-label='Notifications' />
```

### Read Only

```jsx
<Switch readOnly aria-label='Notifications' />
```

### Required

```jsx
<Switch required aria-label='Notifications' />
```

---

## Controlled Usage

```jsx
const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} aria-label='Notifications' />;
```

---

## Uncontrolled Usage

```jsx
<Switch defaultChecked aria-label='Notifications' />
```

---

## With Label

```jsx
<Label htmlFor="notifications">
  Email Notifications
</Label>

<Switch
  id="notifications"
  helperText="Receive product updates."
/>
```

---

## Native HTML Support

Switch forwards all native `<input type="checkbox">` attributes, including:

- `checked`
- `defaultChecked`
- `disabled`
- `required`
- `name`
- `value`
- `onChange`
- `onFocus`
- `onBlur`
- `tabIndex`
- `autoFocus`
- and all other native checkbox attributes.

---

## Props

| Prop             | Type                                    | Default     | Description                            |
| ---------------- | --------------------------------------- | ----------- | -------------------------------------- |
| `variant`        | `Variant`                               | `"default"` | Visual style                           |
| `size`           | `Size`                                  | `"md"`      | Switch size                            |
| `checked`        | `boolean`                               | —           | Controlled state                       |
| `defaultChecked` | `boolean`                               | `false`     | Initial uncontrolled state             |
| `disabled`       | `boolean`                               | `false`     | Disables interaction                   |
| `readOnly`       | `boolean`                               | `false`     | Prevents state changes                 |
| `required`       | `boolean`                               | `false`     | Marks the switch as required           |
| `invalid`        | `boolean`                               | `false`     | Displays the error state               |
| `success`        | `boolean`                               | `false`     | Displays the success state             |
| `helperText`     | `ReactNode`                             | —           | Helper text displayed below the switch |
| `errorMessage`   | `ReactNode`                             | —           | Error message                          |
| `successMessage` | `ReactNode`                             | —           | Success message                        |
| `className`      | `string`                                | —           | Additional CSS classes                 |
| `...props`       | `InputHTMLAttributes<HTMLInputElement>` | —           | Native checkbox attributes             |

---

## Available Values

### Variants

```text
default
outline
```

### Sizes

```text
sm
md
lg
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native checkbox with `role="switch"`
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`
- Supports `aria-checked`

Every Switch should have an accessible name using one of the following:

- `<Label />`
- `aria-label`
- `aria-labelledby`

Example:

```jsx
<Label htmlFor="dark-mode">
  Dark Mode
</Label>

<Switch id="dark-mode" />
```

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Controlled usage
- Uncontrolled usage
- Disabled state
- Read-only state
- Validation states
- Helper text
- Accessibility
- Keyboard interaction
- Mouse interaction
- Ref forwarding
- Class merging
- Native HTML attributes

Run tests:

```bash
npm test
```

or

```bash
npm run test
```

---

## Folder Structure

```text
src/
└── components/
    └── ui/
        └── Switch/
            ├── Switch.jsx
            ├── switchVariants.js
            ├── Switch.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Checkbox
- Radio
- Label
- Input
- Textarea
- Select

---

## License

Part of the **ProCoderX React Starter** project.
