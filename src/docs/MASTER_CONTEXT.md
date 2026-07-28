# ProCoderX React Starter Kit — Master Context

> **Version:** v1.0.0
> **Status:** Active Development
> **Foundation:** Stable
> **Last Updated:** July 2026

---

# 1. Purpose

This document serves as the central architectural reference for the ProCoderX React Starter Kit.

Its purpose is to provide contributors and AI assistants with a concise understanding of the project's architecture, conventions, workflows, and current development status.

Detailed implementation belongs inside the dedicated documentation files located under the `docs/` directory.

This file should remain a high-level project reference rather than a complete documentation replacement.

---

# 2. Project Overview

## Project Name

**ProCoderX React Starter Kit**

A production-ready React Starter Kit and reusable UI component library built from scratch using modern React best practices.

The project is designed around a scalable Design System that emphasizes:

- Reusability
- Accessibility
- Theme awareness
- Maintainability
- Consistency
- Performance

The goal is to create a reliable foundation that can be used for modern React applications ranging from personal websites to enterprise dashboards.

---

# 3. Vision

The long-term vision is to evolve the project into a complete frontend ecosystem.

Future ecosystem includes:

- Production UI Component Library
- Design Token System
- Theme System
- Documentation Website
- Storybook
- npm Package
- CLI
- Starter Templates
- Figma Token Support

Every architectural decision should support future expansion without requiring major restructuring.

---

# 4. Primary Goals

The project prioritizes the following goals.

## Architecture

- Clean Architecture
- Modular Structure
- Separation of Concerns
- Predictable Folder Organization

## Components

- Reusable
- Accessible
- Theme-aware
- Production-ready
- Well documented
- Fully tested

## Developer Experience

- Consistent APIs
- Easy customization
- Low maintenance
- High readability

## Quality

- Automated testing
- Documentation
- Accessibility
- Performance
- Scalability

---

# 5. Core Principles

Every contribution should reinforce these principles.

- Clean Architecture
- Design System First
- Accessibility First
- Reusability over duplication
- Consistency over personal preference
- Documentation alongside implementation
- Production quality over development speed

These principles take priority whenever multiple implementation approaches exist.

---

# 6. Technology Stack

## Core

- React 19
- Vite
- React Router v7

## Styling

- Tailwind CSS v4
- CSS Custom Properties
- Design Tokens

## Utilities

- class-variance-authority (CVA)
- clsx
- tailwind-merge
- cn()

## Icons

- lucide-react

## Testing

- Vitest
- React Testing Library

## Code Quality

- ESLint
- Prettier

---

# 7. High-Level Architecture

The project follows a layered architecture.

```text
Application

        │

        ▼

Pages

        │

        ▼

Layouts

        │

        ▼

Sections

        │

        ▼

Reusable UI Components

        │

        ▼

Shared Utilities

        │

        ▼

Theme System

        │

        ▼

Design Tokens
```

Each layer has a single responsibility and should remain independent whenever possible.

---

# 8. Project Structure

```text
src/

├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── contexts/
├── hooks/
├── layouts/
├── lib/
├── pages/
├── router/
├── styles/
├── tests/
└── utils/
```

The project structure is designed to keep application logic, reusable UI, styling, utilities, routing, and testing separated.

---

# 9. Folder Responsibilities

| Folder     | Responsibility                         |
| ---------- | -------------------------------------- |
| assets     | Fonts, icons, images, static assets    |
| components | Reusable React components              |
| contexts   | React Context providers                |
| hooks      | Custom React hooks                     |
| layouts    | Shared application layouts             |
| lib        | Third-party integrations and libraries |
| pages      | Route-level pages                      |
| router     | Application routing                    |
| styles     | Global styles and design tokens        |
| tests      | Shared testing utilities               |
| utils      | Helper functions                       |

---

# 10. Component Organization

Reusable components are grouped into logical categories.

```text
components/

├── common/
├── layout/
├── sections/
└── ui/
```

### common

Application-wide reusable components.

Examples:

- ThemeToggle
- Spinner
- Logo

### layout

Layout-specific components.

Examples:

- Header
- Sidebar
- Footer

### sections

Large reusable page sections.

Examples:

