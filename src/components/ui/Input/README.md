# Input

A production-ready, accessible, and theme-aware Input component built with React, Tailwind CSS v4, and Class Variance Authority (CVA).

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
- Theme-aware using CSS variables

---

## Installation

```bash
npm install class-variance-authority
```

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

## Controlled Input

```jsx
const [value, setValue] = useState('');

<Input value={value} onChange={(e) => setValue(e.target.value)} />;
```

---

## Uncontrolled Input

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

## Props

| Prop           | Type                               | Default        | Description                        |
| -------------- | ---------------------------------- | -------------- | ---------------------------------- |
| type           | string                             | `"text"`       | Native input type                  |
| variant        | `"default" \| "filled" \| "ghost"` | `"default"`    | Visual style                       |
| size           | `"sm" \| "md" \| "lg"`             | `"md"`         | Input size                         |
| fullWidth      | boolean                            | `false`        | Makes the input span its container |
| disabled       | boolean                            | `false`        | Disables the input                 |
| readOnly       | boolean                            | `false`        | Makes the input read-only          |
| required       | boolean                            | `false`        | Marks the input as required        |
| invalid        | boolean                            | `false`        | Displays the error state           |
| success        | boolean                            | `false`        | Displays the success state         |
| helperText     | ReactNode                          | —              | Helper text below the input        |
| errorMessage   | ReactNode                          | —              | Error message                      |
| successMessage | ReactNode                          | —              | Success message                    |
| startIcon      | ReactNode                          | —              | Leading icon                       |
| endIcon        | ReactNode                          | —              | Trailing icon                      |
| id             | string                             | Auto generated | Input ID                           |
| className      | string                             | —              | Additional CSS classes             |
| ...props       | InputHTMLAttributes                | —              | Native input props                 |

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML input element
- Ref forwarding
- Automatic ID generation
- Supports labels
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`
- Keyboard accessible
- Screen reader friendly

For the best experience, pair the Input with your Label component.

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
- Accessibility
- Ref forwarding
- Controlled inputs
- Uncontrolled inputs
- Native HTML attributes

---

## File Structure

```text
Input/
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

MIT
