# Button

A production-ready, accessible, and theme-aware Button component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<button>` element while providing consistent styling, loading states, icon support, link behavior, accessibility, and seamless integration with your design system.

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
- Ref forwarding
- Accessible by default
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
```

---

## Variants

```jsx
<Button variant="primary">Primary</Button>

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

## Loading

```jsx
<Button loading>Saving...</Button>
```

When `loading` is enabled, the button displays a spinner, disables interaction, and automatically sets `aria-busy="true"`.

---

## Icons

```jsx
<Button startIcon={<Download />} endIcon={<ArrowRight />}>
  Download
</Button>
```

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

## States

### Disabled

```jsx
<Button disabled>Disabled</Button>
```

### Full Width

```jsx
<Button fullWidth>Submit</Button>
```

---

## Native HTML Support

Button forwards all native `<button>` attributes, including:

- `type`
- `disabled`
- `autoFocus`
- `name`
- `value`
- `onClick`
- `onFocus`
- `onBlur`
- `form`
- `formAction`
- and all other native button attributes.

When `href` is provided, it also supports native anchor attributes such as:

- `href`
- `target`
- `rel`
- `download`
- and all other native anchor attributes.

---

## Props

| Prop        | Type                                           | Default     | Description                            |
| ----------- | ---------------------------------------------- | ----------- | -------------------------------------- |
| `variant`   | `Variant`                                      | `"primary"` | Visual style                           |
| `size`      | `Size`                                         | `"md"`      | Button size                            |
| `fullWidth` | `boolean`                                      | `false`     | Makes the button span its container    |
| `loading`   | `boolean`                                      | `false`     | Displays the loading state             |
| `disabled`  | `boolean`                                      | `false`     | Disables the button                    |
| `href`      | `string`                                       | —           | Renders the button as a link           |
| `target`    | `string`                                       | `"_blank"`  | Link target                            |
| `download`  | `boolean`                                      | `false`     | Enables file download                  |
| `startIcon` | `ReactNode`                                    | —           | Leading icon                           |
| `endIcon`   | `ReactNode`                                    | —           | Trailing icon                          |
| `ariaLabel` | `string`                                       | —           | Accessible label for icon-only buttons |
| `type`      | `string`                                       | `"button"`  | Native button type                     |
| `className` | `string`                                       | —           | Additional CSS classes                 |
| `...props`  | `ButtonHTMLAttributes \| AnchorHTMLAttributes` | —           | Native button or anchor attributes     |

---

## Available Values

### Variants

```text
primary
secondary
outline
ghost
destructive
link
```

### Sizes

```text
sm
md
lg
icon
```

### Button Types

```text
button
submit
reset
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML button and anchor semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Supports `aria-label`
- Supports `aria-disabled`
- Supports `aria-busy`
- Focus-visible styles

Icon-only buttons should always include an accessible label.

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
- Class merging
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

## Related Components

- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch

---

## License

Part of the **ProCoderX React Starter** project.