- Hero
- Features
- Pricing

### ui

Reusable Design System components.

Examples:

- Button
- Input
- Card
- Badge
- Dialog

---

# 11. Current Foundation Status

The architectural foundation is complete.

Completed systems include:

- Theme System
- Design Token Architecture
- Shared Utilities
- Shared Component API
- Playground Foundation
- Documentation Foundation

These systems provide the base for every future component.

---

# 12. Current Development Focus

Current work is focused on expanding the production-ready component library.

Current priorities include:

- Display Components
- Overlay Components
- Documentation improvements
- Test coverage improvements

Every new feature must follow the project's documented architecture and workflow.

# 13. Theme System

The project is built around a centralized Theme System powered by CSS Custom Properties and Design Tokens.

Supported themes include:

- Light
- Dark
- System

The Theme System is responsible for all reusable visual decisions across the component library.

Components never contain theme-specific logic.

Instead, they consume semantic tokens that automatically resolve to the correct visual values for the active theme.

---

# 14. Theme Architecture

The Theme System follows a layered token architecture.

```text
Light / Dark Theme

        │

        ▼

Foundation Tokens

        │

        ▼

Shared Tokens

        │

        ▼

Component Tokens

        │

        ▼

React Components
```

Only Foundation Tokens change between themes.

Every higher layer remains unchanged.

---

# 15. Design Token System

The Design Token System separates visual decisions into three layers.

## Foundation Tokens

Raw design values.

Examples:

- Colours
- Typography
- Radius
- Shadows
- Motion
- Focus
- Opacity

---

## Shared Tokens

Reusable semantic values shared across multiple components.

Current shared groups include:

- Form
- Button
- Card
- Navigation
- Overlay
- Feedback
- Display
- Scrollbar

---

## Component Tokens

Component-specific values used only when shared tokens are insufficient.

Examples:

- Switch
- Slider
- Progress
- Avatar
- Calendar
- Rating

Detailed token definitions are maintained in:

```text
docs/theme/TOKEN_REFERENCE.md
```

---

# 16. Shared Infrastructure

The project includes a common infrastructure used throughout the entire component library.

Current shared systems include:

- ThemeProvider
- ThemeContext
- useTheme()
- Design Tokens
- CVA
- cn() utility
- Shared Component APIs
- Playground

These shared systems reduce duplication and improve consistency.

---

# 17. Coding Standards

Every file in the project should follow consistent development practices.

General principles include:

- Functional Components only
- Composition over inheritance
- Single Responsibility Principle
- Small reusable modules
- Predictable APIs
- Readable code
- Minimal abstraction

Maintainability is preferred over clever implementations.

---

# 18. Styling Standards

The project uses a single styling methodology throughout the codebase.

Primary technologies:

- Tailwind CSS v4
- CSS Variables
- Design Tokens
- CVA
- cn()

Avoid:

- CSS Modules
- SCSS
- Styled Components
- Emotion
- Inline styles
- Hardcoded colours
- Hardcoded spacing
- Hardcoded typography

Reusable visual values should always originate from the Design Token System.

---

# 19. Naming Conventions

Consistency is mandatory across the project.

| Item              | Convention         |
| ----------------- | ------------------ |
| Components        | PascalCase         |
| Component Folders | PascalCase         |
| Hooks             | camelCase (`use*`) |
| Utilities         | camelCase          |
| Props             | camelCase          |
| Variant Files     | camelCase          |
| Barrel Files      | `index.js`         |

Examples:

```text
Button
Input
Card

useTheme
useDisclosure

buttonVariants.js
inputVariants.js

cn
mergeRefs
```

---

# 20. Export Conventions

The project follows consistent export rules.

## Components

Default export.

```js
export default Button;
```

---

## Barrel Files

```js
export { default as Button } from './Button';
```

---

## Hooks

Named exports only.

```js
export function useTheme() {}
```

---

## Contexts

Named exports only.

```js
export const ThemeContext = ...
```

---

## Utilities

Named exports only.

```js
export function cn() {}
```

---

# 21. Accessibility Standards

Accessibility is a mandatory project requirement.

Every reusable component should support:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Screen reader compatibility
- Proper labels
- Appropriate ARIA attributes

