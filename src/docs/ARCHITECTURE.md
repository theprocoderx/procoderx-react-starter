# Architecture

This document defines the architecture of the **ProCoderX React Starter Kit**.

The goal is to provide a scalable, maintainable, production-ready, and open-source friendly foundation for modern React applications.

---

# Architecture Goals

The architecture is designed to be:

- Production Ready
- Scalable
- Maintainable
- Reusable
- Accessible
- Theme Aware
- Performance Focused
- Developer Friendly
- Open Source Ready

Every architectural decision should reinforce these goals while keeping the project simple, consistent, and predictable.

---

# Architectural Principles

The project follows these core principles.

- Separation of Concerns
- Design System First
- Accessibility First
- Reusability
- Scalability
- Consistency
- Maintainability
- Performance
- Predictable APIs

These principles guide every architectural and implementation decision.

---

# Technology Stack

| Technology                     | Version |
| ------------------------------ | ------- |
| React                          | 19+     |
| Vite                           | Latest  |
| React Router                   | v7      |
| Tailwind CSS                   | v4      |
| JavaScript                     | ES2024+ |
| Class Variance Authority (CVA) | Latest  |
| clsx                           | Latest  |
| tailwind-merge                 | Latest  |
| Lucide React                   | Latest  |
| Vitest                         | Latest  |
| React Testing Library          | Latest  |
| ESLint                         | Latest  |
| Prettier                       | Latest  |

---

# High-Level Architecture

The project follows a layered architecture where each layer owns a single responsibility.

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
Theme & Design Tokens
```

Each layer communicates only with the layer directly beneath it whenever possible.

---

# Project Structure

```text
src/

├── assets/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── contexts/
│   ├── theme/
│   └── auth/
│
├── data/
│
├── docs/
│
├── hooks/
│
├── layouts/
│
├── lib/
│
├── pages/
│
├── router/
│
├── services/
│
├── styles/
│
├── tests/
│
├── utils/
│
└── main.jsx
```

The structure separates reusable code from application-specific code to improve maintainability and scalability.

---

# Folder Responsibilities

| Folder     | Responsibility                         |
| ---------- | -------------------------------------- |
| assets     | Fonts, icons, images and static assets |
| components | Reusable React components              |
| contexts   | React Context providers                |
| data       | Static project data                    |
| docs       | Project documentation                  |
| hooks      | Custom React hooks                     |
| layouts    | Shared application layouts             |
| lib        | Shared libraries and integrations      |
| pages      | Route-level pages                      |
| router     | Routing configuration                  |
| services   | External services                      |
| styles     | Global styles and design tokens        |
| tests      | Shared testing utilities               |
| utils      | Shared helper functions                |

Every folder should have a single clearly defined responsibility.

---

# Component Organization

Reusable components are organised into four categories.

```text
components/

├── common/
├── layout/
├── sections/
└── ui/
```

## common

Application-wide reusable components.

Examples:

- Container
- Logo
- Spinner
- ThemeToggle

---

## layout

Components responsible for application layout.

Examples:

- Header
- Footer
- Sidebar
- Navigation

---

## sections

Reusable page-level content sections.

Examples:

- Hero
- Features
- Pricing
- Testimonials

---

## ui

Production-ready design system components.

Examples:
Examples include form controls, display components, feedback components, navigation components, and overlay components.

These components are independent from application-specific business logic and are intended to be reusable across projects.

---

# Component Independence

Reusable UI components should never depend directly on:

- Route-specific logic
- Page-specific state
- Business logic
- API calls
- Application data

Instead, components receive all required information through their public API.

This separation keeps components reusable, testable, and predictable.

---

# Dependency Direction

The architecture follows a top-down dependency model.

```text
Pages

↓

Layouts

↓

Sections

↓

UI Components

↓

Shared Utilities

↓

Theme & Design Tokens
```

Lower layers must never depend on higher layers.

This prevents circular dependencies and keeps the architecture modular.

# Standard Component Structure

Every reusable UI component follows a consistent folder structure.

```text
Component/

