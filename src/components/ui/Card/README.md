# Card

A production-ready, accessible, and theme-aware Card component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<section>` element while providing consistent styling, flexible layouts, compound components, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Multiple radius styles
- Interactive state
- Full-width support
- Compound component API
- Semantic HTML structure
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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui';
```

Or directly:

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
```

---

## Basic Usage

```jsx
<Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>

    <CardDescription>User information</CardDescription>
  </CardHeader>

  <CardContent>Welcome back!</CardContent>

  <CardFooter>Footer actions</CardFooter>
</Card>
```

---

## Compound Components

The Card component follows the Compound Component Pattern.

```jsx
<Card>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>

    <CardDescription>Overview of your account</CardDescription>
  </CardHeader>

  <CardContent>Main content goes here.</CardContent>

  <CardFooter>Footer actions</CardFooter>
</Card>
```

Available compound components:

- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`

---

## Variants

```jsx
<Card variant="default" />

<Card variant="outlined" />

<Card variant="filled" />

<Card variant="elevated" />

<Card variant="ghost" />
```

---

## Sizes

```jsx
<Card size="sm" />

<Card size="md" />

<Card size="lg" />
```

---

## Radius

```jsx
<Card radius="sm" />

<Card radius="md" />

<Card radius="lg" />
```

---

## States

### Interactive

```jsx
<Card interactive>...</Card>
```

Interactive cards provide hover, focus, and transition effects.

### Full Width

```jsx
<Card fullWidth />
```

---

## Complete Example

```jsx
<Card variant='elevated' size='lg' interactive>
  <CardHeader>
    <CardTitle>Pro Plan</CardTitle>

    <CardDescription>Monthly subscription</CardDescription>
  </CardHeader>

  <CardContent>₹999 / month</CardContent>

  <CardFooter>
    <Button>Upgrade</Button>
  </CardFooter>
</Card>
```

---

## Native HTML Support

Card forwards all native `<section>` attributes, including:

- `id`
- `role`
- `tabIndex`
- `title`
- `style`
- `onClick`
- `onFocus`
- `onBlur`
- and all other native section attributes.

The compound components also forward their respective native HTML attributes:

- `CardHeader` → `<header>`
- `CardTitle` → `<h3>`
- `CardDescription` → `<p>`
- `CardContent` → `<div>`
- `CardFooter` → `<footer>`

---

## Props

### Card

| Prop          | Type                          | Default     | Description                       |
| ------------- | ----------------------------- | ----------- | --------------------------------- |
| `variant`     | `Variant`                     | `"default"` | Visual style                      |
| `size`        | `Size`                        | `"md"`      | Card size                         |
| `radius`      | `Radius`                      | `"md"`      | Border radius                     |
| `interactive` | `boolean`                     | `false`     | Enables interactive styles        |
| `fullWidth`   | `boolean`                     | `true`      | Makes the card span its container |
| `className`   | `string`                      | —           | Additional CSS classes            |
| `...props`    | `HTMLAttributes<HTMLElement>` | —           | Native section attributes         |

### CardHeader

| Prop        | Type                          | Default | Description              |
| ----------- | ----------------------------- | ------- | ------------------------ |
| `className` | `string`                      | —       | Additional CSS classes   |
| `...props`  | `HTMLAttributes<HTMLElement>` | —       | Native header attributes |

### CardTitle

| Prop        | Type                                 | Default | Description               |
| ----------- | ------------------------------------ | ------- | ------------------------- |
| `className` | `string`                             | —       | Additional CSS classes    |
| `...props`  | `HTMLAttributes<HTMLHeadingElement>` | —       | Native heading attributes |

### CardDescription

| Prop        | Type                                   | Default | Description                 |
| ----------- | -------------------------------------- | ------- | --------------------------- |
| `className` | `string`                               | —       | Additional CSS classes      |
| `...props`  | `HTMLAttributes<HTMLParagraphElement>` | —       | Native paragraph attributes |

### CardContent

| Prop        | Type                             | Default | Description            |
| ----------- | -------------------------------- | ------- | ---------------------- |
| `className` | `string`                         | —       | Additional CSS classes |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | —       | Native div attributes  |

### CardFooter

| Prop        | Type                          | Default | Description              |
| ----------- | ----------------------------- | ------- | ------------------------ |
| `className` | `string`                      | —       | Additional CSS classes   |
| `...props`  | `HTMLAttributes<HTMLElement>` | —       | Native footer attributes |

---

## Available Values

### Variants

```text
default
outlined
filled
elevated
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
lg
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<section>` semantics
- Semantic compound components
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Supports native HTML attributes
- Focus-visible styles for interactive cards

Example:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>
  </CardHeader>

  <CardContent>User information</CardContent>
</Card>
```

---

## Testing

Unit tests cover:

- Rendering
- Compound components
- Variants
- Sizes
- Radius styles
- Interactive state
- Full-width mode
- Accessibility
- Ref forwarding
- Class merging
- Native HTML attributes
- Component composition

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
        └── Card/
            ├── Card.jsx
            ├── cardVariants.js
            ├── Card.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Button
- Badge
- Avatar
- Alert
- Input
- Skeleton

---

## License

Part of the **ProCoderX React Starter** project.
