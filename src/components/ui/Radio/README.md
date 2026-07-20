# Radio

A production-ready, accessible, and customizable **Radio** component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

---

## Features

- Native HTML radio input
- Controlled & uncontrolled support
- Multiple variants and sizes
- Disabled, error, and success states
- Helper text support
- Ref forwarding
- Theme-aware styling
- Keyboard and screen-reader accessible

---

## Import

```jsx
import { Radio } from '@/components/ui';
```

Or:

```jsx
import Radio from '@/components/ui/Radio';
```

---

## Basic Usage

```jsx
<Radio name='framework' value='react' aria-label='React' />
```

---

## Controlled

```jsx
const [value, setValue] = useState('react');

<Radio
  name='framework'
  value='react'
  checked={value === 'react'}
  onChange={(e) => setValue(e.target.value)}
  aria-label='React'
/>;
```

---

## Uncontrolled

```jsx
<Radio name='framework' value='react' defaultChecked aria-label='React' />
```

---

## Variants

```jsx
<Radio variant="default" aria-label="Default" />

<Radio variant="outline" aria-label="Outline" />
```

---

## Sizes

```jsx
<Radio size="sm" aria-label="Small" />

<Radio size="md" aria-label="Medium" />

<Radio size="lg" aria-label="Large" />
```

---

## Validation

```jsx
<Radio
  invalid
  errorMessage="Please select an option."
  aria-label="React"
/>

<Radio
  success
  successMessage="Looks good!"
  aria-label="Vue"
/>
```

---

## Helper Text

```jsx
<Radio helperText='Choose one option.' aria-label='React' />
```

---

## Props

| Prop             | Type                                    | Default     | Description        |
| ---------------- | --------------------------------------- | ----------- | ------------------ |
| `variant`        | `"default" \| "outline"`                | `"default"` | Radio variant      |
| `size`           | `"sm" \| "md" \| "lg"`                  | `"md"`      | Radio size         |
| `checked`        | `boolean`                               | —           | Controlled state   |
| `defaultChecked` | `boolean`                               | `false`     | Uncontrolled state |
| `disabled`       | `boolean`                               | `false`     | Disables the radio |
| `required`       | `boolean`                               | `false`     | Marks as required  |
| `invalid`        | `boolean`                               | `false`     | Error state        |
| `success`        | `boolean`                               | `false`     | Success state      |
| `helperText`     | `string`                                | —           | Helper text        |
| `errorMessage`   | `string`                                | —           | Error message      |
| `successMessage` | `string`                                | —           | Success message    |
| `className`      | `string`                                | —           | Additional classes |
| `...props`       | `InputHTMLAttributes<HTMLInputElement>` | —           | Native input props |

---

## Accessibility

Supports:

- Native radio semantics
- Keyboard navigation
- Screen readers
- `aria-label`
- `aria-labelledby`
- `aria-describedby`
- `aria-invalid`

---

## Testing

Covered by unit tests for:

- Rendering
- Native props
- Controlled & uncontrolled usage
- Interaction
- Variants & sizes
- Validation
- Accessibility
- Ref forwarding

Run tests:

```bash
npm test
```

---

## File Structure

```text
Radio/
├── Radio.jsx
├── radioVariants.js
├── Radio.test.jsx
├── README.md
└── index.js
```

---

## License

MIT
