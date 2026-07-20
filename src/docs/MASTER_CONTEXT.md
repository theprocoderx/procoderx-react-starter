# ProCoderX React Starter Kit — Master Context

Version: v0.7.0
Status: Active Development
Last Updated: 2026-07-18
Current Sprint: Form Components

## Development Rule

Never begin a new component until the current component is fully implemented, manually verified in the Playground, documented, unit tested, and declared Stable.

---

# 1. Project Overview

## Project Name

ProCoderX React Starter Kit

## 2. Goal

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

# 3. Documentation Map

- ARCHITECTURE.md
  System architecture

- API_GUIDELINES.md
  Public API standards

- COMPONENT_GUIDELINES.md
  Component development standards

- TESTING_GUIDELINES.md
  Testing philosophy and workflow

- CONTRIBUTING.md
  Contribution workflow

- ROADMAP.md
  Planned features

- CHANGELOG.md
  Release history

- FUTURE_VISION.md
  Long-term vision

---

# 4. Tech Stack

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

# 5. Foundation Status

Completed

- Theme System
- Design Tokens
- Shared Form Token System
- Shared Component Token System
- cn() Utility
- Unified Playground Design

---

# 6. Folder Structure

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

# 7. Theme System

Supports

- Light Theme
- Dark Theme
- System Theme

Built with CSS Variables and Design Tokens.

Includes:

- Global Tokens
- Shared Form Tokens
- Button Tokens
- Card Tokens
- Navigation Tokens
- Overlay Tokens
- Feedback Tokens
- Data Display Tokens
- Scrollbar Tokens
- Component-specific Tokens

Features

- ThemeProvider
- ThemeContext
- useTheme()
- localStorage persistence
- prefers-color-scheme support

---

# 8. Design Tokens

Global Tokens

- Background
- Surface
- Text
- Brand
- Border
- Status
- Shadow
- Radius
- Motion
- Focus
- Glass
- Glow
- Selection

Shared Component Tokens

- Form
- Button
- Card
- Navigation
- Overlay
- Feedback
- Data Display
- Scrollbar

Component-specific Tokens

- Switch
- Slider
- Progress
- Spinner
- Avatar
- Calendar
- Rating
- Divider
- Resize Handle

---

# 9. Export Conventions

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

# 10. Naming Conventions

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

# 11. Coding Standards

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

# 12. Utility Functions

Completed

✅ cn()

Uses

- clsx
- tailwind-merge

---

# 13. Component Structure

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

# 14. Component Requirements

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

# 15. Current Sprint

## Sprint Objective

Complete the remaining Form Components and declare the entire Form Component library Stable.

## Current Focus

- ⬜ Textarea
- ⬜ Select

## Sprint Requirements

Every component in this sprint must be:

- Production Ready
- Accessible
- Theme Aware
- Reusable
- Follow the shared Component API
- Use CVA (where applicable)
- Use shared design tokens
- Include Playground
- Include README
- Include Unit Tests
- Pass Accessibility Review
- Be declared Stable before the next component begins

---

# 16. Current Statistics

## Stable Components: 6

- Button
- Input
- Label
- Checkbox
- Radio
- Switch

## Current Sprint

- Textarea
- Select

Project Version

v0.7.0

---

# 17. Testing Strategy

Every reusable UI component must include its own unit test suite.

Shared testing utilities are located in:

src/tests/

Detailed testing standards, workflows, coverage goals, accessibility requirements, and component testing checklists are defined in:

docs/TESTING_GUIDELINES.md

---

# 18. Component Roadmap

## Form Components

Completed

- Button
- Input
- Label
- Checkbox
- Radio
- Switch

Remaining

- Textarea
- Select

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

# 19. Future Ecosystem

- Storybook
- Changesets
- npm Package
- Documentation Website
- Figma Design Tokens

---

# 20. Project Status

## Foundation Status

✅ Foundation Complete

### Current Focus

- Complete remaining Form Components

### Next Milestone

- Begin Display Components

### Long-Term Goal

- Publish ProCoderX React Starter Kit as an npm package

---

# 21. Project Philosophy

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
