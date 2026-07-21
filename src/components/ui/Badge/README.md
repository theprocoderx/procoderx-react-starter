# Badge

A production-ready, accessible, and theme-aware Badge component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<span>` element while providing consistent styling, multiple visual variants, icon support, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Multiple radius styles
- Optional elevation styles
- Optional interactive state
- Start and end icons
- Full-width support
- Ref forwarding
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Native HTML attributes support
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Badge } from '@/components/ui';
```

Or directly:

```jsx
import Badge from '@/components/ui/Badge';
```

---

## Basic Usage

```jsx
<Badge>New</Badge>
```

---

## Variants

```jsx
<Badge variant="primary">
  Primary
</Badge>

<Badge variant="secondary">
  Secondary
</Badge>

<Badge variant="success">
  Success
</Badge>

<Badge variant="warning">
  Warning
</Badge>

<Badge variant="error">
  Error
</Badge>

<Badge variant="info">
  Info
</Badge>

<Badge variant="outline">
  Outline
</Badge>

<Badge variant="ghost">
  Ghost
</Badge>
```

---

## Sizes

```jsx
<Badge size="sm">
  Small
</Badge>

<Badge size="md">
  Medium
</Badge>

<Badge size="lg">
  Large
</Badge>
```

---

## Radius

```jsx
<Badge radius="sm">
  Small Radius
</Badge>

<Badge radius="md">
  Medium Radius
</Badge>

<Badge radius="full">
  Pill Badge
</Badge>
```

---

## Elevation

```jsx
<Badge elevation="none">
  Flat
</Badge>

<Badge elevation="sm">
  Small Shadow
</Badge>

<Badge elevation="md">
  Medium Shadow
</Badge>
```

---

## Icons

```jsx
<Badge startIcon={<Check />} endIcon={<ArrowRight />}>
  Verified
</Badge>
```

---

## States

### Interactive

```jsx
<Badge interactive>Clickable Badge</Badge>
```

Interactive badges provide hover and focus feedback. If a badge performs an action or navigation, wrap it in a semantic `<button>` or `<a>` element.

### Full Width

```jsx
<Badge fullWidth>Full Width Badge</Badge>
```

---

## Native HTML Support

Badge forwards all native `<span>` attributes, including:

- `id`
- `role`
- `tabIndex`
- `title`
- `style`
- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- and all other native span attributes.

---

## Props

| Prop          | Type                              | Default     | Description                        |
| ------------- | --------------------------------- | ----------- | ---------------------------------- |
| `variant`     | `Variant`                         | `"primary"` | Visual style                       |
| `size`        | `Size`                            | `"md"`      | Badge size                         |
| `radius`      | `Radius`                          | `"full"`    | Border radius                      |
| `elevation`   | `Elevation`                       | `"none"`    | Shadow depth                       |
| `interactive` | `boolean`                         | `false`     | Enables hover and focus styles     |
| `fullWidth`   | `boolean`                         | `false`     | Makes the badge span its container |
| `startIcon`   | `ReactNode`                       | —           | Leading icon                       |
| `endIcon`     | `ReactNode`                       | —           | Trailing icon                      |
| `className`   | `string`                          | —           | Additional CSS classes             |
| `...props`    | `HTMLAttributes<HTMLSpanElement>` | —           | Native span attributes             |

---

## Available Values

### Variants

```text
primary
secondary
success
warning
error
info
outline
ghost
```

### Sizes

```text
sm
md
lg
```

### Radius

```text
sm
md
full
```

### Elevation

```text
none
sm
md
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<span>` semantics
- Screen reader friendly
- Ref forwarding
- Decorative icons use `aria-hidden="true"`
- Supports native HTML attributes
- Interactive styling does not change semantics

If the Badge performs an action or navigation, use one of the following semantic elements instead:

- `<button>`
- `<a>`

Example:

```jsx
<button type='button'>
  <Badge interactive>New</Badge>
</button>
```

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Radius styles
- Elevation styles
- Interactive state
- Icons
- Full-width mode
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
        └── Badge/
            ├── Badge.jsx
            ├── badgeVariants.js
            ├── Badge.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Button
- Input
- Label
- Checkbox
- Radio
- Switch

---

## License

Part of the **ProCoderX React Starter** project.
