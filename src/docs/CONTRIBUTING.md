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

# 1. Project Philosophy

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

# 2. Documentation Map

Refer to the project documentation before contributing.

The documents below define the project's architecture, coding standards, API design, and testing requirements. Contributors should review them before making significant changes.

- MASTER_CONTEXT.md
- ARCHITECTURE.md
- API_GUIDELINES.md
- COMPONENT_GUIDELINES.md
- TESTING_GUIDELINES.md

---

# 3. Getting Started

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

# 4. Development Setup

Recommended environment

- Node.js (LTS)
- npm
- VS Code

Recommended extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense

---

# 5. Folder Structure

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

# 6. Component Structure

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

# 7. Export Conventions

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

# 8. Naming Conventions

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

# 9. Coding Standards

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

# 10. Theme Support

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

# 11. Accessibility

Accessibility is mandatory.

Every component should:

- Use semantic HTML
- Support keyboard navigation
- Display visible focus states
- Include required `aria-*` attributes
- Meet WCAG AA contrast requirements
- Work with screen readers

---

# 12. Testing

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

# 13. Documentation

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

# 14. Playground

Every component should have a Playground example.

Playground is intended for manual visual verification.

Playground is not a replacement for automated tests.

---

# 15. Development Workflow

Never begin a new component until the current component has been:

- Implemented
- Playground verified
- Unit tested
- Documented
- Accessibility reviewed
- Declared Stable

---

# 16. Branch Strategy

- main → Stable releases
- feature/\* → New features
- fix/\* → Bug fixes
- docs/\* → Documentation
- refactor/\* → Refactoring

---

# 17. Pull Request Checklist

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

# 18. Pull Request Process

1. Create a feature branch.
2. Implement the change.
3. Update documentation if required.
4. Add or update tests.
5. Run lint and tests.
6. Open a Pull Request.
7. Address review comments.
8. Merge after approval.

---

# 19. Commit Guidelines

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

# 20. Definition of Done

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
- Public API finalized

---

# 21. Code Review Expectations

All contributions should be reviewed for:

- Readability
- Maintainability
- Accessibility
- Performance
- Consistency
- API design
- Documentation quality

---

# 22. Reporting Issues

When reporting a bug include:

- Environment
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

---

# 23. Security

Never commit:

- API Keys
- Secrets
- Passwords
- Environment files

---

# 24. Questions

If you're unsure about an architectural decision, API design, or implementation approach, open a discussion before making significant changes.

Following these guidelines helps maintain a consistent, high-quality codebase and ensures the ProCoderX React Starter Kit remains production-ready and easy to maintain.

# 25. Guiding Principle

Every contribution should leave the codebase better than it was found.

Prioritize consistency over cleverness.
