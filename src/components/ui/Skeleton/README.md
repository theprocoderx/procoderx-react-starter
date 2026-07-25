# Skeleton

A production-ready, accessible, and theme-aware Skeleton component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The Skeleton component provides lightweight loading placeholders that improve perceived performance while asynchronous content is being fetched. It supports multiple shape variants, configurable animations, and integrates seamlessly with the design token system used throughout the ProCoderX React Starter Kit.

---

## Features

- Multiple shape variants
- Multiple animation styles
- Utility-first sizing
- Responsive by default
- Theme-aware styling
- CVA-powered variants
- Ref forwarding
- Accessible by default
- Native HTML attribute support
- Custom className support
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Skeleton } from '@/components/ui';
```

Or directly:

```jsx
import Skeleton from '@/components/ui/Skeleton';
```

---

## Basic Usage

```jsx
<Skeleton className='h-5 w-48' />
```

---

## Variants

```jsx
<Skeleton variant="default" />

<Skeleton variant="rounded" />

<Skeleton
  variant="circular"
  className="h-12 w-12"
/>
```

---

## Animations

```jsx
<Skeleton animation="pulse" />

<Skeleton animation="wave" />

<Skeleton animation="none" />
```

---

## Custom Sizing

Skeleton intentionally does not define fixed dimensions.

Use Tailwind utility classes to control width and height.

```jsx
<Skeleton className="h-6 w-32" />

<Skeleton className="h-40 w-full" />

<Skeleton
  variant="circular"
  className="h-16 w-16"
/>
```

---

## Avatar Placeholder

```jsx
<div className='flex items-center gap-4'>
  <Skeleton variant='circular' className='h-12 w-12' />

  <div className='space-y-2'>
    <Skeleton className='h-4 w-40' />

    <Skeleton className='h-4 w-24' />
  </div>
</div>
```

---

## Card Loading

```jsx
<div className='rounded-xl border p-6'>
  <div className='space-y-4'>
    <Skeleton className='h-6 w-44' />

    <Skeleton className='h-4 w-full' />

    <Skeleton className='h-4 w-5/6' />

    <Skeleton className='h-10 w-32 rounded-md' />
  </div>
</div>
```

---

## Blog Loading

```jsx
<div className='space-y-4'>
  <Skeleton className='h-56 w-full rounded-xl' />

  <Skeleton className='h-8 w-2/3' />

  <Skeleton className='h-4 w-full' />

  <Skeleton className='h-4 w-5/6' />
</div>
```

---

## Dashboard Widget

```jsx
<div className='rounded-xl border p-5'>
  <div className='space-y-4'>
    <Skeleton className='h-4 w-24' />

    <Skeleton className='h-8 w-20' />

    <Skeleton className='h-24 w-full rounded-lg' />
  </div>
</div>
```

---

## Native HTML Support

Skeleton forwards all native `<div>` attributes, including:

- `id`
- `role`
- `style`
- `title`
- `tabIndex`
- `data-*`
- `aria-*`
- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- and all other native `<div>` attributes.

---

## Props

| Prop        | Type                             | Default     | Description            |
| ----------- | -------------------------------- | ----------- | ---------------------- |
| `variant`   | `Variant`                        | `"default"` | Skeleton shape         |
| `animation` | `Animation`                      | `"pulse"`   | Loading animation      |
| `className` | `string`                         | —           | Additional CSS classes |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | —           | Native div attributes  |

---

## Available Values

### Variants

```text
default
rounded
circular
```

### Animations

```text
pulse
wave
none
```

---

## Accessibility

The Skeleton component is decorative by default.

- Hidden from assistive technologies
- Non-interactive
- Pointer events disabled
- Screen reader friendly
- Ref forwarding
- Supports `aria-hidden`
- Supports custom `aria-*` attributes when needed

Skeletons should not replace meaningful accessible content. They are intended only as temporary visual placeholders while content is loading.

---

## Testing

Unit tests cover:

- Rendering
- Shape variants
- Animation variants
- Accessibility
- Ref forwarding
- Class merging
- Native HTML attributes
- Responsive layouts
- Real-world loading patterns

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
        └── Skeleton/
            ├── Skeleton.jsx
            ├── skeletonVariants.js
            ├── Skeleton.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Avatar
- Card
- Alert
- Separator
- Spinner (future)

---

## License

Part of the **ProCoderX React Starter Kit**.
