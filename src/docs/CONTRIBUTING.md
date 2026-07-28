# Contributing to ProCoderX React Starter Kit

Thank you for your interest in contributing to the **ProCoderX React Starter Kit**.

This project aims to provide a production-ready React starter kit and reusable UI component library built around modern frontend engineering standards, accessibility, scalability, and developer experience.

Please read these guidelines before contributing.

---

# Project Philosophy

Every contribution should improve one or more of the following:

- Developer Experience
- Accessibility
- Performance
- Maintainability
- Scalability
- Documentation
- Testing
- Code Quality

Prioritize consistency over cleverness.

---

# Before You Start

Before making significant changes, review the project documentation in the following order:

1. PROJECT_CONTEXT.md
2. MASTER_CONTEXT.md
3. ARCHITECTURE.md
4. API_GUIDELINES.md
5. COMPONENT_GUIDELINES.md
6. TESTING_GUIDELINES.md

These documents define the project's architecture, coding standards, component APIs, and testing requirements.

---

# Development Setup

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

Create a production build.

```bash
npm run build
```

---

# Development Workflow

Every reusable component follows the same workflow.

```text
Planning
      ↓
API Design
      ↓
Implementation
      ↓
Playground Verification
      ↓
Accessibility Review
      ↓
Unit Tests
      ↓
Documentation
      ↓
Stable Release
```

Do not begin a new component until the current component has completed every stage.

---

# Coding Standards

Contributors should follow the project standards.

- Functional Components only
- Tailwind CSS v4
- CSS Variables
- Design Tokens
- CVA
- cn() utility
- Accessibility First
- Composition over inheritance
- Single Responsibility Principle

Avoid:

- Inline styles
- Hardcoded colours
- CSS Modules
- SCSS
- Styled Components

---

# Testing

Every reusable component must include automated tests.

Typical coverage includes:

- Rendering
- Variants
- States
- User interaction
- Accessibility

Refer to **TESTING_GUIDELINES.md** for detailed testing standards.

---

# Documentation

Documentation is considered part of the implementation.

Whenever applicable:

- Update the component README.
- Update related documentation.
- Keep documentation synchronized with implementation.

Do not duplicate information across documentation files.

---

# Commit Messages

Use clear and descriptive commit messages.

Examples:

```text
feat: add Badge component

fix: improve Switch accessibility

docs: update API guidelines

refactor: simplify theme provider

test: add Alert unit tests
```

---

# Definition of Done

A contribution is considered complete only when:

- Production-ready implementation
- Consistent API
- Theme support
- Accessibility verified
- Playground verified
- Unit tests passing
- Documentation updated
- ESLint passing
- Production build passing

---

# Questions

If you're unsure about an architectural decision or implementation approach, review the project documentation first.

If clarification is still needed, open a discussion before making significant architectural changes.

---

# Guiding Principle

Leave the project better than you found it.

Consistency, maintainability, and long-term quality always take priority over short-term convenience.
