# Breadcrumb

A production-ready, accessible, and theme-aware Breadcrumb component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The Breadcrumb component helps users understand their current location within an application's hierarchy and navigate back through parent pages. It follows the Compound Component Pattern, providing a flexible, composable, and predictable API for building navigation trails.

---

## Features

- Compound component API
- Accessible by default
- Semantic HTML structure
- Keyboard accessible
- Custom separator support
- Ellipsis support for long paths
- Theme-aware styling
- Ref forwarding
- Native HTML attribute support
- Custom className support
- Responsive layout
- Production-ready architecture
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui';
```

Or directly:

```jsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/Breadcrumb';
```

---

## Basic Usage

```jsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href='/'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Compound Components

| Component             | Purpose                        |
| --------------------- | ------------------------------ |
| `Breadcrumb`          | Navigation container           |
| `BreadcrumbList`      | Ordered list wrapper           |
| `BreadcrumbItem`      | Individual breadcrumb item     |
| `BreadcrumbLink`      | Navigable breadcrumb link      |
| `BreadcrumbPage`      | Current page indicator         |
| `BreadcrumbSeparator` | Visual separator               |
| `BreadcrumbEllipsis`  | Collapsed navigation indicator |

---

## Multiple Levels

```jsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href='/'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbLink href='/docs'>Documentation</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Custom Separator

```jsx
<BreadcrumbSeparator>/</BreadcrumbSeparator>

<BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>

<BreadcrumbSeparator>
  <CustomIcon />
</BreadcrumbSeparator>
```

---

## Ellipsis

```jsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href='/'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbEllipsis />

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage>Installation</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Current Page

```jsx
<BreadcrumbPage>React Starter Kit</BreadcrumbPage>
```

Automatically applies:

- `aria-current="page"`

---

## Native HTML Support

The Breadcrumb components forward their corresponding native HTML attributes.

Supported elements include:

- `<nav>`
- `<ol>`
- `<li>`
- `<a>`
- `<span>`

Including attributes such as:

- `id`
- `className`
- `style`
- `title`
- `tabIndex`
- `data-*`
- `aria-*`
- Event handlers
- All other native HTML attributes

---

## Props

### Breadcrumb

| Prop         | Type                          | Default        | Description                 |
| ------------ | ----------------------------- | -------------- | --------------------------- |
| `aria-label` | `string`                      | `"Breadcrumb"` | Accessible navigation label |
| `className`  | `string`                      | —              | Additional CSS classes      |
| `children`   | `ReactNode`                   | —              | Breadcrumb content          |
| `...props`   | `HTMLAttributes<HTMLElement>` | —              | Native `<nav>` attributes   |

---

### BreadcrumbList

Supports all native `<ol>` attributes.

---

### BreadcrumbItem

Supports all native `<li>` attributes.

---

### BreadcrumbLink

| Prop        | Type        | Default | Description            |
| ----------- | ----------- | ------- | ---------------------- |
| `href`      | `string`    | —       | Navigation destination |
| `active`    | `boolean`   | `false` | Active visual state    |
| `className` | `string`    | —       | Additional CSS classes |
| `children`  | `ReactNode` | —       | Link content           |

Supports all native `<a>` attributes.

---

### BreadcrumbPage

Supports all native `<span>` attributes.

Automatically applies:

- `aria-current="page"`

---

### BreadcrumbSeparator

| Prop       | Type        | Default      | Description              |
| ---------- | ----------- | ------------ | ------------------------ |
| `children` | `ReactNode` | Chevron icon | Custom separator content |

Supports all native `<li>` attributes.

---

### BreadcrumbEllipsis

Supports all native `<span>` attributes.

Displays the default ellipsis icon.

---

## Accessibility

The component follows modern accessibility best practices.

- Semantic `<nav>`
- Semantic ordered list
- Keyboard accessible
- Screen reader friendly
- `aria-current="page"`
- Decorative separators hidden from assistive technologies
- Customizable `aria-label`

---

## Best Practices

- Wrap breadcrumb items inside `BreadcrumbList`.
- Use `BreadcrumbLink` for navigable items.
- Use `BreadcrumbPage` only for the current page.
- Keep separators decorative.
- Use `BreadcrumbEllipsis` only when collapsing long navigation paths.

---

## Testing

Unit tests cover:

- Rendering
- Compound component composition
- Accessibility
- Ref forwarding
- Native HTML attributes
- Custom class merging
- Navigation behavior
- Custom separators
- Ellipsis rendering
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
        └── Breadcrumb/
            ├── Breadcrumb.jsx
            ├── breadcrumbVariants.js
            ├── Breadcrumb.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Link
- Navigation Menu
- Accordion
- Tabs

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
