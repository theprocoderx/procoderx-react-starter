# Textarea

A production-ready, accessible, and theme-aware Textarea component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<textarea>` element while providing consistent styling, validation states, helper text, resize control, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Resize control
- Validation states
- Helper, error, and success messages
- Disabled and read-only states
- Configurable rows
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
import { Textarea } from '@/components/ui';
```

Or directly:

```jsx
import Textarea from '@/components/ui/Textarea';
```

---

## Basic Usage

```jsx
<Textarea placeholder='Enter your message' />
```

---

## Variants

```jsx
<Textarea variant="default" />

<Textarea variant="filled" />

<Textarea variant="ghost" />
```

---

## Sizes

```jsx
<Textarea size="sm" />

<Textarea size="md" />

<Textarea size="lg" />
```

---

## Resize

```jsx
<Textarea resize="none" />

<Textarea resize="vertical" />

<Textarea resize="horizontal" />

<Textarea resize="both" />
```

---

## Validation

### Error

```jsx
<Textarea invalid errorMessage='Description is required.' />
```

### Success

```jsx
<Textarea success successMessage='Looks good!' />
```

---

## Helper Text

```jsx
<Textarea helperText='Maximum 500 characters allowed.' />
```

---

## Rows

```jsx
<Textarea rows={3} />

<Textarea rows={8} />
```

---

## States

### Disabled

```jsx
<Textarea disabled />
```

### Read Only

```jsx
<Textarea readOnly defaultValue='Read only content' />
```

### Required

```jsx
<Textarea required />
```

### Full Width

```jsx
<Textarea fullWidth />
```

---

## Controlled Usage

```jsx
const [message, setMessage] = useState('');

<Textarea value={message} onChange={(e) => setMessage(e.target.value)} />;
```

---

## Uncontrolled Usage

```jsx
<Textarea defaultValue='Default textarea value' />
```

---

## With Label

```jsx
<Label htmlFor="description">
  Description
</Label>

<Textarea
  id="description"
  placeholder="Write your description..."
/>
```

---

## Native HTML Support

Textarea forwards all native `<textarea>` attributes, including:

- `placeholder`
- `name`
- `value`
- `defaultValue`
- `rows`
- `maxLength`
- `minLength`
- `autoComplete`
- `autoFocus`
- `spellCheck`
- `wrap`
- `onChange`
- `onFocus`
- `onBlur`
- and all other native textarea attributes.

---

## Props

| Prop             | Type                     | Default        | Description                              |
| ---------------- | ------------------------ | -------------- | ---------------------------------------- |
| `variant`        | `Variant`                | `"default"`    | Visual style                             |
| `size`           | `Size`                   | `"md"`         | Textarea size                            |
| `resize`         | `Resize`                 | `"vertical"`   | Resize behavior                          |
| `rows`           | `number`                 | `4`            | Number of visible text rows              |
| `fullWidth`      | `boolean`                | `false`        | Makes the textarea span its container    |
| `disabled`       | `boolean`                | `false`        | Disables the textarea                    |
| `readOnly`       | `boolean`                | `false`        | Makes the textarea read-only             |
| `required`       | `boolean`                | `false`        | Marks the textarea as required           |
| `invalid`        | `boolean`                | `false`        | Displays the error state                 |
| `success`        | `boolean`                | `false`        | Displays the success state               |
| `helperText`     | `ReactNode`              | —              | Helper text displayed below the textarea |
| `errorMessage`   | `ReactNode`              | —              | Error message                            |
| `successMessage` | `ReactNode`              | —              | Success message                          |
| `id`             | `string`                 | Auto generated | Textarea ID                              |
| `className`      | `string`                 | —              | Additional CSS classes                   |
| `...props`       | `TextareaHTMLAttributes` | —              | Native textarea attributes               |

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

### Resize

```text
none
vertical
horizontal
both
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<textarea>` semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Automatic ID generation
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`

Every Textarea should have an accessible name using one of the following:

- `<Label />`
- `aria-label`
- `aria-labelledby`

Example:

```jsx
<Label htmlFor="message">
  Message
</Label>

<Textarea id="message" />
```

If no `id` is provided, the component automatically generates a unique ID for accessibility.

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Resize options
- Validation states
- Helper text
- Disabled state
- Read-only state
- Required state
- Rows
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
        └── Textarea/
            ├── Textarea.jsx
            ├── textareaVariants.js
            ├── Textarea.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Label
- Input
- Select
- Checkbox
- Radio
- Switch

---

## License

Part of the **ProCoderX React Starter** project.
