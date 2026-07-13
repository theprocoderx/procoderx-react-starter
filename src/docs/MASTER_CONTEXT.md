## Development Rule

Never begin a new component until the current component is fully implemented, manually verified in the Playground, documented, unit tested, and declared Stable.

# ProCoderX React Starter Kit — Master Context

> Version: v0.4.0
> Status: Active Development
> Current Sprint: Input Component
> Last Updated: YYYY-MM-DD

---

# 1. Project Overview

## Project Name

ProCoderX React Starter Kit

## Goal

Build a production-ready React Starter Kit inspired by shadcn/ui, but fully custom-built using modern React best practices.

Primary goals:

- Clean Architecture
- Scalable Folder Structure
- Reusable UI Components
- Accessibility First
- Performance First
- Developer Experience (DX)
- Production Ready

---

# 2. Tech Stack

## Core

- React 19
- Vite
- React Router v7

## Styling

- Tailwind CSS v4
- CSS Variables
- Design Tokens

## Utilities

- class-variance-authority (CVA)
- clsx
- tailwind-merge

## Icons

- lucide-react

## Code Quality

- ESLint
- Prettier

## Testing

- Vitest
- React Testing Library

---

# 3. Theme System

Supports

- Light Theme
- Dark Theme
- System Theme

Uses CSS Variables.

Theme features

- ThemeProvider
- ThemeContext
- useTheme()
- localStorage persistence
- prefers-color-scheme support

---

# 4. Design Tokens

Background

- --bg
- --bg-secondary

Surface

- --surface
- --surface-hover
- --surface-active

Text

- --text
- --text-secondary
- --text-muted
- --text-inverse

Brand

- --primary
- --accent

UI

- --border
- --divider
- --focus-ring

Status

- --success
- --warning
- --error

Effects

- Shadows
- Glow
- Glass

Component Tokens

- Button
- Card
- Navbar
- Input (future)

---

# 5. Folder Structure

src/

assets/

components/

- ui/
- common/
- layout/
- sections/

contexts/

hooks/

layouts/

lib/

pages/

router/

styles/

utils/

tests/

---

# 6. Export Conventions

## Components

- Default export
- Re-export through barrel files

Example

```js
export { default as Button } from './Button';
```

## Hooks

- Named exports only

## Contexts

- Named exports only

## Utilities

- Named exports only

---

# 7. Naming Conventions

Folders

- PascalCase

Components

- PascalCase

Hooks

- camelCase (prefixed with use)

Utilities

- camelCase

Props

- camelCase

Variant Files

- buttonVariants.js
- inputVariants.js

Barrel Files

- index.js

---

# 8. Coding Standards

Architecture

- Functional Components only
- Small reusable components
- Single Responsibility Principle

Styling

- Tailwind CSS v4 only
- CSS Variables
- CVA
- cn() utility
- No CSS Modules
- No SCSS
- No styled-components
- No inline styles

Accessibility

Mandatory

- Semantic HTML
- Keyboard Accessible
- focus-visible
- aria-\* where required
- Proper labels

Performance

- Avoid unnecessary re-renders
- Lazy loading where appropriate
- Memoize when beneficial

---

# 9. Utility Functions

Completed

✅ cn()

Uses

- clsx
- tailwind-merge

---

# 10. Component Structure

Every UI component follows:

Component/

- Component.jsx
- componentVariants.js (if required)
- Component.test.jsx
- README.md
- index.js

Example

Button/

- Button.jsx
- buttonVariants.js
- Button.test.jsx
- README.md
- index.js

Input/

- Input.jsx
- inputVariants.js
- Input.test.jsx
- README.md
- index.js

---

# 11. Component Standards

Every UI component should:

- Use CVA (when variants are needed)
- Use cn()
- Support className
- Follow design tokens
- Support Light Theme
- Support Dark Theme
- Be accessible
- Be reusable
- Include Playground demo
- Include README
- Include unit tests

---

# 12. Testing Strategy

Each component has its own test file.

Examples

Button.test.jsx

- Render
- Children
- Variants
- Sizes
- Disabled
- Loading
- Icons
- Link Button
- Download
- Events
- Accessibility

Input.test.jsx

- Render
- Placeholder
- Value
- Label
- Required
- Disabled
- ReadOnly
- Validation
- Icons
- Focus
- Accessibility

Shared testing utilities

src/tests/

- setup.js
- test-utils.js
- renderWithTheme.js
- renderWithProviders.js

---

# 13. Playground

Purpose

Internal manual component testing.

Every UI component should have a playground example.

Playground is **not** a replacement for unit tests.

---

# 14. Completed Components

## Button

Status

✅ Stable v1.0

Features

- Variants
- Sizes
- Loading
- Disabled
- Full Width
- Link Button
- Download Button
- startIcon
- endIcon
- Accessibility
- Theme Support
- Playground

Status

Frozen

Only bug fixes allowed.

---

# 15. Component Roadmap

## Form Components

- Input ⏳
- Label
- Textarea
- Select
- Checkbox
- Radio
- Switch

## Display Components

- Badge
- Card
- Avatar
- Alert

## Overlay Components

- Dialog
- Modal
- Drawer
- Dropdown
- Tooltip
- Toast
- Accordion
- Tabs

---

# 16. Current Sprint

Build Input Component.

Requirements

- Production Ready
- Accessible
- Theme Aware
- Reusable
- CVA
- Playground Demo
- README
- Unit Tests

---

# 17. Version History

v0.1.0

- Project initialized

v0.2.0

- Theme System completed

v0.3.0

- Button Stable

v0.4.0

- Input development started

---

# 18. Future Integrations

- Storybook
- Changesets
- npm Package
- Documentation Website
- Figma Design Tokens

---

# 19. Project Philosophy

Always prioritize:

1. Clean Architecture
2. Production Best Practices
3. Accessibility
4. Performance
5. Reusability
6. Scalability
7. Developer Experience

Avoid quick fixes unless explicitly requested.

Always recommend production-quality solutions first.

---

# Current Status

Completed

- Theme System ✅
- Utilities ✅
- Button ✅
- Playground ✅

Next

- Input Component

Project Status

Production foundation completed.

Ready to continue building the UI library.
