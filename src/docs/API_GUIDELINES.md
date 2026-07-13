# ProCoderX React Starter Kit — API Guidelines

> Purpose: Define a consistent API design for all UI components.

---

# 1. API Philosophy

Every component API should be:

- Simple
- Predictable
- Consistent
- Accessible
- Production Ready
- Easy to extend

---

# 2. General Rules

Every component should:

- Support `className`
- Spread remaining props (`...props`)
- Follow native HTML behavior whenever possible
- Keep prop names consistent across components
- Avoid unnecessary custom props
- Prefer composition over configuration

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

  className,

  disabled,

  ariaLabel,

  onClick,

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

| Prop      | Purpose             |
| --------- | ------------------- |
| variant   | Visual appearance   |
| size      | Component size      |
| className | Custom classes      |
| disabled  | Disabled state      |
| loading   | Loading state       |
| fullWidth | Width control       |
| startIcon | Icon before content |
| endIcon   | Icon after content  |
| children  | Component content   |

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
primary
secondary
outline
ghost
destructive
link
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
aria - describedby;
aria - invalid;
aria - disabled;
aria - busy;
```

---

# 9. Styling

Always use:

- Tailwind CSS v4
- CSS Variables
- CVA
- cn()

Never use:

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

Every component should support:

- Light Theme
- Dark Theme

Never hardcode colors.

Always use design tokens.

Example

```css
var(--surface)
var(--border)
var(--text)
var(--primary)
```

---

# 12. Component States

Support only states that make sense.

Common states

- Default
- Hover
- Active
- Focus
- Disabled
- Loading
- Invalid
- ReadOnly
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
- Events
- Accessibility

---

# 17. Playground

Every component should have a Playground example.

Playground is for:

- Manual testing
- Visual verification
- API exploration

Playground is **not** a replacement for unit tests.

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
- No ESLint warnings
- No console warnings
- No TypeScript/IDE issues (if applicable in the future)
