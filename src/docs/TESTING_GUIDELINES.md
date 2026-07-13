# ProCoderX React Starter Kit — Testing Guidelines

> Purpose: Define the testing philosophy, standards, structure, workflow, and best practices for testing all components in the ProCoderX React Starter Kit.

---

# 1. Testing Philosophy

Testing is a fundamental part of the ProCoderX React Starter Kit.

Every production-ready component must include automated unit tests to ensure reliability, maintainability, accessibility, and long-term scalability.

Testing should verify:

- Correct rendering
- Component behavior
- Accessibility
- User interactions
- Regression prevention
- API consistency

Playground is intended for manual verification only.

Playground **does not replace automated testing**.

A component is **not considered complete** until its implementation, documentation, playground, and automated tests are all finished.

---

# 2. Testing Pyramid

The ProCoderX React Starter Kit follows an industry-standard testing pyramid.

```text
                 End-to-End Tests
                  (Playwright)

             Integration Testing
              (Future Support)

         Component Unit Testing
 (Vitest + React Testing Library)
```

Testing priority:

1. Unit Tests
2. Integration Tests (Future)
3. End-to-End Tests (Future)

Since this project is a reusable UI component library, the primary focus is comprehensive **component-level unit testing**.

---

# 3. Testing Stack

## Current Stack

- Vitest
- React Testing Library
- @testing-library/jest-dom
- @testing-library/user-event
- jsdom

## Future Stack

- Storybook
- Playwright (End-to-End Testing)
- Axe Accessibility Testing
- Visual Regression Testing
- GitHub Actions (Automated CI)

---

# 4. Testing Goals

Every test should answer one question:

> "Can this component safely be used in production?"

The objective is **not** simply to increase code coverage.

The primary goals are:

- Prevent regressions
- Verify component behavior
- Maintain accessibility
- Enable safe refactoring
- Ensure API stability
- Increase long-term developer confidence

High test coverage is valuable only when the tests verify meaningful behavior.

---

# 5. Testing Architecture

Industry-standard UI libraries maintain a dedicated test file for every component.

This approach improves:

- Maintainability
- Scalability
- Faster debugging
- Easier refactoring
- Better organization
- Independent component development

Recommended project structure:

```text
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│       ├── Button/
│       │   ├── Button.jsx
│       │   ├── buttonVariants.js
│       │   ├── Button.test.jsx
│       │   ├── README.md
│       │   └── index.js
│       │
│       ├── Input/
│       │   ├── Input.jsx
│       │   ├── inputVariants.js
│       │   ├── Input.test.jsx
│       │   ├── README.md
│       │   └── index.js
│       │
│       └── ...
│
├── contexts/
├── hooks/
├── layouts/
├── pages/
├── router/
├── styles/
├── tests/
│   ├── setup.js
│   ├── test-utils.js
│   ├── renderWithTheme.js
│   ├── renderWithProviders.js
│   └── helpers.js
│
├── utils/
└── lib/
```

Each component owns its own test suite.

Never create shared component test files such as:

```text
components.test.jsx

ui.test.jsx

everything.test.jsx
```

Each component must remain fully isolated and independently testable.

---

# 6. Shared Testing Utilities

Shared testing utilities should be placed inside a dedicated testing directory.

```text
src/
└── tests/
    ├── setup.js
    ├── test-utils.js
    ├── renderWithTheme.js
    ├── renderWithProviders.js
    └── helpers.js
```

These utilities eliminate duplication and provide consistent testing behavior across the project.

---

## setup.js

Global test configuration.

Typical responsibilities include:

- jest-dom matchers
- Global mocks
- Test cleanup
- Environment configuration

---

## test-utils.js

Provides reusable testing helpers.

Typical responsibilities include:

- Custom render()
- Common wrapper components
- Shared testing utilities

---

## renderWithTheme()

Renders components inside the application's ThemeProvider.

Use this helper whenever a component depends on theme context.

---

## renderWithProviders()

Renders components with every required provider.

Examples include:

- ThemeProvider
- Router
- Context Providers
- Redux (Future)
- React Query (Future)

This helper should be used whenever multiple providers are required.

---

# 7. Component Testing Standards

Every component must test **only its own public behavior**.

A component's test suite should never verify the implementation of another component.

Each test should verify **one responsibility only**.

Good examples:

```text
✓ renders button

✓ calls onClick

✓ renders loading state

✓ applies disabled state
```

Avoid combining multiple behaviors into a single test.

