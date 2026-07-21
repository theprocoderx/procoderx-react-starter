# Label

A production-ready, accessible, and theme-aware Label component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<label>` element while providing consistent styling, required indicators, disabled states, visually hidden labels, accessibility, and seamless integration with your design system.

---

## Features

- Multiple sizes
- Required indicator
- Disabled state
- Visually hidden labels
- Semantic HTML label
- Ref forwarding
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

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

## Sizes

```jsx
<Label
  htmlFor="name"
  size="sm"
>
  Small
</Label>

<Label
  htmlFor="name"
  size="md"
>
  Medium
</Label>

<Label
  htmlFor="name"
  size="lg"
>
  Large
</Label>
```

---

## Required

```jsx
<Label htmlFor='email' required>
  Email Address
</Label>
```

---

## States

### Disabled

```jsx
<Label htmlFor='email' disabled>
  Email Address
</Label>
```

### Visually Hidden

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

## Custom Styling

```jsx
<Label htmlFor='email' className='text-blue-600'>
  Email
</Label>
```

---

## Native HTML Support

Label forwards all native `<label>` attributes, including:

- `htmlFor`
- `title`
- `id`
- `className`
- `style`
- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- and all other native label attributes.

---

## Props

| Prop        | Type                                    | Default | Description                                          |
| ----------- | --------------------------------------- | ------- | ---------------------------------------------------- |
| `htmlFor`   | `string`                                | —       | Associates the label with a form control             |
| `children`  | `ReactNode`                             | —       | Label content                                        |
| `size`      | `Size`                                  | `"md"`  | Label size                                           |
| `required`  | `boolean`                               | `false` | Displays the required indicator                      |
| `disabled`  | `boolean`                               | `false` | Applies disabled styling                             |
| `hidden`    | `boolean`                               | `false` | Visually hides the label while keeping it accessible |
| `className` | `string`                                | —       | Additional CSS classes                               |
| `...props`  | `LabelHTMLAttributes<HTMLLabelElement>` | —       | Native label attributes                              |

---

## Available Values

### Sizes

```text
sm
md
lg
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<label>` semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Supports `htmlFor`
- Supports visually hidden labels
- Required indicator uses `aria-hidden="true"`

Every Label should reference its associated form control using the `htmlFor` prop.

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
        └── Label/
            ├── Label.jsx
            ├── labelVariants.js
            ├── Label.test.jsx
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
