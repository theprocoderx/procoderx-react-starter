# Label

A production-ready, accessible, theme-aware, and fully customizable **Label** component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component provides semantic labeling for form controls while supporting multiple sizes, disabled state, visually hidden labels, required indicators, ref forwarding, and CSS variable-based theming.

---

# Features

- ✅ Semantic HTML `<label>`
- ✅ Multiple sizes
- ✅ Light / Dark / System theme support
- ✅ Required field indicator
- ✅ Disabled state
- ✅ Visually hidden labels
- ✅ Automatic accessibility support
- ✅ Ref forwarding
- ✅ Keyboard friendly
- ✅ Screen reader friendly
- ✅ Responsive
- ✅ CVA powered
- ✅ Production-ready API

---

# Requirements

This component assumes your project already includes:

- React 19+
- Tailwind CSS v4
- Class Variance Authority (CVA)
- CSS Variable-based theme
- `cn()` utility function

---

# Compatibility

| Package                  | Version |
| ------------------------ | ------- |
| React                    | 19+     |
| Vite                     | 7+      |
| Tailwind CSS             | v4      |
| Class Variance Authority | Latest  |
| clsx                     | Latest  |
| tailwind-merge           | Latest  |

---

# Import

Using the barrel export:

```jsx
import { Label } from '@/components/ui';
```

Or directly:

```jsx
import Label from '@/components/ui/Label';
```

---

# Basic Usage

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

# Required Label

```jsx
<Label htmlFor='email' required>
  Email Address
</Label>
```

Displays:

```
Email Address *
```

---

# Disabled Label

```jsx
<Label htmlFor='email' disabled>
  Email Address
</Label>
```

---

# Hidden Label

Useful when the visual interface doesn't require a visible label but accessibility still does.

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

---

# Sizes

### Small

```jsx
<Label htmlFor='name' size='sm'>
  Name
</Label>
```

### Medium (Default)

```jsx
<Label htmlFor='name'>Name</Label>
```

### Large

```jsx
<Label htmlFor='name' size='lg'>
  Name
</Label>
```

---

# Custom Styling

```jsx
<Label htmlFor='email' className='text-blue-600'>
  Email
</Label>
```

---

# Props

| Prop        | Type                                    | Default | Required | Description                                           |
| ----------- | --------------------------------------- | ------- | -------- | ----------------------------------------------------- |
| `htmlFor`   | `string`                                | —       | No\*     | Associates the label with a form control.             |
| `children`  | `ReactNode`                             | —       | Yes      | Label content.                                        |
| `required`  | `boolean`                               | `false` | No       | Displays the required indicator (`*`).                |
| `disabled`  | `boolean`                               | `false` | No       | Applies disabled styling.                             |
| `hidden`    | `boolean`                               | `false` | No       | Visually hides the label while keeping it accessible. |
| `size`      | `"sm" \| "md" \| "lg"`                  | `"md"`  | No       | Controls the label size.                              |
| `className` | `string`                                | —       | No       | Additional Tailwind classes.                          |
| `...props`  | `LabelHTMLAttributes<HTMLLabelElement>` | —       | No       | Supports all native label attributes.                 |

> **Note:** `htmlFor` is strongly recommended when labeling a form control.

---

# Accessibility

The Label component follows modern accessibility best practices.

Features:

- Semantic HTML `<label>`
- Supports `htmlFor`
- Works with native form controls
- Required indicator uses `aria-hidden`
- Supports screen-reader-only labels
- Keyboard accessible
- Screen reader friendly
- Development warning when `htmlFor` is omitted

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

# Keyboard Support

| Key         | Action                        |
| ----------- | ----------------------------- |
| Tab         | Focus associated form control |
| Shift + Tab | Focus previous control        |

---

# Theme Support

Automatically adapts to:

- Light Theme
- Dark Theme
- System Theme

using the project's CSS Variables.

No additional configuration is required.

---

# Responsive Behavior

The component is responsive by default.

Layout should be controlled by the parent container.

Example:

```jsx
<div className='space-y-2'>
  <Label htmlFor='email'>Email</Label>

  <Input id='email' fullWidth />
</div>
```

---

# Performance

Optimized for production.

Features:

- Lightweight implementation
- CVA variant composition
- CSS Variable-based styling
- Tree-shakeable imports
- No runtime styling overhead
- React production build compatible

---

# Testing

The component includes automated unit tests covering:

- Rendering
- Label association
- Required indicator
- Disabled state
- Hidden labels
- Sizes
- Ref forwarding
- Accessibility
- Custom class names

Run tests:

```bash
npm test
```

or

```bash
npm run test
```

---

# Best Practices

- ✔ Always associate labels with form controls.
- ✔ Match `htmlFor` with the target element's `id`.
- ✔ Use `hidden` instead of removing labels.
- ✔ Keep labels concise.
- ✔ Use semantic HTML.

---

# Common Mistakes

Avoid the following:

- ❌ Missing `htmlFor`
- ❌ Missing matching `id`
- ❌ Using placeholders instead of labels
- ❌ Hiding labels with `display: none`
- ❌ Using labels only for layout

---

# Browser Support

Supported browsers:

- Chrome
- Edge
- Firefox
- Safari

---

# File Structure

```text
Label/
├── Label.jsx
├── labelVariants.js
├── Label.test.jsx
├── README.md
└── index.js
```

---

# Future Improvements

Potential future enhancements:

- Tooltip support
- Optional label indicator
- Animated required indicator
- Label groups
- Localization support

---

# Version

Current Version

```text
v1.0.0
```

Status

```text
Stable
```

---

# License

MIT License
