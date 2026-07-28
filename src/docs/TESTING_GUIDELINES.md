# Testing Guidelines

## Version

| Field        | Value     |
| ------------ | --------- |
| Version      | 1.0.0     |
| Status       | Stable    |
| Last Updated | July 2026 |

---

# Introduction

This document defines the testing standards for the **ProCoderX React Starter Kit**.

Its purpose is to establish a consistent testing strategy that ensures every reusable component is reliable, accessible, maintainable, and production-ready.

These guidelines apply to every UI component, shared utility, and testing helper in the project.

---

# Testing Philosophy

Testing should verify how software behaves from a user's perspective rather than how it is internally implemented.

Every test should be:

- Reliable
- Independent
- Maintainable
- Readable
- Predictable
- Production focused

Testing is intended to increase confidence when refactoring, extending, or releasing the project.

---

# Testing Goals

The testing strategy aims to ensure:

- Correct rendering
- Stable public APIs
- Reliable user interactions
- Accessibility compliance
- Theme compatibility
- Regression prevention
- Long-term maintainability

---

# Core Principles

Follow these principles when writing tests.

- Test behaviour instead of implementation.
- Prefer user interactions over internal state.
- Keep tests isolated.
- Keep tests deterministic.
- Keep tests easy to understand.
- Avoid unnecessary mocking.
- Write only meaningful assertions.
- One test should verify one behaviour whenever possible.

---

# Testing Stack

The project uses the following testing tools.

| Tool                  | Purpose           |
| --------------------- | ----------------- |
| Vitest                | Test Runner       |
| React Testing Library | Component Testing |
| user-event            | User Interaction  |
| jest-dom              | DOM Matchers      |

---

# Testing Architecture

Testing is organised into two levels.

1. Component Tests
2. Shared Testing Utilities

Every reusable component owns its own test suite while shared helpers provide reusable infrastructure.

---

# Project Structure

```text
src/

components/
└── ui/
    └── Button/
        └── Button.test.jsx

tests/
├── setup.js
├── test-utils.js
├── renderWithTheme.js
├── renderWithProviders.js
└── helpers.js
```

---

# Shared Testing Utilities

The `src/tests` directory contains reusable testing utilities shared across the project.

## setup.js

Responsible for global testing configuration.

Typical responsibilities include:

- jest-dom setup
- Global mocks
- Cleanup configuration

---

## test-utils.js

Provides reusable helpers that reduce duplication across component tests.

---

## renderWithTheme.js

Renders components inside the project's Theme Provider.

Use this helper whenever theme-dependent behaviour is tested.

---

## renderWithProviders.js

Renders components inside all required providers.

Examples include:

- Theme Provider
- Router
- Context Providers

---

## helpers.js

Contains reusable testing helpers that are shared across multiple test suites.

Business-specific helpers should remain inside the component's own test file.

---

# Test File Standards

Every reusable component owns its own test file.

Example:

```text
Button/
└── Button.test.jsx

Input/
└── Input.test.jsx

Card/
└── Card.test.jsx
```

Component tests should remain colocated with the component.

---

# Naming Conventions

Test suites should clearly describe the component being tested.

Example:

```jsx
describe('Button', () => {});
```

Test cases should describe observable behaviour.

Example:

```jsx
it('renders the primary variant');
```

Avoid vague descriptions.

---

# Query Priority

Always prefer accessible queries.

Recommended order:

1. getByRole()
2. getByLabelText()
3. getByPlaceholderText()
4. getByText()
5. getByDisplayValue()
6. getByTestId()

`getByTestId()` should only be used when no accessible alternative exists.

---

# Component Testing Standards

Every component should be tested according to its public API.

The following areas should be verified whenever applicable.

- Rendering
- Variants
- Sizes
- States
- Icons
- Behavior
- Accessibility

Only test categories that are relevant to the component.

---

# Form Component Testing

Form controls should verify:

- Controlled behaviour
- Uncontrolled behaviour
- Validation
- Required state
- Disabled state
- Read-only state
- Helper text
- Error messages
- Success messages
- Native HTML behaviour

---

# User Interaction Testing

Verify user interactions rather than implementation details.

Common interactions include:

- Click
- Change
- Input
- Focus
- Blur
- Keyboard Navigation

Interactions should simulate real user behaviour whenever possible.

---

# Accessibility Testing

Accessibility is a mandatory part of testing.

Verify:

- Semantic HTML
- Keyboard navigation
- Focus visibility
- ARIA attributes
- Screen reader compatibility

Accessibility regressions should be treated as functional regressions.

---

# Mocking Guidelines

Mock only external dependencies.

