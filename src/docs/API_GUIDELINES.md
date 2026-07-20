# ProCoderX React Starter Kit — API Guidelines

> Purpose: Define a consistent API design for all UI components.

---

# 1. API Philosophy

Every component API should be:

- Simple
- Predictable
- Consistent
- Accessible
- Theme Aware
- Production Ready
- Easy to extend
- Composition Friendly

---

# 2. General Rules

Every component should:

- Support `className`
- Spread remaining props (`...props`)
- Follow native HTML behavior whenever possible
- Keep prop names consistent across components
- Avoid unnecessary custom props
- Prefer composition over configuration
- Support ref forwarding where appropriate
- Follow the shared Form API conventions
- Prefer native HTML attributes over custom props

---

# 3. Export Convention

## Components

Default export

```jsx
export default Button;
```

Barrel export

```js
export { default as Button } from './Button';
```

---

# 4. Prop Order

Use the same prop order in every component.

```jsx
function Component({
  children,

  variant,
  size,

  required,
  disabled,
  readOnly,
  invalid,
  success,

  helperText,
  errorMessage,
  successMessage,

  startIcon,
  endIcon,

  className,

  ariaLabel,

  onClick,
  onChange,
  onFocus,
  onBlur,

  ...props
})
```

Recommended order:

1. Children
2. Appearance props
3. Layout props
4. State props
5. Accessibility props
6. Event handlers
7. className
8. Remaining props

---

# 5. Common Props

Use these names consistently.

| Prop           | Purpose                     |
| -------------- | --------------------------- |
| variant        | Visual appearance           |
| size           | Component size              |
| className      | Custom classes              |
| disabled       | Disabled state              |
| loading        | Loading state               |
| fullWidth      | Width control               |
| required       | Required field              |
| readOnly       | Read-only state             |
| invalid        | Validation error state      |
| success        | Success state               |
| helperText     | Helper message              |
| errorMessage   | Error message               |
| successMessage | Success message             |
| startIcon      | Icon before content         |
| endIcon        | Icon after content          |
| children       | Component content           |
| name           | Form group                  |
| defaultValue   | Uncontrolled input value    |
| checked        | Controlled checkbox/radio   |
| defaultChecked | Uncontrolled checkbox/radio |
| id             | Label association           |

---

# 6. Size Scale

Use the same sizes whenever applicable.

```text
sm
md
lg
```

Special cases

```text
icon
```

Avoid creating custom size names.

---

# 7. Variant Names

Prefer these names.

```text
Common variants

primary
secondary
outline
ghost
destructive
link

Form components may expose

default
outline

```

Only introduce new variants when there is a clear use case.

---

# 8. Accessibility

Every interactive component should support:

- Keyboard navigation
- focus-visible
- Semantic HTML
- Appropriate `aria-*` attributes
- Screen readers

Examples

```jsx
aria - label;
aria - labelledby;
aria - describedby;
aria - invalid;
aria - required;
aria - disabled;
aria - checked;
aria - busy;
role;
tabIndex;
```

---

# 9. Styling

Always use

- Tailwind CSS v4
- CSS Variables
- Design Tokens
- CVA
- cn()

All visual styling must be driven by the project's design tokens.

Never use

- Hardcoded colors
- Inline styles
- CSS Modules
- SCSS
- styled-components

---

# 10. Icons

Use:

- lucide-react

Supported props

```jsx
startIcon;

endIcon;
```

Icons should always have:

```jsx
aria-hidden="true"
```

---

# 11. Theme Support

Every component must support:

- Light Theme
- Dark Theme
- System Theme

Components must never hardcode colors.

Use only project design tokens.

### Global Tokens

```css
--bg
--bg-secondary

--surface
--surface-hover
--surface-active

--text
--text-secondary
--text-muted
--text-inverse

--primary
--accent

--border
--divider
--focus-ring

--success
--warning
--error
```

### Component Tokens

Components should consume dedicated component tokens when available.

Examples

```css
--primary-bg
--primary-bg-hover
--primary-bg-active
--primary-bg-text
```

Future components may introduce their own component-specific tokens such as:

```css
--input-bg
--card-bg
--dialog-bg
--badge-bg
```

Components should never depend on fixed hex values.

---

# 12. Component States

Support only states that make sense.

Common States

- Default
- Hover
- Active
- Focus Visible
- Disabled
- Loading
- Invalid
- Success
- Read Only
- Required

---

# 13. Event Props

Follow React naming.

Examples

```jsx
onClick;

onChange;

onFocus;

onBlur;

onKeyDown;
```

Never invent custom event names.

---

# 14. Ref Support

Use refs only where appropriate.

Examples

- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Modal

Simple display components don't require ref forwarding unless there's a clear use case.

---

# 15. Component Documentation

Every component includes:

README.md

Recommended sections

- Overview
- Features
- Props
- Variants
- Sizes
- Accessibility
- Examples
- Best Practices
- Notes

---

# 16. Testing

Each component includes:

Component.test.jsx

Tests should verify:

- Rendering
- Props
- Variants
- Sizes
- States
- Controlled behavior
- Uncontrolled behavior
- Events
- Accessibility
- Regression tests

---

# 17. Playground

Every component should have a Playground example.
Every component must include a production-quality Playground.

Playground requirements

- Shared layout
- max-w-6xl container
- Card-based sections
- Surface background
- Divider below section title
- Shadow XS
- Responsive layout
- Theme aware
- Uses only Design Tokens
- Matches the project's shared Playground design system.

Playground is intended for

- Manual QA
- Visual verification
- API exploration

It is not a replacement for unit tests.

---

# 18. Stability Policy

Component lifecycle

Draft

↓

Development

↓

Stable

↓

Frozen

Once a component is marked **Stable**, only bug fixes and accessibility improvements should be made unless a breaking change is intentionally planned.

---

# 19. Breaking Changes

Breaking API changes should:

- Be documented
- Be versioned
- Include migration guidance
- Be avoided whenever possible

---

# 20. Definition of Done

A component is considered complete only when all of the following are satisfied:

- Production-ready implementation
- Consistent API
- Theme support
- Responsive behavior
- Accessibility verified
- Unit tests passing
- Playground completed
- README completed
- Playground follows the shared design system
- No ESLint warnings
- No console warnings
- No IDE/TypeScript issues
- Uses only Design Tokens
- No hardcoded colors
