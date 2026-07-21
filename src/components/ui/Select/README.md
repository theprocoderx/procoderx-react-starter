# Select

A production-ready, accessible, and theme-aware Select component built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

The component extends the native HTML `<select>` element while providing consistent styling, validation states, helper messages, placeholder support, accessibility, and seamless integration with your design system.

---

## Features

- Multiple variants
- Multiple sizes
- Placeholder support
- Validation states
- Helper, error, and success messages
- Disabled state
- Required state
- Full-width support
- Controlled and uncontrolled usage
- Native multiple selection
- Option groups
- Automatic ID generation
- Ref forwarding
- Accessible by default
- Theme-aware styling
- CVA-powered variants
- Fully unit tested

---

## Import

Using the barrel export:

```jsx
import { Select } from '@/components/ui';
```

Or directly:

```jsx
import Select from '@/components/ui/Select';
```

---

## Basic Usage

```jsx
<Select aria-label='Country'>
  <option>India</option>
  <option>Japan</option>
  <option>Canada</option>
</Select>
```

---

## Placeholder

```jsx
<Select aria-label='Country' placeholder='Select a country'>
  <option value='india'>India</option>
  <option value='japan'>Japan</option>
</Select>
```

---

## Variants

```jsx
<Select variant="default" />

<Select variant="filled" />

<Select variant="ghost" />
```

---

## Sizes

```jsx
<Select size="sm" />

<Select size="md" />

<Select size="lg" />
```

---

## Validation

### Error

```jsx
<Select invalid errorMessage='Please select a country.' />
```

### Success

```jsx
<Select success successMessage='Selection looks good!' />
```

---

## Helper Text

```jsx
<Select helperText='Choose your preferred country.'>...</Select>
```

---

## States

### Disabled

```jsx
<Select disabled />
```

### Required

```jsx
<Select required />
```

### Full Width

```jsx
<Select fullWidth />
```

---

## Multiple Selection

```jsx
<Select multiple size={5} aria-label='Countries'>
  <option>India</option>
  <option>Japan</option>
  <option>Canada</option>
  <option>France</option>
</Select>
```

---

## Option Groups

```jsx
<Select aria-label='Country'>
  <optgroup label='Asia'>
    <option>India</option>
    <option>Japan</option>
  </optgroup>

  <optgroup label='Europe'>
    <option>France</option>
    <option>Germany</option>
  </optgroup>
</Select>
```

---

## Controlled Usage

```jsx
const [country, setCountry] = useState('');

<Select value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value='india'>India</option>
  <option value='japan'>Japan</option>
</Select>;
```

---

## Uncontrolled Usage

```jsx
<Select defaultValue='india'>
  <option value='india'>India</option>
  <option value='japan'>Japan</option>
</Select>
```

---

## With Label

```jsx
<Label htmlFor="country">
  Country
</Label>

<Select
  id="country"
  defaultValue="india"
>
  <option value="india">India</option>
  <option value="japan">Japan</option>
</Select>
```

---

## Native HTML Support

Select forwards all native `<select>` attributes, including:

- `name`
- `value`
- `defaultValue`
- `disabled`
- `required`
- `multiple`
- `size`
- `autoFocus`
- `onChange`
- `onFocus`
- `onBlur`
- and all other native select attributes.

---

## Props

| Prop             | Type                   | Default        | Description                            |
| ---------------- | ---------------------- | -------------- | -------------------------------------- |
| `variant`        | `Variant`              | `"default"`    | Visual style                           |
| `size`           | `Size`                 | `"md"`         | Select size                            |
| `fullWidth`      | `boolean`              | `false`        | Makes the select span its container    |
| `disabled`       | `boolean`              | `false`        | Disables the select                    |
| `required`       | `boolean`              | `false`        | Marks the select as required           |
| `invalid`        | `boolean`              | `false`        | Displays the error state               |
| `success`        | `boolean`              | `false`        | Displays the success state             |
| `placeholder`    | `string`               | —              | Placeholder option                     |
| `helperText`     | `ReactNode`            | —              | Helper text displayed below the select |
| `errorMessage`   | `ReactNode`            | —              | Error message                          |
| `successMessage` | `ReactNode`            | —              | Success message                        |
| `id`             | `string`               | Auto generated | Select ID                              |
| `className`      | `string`               | —              | Additional CSS classes                 |
| `...props`       | `SelectHTMLAttributes` | —              | Native select attributes               |

---

## Available Values

### Variants

```text
default
filled
ghost
```

### Sizes

```text
sm
md
lg
```

---

## Accessibility

The component follows modern accessibility best practices.

- Native HTML select semantics
- Keyboard accessible
- Screen reader friendly
- Ref forwarding
- Automatic ID generation
- Supports `aria-label`
- Supports `aria-labelledby`
- Supports `aria-describedby`
- Supports `aria-invalid`

Every Select should have an accessible name using one of the following:

- `<Label />`
- `aria-label`
- `aria-labelledby`

Example:

```jsx
<Label htmlFor="country">
  Country
</Label>

<Select id="country">
  <option>India</option>
  <option>Japan</option>
</Select>
```

If no `id` is provided, the component automatically generates a unique ID for accessibility.

---

## Testing

Unit tests cover:

- Rendering
- Variants
- Sizes
- Placeholder
- Validation states
- Helper text
- Disabled state
- Required state
- Full-width mode
- Controlled usage
- Uncontrolled usage
- Multiple selection
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
        └── Select/
            ├── Select.jsx
            ├── selectVariants.js
            ├── Select.test.jsx
            ├── README.md
            └── index.js
```

---

## Related Components

- Label
- Input
- Textarea
- Checkbox
- Radio
- Switch

---

## License

Part of the **ProCoderX React Starter** project.
