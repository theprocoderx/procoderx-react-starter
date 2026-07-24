# Accordion

A production-ready, accessible, and theme-aware Accordion component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The Accordion component enables users to organize related content into expandable sections while maintaining a clean and accessible user interface. It follows the compound component pattern, supports controlled and uncontrolled state management, and provides flexible single and multiple expansion modes.

---

## Features

- Compound component API
- Single and multiple expansion modes
- Controlled and uncontrolled usage
- Optional collapsible behavior
- Disabled Accordion and AccordionItem support
- Multiple variants
- Multiple sizes
- Multiple border radius options
- Full-width support
- Automatic accessibility IDs
- Keyboard accessible
- Ref forwarding
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui';
```

Or directly:

```jsx
import Accordion from '@/components/ui/Accordion';
```

---

## Basic Usage

```jsx
<Accordion>
  <AccordionItem value='account'>
    <AccordionTrigger>Account Settings</AccordionTrigger>

    <AccordionContent>Manage your account settings.</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Multiple Expansion

```jsx
<Accordion type='multiple'>
  <AccordionItem value='html'>
    <AccordionTrigger>HTML</AccordionTrigger>

    <AccordionContent>HTML Content</AccordionContent>
  </AccordionItem>

  <AccordionItem value='css'>
    <AccordionTrigger>CSS</AccordionTrigger>

    <AccordionContent>CSS Content</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Collapsible Mode

```jsx
<Accordion collapsible>
  <AccordionItem value='faq'>
    <AccordionTrigger>What is ProCoderX Starter?</AccordionTrigger>

    <AccordionContent>A production-ready React starter kit.</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Controlled Usage

```jsx
const [value, setValue] = useState('item-1');

<Accordion value={value} onValueChange={setValue}>
  ...
</Accordion>;
```

---

## Uncontrolled Usage

```jsx
<Accordion defaultValue='item-2'>...</Accordion>
```

---

## States

### Disabled Accordion

```jsx
<Accordion disabled>...</Accordion>
```

### Disabled Accordion Item

```jsx
<Accordion>
  <AccordionItem value='account' disabled>
    ...
  </AccordionItem>
</Accordion>
```

### Full Width

```jsx
<Accordion fullWidth />
```

---

## Variants

```jsx
<Accordion variant="default" />

<Accordion variant="outline" />

<Accordion variant="filled" />

<Accordion variant="ghost" />
```

---

## Sizes

```jsx
<Accordion size="sm" />

<Accordion size="md" />

<Accordion size="lg" />
```

---

## Border Radius

```jsx
<Accordion radius="none" />

<Accordion radius="sm" />

<Accordion radius="md" />

<Accordion radius="lg" />
```

---

## Props

### Accordion

| Prop            | Type                     | Default     | Description                                |
| --------------- | ------------------------ | ----------- | ------------------------------------------ |
| `type`          | `"single" \| "multiple"` | `"single"`  | Expansion mode                             |
| `value`         | `string \| string[]`     | —           | Controlled expanded value(s)               |
| `defaultValue`  | `string \| string[]`     | —           | Initial expanded value(s)                  |
| `onValueChange` | `(value) => void`        | —           | Called when the expanded value changes     |
| `collapsible`   | `boolean`                | `false`     | Allows closing the currently expanded item |
| `disabled`      | `boolean`                | `false`     | Disables the Accordion                     |
| `variant`       | `Variant`                | `"default"` | Visual style                               |
| `size`          | `Size`                   | `"md"`      | Accordion size                             |
| `radius`        | `Radius`                 | `"md"`      | Border radius                              |
| `fullWidth`     | `boolean`                | `true`      | Makes the Accordion span its container     |
| `className`     | `string`                 | —           | Additional CSS classes                     |

---

### AccordionItem

| Prop        | Type      | Default      | Description            |
| ----------- | --------- | ------------ | ---------------------- |
| `value`     | `string`  | **Required** | Unique item identifier |
| `disabled`  | `boolean` | `false`      | Disables the item      |
| `className` | `string`  | —            | Additional CSS classes |

---

### AccordionTrigger

Accepts all native `<button>` attributes.

---

### AccordionContent

Accepts all native `<div>` attributes.

---

## Available Values

### Type

```text
single
multiple
```

### Variants

```text
default
outline
filled
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
none
sm
md
lg
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native button semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Automatic ID generation
- `aria-expanded`
- `aria-controls`
- `aria-labelledby`
- `role="region"`
- Focus-visible support
- Disabled state support

Each `AccordionTrigger` is automatically associated with its corresponding `AccordionContent` using generated IDs.

---

## Testing

Unit tests cover:

- Rendering
- Default collapsed state
- Default expanded value
- Single mode
- Multiple mode
- Controlled usage
- Uncontrolled usage
- Collapsible behavior
- Disabled Accordion
- Disabled AccordionItem
- Callback execution
- Accessibility attributes
- Keyboard interaction
- Ref forwarding
- Class merging
- Context validation

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
        └── Accordion/
            ├── Accordion.jsx
            ├── AccordionItem.jsx
            ├── AccordionTrigger.jsx
            ├── AccordionContent.jsx
            ├── accordionVariants.js
            ├── context/
            ├── hooks/
            ├── Accordion.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Button
- Card
- Alert
- Tabs
- Drawer
- Modal

---

## License

Part of the **ProCoderX React Starter** project.