Typical examples include:

- Network requests
- Browser APIs
- Timers

Avoid mocking internal component logic.

Over-mocking reduces test confidence.

---

# General Best Practices

- Keep tests small.
- Keep assertions focused.
- Avoid duplicated setup.
- Prefer reusable helpers.
- Test observable behaviour.
- Avoid implementation-specific assertions.
- Remove unused mocks.
- Keep test files easy to read.

---

# Display Component Testing

Display components should verify only the behaviour that is meaningful to their API.

Typical checks include:

- Rendering
- Variants
- Sizes
- Content rendering
- Icons
- Accessibility

Examples:

- Badge
- Card
- Alert
- Avatar

Display components generally do not require interaction testing unless they expose interactive behaviour.

---

# Interactive Component Testing

Interactive components should verify user interactions in addition to rendering.

Typical checks include:

- Click
- Keyboard interaction
- Focus management
- Disabled state
- Loading state
- Accessibility

Examples:

- Button
- Switch
- Checkbox
- Radio
- Select

---

# Overlay Component Testing

Overlay components require additional behavioural testing.

Verify:

- Open and close behaviour
- Focus trapping
- Escape key handling
- Outside click behaviour
- Keyboard navigation
- Accessibility

Examples:

- Dialog
- Modal
- Drawer
- Dropdown
- Tooltip

---

# Rendering Tests

Every component should verify that it renders correctly using its default configuration.

Typical assertions include:

- Component renders successfully.
- Default content is displayed.
- Required attributes exist.
- Default classes are applied.

Rendering tests provide the foundation for all other tests.

---

# Variant Testing

Every supported visual variant should be verified.

Examples include:

- Primary
- Secondary
- Outline
- Ghost
- Destructive

Variant tests should confirm that the expected styles and behaviour are applied.

---

# Size Testing

Verify every supported size when applicable.

Typical sizes include:

- sm
- md
- lg
- icon

Only test sizes that are actually implemented.

---

# State Testing

Verify every supported component state.

Common states include:

- Default
- Hover (when applicable)
- Active
- Disabled
- Loading
- Invalid
- Success
- Read Only
- Required

Only verify meaningful states for the component.

---

# Icon Testing

Components supporting icons should verify:

- Start icon rendering
- End icon rendering
- Icon alignment
- Accessibility

Decorative icons should remain hidden from assistive technologies.

---

# Behaviour Testing

Verify observable component behaviour.

Examples include:

- Callback execution
- Value updates
- State changes
- Keyboard interaction
- Focus movement

Avoid testing internal implementation details.

---

# Regression Testing

Regression tests help prevent previously fixed bugs from returning.

Add regression tests whenever:

- A production bug is fixed.
- A critical accessibility issue is resolved.
- A public API behaviour changes.

Regression tests should remain simple and focused.

---

# Coverage Expectations

Aim for meaningful coverage rather than maximum coverage.

Focus on testing:

- Public API
- User behaviour
- Accessibility
- Critical states

Avoid writing tests solely to increase coverage percentages.

---

# Playground vs Unit Tests

Playground and unit tests serve different purposes.

## Playground

Used for:

- Manual QA
- Visual verification
- Theme verification
- API exploration

## Unit Tests

Used for:

- Behaviour verification
- Regression prevention
- Accessibility validation
- Automated testing

The Playground never replaces automated tests.

---

# Continuous Integration

Before merging changes, verify:

- Tests pass.
- ESLint passes.
- Production build succeeds.
- No accessibility regressions are introduced.

Automated testing should be part of the project's release workflow.

---

# Common Mistakes

Avoid the following:

- Testing implementation details.
- Overusing `getByTestId()`.
- Mocking everything unnecessarily.
- Writing overly large test files.
- Combining multiple behaviours into one test.
- Depending on test execution order.
- Ignoring accessibility.

---

# Test Maintenance

Keep test suites maintainable.

When updating a component:

- Remove obsolete tests.
- Update outdated assertions.
- Reuse shared helpers.
- Keep test names descriptive.

Tests should evolve alongside the component.

---

# Definition of Done

A component's test suite is complete when it verifies, where applicable:

- Rendering
- Variants
- Sizes
- States
- Icons
- Behavior
- Accessibility

Additionally:

- All tests pass.
- No duplicated test logic exists.
- Shared helpers are reused where appropriate.
- Test code is readable and maintainable.

---

# Guiding Principles

The testing strategy should always prioritise:

- Behaviour over implementation
- Accessibility over convenience
- Maintainability over quantity
- Confidence over coverage
- Consistency across the entire component library

Well-written tests should make future development safer, easier, and more predictable.
