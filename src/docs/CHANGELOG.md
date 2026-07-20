# Changelog

All notable changes to the **ProCoderX React Starter Kit** will be documented in this file.

This project follows the principles of **Keep a Changelog** and **Semantic Versioning (SemVer)**.

---

# [Unreleased]

## Added

- Textarea component (planned)
- Select component (planned)

## Changed

- Ongoing improvements to documentation.
- Internal architecture refinements.

## Fixed

- Bug fixes pending the next release.

---

# [0.7.0] - 2026-07-18

## Added

### Components

- Checkbox component
- Radio component
- Switch component

### Design System

- Shared Form Token System
- Unified Playground Design

### Documentation

- MASTER_CONTEXT.md
- CONTRIBUTING.md
- CHANGELOG.md

## Changed

- Improved form component consistency.
- Unified playground layout across all components.
- Updated project documentation structure.

---

# [0.6.0] - 2026-07-15

## Added

### Components

- Label component

### Documentation

- API_GUIDELINES.md
- ARCHITECTURE.md
- COMPONENT_GUIDELINES.md
- TESTING_GUIDELINES.md

## Changed

- Documentation reorganized.
- Project standards formalized.

---

# [0.5.0] - 2026-07-12

## Added

### Components

- Input component

### Features

- Validation states
- Label integration
- Helper text support
- Error state
- Disabled state
- Read-only state
- Placeholder support
- Theme support
- Accessibility improvements

## Changed

- Form architecture standardized.

---

# [0.4.0] - 2026-07-09

## Added

### Documentation

- Initial Input planning
- Component architecture improvements

## Changed

- Updated development workflow.

---

# [0.3.0] - 2026-07-05

## Added

### Components

- Button component

### Features

- Multiple variants
- Multiple sizes
- Loading state
- Disabled state
- Full width
- Link button
- Download button
- Start icon
- End icon
- Accessibility support
- Theme support

### Testing

- Button unit tests

### Documentation

- Button README

## Changed

- UI component architecture established.

---

# [0.2.0] - 2026-07-02

## Added

### Theme System

- ThemeProvider
- Theme Context
- useTheme hook
- Light Theme
- Dark Theme
- System Theme
- Theme persistence
- prefers-color-scheme support

### Design Tokens

- Background tokens
- Surface tokens
- Text tokens
- Brand tokens
- Border tokens
- Status tokens
- Shadow tokens
- Radius tokens
- Motion tokens
- Focus tokens

### Utilities

- cn() utility
- clsx integration
- tailwind-merge integration

## Changed

- Project foundation completed.

---

# [0.1.0] - 2026-06-28

## Added

### Project Initialization

- React 19
- Vite
- React Router v7
- Tailwind CSS v4
- ESLint
- Prettier
- Vitest
- React Testing Library

### Project Structure

- Scalable folder architecture
- Component-first organization
- Shared testing utilities
- Documentation directory

---

# Versioning

This project follows **Semantic Versioning (SemVer)**.

Version format:

```text
MAJOR.MINOR.PATCH
```

## MAJOR

Breaking API changes.

Example:

```text
1.4.0 → 2.0.0
```

## MINOR

Backward-compatible features.

Example:

```text
0.7.0 → 0.8.0
```

## PATCH

Bug fixes and documentation updates.

Example:

```text
0.7.1 → 0.7.2
```

---

# Release Categories

| Type       | Description                       |
| ---------- | --------------------------------- |
| Added      | New features                      |
| Changed    | Improvements to existing features |
| Deprecated | Features scheduled for removal    |
| Removed    | Removed functionality             |
| Fixed      | Bug fixes                         |
| Security   | Security improvements             |

---

# Release Workflow

Every release should follow this process:

1. Complete implementation.
2. Verify in Playground.
3. Run unit tests.
4. Perform accessibility review.
5. Run ESLint.
6. Verify production build.
7. Update documentation.
8. Update CHANGELOG.md.
9. Create Git tag.
10. Publish release.

---

# Notes

- Keep entries concise.
- Never modify previous release history.
- Document every public release.
- Record unreleased work only under the **Unreleased** section.

---

# Compare Versions

```text
[Unreleased] → v0.7.0
v0.7.0
v0.6.0
v0.5.0
v0.4.0
v0.3.0
v0.2.0
v0.1.0
```
