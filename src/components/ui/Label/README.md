# Label

A production-ready, accessible, and customizable **Label** component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component provides semantic labeling for form controls while supporting multiple sizes, disabled state, required indicators, visually hidden labels, and CSS variable-based theming.

---

## Features

- Semantic HTML `<label>`
- Multiple sizes
- Required indicator
- Disabled state
- Visually hidden labels
- Ref forwarding
- Theme-aware styling
- CVA-powered variants
- Accessible by default
- Production-ready API

---

## Import

Using the barrel export:

```jsx
import { Label } from '@/components/ui';
```

Or directly:

```jsx
import Label from '@/components/ui/Label';
```

---

## Basic Usage

```jsx
<Label htmlFor="email">
  Email Address
</Label>

<Input
  id="email"
  type="email"
/>
```

---

## Examples

### Required

```jsx
<Label htmlFor='email' required>
  Email Address
</Label>
```

### Disabled

```jsx
<Label htmlFor='email' disabled>
  Email Address
</Label>
```

### Hidden (Screen Reader Only)

```jsx
<Label
  htmlFor="search"
  hidden
>
  Search
</Label>

<Input
  id="search"
  aria-label="Search"
/>
```

### Sizes

```jsx
<Label
  htmlFor="name"
  size="sm"
>
  Small
</Label>

<Label htmlFor="name">
  Medium
</Label>

<Label
  htmlFor="name"
  size="lg"
>
  Large
</Label>
```

### Custom Styling

```jsx
<Label htmlFor='email' className='text-blue-600'>
  Email
</Label>
```

---

## Props

| Prop        | Type                  | Default | Description                                          |
| ----------- | --------------------- | ------- | ---------------------------------------------------- |
| `htmlFor`   | `string`              | —       | Associates the label with a form control             |
| `children`  | `ReactNode`           | —       | Label content                                        |
| `required`  | `boolean`             | `false` | Displays the required indicator                      |
| `disabled`  | `boolean`             | `false` | Applies disabled styling                             |
| `hidden`    | `boolean`             | `false` | Visually hides the label while keeping it accessible |
| `size`      | `string`              | `"md"`  | Label size                                           |
| `className` | `string`              | —       | Additional CSS classes                               |
| `...props`  | `LabelHTMLAttributes` | —       | Native label attributes                              |

### Available Sizes

```text
sm
md (default)
lg
```

---

## Accessibility

The Label component follows accessibility best practices.

- Uses the native `<label>` element.
- Supports `htmlFor` association.
- Required indicator is hidden from assistive technologies using `aria-hidden="true"`.
- Supports visually hidden labels via the `hidden` prop.
- Displays a development warning when `htmlFor` is omitted.
- Compatible with screen readers and keyboard navigation.

Example:

```jsx
<Label htmlFor="password">
  Password
</Label>

<Input
  id="password"
  type="password"
/>
```

---

## Testing

Unit tests cover:

- Rendering
- Label association
- Required indicator
- Disabled state
- Hidden labels
- Size variants
- Ref forwarding
- Accessibility
- Custom class names

Run the tests:

```bash
npm test
```

or

```bash
npm run test
```

---

## Best Practices

- Always match `htmlFor` with the target input's `id`.
- Use the `hidden` prop instead of removing labels visually.
- Keep labels short and descriptive.
- Do not rely on placeholders as replacements for labels.

---

## File Structure

```text
Label/
├── Label.jsx
├── labelVariants.js
├── Label.test.jsx
├── README.md
└── index.js
```

---

## License

MIT License
