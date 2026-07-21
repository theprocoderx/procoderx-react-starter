# Radio

A production-ready, accessible, and theme-aware Radio component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<input type="radio">` element while providing consistent styling, validation states, helper text, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Controlled and uncontrolled usage
- Validation states
- Helper, error, and success messages
- Disabled state
- Required state
- Full accessibility support
- Ref forwarding
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Radio } from '@/components/ui';
```

Or directly:

```jsx
import Radio from '@/components/ui/Radio';
```

---

## Basic Usage

```jsx
<Radio name='framework' value='react' aria-label='React' />
```

---

## Variants

```jsx
<Radio
  variant="default"
  aria-label="Default"
/>

<Radio
  variant="outline"
  aria-label="Outline"
/>
```

---

## Sizes

```jsx
<Radio
  size="sm"
  aria-label="Small"
/>

<Radio
  size="md"
  aria-label="Medium"
/>

<Radio
  size="lg"
  aria-label="Large"
/>
```

---

## Validation

### Error

```jsx
<Radio invalid errorMessage='Please select an option.' aria-label='React' />
```

### Success

```jsx
<Radio success successMessage='Looks good!' aria-label='Vue' />
```

---

## Helper Text

```jsx
<Radio helperText='Choose one option.' aria-label='React' />
```

---

## States

### Disabled

```jsx
<Radio disabled aria-label='React' />
```

### Required

```jsx
<Radio required aria-label='React' />
```

---

## Controlled Usage

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

## Uncontrolled Usage

```jsx
<Radio name='framework' value='react' defaultChecked aria-label='React' />
```

---

## With Label

```jsx
<Label htmlFor="react">
  React
</Label>

<Radio
  id="react"
  name="framework"
  value="react"
/>
```

---

## Native HTML Support

Radio forwards all native `<input type="radio">` attributes, including:

- `name`
- `value`
- `checked`
- `defaultChecked`
- `required`
- `disabled`
- `autoFocus`
- `tabIndex`
- `onChange`
- `onFocus`
- `onBlur`
- and all other native radio input attributes.

---

## Props

| Prop             | Type                                    | Default        | Description                           |
| ---------------- | --------------------------------------- | -------------- | ------------------------------------- |
| `variant`        | `Variant`                               | `"default"`    | Visual style                          |
| `size`           | `Size`                                  | `"md"`         | Radio size                            |
| `checked`        | `boolean`                               | —              | Controlled state                      |
| `defaultChecked` | `boolean`                               | `false`        | Initial uncontrolled state            |
| `disabled`       | `boolean`                               | `false`        | Disables the radio                    |
| `required`       | `boolean`                               | `false`        | Marks the radio as required           |
| `invalid`        | `boolean`                               | `false`        | Displays the error state              |
| `success`        | `boolean`                               | `false`        | Displays the success state            |
| `helperText`     | `ReactNode`                             | —              | Helper text displayed below the radio |
| `errorMessage`   | `ReactNode`                             | —              | Error message                         |
| `successMessage` | `ReactNode`                             | —              | Success message                       |
| `id`             | `string`                                | Auto generated | Radio ID                              |
| `className`      | `string`                                | —              | Additional CSS classes                |
| `...props`       | `InputHTMLAttributes<HTMLInputElement>` | —              | Native radio input attributes         |

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

- Native HTML `<input type="radio">` semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Automatic ID generation
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`

Every Radio should have an accessible name using one of the following:

- `<Label />`
- `aria-label`
- `aria-labelledby`

Example:

```jsx
<Label htmlFor="react">
  React
</Label>

<Radio
  id="react"
  name="framework"
  value="react"
/>
```

If no `id` is provided, the component automatically generates a unique ID for accessibility.

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Controlled usage
- Uncontrolled usage
- Validation states
- Helper text
- Disabled state
- Required state
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
        └── Radio/
            ├── Radio.jsx
            ├── radioVariants.js
            ├── Radio.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Label
- Checkbox
- Switch
- Input
- Select
- Textarea

---

## License

Part of the **ProCoderX React Starter** project.
