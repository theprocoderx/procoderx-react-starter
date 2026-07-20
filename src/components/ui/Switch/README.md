# Switch

A production-ready, accessible, and theme-aware **Switch** component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The Switch component provides an accessible toggle control with controlled and uncontrolled support, multiple sizes, validation states, helper messages, and CSS variable-based theming.

---

## Features

- Native switch semantics
- Controlled & uncontrolled modes
- Multiple variants
- Multiple sizes
- Disabled & read-only states
- Required state
- Helper, error & success messages
- Keyboard accessible
- Screen reader friendly
- Theme-aware styling
- Ref forwarding
- CVA-powered variants

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

## Examples

### Controlled

```jsx
const [enabled, setEnabled] = useState(false);

<Switch aria-label='Notifications' checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />;
```

### Uncontrolled

```jsx
<Switch aria-label='Notifications' defaultChecked />
```

### Outline Variant

```jsx
<Switch variant='outline' aria-label='Notifications' />
```

### Large Size

```jsx
<Switch size='lg' aria-label='Notifications' />
```

### Disabled

```jsx
<Switch disabled aria-label='Notifications' />
```

### Read Only

```jsx
<Switch readOnly aria-label='Notifications' />
```

### Helper Message

```jsx
<Switch aria-label='Notifications' helperText='Receive email notifications.' />
```

### Error State

```jsx
<Switch aria-label='Notifications' invalid errorMessage='This setting is required.' />
```

### Success State

```jsx
<Switch aria-label='Notifications' success successMessage='Settings saved successfully.' />
```

---

## Props

| Prop             | Type                                    | Default     | Description                  |
| ---------------- | --------------------------------------- | ----------- | ---------------------------- |
| `variant`        | `"default" \| "outline"`                | `"default"` | Switch appearance            |
| `size`           | `"sm" \| "md" \| "lg"`                  | `"md"`      | Switch size                  |
| `checked`        | `boolean`                               | —           | Controlled state             |
| `defaultChecked` | `boolean`                               | `false`     | Initial uncontrolled state   |
| `disabled`       | `boolean`                               | `false`     | Disables interaction         |
| `readOnly`       | `boolean`                               | `false`     | Prevents state changes       |
| `required`       | `boolean`                               | `false`     | Marks the switch as required |
| `invalid`        | `boolean`                               | `false`     | Applies error styling        |
| `success`        | `boolean`                               | `false`     | Applies success styling      |
| `helperText`     | `string`                                | —           | Helper message               |
| `errorMessage`   | `string`                                | —           | Error message                |
| `successMessage` | `string`                                | —           | Success message              |
| `className`      | `string`                                | —           | Additional CSS classes       |
| `onChange`       | `(event) => void`                       | —           | Change event handler         |
| `...props`       | `InputHTMLAttributes<HTMLInputElement>` | —           | Native input attributes      |

### Available Variants

```text
default
outline
```

### Available Sizes

```text
sm
md (default)
lg
```

---

## Accessibility

The Switch component follows modern accessibility best practices.

- Native checkbox with `role="switch"`
- Keyboard accessible
- Screen reader friendly
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`
- Supports `aria-checked`
- Focus-visible styles
- Required and disabled support

Example:

```jsx
<Switch aria-label='Dark mode' />
```

---

## Testing

Unit tests cover:

- Rendering
- Accessibility
- Controlled & uncontrolled usage
- Keyboard & mouse interaction
- Variants
- Sizes
- Disabled & read-only states
- Helper messages
- Native props
- Ref forwarding

Run the tests:

```bash
npm test
```

or

```bash
npm run test
```

---

## File Structure

```text
Switch/
├── Switch.jsx
├── switchVariants.js
├── Switch.test.jsx
├── SwitchPlayground.jsx
├── README.md
└── index.js
```

---

## License

MIT License
