## Pull Request Requirements

Before starting work on another component, ensure the current component includes:

- Complete implementation
- Playground examples
- README documentation
- Unit tests
- Passing lint and formatting checks
- Stable public API

# Contributing to ProCoderX React Starter Kit

First, thank you for your interest in contributing to the ProCoderX React Starter Kit.

This project aims to provide a production-ready React starter foundation built with modern frontend engineering standards, accessibility, performance, scalability, and developer experience in mind.

Please read these guidelines before contributing.

---

# Table of Contents

- Project Philosophy
- Getting Started
- Development Setup
- Folder Structure
- Coding Standards
- Component Standards
- Accessibility
- Testing
- Documentation
- Pull Request Checklist
- Commit Guidelines
- Definition of Done

---

# Project Philosophy

Every contribution should improve at least one of the following:

- Developer Experience
- Accessibility
- Performance
- Maintainability
- Scalability
- Security
- Documentation
- Testing
- Code Quality

Avoid adding unnecessary complexity.

Production-quality solutions are preferred over quick fixes.

---

# Getting Started

Clone the repository.

```bash
git clone <repository-url>
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Run tests.

```bash
npm test
```

Build the project.

```bash
npm run build
```

---

# Development Setup

Recommended environment

- Node.js (LTS)
- npm
- VS Code

Recommended extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense

---

# Folder Structure

```text
src/

assets/

components/
    ui/
    common/
    layout/
    sections/

contexts/

hooks/

layouts/

lib/

pages/

router/

styles/

tests/

utils/
```

Keep components organized inside their own folders.

---

# Component Structure

Every UI component should follow this structure.

```text
Component/

├── Component.jsx
├── componentVariants.js
├── Component.test.jsx
├── README.md
└── index.js
```

If variants are unnecessary, `componentVariants.js` may be omitted.

---

# Export Conventions

## Components

Default export.

```jsx
export default Button;
```

Barrel export.

```js
export { default as Button } from './Button';
```

---

## Hooks

Named exports only.

---

## Contexts

Named exports only.

---

## Utilities

Named exports only.

---

# Coding Standards

Use:

- Functional Components
- Tailwind CSS v4
- CSS Variables
- CVA
- cn()

Do not use:

- CSS Modules
- SCSS
- styled-components
- Inline styles

Follow the Single Responsibility Principle.

Keep components small and reusable.

---

# Naming Conventions

Folders

PascalCase

Components

PascalCase

Hooks

camelCase

Utilities

camelCase

Props

camelCase

Variant Files

camelCase

Barrel Files

index.js

---

# Accessibility

Accessibility is mandatory.

Every component should:

- Use semantic HTML
- Support keyboard navigation
- Display visible focus states
- Include required `aria-*` attributes
- Meet WCAG AA contrast requirements
- Work with screen readers

---

# Theme Support

Every UI component must support:

- Light Theme
- Dark Theme

Always use design tokens.

Never hardcode colors.

Example

```css
var(--surface)
var(--border)
var(--text)
var(--primary)
```

---

# Testing

Every component should include:

```text
Component.test.jsx
```

Tests should cover:

- Rendering
- Variants
- Sizes
- States
- Events
- Accessibility

Shared utilities belong in:

```text
src/tests/
```

---

# Documentation

Every component should include:

```text
README.md
```

Recommended sections:

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

# Playground

Every component should have a Playground example.

Playground is intended for manual visual verification.

Playground is not a replacement for automated tests.

---

# Pull Request Checklist

Before opening a Pull Request, ensure:

- [ ] Code builds successfully.
- [ ] ESLint passes.
- [ ] Tests pass.
- [ ] Documentation is updated.
- [ ] README is updated if required.
- [ ] No unnecessary files are included.
- [ ] No console warnings or errors.
- [ ] Accessibility has been verified.
- [ ] Theme support works correctly.
- [ ] Component follows API guidelines.

---

# Commit Guidelines

Use clear, descriptive commit messages.

Examples

```text
feat: add Input component

fix: improve button accessibility

docs: update architecture guide

refactor: simplify theme provider

test: add Button unit tests
```

---

# Definition of Done

A feature is considered complete only when:

- Production-ready implementation
- Clean architecture
- Consistent API
- Theme support
- Responsive behavior
- Accessibility verified
- Unit tests passing
- Playground completed
- Documentation completed
- ESLint passing
- Production build passing

---

# Code Review Expectations

All contributions should be reviewed for:

- Readability
- Maintainability
- Accessibility
- Performance
- Consistency
- API design
- Documentation quality

---

# Questions

If you're unsure about an architectural decision, API design, or implementation approach, open a discussion before making significant changes.

Following these guidelines helps maintain a consistent, high-quality codebase and ensures the ProCoderX React Starter Kit remains production-ready and easy to maintain.
