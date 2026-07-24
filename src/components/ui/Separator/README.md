# Separator

A production-ready, accessible, and theme-aware Separator component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The Separator component visually separates related content while maintaining accessibility, consistency, and flexibility across your application. It supports both decorative and semantic usage with horizontal and vertical orientations.

---

## Features

- Horizontal and vertical orientations
- Decorative and semantic modes
- Inset spacing variants
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Ref forwarding
- Native HTML attribute support
- Custom className support
- Responsive
- Production-ready architecture
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Separator } from '@/components/ui';
```

Or directly:

```jsx
import Separator from '@/components/ui/Separator';
```

---

## Basic Usage

```jsx
<Separator />
```

---

## Horizontal Separator

```jsx
<div>
  <p>Profile</p>

  <Separator />

  <p>Settings</p>
</div>
```

---

## Vertical Separator

```jsx
<div className='flex h-12 items-center'>
  <span>Profile</span>

  <Separator orientation='vertical' />

  <span>Settings</span>

  <Separator orientation='vertical' />

  <span>Logout</span>
</div>
```

---

## Orientation

```jsx
<Separator orientation="horizontal" />

<Separator orientation="vertical" />
```

| Orientation  | Description                       |
| ------------ | --------------------------------- |
| `horizontal` | Default horizontal divider        |
| `vertical`   | Vertical divider for flex layouts |

---

## Insets

```jsx
<Separator inset="none" />

<Separator inset="sm" />

<Separator inset="md" />

<Separator inset="lg" />
```

| Inset  | Description          |
| ------ | -------------------- |
| `none` | No inset spacing     |
| `sm`   | Small inset spacing  |
| `md`   | Medium inset spacing |
| `lg`   | Large inset spacing  |

---

## Decorative Separator

Decorative separators are ignored by assistive technologies.

```jsx
<Separator decorative />
```

This is the default behavior.

---

## Semantic Separator

Use semantic separators when the separator conveys structural meaning.

```jsx
<Separator decorative={false} />
```

This automatically applies:

- `role="separator"`
- `aria-orientation`

---

## Custom Styling

```jsx
<Separator className="bg-blue-500" />

<Separator
  orientation="vertical"
  className="h-20 bg-red-500"
/>
```

---

## Example

```jsx
<div className='flex items-center gap-4'>
  <span>Dashboard</span>

  <Separator orientation='vertical' />

  <span>Analytics</span>

  <Separator orientation='vertical' />

  <span>Settings</span>
</div>
```

---

## Native HTML Support

Separator forwards all native `<div>` attributes including:

- `id`
- `style`
- `title`
- `hidden`
- `role`
- `tabIndex`
- `data-*`
- `aria-*`
- `onClick`
- `onMouseEnter`
- and all other native `<div>` attributes.

---

## Props

| Prop          | Type                             | Default        | Description                                     |
| ------------- | -------------------------------- | -------------- | ----------------------------------------------- |
| `orientation` | `"horizontal" \| "vertical"`     | `"horizontal"` | Separator orientation                           |
| `inset`       | `"none" \| "sm" \| "md" \| "lg"` | `"none"`       | Applies inset spacing                           |
| `decorative`  | `boolean`                        | `true`         | Hides the separator from assistive technologies |
| `className`   | `string`                         | —              | Additional CSS classes                          |
| `...props`    | `HTMLAttributes<HTMLDivElement>` | —              | Native `<div>` attributes                       |

---

## Available Values

### Orientation

```text
horizontal
vertical
```

### Insets

```text
none
sm
md
lg
```

---

## Accessibility

The component follows modern accessibility best practices.

### Decorative (Default)

```jsx
<Separator />
```

Produces:

- `aria-hidden="true"`

This separator is ignored by assistive technologies.

### Semantic

```jsx
<Separator decorative={false} />
```

Produces:

- `role="separator"`
- `aria-orientation`

Suitable when the separator conveys document structure.

---

## Best Practices

- Use decorative separators for purely visual dividers.
- Use semantic separators only when the divider has structural meaning.
- Use vertical separators only inside flex layouts.
- Prefer inset variants over custom margins whenever possible.
- Use `className` only for project-specific styling.

---

## Testing

Unit tests cover:

- Rendering
- Ref forwarding
- Orientation variants
- Inset variants
- Decorative mode
- Semantic mode
- Accessibility
- Native HTML attributes
- Custom class merging
- Edge cases

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
        └── Separator/
            ├── Separator.jsx
            ├── separatorVariants.js
            ├── Separator.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Card
- Accordion
- Alert
- Divider (future)

---

## Browser Support

Supports all modern browsers that support:

- ES2022
- CSS Variables
- Flexbox
- React 19

---

## License

Part of the **ProCoderX React Starter Kit**.
