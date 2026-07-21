# Checkbox

A production-ready, accessible, and theme-aware Checkbox component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<input type="checkbox">` element while providing consistent styling, validation states, helper messages, indeterminate support, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Validation states
- Helper, error, and success messages
- Indeterminate state
- Disabled and read-only states
- Controlled and uncontrolled usage
- Automatic ID generation
- Ref forwarding
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Checkbox } from '@/components/ui';
```

Or directly:

```jsx
import Checkbox from '@/components/ui/Checkbox';
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

## Variants

```jsx
<Checkbox variant="default" />

<Checkbox variant="outline" />
```

---

## Sizes

```jsx
<Checkbox size="sm" />

<Checkbox size="md" />

<Checkbox size="lg" />
```

---

## Validation

### Error

```jsx
<Checkbox invalid errorMessage='You must accept the terms.' />
```

### Success

```jsx
<Checkbox success successMessage='Looks good!' />
```

---

## Helper Text

```jsx
<Checkbox helperText='You can change this preference later.' />
```

---

## States

### Disabled

```jsx
<Checkbox disabled />
```

### Read Only

```jsx
<Checkbox readOnly defaultChecked />
```

### Required

```jsx
<Checkbox required />
```

### Indeterminate

```jsx
<Checkbox indeterminate />
```

---

## Controlled Usage

```jsx
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
```

---

## Uncontrolled Usage

```jsx
<Checkbox defaultChecked />
```

---

## With Label

```jsx
<Label htmlFor="newsletter">
  Subscribe to newsletter
</Label>

<Checkbox id="newsletter" />
```

---

## Native HTML Support

Checkbox forwards all native `<input type="checkbox">` attributes, including:

- `name`
- `value`
- `checked`
- `defaultChecked`
- `disabled`
- `required`
- `readOnly`
- `onChange`
- `onFocus`
- `onBlur`
- `autoFocus`
- and all other native checkbox attributes.

---

## Props

| Prop             | Type                  | Default        | Description                              |
| ---------------- | --------------------- | -------------- | ---------------------------------------- |
| `variant`        | `Variant`             | `"default"`    | Visual style                             |
| `size`           | `Size`                | `"md"`         | Checkbox size                            |
| `disabled`       | `boolean`             | `false`        | Disables the checkbox                    |
| `readOnly`       | `boolean`             | `false`        | Makes the checkbox read-only             |
| `required`       | `boolean`             | `false`        | Marks the checkbox as required           |
| `checked`        | `boolean`             | —              | Controlled checked state                 |
| `defaultChecked` | `boolean`             | `false`        | Initial unchecked/checked state          |
| `indeterminate`  | `boolean`             | `false`        | Displays the indeterminate state         |
| `invalid`        | `boolean`             | `false`        | Displays the error state                 |
| `success`        | `boolean`             | `false`        | Displays the success state               |
| `helperText`     | `ReactNode`           | —              | Helper text displayed below the checkbox |
| `errorMessage`   | `ReactNode`           | —              | Error message                            |
| `successMessage` | `ReactNode`           | —              | Success message                          |
| `id`             | `string`              | Auto generated | Checkbox ID                              |
| `className`      | `string`              | —              | Additional CSS classes                   |
| `...props`       | `InputHTMLAttributes` | —              | Native checkbox attributes               |

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

- Native HTML checkbox semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Automatic ID generation
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`

Every Checkbox should have an accessible name using one of the following:

- `<Label />`
- `aria-label`
- `aria-labelledby`

Example:

```jsx
<Label htmlFor="terms">
  Accept Terms
</Label>

<Checkbox id="terms" />
```

If no `id` is provided, the component automatically generates a unique ID for accessibility.

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Validation states
- Helper text
- Disabled state
- Read-only state
- Required state
- Indeterminate state
- Controlled usage
- Uncontrolled usage
- Accessibility
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
        └── Checkbox/
            ├── Checkbox.jsx
            ├── checkboxVariants.js
            ├── Checkbox.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Label
- Input
- Textarea
- Select
- Radio
- Switch

---

## License

Part of the **ProCoderX React Starter** project.
