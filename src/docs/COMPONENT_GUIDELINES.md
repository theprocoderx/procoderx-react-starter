# Component Guidelines

This document defines the standards for creating, maintaining, and extending UI components in the **ProCoderX React Starter Kit**.

Every component in the project must follow these guidelines to ensure consistency, maintainability, scalability, and production readiness.

---

# Goals

Every component should be:

- Production Ready
- Reusable
- Accessible
- Theme Aware
- Consistent
- Maintainable
- Scalable
- Well Tested
- Well Documented

---

# Component Folder Structure

Every UI component follows the same structure.

```text
Component/
├── Component.jsx
├── componentVariants.js
├── Component.test.jsx
├── README.md
└── index.js
```

---

# File Responsibilities

## Component.jsx

Contains:

- Component implementation
- Business logic
- Accessibility
- Props
- Events
- Ref forwarding (when required)

Do not place variant definitions or reusable utilities here.

---

## componentVariants.js

Contains:

- CVA configuration
- Variants
- Sizes
- Compound variants
- Default variants

No component logic should exist in this file.

---

## Component.test.jsx

Contains:

- Unit tests
- Accessibility tests
- Rendering tests
- Event tests
- Edge case tests

Each component owns its own test file.

---

## README.md

Contains:

- Component overview
- Features
- Usage examples
- Props
- Accessibility notes
- Testing reference
- File structure

Keep the README focused on the component only.

---

## index.js

Exports the component through a barrel export.

Example:

```jsx
export { default as Button } from './Button';
```

---

# Naming Conventions

Folders:

```text
Button/
Input/
Textarea/
Card/
Avatar/
```

Components:

```jsx
Button.jsx;
Input.jsx;
Card.jsx;
```

Variants:

```text
buttonVariants.js
inputVariants.js
cardVariants.js
```

Tests:

```text
Button.test.jsx
```

Documentation:

```text
README.md
```

---

# Component API

Every component API should be:

- Predictable
- Minimal
- Flexible
- Easy to understand
- Backward compatible

Avoid unnecessary props.

Prefer composition over configuration.

---

# Styling

Use:

- Tailwind CSS v4
- CSS Variables
- CVA
- cn() utility

Avoid:

- Inline styles
- Hardcoded colors
- Deep conditional class names

---

# Accessibility

Every component must:

- Use semantic HTML
- Support keyboard navigation
- Expose required ARIA attributes
- Display visible focus states
- Work with screen readers

Accessibility is mandatory.

---

# Theme Support

Every component must support:

- Light Theme
- Dark Theme
- System Theme

Use CSS Variables.

Never hardcode colors.

---

# Props

Every component should expose only meaningful props.

Examples:

```jsx
<Button
  variant="primary"
  size="md"
  disabled
/>

<Input
  variant="filled"
  invalid
  helperText="Enter your email"
/>
```

Avoid unnecessary boolean flags that duplicate native HTML behavior.

---

# Variants

Visual styles belong inside:

```text
componentVariants.js
```

Never place Tailwind variant logic inside the component.

---

# Icons

When supported:

- Accept React nodes.
- Support start and end icons.
- Icons should not affect accessibility.

Example:

```jsx
<Button startIcon={<Download />}>Download</Button>
```

---

# Ref Forwarding

Interactive components should use:

```jsx
forwardRef();
```

Examples:

- Button
- Input
- Textarea
- Select

---

# Controlled vs Uncontrolled

Form components should support both patterns whenever applicable.

Controlled:

```jsx
<Input value={value} onChange={handleChange} />
```

Uncontrolled:

```jsx
<Input defaultValue='John Doe' />
```

---

# Component Documentation

Every component must include:

- README.md
- Usage examples
- Props table
- Accessibility notes
- Testing reference

Do not duplicate project-wide documentation.

---

# Playground

Every component must be manually verified in the Playground before being marked complete.

Verify:

- Variants
- Sizes
- Theme switching
- Accessibility
- Responsive behavior
- States
- Keyboard interaction

---

# Testing

Every component requires its own test file.

Example:

```text
Button.test.jsx
Input.test.jsx
Card.test.jsx
```

Shared utilities belong in:

```text
src/tests/
```

Testing standards are defined in:

```text
docs/TESTING_GUIDELINES.md
```

---

# Development Workflow

Never begin a new component until the current component is fully complete.

Required workflow:

1. Implement component
2. Create variants
3. Verify in Playground
4. Write README
5. Write unit tests
6. Fix issues
7. Review API
8. Mark component as stable
9. Begin the next component

This workflow is mandatory for every component.

---

# Code Quality

Every component should:

- Follow the Single Responsibility Principle
- Avoid duplicated logic
- Prefer composition
- Be easy to extend
- Keep APIs consistent

---

# Performance

Components should:

- Minimize re-renders
- Avoid unnecessary wrappers
- Keep bundle size small
- Preserve native HTML behavior

---

# Export Strategy

Component:

```jsx
export default Button;
```

Barrel:

```jsx
export { default as Button } from './Button';
```

---

# Component Completion Checklist

A component is complete only when:

- ✅ Component implemented
- ✅ Variants completed
- ✅ Theme support verified
- ✅ Accessibility verified
- ✅ Playground verified
- ✅ README completed
- ✅ Unit tests passing
- ✅ Barrel export added
- ✅ API reviewed
- ✅ Code reviewed
- ✅ Marked as stable

---

# Current Development Order

## Foundation

- ✅ Theme
- ✅ Utilities
- ✅ Button

## Basic Form Components

- ⏳ Input
- Label
- Textarea
- Select
- Checkbox
- Radio
- Switch

## Display Components

- Card
- Badge
- Avatar
- Alert

## Overlay Components

- Modal
- Drawer
- Tooltip
- Toast
- Dropdown
- Accordion
- Tabs

## Application Toolkit

- Form utilities
- Authentication templates
- Layout templates
- SEO toolkit
- Dashboard templates

## Ecosystem

- Storybook
- Documentation website
- npm package
- CLI
- GitHub Actions
- Release automation

---

# Guiding Principle

Every component should feel like a natural part of the same design system.

Consistency is more valuable than adding unnecessary features.

Build components that are easy to use, easy to maintain, and ready for production from day one.
