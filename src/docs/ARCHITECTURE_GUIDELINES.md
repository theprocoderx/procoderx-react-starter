# Architecture

This document defines the architecture of the **ProCoderX React Starter Kit**.

The goal is to provide a scalable, maintainable, production-ready, and open-source friendly foundation for React applications.

---

# Goals

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

---

# Technology Stack

| Technology                     | Version |
| ------------------------------ | ------- |
| React                          | 19+     |
| Vite                           | Latest  |
| Tailwind CSS                   | v4      |
| React Router                   | v7      |
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

# Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── common/
│   │   ├── Container.jsx
│   │   └── index.js
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── TechStack.jsx
│   │   ├── ProjectStructure.jsx
│   │   ├── ThemeShowcase.jsx
│   │   ├── WhyChooseStarter.jsx
│   │   ├── CallToAction.jsx
│   │   └── index.js
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   │
│   └── ui/
│       ├── Button/
│       ├── Checkbox/
│       ├── Input/
│       ├── Label/
│       ├── Radio/
│       ├── Settings/
│       ├── Switch/
│       ├── Textarea/
│       └── index.js
│
├── contexts/
│   ├── auth/
│   └── theme/
│
├── data/
│
├── docs/
│
├── hooks/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── sections/
│
├── services/
│
├── styles/
│   ├── globals.css
│   └── index.css
│
└── main.jsx
```

---

# Documentation Structure

```text
docs/
├── MASTER_CONTEXT.md
├── ARCHITECTURE.md
├── API_GUIDELINES.md
├── COMPONENT_GUIDELINES.md
├── TESTING_GUIDELINES.md
├── ROADMAP.md
├── FUTURE_VISION.md
├── CHANGELOG.md
└── CONTRIBUTING.md
```

---

# Design Token Architecture

The design system is built on CSS Variables.

Global Tokens

- Background
- Surface
- Text
- Border
- Primary
- Accent
- Success
- Warning
- Error

Component Tokens

Each component may expose dedicated tokens.

Examples

- Button
- Input
- Card
- Dialog

Components never use hardcoded colors.

---

# Theme Architecture

The starter kit supports:

Theme Provider

- Light
- Dark
- System

Persistence

- localStorage

Detection

- prefers-color-scheme

Implementation

- CSS Variables
- Theme Context
- useTheme hook

Theming is implemented using CSS Variables and a centralized Theme Context.

---

# Component Architecture

Every UI component follows the same folder structure.

Component/
├── Component.jsx
├── componentVariants.js
├── Component.test.jsx
├── README.md
└── index.js

### Responsibilities

**Component.jsx**

- Component implementation
- Component logic
- Public API
- Accessibility

**componentVariants.js**

- CVA configuration
- Variants
- Sizes
- Compound variants
- Default variants

**Component.test.jsx**

- Rendering tests
- Variant tests
- State tests
- Event tests
- Accessibility tests

**README.md**

- Component documentation
- Usage examples
- API reference
- Best practices

**index.js**

- Barrel export
- Public component entry point

---

# Component Folder Structure

```text
ui/
├── Button/
├── Checkbox/
├── Input/
├── Label/
├── Radio/
├── Settings/
├── Switch/
├── Textarea/
└── index.js
```

---

# Playground Architecture

Every UI component includes a dedicated Playground used for manual verification.

Playground Standards

- max-w-6xl container
- Shared spacing
- Card-based layout
- Surface background
- Divider
- Shadow XS
- Theme aware
- Responsive
- Design Tokens only

Playground is used for:

- Manual QA
- Visual regression
- API exploration

Playground is not a replacement for unit tests.

---

# Form Component Architecture

Shared patterns

- Controlled API
- Uncontrolled API
- Validation States
- Helper Text
- Error Messages
- Success Messages
- Shared Variants
- Shared Sizes
- Shared Accessibility
- Native HTML behavior

---

# Component Lifecycle

Design
↓
Implementation
↓
Variants
↓
Accessibility
↓
Playground
↓
README
↓
Unit Tests
↓
Manual QA
↓
Stable
↓
Frozen

---

# Component Development Workflow

Every component must be completed before moving to the next one.

Development order:

1. Component implementation
2. Variant configuration
3. Playground verification
4. Documentation
5. Unit tests
6. Final review
7. Mark as stable

Only after completing all steps should the next component begin.

---

# Styling Architecture

The project uses:

- Tailwind CSS v4
- CSS Variables
- CVA (Class Variance Authority)
- Utility-first styling

Component styles are centralized inside their respective `componentVariants.js` files.
Component styles remain colocated with the component through
componentVariants.js, while global styles and design tokens are defined
inside the styles directory.

---

# Testing Architecture

Testing is organized at two levels.

## Component Tests

Each component owns its own test file.

```text
Button/
└── Button.test.jsx

Input/
└── Input.test.jsx
```

Testing Strategy

Every UI component owns its own isolated test suite while shared utilities
provide reusable helpers to reduce duplication and keep tests consistent.

## Shared Testing Utilities

```text
src/tests/
├── setup.js
├── test-utils.js
├── renderWithTheme.js
├── renderWithProviders.js
└── helpers.js
```

Shared utilities reduce duplication while keeping component tests isolated.

---

# Export Strategy

Components use:

- Default export for component implementation.
- Named exports through barrel files.

Example:

```jsx
// Button.jsx
export default Button;

// index.js
export { default as Button } from './Button';
```

Components use:

- Default exports within component folders.
- Named exports through barrel files for public APIs.

---

# Accessibility Standards

Every component must:

- Use semantic HTML.
- Support keyboard navigation.
- Be screen reader friendly.
- Expose appropriate ARIA attributes.
- Maintain visible focus indicators.

Accessibility is considered a core requirement, not an optional enhancement.

---

# Development Standards

- Functional Components
- React Hooks
- ForwardRef where appropriate
- Controlled & Uncontrolled APIs
- CVA
- cn()
- Design Tokens
- Tailwind CSS v4
- Accessibility First
- No Hardcoded Colors
- No Inline Styles

---

# Documentation Strategy

Project documentation is split into focused files to keep individual
documents concise, maintainable, and versionable.

Each document owns a single responsibility.

| File                    | Purpose                         |
| ----------------------- | ------------------------------- |
| MASTER_CONTEXT.md       | Project overview                |
| ARCHITECTURE.md         | System architecture             |
| API_GUIDELINES.md       | API standards                   |
| COMPONENT_GUIDELINES.md | Component development standards |
| TESTING_GUIDELINES.md   | Testing standards               |
| ROADMAP.md              | Development milestones          |
| FUTURE_VISION.md        | Long-term vision                |
| CHANGELOG.md            | Version history                 |
| CONTRIBUTING.md         | Contribution guidelines         |

This avoids duplication and keeps documentation maintainable.

---

# Quality Checklist

Before a component is considered complete:

✅ API finalized

✅ Implementation

✅ Variants

✅ Theme Support

✅ Accessibility

✅ Playground

✅ README

✅ Unit Tests

✅ Manual QA

✅ Barrel Export

✅ ESLint Clean

✅ Stable

---

# Architecture Goals

This architecture is designed to support:

- Small applications
- Enterprise applications
- Design systems
- Component libraries
- Internal tooling
- Open-source projects

while remaining simple, scalable, and maintainable.