Bad example:

```text
✗ renders button, loading spinner, disabled state and click event
```

Small, focused tests are easier to understand, maintain, and debug.

---

# 8. Test Development Workflow

Every component should follow the same development lifecycle.

```text
Design API

↓

Implement Component

↓

Manual Playground Testing

↓

Write Unit Tests

↓

Run Tests

↓

Fix Test Failures

↓

Accessibility Review

↓

Update README

↓

Final Review

↓

Mark Component as Stable
```

Development should not continue to the next component until the current component satisfies the project's Definition of Done.

---

# 9. Query Priority

React Testing Library encourages querying the application the same way users interact with it.

Preferred query order:

1. getByRole()
2. getByLabelText()
3. getByPlaceholderText()
4. getByText()
5. getByDisplayValue()
6. getByAltText()
7. getByTitle()
8. getByTestId() _(last resort)_

Preferred example:

```jsx
screen.getByRole('button', {
  name: /save/i,
});
```

Avoid implementation-specific queries such as:

```jsx
container.querySelector('.btn');
```

Tests should validate user-facing behavior rather than implementation details.

---

# 10. Button Testing Checklist

The Button component should verify all publicly exposed functionality.

Testing categories:

## Rendering

- ✓ renders as a `<button>` by default
- ✓ renders children correctly
- ✓ renders default variant
- ✓ renders default size

---

## Variants

- ✓ primary
- ✓ secondary
- ✓ outline
- ✓ ghost
- ✓ destructive
- ✓ link

Each variant should render correctly and remain accessible.

---

## Sizes

- ✓ sm
- ✓ md
- ✓ lg
- ✓ icon

Each size should render correctly without breaking layout.

---

## States

- ✓ disabled
- ✓ loading
- ✓ fullWidth

Verify both visual and functional behavior.

Example:

- Disabled buttons cannot be clicked.
- Loading buttons indicate busy state.

---

## Icons

- ✓ startIcon
- ✓ endIcon

Verify icons render only when provided.

---

## Behavior

- ✓ click event
- ✓ href renders anchor element
- ✓ download attribute
- ✓ external link attributes
- ✓ disabled prevents interaction

---

## Accessibility

- ✓ accessible button role
- ✓ aria-label
- ✓ aria-disabled
- ✓ aria-busy
- ✓ keyboard focus
- ✓ Enter key support
- ✓ Space key support

---

# 11. Input Testing Checklist

The Input component should verify rendering, interaction, validation, and accessibility.

## Rendering

- ✓ renders input element
- ✓ renders label
- ✓ renders placeholder
- ✓ renders helper text

---

## Props

- ✓ placeholder
- ✓ label
- ✓ helperText
- ✓ required
- ✓ disabled
- ✓ readOnly

---

## States

- ✓ default
- ✓ error
- ✓ success
- ✓ disabled
- ✓ readOnly
- ✓ focused

---

## Icons

- ✓ startIcon
- ✓ endIcon

---

## Behavior

- ✓ accepts typing
- ✓ updates value
- ✓ fires onChange
- ✓ fires onFocus
- ✓ fires onBlur

---

## Accessibility

- ✓ label association
- ✓ aria-invalid
- ✓ aria-describedby
- ✓ keyboard navigation
- ✓ focus visibility

---

# 12. Card Testing Checklist

Card components are primarily presentational.

Testing should verify:

## Rendering

- ✓ renders children
- ✓ renders header
- ✓ renders body
- ✓ renders footer (if supported)

---

## Props

- ✓ custom className
- ✓ custom content
- ✓ interactive mode (if applicable)

---

## States

- ✓ hover
- ✓ selected
- ✓ disabled (if applicable)

---

## Accessibility

- ✓ semantic HTML
- ✓ correct heading hierarchy (when applicable)

---

# 13. Future Component Testing Examples

Future UI components should follow the same testing methodology.

---

## Modal

Verify:

- ✓ opens
- ✓ closes
- ✓ Escape key
- ✓ overlay click
- ✓ focus trap
- ✓ initial focus
- ✓ restores focus
- ✓ aria-modal
- ✓ role="dialog"

---

## Drawer

Verify:

- ✓ opens
- ✓ closes
- ✓ overlay click
- ✓ Escape key
- ✓ keyboard navigation

---

## Dropdown

Verify:

- ✓ opens
- ✓ closes
- ✓ keyboard navigation
- ✓ item selection
- ✓ outside click