Common ARIA attributes include:

```text
aria-label
aria-labelledby
aria-describedby
aria-invalid
aria-expanded
aria-controls
```

Accessibility should be implemented during development rather than added later.

---

# 22. Performance Guidelines

Components should remain lightweight and efficient.

Recommended practices:

- Avoid unnecessary re-renders
- Keep component state minimal
- Reuse existing utilities
- Avoid unnecessary DOM nesting
- Memoize expensive calculations only when beneficial
- Prefer composition over duplication

Performance optimisations should never reduce maintainability.

---

# 23. Shared Component API

Reusable components should expose consistent APIs whenever applicable.

Common props include:

```jsx
className;
children;
variant;
size;
disabled;
ref;
```

Form controls may additionally support:

```jsx
id;
name;
value;
defaultValue;
required;
onChange;
```

Native HTML attributes should be forwarded whenever appropriate.

---

# 24. Documentation Standards

Documentation is considered part of implementation.

Every stable component should include:

- Purpose
- Features
- Installation
- Import
- Usage
- Props
- Variants
- Examples
- Accessibility Notes
- Best Practices

Each reusable component maintains its own `README.md`.

---

# 25. Testing Standards

Every reusable UI component requires automated tests.

Typical coverage includes:

- Rendering
- Variants
- Sizes
- States
- User interaction
- Accessibility
- Keyboard behaviour
- Edge cases

Testing stack:

- Vitest
- React Testing Library

Detailed testing rules are maintained in:

```text
docs/TESTING_GUIDELINES.md
```

# 26. Component Development Workflow

Every reusable component follows the same development workflow.

```text
Requirement

        ↓

API Design

        ↓

Implementation

        ↓

Playground Verification

        ↓

Accessibility Review

        ↓

Unit Testing

        ↓

README Documentation

        ↓

Stable Release
```

No component should skip any stage of this workflow.

---

# 27. Standard Component Structure

Every reusable UI component follows the same folder structure.

```text
Component/

├── Component.jsx
├── componentVariants.js
├── Component.test.jsx
├── README.md
└── index.js
```

Components without variants may omit `componentVariants.js`.

Each file has a single responsibility.

---

# 28. Stable Components

The following components have completed the complete development workflow.

## Form Components

- Button
- Input
- Label
- Textarea
- Select
- Checkbox
- Radio
- Switch

Each stable component includes:

- Production-ready implementation
- Theme support
- Accessibility review
- Playground verification
- Unit tests
- README documentation

---

# 29. Component Categories

The component library is organised into logical groups.

## Form

```text
Button
Input
Label
Textarea
Select
Checkbox
Radio
Switch
```

---

## Display

```text
Badge
Card
Avatar
Alert
```

---

## Overlay

```text
Dialog
Drawer
Dropdown
Tooltip
Toast
Accordion
Tabs
```

Additional categories will be introduced as the library expands.

---

# 30. Component Quality Checklist

Before marking any component as Stable, verify the following.

### Implementation

- Functional Component
- Clean API
- Ref forwarding (where appropriate)
- Uses Design Tokens
- Uses `cn()`
- Uses CVA (when required)

---

### Accessibility

- Semantic HTML
- Keyboard accessible
- Proper labels
- Appropriate ARIA attributes
- Visible focus indicators

---

### Styling

- Theme-aware
- Responsive
- No hardcoded values
- Uses shared tokens

---

### Testing

- Rendering
- Variants
- States
- User interaction
- Accessibility

---

### Documentation

- README completed
- Examples included
- Props documented
- Accessibility notes included

---

# 31. Stable Component Requirements

A reusable UI component is considered **Stable** only when it satisfies all of the following requirements.

- Production-ready implementation
- Theme-aware styling
- Accessibility support
- Uses Design Tokens
- Uses shared utilities
- Playground verified
- Unit tested
- Fully documented

Only after completing every requirement should development move to the next component.

---

# 32. Project Roadmap

Development is organised into progressive milestones.

## Phase 1 — Foundation

**Status:** ✅ Complete

Includes:

- Theme System
- Design Tokens
- Shared Utilities
- Documentation Foundation
- Playground Foundation

---

## Phase 2 — Form Components

**Status:** ✅ Complete