├── Component.jsx
├── componentVariants.js
├── Component.test.jsx
├── README.md
└── index.js
```

This structure keeps implementation, styling, testing, documentation, and exports colocated.

---

# Layer Responsibilities

Each architectural layer has a clearly defined responsibility.

- Pages compose complete routes.
- Layouts define reusable page structures.
- Sections compose reusable page blocks.
- UI Components provide reusable interface elements.
- Shared Utilities provide reusable logic.
- Theme & Design Tokens provide the visual foundation.

Higher layers may depend on lower layers, but lower layers must never depend on higher layers.

---

# File Responsibilities

## Component.jsx

Contains the React component implementation.

Responsibilities include:

- Rendering
- Public API
- Component behaviour
- Accessibility
- Ref forwarding
- Composition

---

## componentVariants.js

Contains the CVA configuration.

Responsibilities include:

- Variants
- Sizes
- States
- Compound variants
- Default variants

Business logic should never be placed inside this file.

---

## Component.test.jsx

Contains the component test suite.

Typical coverage includes:

- Rendering
- Variants
- States
- User interaction
- Accessibility

---

## README.md

Contains component documentation.

Typical sections include:

- Purpose
- Features
- Installation
- Usage
- Props
- Examples
- Accessibility
- Best Practices

---

## index.js

Provides the public export.

Example

```js
export { default } from './Button';
```

---

# Theme Architecture

The project uses a centralized Theme System built on CSS Custom Properties.

Supported themes include:

- Light
- Dark
- System

Core infrastructure includes:

- ThemeProvider
- ThemeContext
- useTheme()
- Theme persistence
- System preference detection

Components consume semantic tokens rather than directly handling theme logic.

---

# Design Token Architecture

The design system follows a layered token architecture.

```text
Theme
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

This architecture separates design decisions from component implementation.

---

## Foundation Tokens

Foundation Tokens define primitive design values.

Examples include:

- Colours
- Typography
- Radius
- Borders
- Shadows
- Motion
- Opacity
- Focus
- Z-index

Foundation Tokens should never be consumed directly by components.

---

## Shared Tokens

Shared Tokens provide reusable semantic values shared across multiple components.

Examples include:

- Form
- Button
- Card
- Navigation
- Overlay
- Surface
- Feedback
- Data Display
- Scrollbar

Most reusable components should consume Shared Tokens.

---

## Component Tokens

Component Tokens are introduced only when component-specific behaviour cannot reasonably be shared.

Examples include:

- Switch
- Slider
- Calendar
- Progress
- Rating

Component Tokens remain the highest level of the token hierarchy.

---

# Shared Infrastructure

Reusable components rely on shared project infrastructure.

Shared infrastructure includes:

- ThemeProvider
- ThemeContext
- useTheme()
- Design Tokens
- CVA
- cn()

Using shared infrastructure reduces duplication and keeps the component library consistent.

---

# Styling Architecture

The project standardises styling through:

- Tailwind CSS v4
- CSS Variables
- Design Tokens
- CVA
- cn()

The following approaches are intentionally avoided:

- CSS Modules
- SCSS
- Styled Components
- Emotion
- Hardcoded colours
- Hardcoded spacing
- Inline styles

All reusable visual values should originate from the Design Token System.

---

# Testing Architecture

Testing follows a two-level structure.

## Component Tests

Each reusable component owns its own isolated test suite.

```text
Button/
└── Button.test.jsx

Input/
└── Input.test.jsx
```

---

## Shared Testing Utilities

```text
src/tests/

├── setup.js
├── test-utils.js
├── renderWithTheme.js
├── renderWithProviders.js
└── helpers.js
```

Shared utilities reduce duplication while keeping component tests independent.

---

# Export Strategy

The project follows consistent export conventions.

Component implementation:

```js
export default Button;
```

Barrel export:

```js
export { default as Button } from './Button';
```

Hooks, utilities, and contexts use named exports.

---

# Architecture Philosophy

The architecture is intentionally designed to prioritize:

- Modularity
- Reusability
- Accessibility
- Predictability
- Scalability
- Maintainability
- Performance

Future features should extend the existing architecture rather than introduce parallel patterns or duplicate infrastructure.
