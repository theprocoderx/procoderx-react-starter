# Button

A production-ready, accessible, and theme-aware Button component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The Button component preserves native HTML semantics while providing a clean, scalable API for modern applications.

---

## Features

- Multiple variants
- Multiple sizes
- Loading state
- Disabled state
- Start and end icons
- Icon-only buttons
- External links
- Download links
- Full-width support
- Theme aware
- Keyboard accessible
- Screen reader friendly
- CVA-powered variants
- CSS variable-based styling

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

<Button size="icon" ariaLabel="Add item">
  <Plus />
</Button>
```

---

## Icons

Start icon

```jsx
<Button startIcon={<Download />}>Download</Button>
```

End icon

```jsx
<Button endIcon={<ArrowRight />}>Continue</Button>
```

Both icons

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

Loading automatically:

- displays a spinner
- disables interaction
- sets `aria-busy="true"`

---

## Disabled

```jsx
<Button disabled>Submit</Button>
```

---

## Full Width

```jsx
<Button fullWidth>Continue</Button>
```

---

## Links

External link

```jsx
<Button href='https://github.com/theprocoderx'>GitHub</Button>
```

Download link

```jsx
<Button href='/resume.pdf' download>
  Download Resume
</Button>
```

When `href` is provided, the component renders a native `<a>` element.

---

## Native Rendering

```jsx
<Button>Save</Button>
```

renders

```html
<button type="button">Save</button>
```

```jsx
<Button href='/about'>About</Button>
```

renders

```html
<a href="/about">About</a>
```

---

## Props

| Prop      | Type                 | Default   | Description                    |
| --------- | -------------------- | --------- | ------------------------------ |
| children  | ReactNode            | —         | Button content                 |
| variant   | string               | `primary` | Button variant                 |
| size      | string               | `md`      | Button size                    |
| fullWidth | boolean              | `false`   | Makes the button full width    |
| href      | string               | —         | Renders an anchor element      |
| target    | string               | `_blank`  | Anchor target                  |
| download  | boolean              | `false`   | Enables file download          |
| type      | string               | `button`  | Native button type             |
| disabled  | boolean              | `false`   | Disables interaction           |
| loading   | boolean              | `false`   | Shows loading spinner          |
| startIcon | ReactNode            | —         | Icon before content            |
| endIcon   | ReactNode            | —         | Icon after content             |
| ariaLabel | string               | —         | Required for icon-only buttons |
| className | string               | —         | Additional CSS classes         |
| ...props  | ButtonHTMLAttributes | —         | Native button attributes       |

### Variant Values

- `primary`
- `secondary`
- `outline`
- `ghost`
- `destructive`
- `link`

### Size Values

- `sm`
- `md`
- `lg`
- `icon`

### Button Types

- `button`
- `submit`
- `reset`

## Accessibility

The Button component follows accessibility best practices.

Features include:

- Native HTML semantics
- Keyboard accessible
- Screen reader friendly
- Focus-visible styles
- Supports `aria-label`
- Supports `aria-disabled`
- Supports `aria-busy`

For icon-only buttons:

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
- Download attribute
- Icons
- Accessibility
- Click events
- Native HTML behavior

See:

```text
Button.test.jsx
```

---

## File Structure

```text
Button/
├── Button.jsx
├── buttonVariants.js
├── Button.test.jsx
├── README.md
└── index.js
```

---

## Related Documentation

Project-wide documentation:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/COMPONENT_GUIDELINES.md`
- `docs/CHANGELOG.md`
- `docs/ROADMAP.md`

---

## License

MIT
