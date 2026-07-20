# Checkbox Component

A reusable, accessible, and production-ready checkbox component for the **ProCoderX React Starter**. It supports controlled and uncontrolled usage, validation states, helper messages, multiple sizes, variants, and the indeterminate state.

---

## Features

- Native HTML checkbox
- Built with `forwardRef`
- Controlled and uncontrolled modes
- Indeterminate state
- Multiple variants and sizes
- Helper, error, and success messages
- Disabled and required states
- Auto-generated IDs
- Ref forwarding
- Accessibility-first design
- Fully unit tested

---

## Import

```jsx
import { Checkbox } from '@/components/ui';
```

---

## Basic Usage

```jsx
<Label htmlFor="terms">
  Accept Terms
</Label>

<Checkbox id="terms" />
```

---

## Controlled Example

```jsx
const [checked, setChecked] = useState(false);

<Label htmlFor="newsletter">
  Newsletter
</Label>

<Checkbox
  id="newsletter"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```

---

## Uncontrolled Example

```jsx
<Label htmlFor="remember">
  Remember Me
</Label>

<Checkbox
  id="remember"
  defaultChecked
/>
```

---

## Validation Example

```jsx
<Label htmlFor="privacy" required>
  Privacy Policy
</Label>

<Checkbox
  id="privacy"
  required
  invalid
  errorMessage="You must accept the privacy policy."
/>
```

Helper and success messages are supported using `helperText` and `successMessage`.

---

## Props

| Prop               | Type                     | Default        | Description                          |
| ------------------ | ------------------------ | -------------- | ------------------------------------ |
| `id`               | `string`                 | Auto-generated | Checkbox id                          |
| `name`             | `string`                 | —              | Input name                           |
| `value`            | `string`                 | —              | Input value                          |
| `checked`          | `boolean`                | —              | Controlled state                     |
| `defaultChecked`   | `boolean`                | `false`        | Uncontrolled state                   |
| `onChange`         | `(event) => void`        | —              | Change handler                       |
| `disabled`         | `boolean`                | `false`        | Disables the checkbox                |
| `required`         | `boolean`                | `false`        | Marks the field as required          |
| `readOnly`         | `boolean`                | `false`        | Makes the checkbox read-only         |
| `indeterminate`    | `boolean`                | `false`        | Displays the indeterminate state     |
| `variant`          | `"default" \| "outline"` | `"default"`    | Visual style                         |
| `size`             | `"sm" \| "md" \| "lg"`   | `"md"`         | Checkbox size                        |
| `invalid`          | `boolean`                | `false`        | Error state                          |
| `success`          | `boolean`                | `false`        | Success state                        |
| `helperText`       | `string`                 | —              | Helper message                       |
| `errorMessage`     | `string`                 | —              | Error message                        |
| `successMessage`   | `string`                 | —              | Success message                      |
| `className`        | `string`                 | —              | Additional CSS classes               |
| `aria-label`       | `string`                 | —              | Accessible label                     |
| `aria-labelledby`  | `string`                 | —              | References another accessible label  |
| `aria-describedby` | `string`                 | —              | Additional accessibility description |

---

## Accessibility

The component follows accessibility best practices.

- Uses the native HTML checkbox element.
- Supports `Label` with `htmlFor`.
- Supports `aria-label` and `aria-labelledby`.
- Automatically associates helper, error, and success messages using `aria-describedby`.
- Sets `aria-invalid` when the checkbox is in an invalid state.
- Supports keyboard navigation and screen readers.

**Recommended:**

```jsx
<Label htmlFor="terms">
  Accept Terms
</Label>

<Checkbox id="terms" />
```

---

## Testing

The component includes tests for:

- Rendering
- Controlled and uncontrolled behavior
- User interactions
- Validation
- Accessibility
- Ref forwarding
- Variants and sizes
- Generated IDs
- Edge cases

Run tests:

```bash
npm test
```

or

```bash
npm run test
```

---

## Best Practices

- Use a `Label` component whenever possible.
- Use either `checked` **or** `defaultChecked`, never both.
- Prefer `helperText` for guidance and `errorMessage` for validation feedback.
- Use the indeterminate state for parent-child selection patterns.

---

## Folder Structure

```
src/
└── components/
    └── ui/
        └── Checkbox/
            ├── Checkbox.jsx
            ├── checkboxVariants.js
            ├── Checkbox.test.jsx
            ├── Playground.jsx
            ├── README.md
            └── index.js
```

---

## License

Part of the **ProCoderX React Starter** project.
