# Input

A production-ready, accessible, and theme-aware Input component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<input>` element while providing consistent styling, validation states, icon support, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Validation states
- Helper, error, and success messages
- Start and end icons
- Disabled and read-only states
- Full-width support
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
import { Input } from '@/components/ui';
```

Or directly:

```jsx
import Input from '@/components/ui/Input';
```

---

## Basic Usage

```jsx
<Input placeholder='Enter your name' />
```

---

## Variants

```jsx
<Input variant="default" />

<Input variant="filled" />

<Input variant="ghost" />
```

---

## Sizes

```jsx
<Input size="sm" />

<Input size="md" />

<Input size="lg" />
```

---

## Validation

### Error

```jsx
<Input invalid errorMessage='Email is required.' />
```

### Success

```jsx
<Input success successMessage='Looks good!' />
```

---

## Helper Text

```jsx
<Input helperText="We'll never share your email." />
```

---

## Icons

```jsx
import { Mail, Eye } from 'lucide-react';

<Input
  startIcon={<Mail />}
  placeholder="Email"
/>

<Input
  endIcon={<Eye />}
  type="password"
/>
```

---

## States

### Disabled

```jsx
<Input disabled />
```

### Read Only

```jsx
<Input readOnly defaultValue='Read only' />
```

### Required

```jsx
<Input required />
```

### Full Width

```jsx
<Input fullWidth />
```

---

## Controlled Usage

```jsx
const [value, setValue] = useState('');

<Input value={value} onChange={(e) => setValue(e.target.value)} />;
```

---

## Uncontrolled Usage

```jsx
<Input defaultValue='John Doe' />
```

---

## With Label

```jsx
<Label htmlFor="email">
  Email Address
</Label>

<Input
  id="email"
  type="email"
  placeholder="john@example.com"
/>
```

---

## Native HTML Support

Input forwards all native `<input>` attributes, including:

- `type`
- `name`
- `value`
- `defaultValue`
- `placeholder`
- `autoComplete`
- `autoFocus`
- `maxLength`
- `minLength`
- `inputMode`
- `pattern`
- `onChange`
- `onFocus`
- `onBlur`
- and all other native input attributes.

---

## Props

| Prop             | Type                  | Default        | Description                           |
| ---------------- | --------------------- | -------------- | ------------------------------------- |
| `type`           | `string`              | `"text"`       | Native input type                     |
| `variant`        | `Variant`             | `"default"`    | Visual style                          |
| `size`           | `Size`                | `"md"`         | Input size                            |
| `fullWidth`      | `boolean`             | `false`        | Makes the input span its container    |
| `disabled`       | `boolean`             | `false`        | Disables the input                    |
| `readOnly`       | `boolean`             | `false`        | Makes the input read-only             |
| `required`       | `boolean`             | `false`        | Marks the input as required           |
| `invalid`        | `boolean`             | `false`        | Displays the error state              |
| `success`        | `boolean`             | `false`        | Displays the success state            |
| `helperText`     | `ReactNode`           | —              | Helper text displayed below the input |
| `errorMessage`   | `ReactNode`           | —              | Error message                         |
| `successMessage` | `ReactNode`           | —              | Success message                       |
| `startIcon`      | `ReactNode`           | —              | Leading icon                          |
| `endIcon`        | `ReactNode`           | —              | Trailing icon                         |
| `id`             | `string`              | Auto generated | Input ID                              |
| `className`      | `string`              | —              | Additional CSS classes                |
| `...props`       | `InputHTMLAttributes` | —              | Native input attributes               |

---

## Available Values

### Variants

```text
default
filled
ghost
```

### Sizes

```text
sm
md
lg
```

### Input Types

```text
text
email
password
number
search
tel
url
date
time
file
color
checkbox
radio
and all native HTML input types
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<input>` semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Automatic ID generation
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`

Every Input should have an accessible name using one of the following:

- `<Label />`
- `aria-label`
- `aria-labelledby`

Example:

```jsx
<Label htmlFor="email">
  Email Address
</Label>

<Input
  id="email"
  type="email"
/>
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
- Icons
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
        └── Input/
            ├── Input.jsx
            ├── inputVariants.js
            ├── Input.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Label
- Textarea
- Select
- Checkbox
- Radio
- Switch

---

## License

Part of the **ProCoderX React Starter** project.