Completed:

- Button
- Input
- Label
- Textarea
- Select
- Checkbox
- Radio
- Switch

---

## Phase 3 — Display Components

**Status:** 🚧 Current Focus

Planned:

- Badge
- Card
- Avatar
- Alert

---

## Phase 4 — Overlay Components

Planned:

- Dialog
- Drawer
- Dropdown
- Tooltip
- Toast
- Accordion
- Tabs

---

## Phase 5 — Advanced Components

Future additions may include:

- Pagination
- Breadcrumb
- Menubar
- Calendar
- Date Picker
- Combobox
- File Upload
- Command Menu
- Data Table
- Timeline

---

# 33. Future Ecosystem

The long-term ecosystem is expected to include:

```text
ProCoderX React Starter Kit

├── UI Component Library
├── Theme System
├── Design Token System
├── Documentation Website
├── Storybook
├── npm Package
├── CLI
├── Starter Templates
├── Figma Tokens
└── Open Source Community
```

The current architecture has been designed to support future expansion without major structural changes.

---

# 34. Current Priorities

Current development priorities are:

1. Expand the component library.
2. Maintain API consistency.
3. Improve accessibility.
4. Increase automated test coverage.
5. Improve documentation.
6. Refine the design system.
7. Prepare for public release.

Quality is always prioritised over development speed.

---

# 35. Release Philosophy

The project follows a quality-first release strategy.

A component is considered complete only when it is:

- Fully implemented
- Theme-aware
- Accessible
- Playground verified
- Unit tested
- Fully documented
- Production-ready

Stable releases are based on quality rather than feature count.

---

# 36. Contributor Expectations

Contributors are expected to:

- Follow the documented architecture.
- Reuse existing utilities.
- Reuse existing design tokens.
- Maintain API consistency.
- Write automated tests.
- Update documentation.
- Preserve accessibility.
- Preserve theme compatibility.

Every contribution should improve the project without reducing consistency.

---

# 37. Recommended Reading Order

New contributors should read the documentation in the following order.

```text
README

↓

ARCHITECTURE_GUIDELINES

↓

COMPONENT_GUIDELINES

↓

API_GUIDELINES

↓

TESTING_GUIDELINES

↓

theme/README

↓

theme/TOKEN_REFERENCE
```

---

# 38. Project Principles

Every technical decision should reinforce these principles.

- Clean Architecture
- Predictable APIs
- Design System First
- Accessibility
- Theme Awareness
- Performance
- Maintainability
- Reusability
- Scalability
- Developer Experience

These principles guide both current development and future expansion.

---

# 39. Document Maintenance

Update this document whenever significant project changes occur.

Typical updates include:

- Project architecture
- Folder structure
- Technology stack
- Development workflow
- Theme System
- Design Token architecture
- Stable component list
- Documentation structure
- Roadmap

This document should remain a high-level architectural reference.

---

# 40. Related Documentation

```text
docs/

├── README.md
├── ARCHITECTURE_GUIDELINES.md
├── API_GUIDELINES.md
├── COMPONENT_GUIDELINES.md
├── TESTING_GUIDELINES.md
├── CONTRIBUTING.md
├── ROADMAP.md
├── CHANGELOG.md
├── FUTURE_VISION.md
│
└── theme/
    ├── README.md
    └── TOKEN_REFERENCE.md
```

Each document focuses on one specific area of the project.

---

# 41. Closing Notes

The **ProCoderX React Starter Kit** provides a scalable foundation for modern React applications.

Its architecture combines:

- Centralized Theme System
- Layered Design Token Architecture
- Consistent Component APIs
- Accessible Implementations
- Automated Testing
- Comprehensive Documentation
- Production-ready Development Practices

By keeping architecture, documentation, and implementation aligned, the project can continue to grow while remaining maintainable, scalable, and predictable.

---

# Version Information

| Item              | Value                       |
| ----------------- | --------------------------- |
| Project           | ProCoderX React Starter Kit |
| Current Version   | v1.0.0                      |
| Status            | Active Development          |
| Foundation        | Stable                      |
| Component Library | In Progress                 |
| Documentation     | Active                      |
| License           | MIT (Planned)               |

---

**End of Master Context**
