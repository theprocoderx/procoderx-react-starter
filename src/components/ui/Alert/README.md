# Alert

A production-ready, accessible, and theme-aware Alert component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<div>` element while providing consistent styling, semantic variants, customizable icons, dismissible behavior, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Built-in semantic icons
- Custom icon support
- Optional title
- Optional dismiss button
- Automatic alert roles
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
import { Alert } from '@/components/ui';
```

Or directly:

```jsx
import Alert from '@/components/ui/Alert';
```

---

## Basic Usage

```jsx
<Alert>Your profile has been updated successfully.</Alert>
```

---

## Variants

```jsx
<Alert variant="default">
  Default alert
</Alert>

<Alert variant="info">
  Information message
</Alert>

<Alert variant="success">
  Success message
</Alert>

<Alert variant="warning">
  Warning message
</Alert>

<Alert variant="error">
  Error message
</Alert>
```

---

## Title

```jsx
<Alert title='Success'>Your settings have been saved.</Alert>
```

---

## Icons

```jsx
import { Bell } from 'lucide-react';

<Alert icon={<Bell size={20} />}>New notification received.</Alert>;
```

---

## States

### Dismissible

```jsx
<Alert dismissible onDismiss={() => console.log('Dismissed')}>
  This notification can be dismissed.
</Alert>
```

### Custom Role

```jsx
<Alert role='region'>Custom accessible region.</Alert>
```

Providing a custom `role` overrides the automatically assigned accessibility role when your use case requires different semantics.

---

## Native HTML Support

Alert forwards all native `<div>` attributes, including:

- `id`
- `role`
- `tabIndex`
- `title`
- `style`
- `onClick`
- `onKeyDown`
- `onFocus`
- `onBlur`
- and all other native div attributes.

---

## Props

| Prop          | Type                             | Default        | Description                               |
| ------------- | -------------------------------- | -------------- | ----------------------------------------- |
| `variant`     | `Variant`                        | `"default"`    | Visual style                              |
| `title`       | `ReactNode`                      | —              | Alert heading                             |
| `icon`        | `ReactNode`                      | Built-in icon  | Leading icon                              |
| `dismissible` | `boolean`                        | `false`        | Displays a dismiss button                 |
| `onDismiss`   | `() => void`                     | —              | Called when the dismiss button is clicked |
| `role`        | `string`                         | Auto generated | Accessible role override                  |
| `className`   | `string`                         | —              | Additional CSS classes                    |
| `...props`    | `HTMLAttributes<HTMLDivElement>` | —              | Native div attributes                     |

---

## Available Values

### Variants

```text
default
info
success
warning
error
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML `<div>` semantics
- Automatically applies appropriate alert roles
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Supports custom `role`
- Decorative icons use `aria-hidden="true"`
- Dismiss button includes an accessible label

By default:

- `default` and `info` variants use `role="status"`.
- `success`, `warning`, and `error` variants use `role="alert"`.

Use a custom `role` only when you need semantics different from the component's default behavior.

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Title
- Content
- Built-in icons
- Custom icons
- Dismiss button
- Dismiss callback
- Accessibility roles
- Custom roles
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
        └── Alert/
            ├── Alert.jsx
            ├── alertVariants.js
            ├── Alert.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Badge
- Button
- Progress
- Spinner
- Skeleton

---

## License

Part of the **ProCoderX React Starter** project.
