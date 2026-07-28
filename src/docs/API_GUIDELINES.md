# ProCoderX React Starter Kit — API Guidelines

> Purpose: Define a consistent, predictable, and production-ready API for every reusable UI component.

---

# 1. API Philosophy

Every component API should be:

- Simple
- Predictable
- Consistent
- Accessible
- Theme Aware
- Production Ready
- Easy to Extend
- Composition Friendly

Whenever possible, components should behave like their native HTML counterparts.

---

# 2. General Rules

Every reusable component should:

- Support `className`
- Forward `ref` where appropriate
- Spread remaining props (`...props`)
- Support native HTML attributes
- Preserve native browser behaviour
- Keep prop names consistent across the library
- Avoid unnecessary custom props
- Prefer composition over configuration
- Avoid exposing internal implementation details

---

# 3. Export Conventions

## Components

Use a default export.

```jsx
export default Button;
```

Use a barrel file for public exports.

```js
export { default as Button } from './Button';
```

## Hooks

Use named exports.

```js
export function useTheme() {}
```

## Utilities

Use named exports.

```js
export function cn() {}
```

---

# 4. Component API Standards

Every component API should be:

- Small
- Explicit
- Stable
- Discoverable
- Backward compatible whenever possible

Avoid adding props that solve uncommon use cases.

Prefer extending through composition instead of increasing API complexity.

---

# 5. Common Props

Use these prop names consistently across the component library.

| Prop      | Purpose                  |
| --------- | ------------------------ |
| children  | Component content        |
| variant   | Visual appearance        |
| size      | Component size           |
| className | Additional CSS classes   |
| disabled  | Disabled state           |
| loading   | Loading state            |
| fullWidth | Width behaviour          |
| id        | Element identifier       |
| name      | Form field name          |
| required  | Required input           |
| readOnly  | Read-only input          |
| invalid   | Validation error state   |
| success   | Validation success state |

Only expose props that are relevant to the component.

---

# 6. Variant Guidelines

Use shared variant names whenever possible.

Preferred variants:

```text
primary
secondary
outline
ghost
destructive
link
```

Form controls may additionally support:

```text
default
```

Avoid creating component-specific variant names unless there is a strong design requirement.

---

# 7. Size Guidelines

Use the shared size scale throughout the library.

```text
sm
md
lg
```

Special-purpose components may additionally support:

```text
icon
```

Avoid custom size names that reduce consistency.

---

# 8. State Guidelines

Components should support only meaningful states.

Common states include:

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

Do not expose unsupported states through the public API.

---

# 9. Event Guidelines

Follow standard React event naming.

Common events:

```jsx
onClick;
onChange;
onFocus;
onBlur;
onKeyDown;
onKeyUp;
```

Never introduce custom event names when an equivalent React event already exists.

---

# 10. Part 1 Summary

This section defines the core API standards for the component library, including:

- API philosophy
- General rules
- Export conventions
- Component API design
- Common props
- Variant naming
- Size conventions
- State handling
- Event naming

## The remaining sections cover accessibility, theme support, styling, composition, documentation, testing, playground standards, and the Definition of Done.

# 11. Accessibility API

Every interactive component must support accessible usage by default.

Where applicable, components should expose:

```jsx
aria - label;
aria - labelledby;
aria - describedby;
aria - invalid;
aria - required;
aria - disabled;
aria - expanded;
aria - controls;
role;
tabIndex;
```

Use semantic HTML before adding ARIA attributes.

Accessibility must never depend on JavaScript alone.

---

# 12. Styling Rules

All components should use the project's shared styling system.

Use:

- Tailwind CSS v4
- CSS Variables
- Design Tokens
- CVA
- `cn()`

Avoid:

- Hardcoded colours
- Hardcoded spacing
- Inline styles
- CSS Modules
- SCSS
- Styled Components

Component styling should remain predictable and theme-aware.

---

# 13. Theme API

Every reusable component must support:

- Light Theme
- Dark Theme
- System Theme

Components should consume semantic design tokens instead of fixed visual values.

Theme behaviour should remain transparent to component consumers.

---

# 14. Ref Forwarding

Forward refs whenever direct DOM access is useful.

Typical components include:

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Dialog

Display-only components should avoid unnecessary ref forwarding.

---

# 15. Composition Rules

Prefer composition over configuration.

Good example:

```jsx
<Button>
  <SaveIcon />
  Save
</Button>
```

Avoid introducing numerous boolean props when composition provides a cleaner solution.

Component APIs should remain small and flexible.

---

# 16. Documentation Requirements

Every stable component must include a `README.md` covering:

- Overview
- Features
- Installation
- Usage
- Props
- Variants
- Accessibility
- Examples
- Best Practices

Documentation should be updated alongside implementation.

---

# 17. Testing Requirements

Every reusable component requires automated tests.

Minimum coverage should include:

- Rendering
- Props
- Variants
- Sizes
- States
- User interaction
- Accessibility
- Regression behaviour

Tests should use:

- Vitest
- React Testing Library

---

# 18. Playground Requirements

Every component must be verified in the shared Playground before becoming Stable.

The Playground should demonstrate:

- Variants
- Sizes
- States
- Theme support
- Responsive behaviour
- Keyboard interaction

Playground verification complements automated testing but does not replace it.

---

# 19. Stability Policy

Component lifecycle:

```text
Draft
   ↓
Development
   ↓
Stable
   ↓
Frozen
```

Once a component is marked **Stable**, only bug fixes, accessibility improvements, and intentional versioned enhancements should be introduced.

Breaking API changes should be avoided whenever possible.

---

# 20. Definition of Done

A reusable component is considered complete only when all of the following are satisfied:

- Production-ready implementation
- Consistent public API
- Theme support
- Accessibility verified
- Responsive behaviour
- Playground verified
- Unit tests passing
- README completed
- No linting errors
- No console warnings
- Uses shared Design Tokens
- Uses shared project utilities

Only after meeting every requirement should a component be declared **Stable**.