---

## Tooltip

Verify:

- ✓ hover
- ✓ keyboard focus
- ✓ aria-describedby
- ✓ positioning

---

## Toast

Verify:

- ✓ appears
- ✓ auto dismiss
- ✓ manual dismiss
- ✓ multiple toasts

---

## Accordion

Verify:

- ✓ expands
- ✓ collapses
- ✓ keyboard interaction
- ✓ aria-expanded

---

## Tabs

Verify:

- ✓ tab switching
- ✓ keyboard navigation
- ✓ active panel
- ✓ aria-controls

---

# 14. Accessibility Testing

Accessibility is a first-class requirement.

Every interactive component should verify:

## Keyboard Support

- ✓ Tab
- ✓ Shift + Tab
- ✓ Enter
- ✓ Space
- ✓ Escape (when applicable)
- ✓ Arrow Keys (when applicable)

---

## Screen Reader Support

Verify:

- Semantic HTML
- Accessible names
- Accessible descriptions
- Required ARIA attributes
- Correct landmark usage

---

## Focus Management

Verify:

- Focus visibility
- Focus order
- Focus restoration
- No keyboard traps

---

Accessibility issues should be treated as functional bugs.

---

# 15. Testing Best Practices

Write tests from the user's perspective.

Prefer testing:

- What users see
- What users click
- What users type
- What users hear through assistive technologies

Avoid testing:

- Internal implementation
- React state
- Private functions
- Component internals

Prefer semantic queries:

```jsx
screen.getByRole();
```

instead of

```jsx
container.querySelector();
```

---

# 16. Test Writing Rules

Every test should follow these rules.

## One Behavior Per Test

Good

```text
✓ renders loading spinner
```

Bad

```text
✗ loading + disabled + click + icon
```

---

## Independent Tests

Tests should never depend on:

- execution order
- shared variables
- previous tests

Each test should be runnable in isolation.

---

## Clear Test Names

Good

```jsx
renders loading spinner
```

Bad

```jsx
Button works
```

---

## Arrange → Act → Assert

Structure every test consistently.

```text
Arrange

↓

Act

↓

Assert
```

This improves readability and maintainability.

---

# 17. Mocking Guidelines

Mock only external dependencies that cannot be reliably tested.

Common examples include:

- ResizeObserver
- IntersectionObserver
- MatchMedia
- Browser APIs
- Timers
- Network requests

Avoid mocking:

- React state
- Component behavior
- Props
- User interactions

Mocking should simplify tests—not hide implementation problems.

---

# 18. What Not to Test

Avoid writing tests for:

- Tailwind utility classes
- Internal React state
- Third-party library internals
- Implementation details
- Private helper functions

Focus on observable behavior from the user's perspective.

Ask yourself:

> "Would a real user notice this?"

If the answer is **No**, it usually does not belong in a unit test.

---

# 19. Regression Testing

Regression testing ensures that previously fixed bugs never reappear.

Whenever a bug is discovered:

1. Reproduce the issue.
2. Write a failing test.
3. Fix the implementation.
4. Verify the test passes.
5. Commit both the fix and the test together.

Every bug fix should introduce a regression test.

Never fix a production bug without adding a corresponding automated test.

---

# 20. Coverage Goals

Code coverage is a quality indicator, not the primary objective.

Recommended minimum targets:

| Metric     | Target |
| ---------- | ------ |
| Statements | 90%    |
| Branches   | 85%    |
| Functions  | 90%    |
| Lines      | 90%    |

High coverage does **not** guarantee high-quality tests.

Prefer meaningful behavioral tests over artificially increasing coverage.

---

# 21. Playground vs Unit Testing

Playground and automated tests serve different purposes.

## Playground

Purpose:

- Manual verification
- Visual inspection
- Component API exploration
- Theme verification
- Responsive testing
- Developer experimentation

Example:

```text
Playground/
└── Components.jsx
```

Playground helps developers manually verify component behavior.

It should never be considered a replacement for automated testing.

---

## Unit Testing

Purpose:

- Automated verification
- Behavior testing
- Accessibility validation
- Regression prevention
- API stability

Examples:

```text
Button.test.jsx

Input.test.jsx

Card.test.jsx
```

Unit tests execute automatically and verify production behavior.

---

## Comparison

| Playground                  | Unit Tests              |
| --------------------------- | ----------------------- |
| Manual                      | Automated               |
| Visual verification         | Functional verification |
| Developer focused           | Production focused      |
| No regression protection    | Prevents regressions    |
| Optional during development | Required before release |

