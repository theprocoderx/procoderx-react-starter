# Button

A production-ready, accessible, and theme-aware Button component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

It supports multiple variants, sizes, loading states, icons, and link behavior while preserving native HTML semantics.

---

## Features

- Multiple variants
- Multiple sizes
- Loading state
- Disabled state
- Start and end icons
- Icon-only buttons
- External and download links
- Full-width support
- Keyboard accessible
- Screen reader friendly
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Button } from '@/components/ui';
```

Or directly:

```jsx
import Button from '@/components/ui/Button';
```

---

## Basic Usage

```jsx
<Button>Save Changes</Button>

<Button
  variant="secondary"
  size="lg"
>
  Continue
</Button>

<Button fullWidth>
  Submit
</Button>

<Button disabled>
  Disabled
</Button>
```

---

## Variants

```jsx
<Button>Primary</Button>

<Button variant="secondary">Secondary</Button>

<Button variant="outline">Outline</Button>

<Button variant="ghost">Ghost</Button>

<Button variant="destructive">Delete</Button>

<Button variant="link">Learn More</Button>
```

---

## Sizes

```jsx
<Button size="sm">Small</Button>

<Button size="md">Medium</Button>

<Button size="lg">Large</Button>

<Button
  size="icon"
  ariaLabel="Add item"
>
  <Plus />
</Button>
```

---

## Icons

```jsx
<Button startIcon={<Download />} endIcon={<ArrowRight />}>
  Download
</Button>
```

---

## Loading

```jsx
<Button loading>Saving...</Button>
```

When `loading` is enabled, the button displays a spinner, disables interaction, and automatically sets `aria-busy="true"`.

---

## Links

```jsx
<Button href="https://github.com/theprocoderx">
  GitHub
</Button>

<Button
  href="/resume.pdf"
  download
>
  Download Resume
</Button>
```

Providing an `href` renders a native `<a>` element instead of a `<button>`.

---

## Props

## Props

| Prop        | Type                   | Default     | Description                            |
| ----------- | ---------------------- | ----------- | -------------------------------------- |
| `children`  | `ReactNode`            | —           | Button content                         |
| `variant`   | `string`               | `"primary"` | Button variant                         |
| `size`      | `string`               | `"md"`      | Button size                            |
| `fullWidth` | `boolean`              | `false`     | Expands button width                   |
| `href`      | `string`               | —           | Renders an anchor element              |
| `target`    | `string`               | `"_blank"`  | Anchor target                          |
| `download`  | `boolean`              | `false`     | Enables file download                  |
| `type`      | `string`               | `"button"`  | Native button type                     |
| `disabled`  | `boolean`              | `false`     | Disables interaction                   |
| `loading`   | `boolean`              | `false`     | Shows loading spinner                  |
| `startIcon` | `ReactNode`            | —           | Icon before content                    |
| `endIcon`   | `ReactNode`            | —           | Icon after content                     |
| `ariaLabel` | `string`               | —           | Accessible label for icon-only buttons |
| `className` | `string`               | —           | Additional CSS classes                 |
| `...props`  | `ButtonHTMLAttributes` | —           | Native HTML button/anchor attributes   |

---

### Available Values

#### Variants

```text
primary
secondary
outline
ghost
destructive
link
```

#### Sizes

```text
sm
md
lg
icon
```

#### Button Types

```text
button
submit
reset
```

---

## Accessibility

The component follows accessibility best practices.

- Native HTML button and anchor semantics
- Keyboard accessible
- Focus-visible styles
- Supports `aria-label`
- Supports `aria-disabled`
- Supports `aria-busy`
- Icon-only buttons should always include an accessible label

Example:

```jsx
<Button size='icon' ariaLabel='Add item'>
  <Plus />
</Button>
```

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Loading state
- Disabled state
- Links
- Download links
- Icons
- Accessibility
- Click events
- Ref forwarding
- Native HTML behavior

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
        └── Button/
            ├── Button.jsx
            ├── buttonVariants.js
            ├── Button.test.jsx
            ├── README.md
            └── index.js
```

---

## License

Part of the **ProCoderX React Starter** project.
