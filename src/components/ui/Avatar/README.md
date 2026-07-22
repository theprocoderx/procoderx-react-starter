# Avatar

A production-ready, accessible, and theme-aware Avatar component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<div>` element while providing consistent styling, profile image support, automatic fallbacks, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Multiple shapes
- Automatic initials generation
- Custom fallback support
- Configurable fallback colors
- Automatic image fallback
- Image loading and error handling
- Lazy-loaded images
- Ref forwarding
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Avatar } from '@/components/ui';
```

Or directly:

```jsx
import Avatar from '@/components/ui/Avatar';
```

---

## Basic Usage

```jsx
<Avatar src='/images/user.jpg' alt='John Doe' />
```

---

## Variants

```jsx
<Avatar
  variant="default"
  name="John Doe"
/>

<Avatar
  variant="filled"
  name="John Doe"
/>

<Avatar
  variant="outline"
  name="John Doe"
/>

<Avatar
  variant="ghost"
  name="John Doe"
/>

<Avatar
  variant="soft"
  name="John Doe"
/>
```

---

## Sizes

```jsx
<Avatar
  size="xs"
  name="John Doe"
/>

<Avatar
  size="sm"
  name="John Doe"
/>

<Avatar
  size="md"
  name="John Doe"
/>

<Avatar
  size="lg"
  name="John Doe"
/>

<Avatar
  size="xl"
  name="John Doe"
/>

<Avatar
  size="2xl"
  name="John Doe"
/>
```

---

## Shapes

```jsx
<Avatar
  shape="circle"
  name="John Doe"
/>

<Avatar
  shape="rounded"
  name="John Doe"
/>

<Avatar
  shape="square"
  name="John Doe"
/>
```

---

## Fallback

### Automatic Initials

```jsx
<Avatar name='John Doe' />
```

Automatically renders:

```text
JD
```

### Custom Fallback

```jsx
<Avatar fallback='PX' />
```

### Fallback Colors

```jsx
<Avatar
  fallbackColor="neutral"
  name="John Doe"
/>

<Avatar
  fallbackColor="primary"
  name="John Doe"
/>

<Avatar
  fallbackColor="success"
  name="John Doe"
/>

<Avatar
  fallbackColor="warning"
  name="John Doe"
/>

<Avatar
  fallbackColor="danger"
  name="John Doe"
/>
```

---

## States

### Image Fallback

```jsx
<Avatar src='/broken-image.jpg' name='John Doe' />
```

If the image cannot be loaded, the component automatically displays the generated initials or custom fallback content.

---

## Native HTML Support

Avatar forwards all native `<div>` attributes, including:

- `id`
- `role`
- `tabIndex`
- `title`
- `style`
- `onClick`
- `onFocus`
- `onBlur`
- and all other native div attributes.

---

## Props

| Prop                | Type                             | Default     | Description                 |
| ------------------- | -------------------------------- | ----------- | --------------------------- |
| `src`               | `string`                         | —           | Avatar image source         |
| `alt`               | `string`                         | `""`        | Image alternative text      |
| `name`              | `string`                         | —           | Used to generate initials   |
| `fallback`          | `ReactNode`                      | —           | Custom fallback content     |
| `variant`           | `Variant`                        | `"default"` | Visual style                |
| `size`              | `Size`                           | `"md"`      | Avatar size                 |
| `shape`             | `Shape`                          | `"circle"`  | Avatar shape                |
| `fallbackColor`     | `FallbackColor`                  | `"neutral"` | Fallback color              |
| `imageClassName`    | `string`                         | —           | Additional image classes    |
| `fallbackClassName` | `string`                         | —           | Additional fallback classes |
| `onLoad`            | `() => void`                     | —           | Image load callback         |
| `onError`           | `() => void`                     | —           | Image error callback        |
| `className`         | `string`                         | —           | Additional CSS classes      |
| `...props`          | `HTMLAttributes<HTMLDivElement>` | —           | Native div attributes       |

---

## Available Values

### Variants

```text
default
filled
outline
ghost
soft
```

### Sizes

```text
xs
sm
md
lg
xl
2xl
```

### Shapes

```text
circle
rounded
square
```

### Fallback Colors

```text
neutral
primary
success
warning
danger
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<div>` semantics
- Meaningful image `alt` text
- Screen reader friendly
- Ref forwarding
- Decorative fallback content is hidden from assistive technologies
- Lazy-loaded images
- Automatic fallback when images fail to load

Provide meaningful `alt` text whenever an image conveys important user information.

Example:

```jsx
<Avatar src='/images/user.jpg' alt='John Doe' />
```

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Shapes
- Automatic initials generation
- Custom fallback
- Fallback colors
- Image loading
- Image fallback
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
        └── Avatar/
            ├── Avatar.jsx
            ├── avatarVariants.js
            ├── Avatar.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Badge
- Button
- Alert
- Input
- Label
- Skeleton

---

## License

Part of the **ProCoderX React Starter** project.