---

# 22. Future Storybook Integration

When Storybook is introduced, components may include:

```text
Button/

├── Button.jsx
├── buttonVariants.js
├── Button.test.jsx
├── Button.stories.jsx
├── README.md
└── index.js
```

Storybook will be used for:

- Interactive documentation
- Visual component discovery
- Design collaboration
- Component showcase
- Manual UI review

Storybook complements Playground and automated tests.

It does **not** replace unit testing.

---

# 23. CI/CD Testing (Future)

Every Pull Request should automatically execute the following pipeline:

```text
GitHub Actions

↓

Install Dependencies

↓

ESLint

↓

Unit Tests

↓

Build Verification

↓

Coverage Report

↓

Merge
```

Typical commands:

```bash
npm install

npm run lint

npm test

npm run build
```

A Pull Request should not be merged if:

- ESLint fails
- Tests fail
- Build fails

Automated quality checks ensure long-term project stability.

---

# 24. Component Completion Checklist

A component is considered complete only when every item below has been satisfied.

## Implementation

- [ ] Production-ready implementation
- [ ] Public API finalized

---

## Architecture

- [ ] Correct folder structure
- [ ] Consistent naming
- [ ] Barrel export configured

---

## Theme Support

- [ ] Light Theme
- [ ] Dark Theme

---

## Accessibility

- [ ] WCAG compliant
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] Focus management verified

---

## Documentation

- [ ] README.md completed
- [ ] Usage examples included
- [ ] Props documented

---

## Testing

- [ ] Component.test.jsx completed
- [ ] All tests passing
- [ ] Accessibility verified
- [ ] Regression tests added (when applicable)

---

## Playground

- [ ] Playground example completed
- [ ] All variants demonstrated

---

## Quality

- [ ] ESLint passing
- [ ] Production build passing
- [ ] No console warnings
- [ ] No accessibility warnings

---

# 25. Testing Principles

Every test should be:

- Small
- Independent
- Predictable
- Fast
- Readable
- Maintainable

Avoid writing tests that depend on:

- Other component tests
- Shared mutable state
- Execution order
- External side effects

Each test should be capable of running independently.

---

# 26. Stable Component Lifecycle

Every UI component follows the same lifecycle.

```text
Planning

↓

API Design

↓

Implementation

↓

Playground

↓

Unit Testing

↓

Accessibility Review

↓

Documentation

↓

Code Review

↓

Stable

↓

Future Maintenance
```

No component should move to the next stage until the current stage has been completed successfully.

---

# 27. Definition of Done

A component is considered production-ready only when it contains:

```text
Component/

├── Component.jsx
├── componentVariants.js (if required)
├── Component.test.jsx
├── README.md
└── index.js
```

and satisfies all of the following:

- ✅ Production-ready implementation
- ✅ Stable public API
- ✅ Unit tests completed
- ✅ Accessibility verified
- ✅ Theme support
- ✅ Documentation completed
- ✅ Playground completed
- ✅ Clean architecture
- ✅ ESLint passing
- ✅ Production build passing
- ✅ No console warnings
- ✅ No accessibility violations

Only after meeting these requirements should the component be considered **Stable**.

---

# 28. Guiding Principles

Testing is not an afterthought.

Testing begins during component development—not after implementation is complete.

Every new component should be developed alongside:

- Implementation
- Documentation
- Playground
- Automated tests

The project prioritizes:

- Reliability
- Accessibility
- Maintainability
- Scalability
- Consistency
- Developer confidence

A feature is considered complete only when its implementation, documentation, playground, and automated tests have all been completed successfully.

---

# Final Principle

> **If a component is not tested, it is not production-ready.**

Testing is a core part of the ProCoderX React Starter Kit development workflow and is required for every reusable UI component.

Final Review

Your testing-guidelines.md is now comparable to the documentation style used by mature UI libraries.

It covers:

✅ Testing philosophy
✅ Testing architecture
✅ Testing workflow
✅ Testing utilities
✅ Component-specific checklists
✅ Accessibility
✅ Best practices
✅ Mocking
✅ Regression testing
✅ Coverage goals
✅ Playground vs Unit Testing
✅ Storybook integration
✅ CI/CD pipeline
✅ Component completion checklist
✅ Stable component lifecycle
✅ Definition of Done
✅ Guiding principles

This is a solid foundation for a production-quality React component library.
