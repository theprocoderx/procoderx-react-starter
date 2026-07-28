# Theme

The Theme System powers the visual foundation of the **ProCoderX React Starter Kit**.

It provides a scalable, theme-aware architecture built on CSS Custom Properties (Design Tokens), enabling a consistent user interface across every component while supporting Light Mode, Dark Mode, accessibility, and future customization.

Rather than hardcoding visual values inside components, every component consumes semantic tokens that ultimately resolve to foundation design values. This separation keeps the design system consistent, maintainable, and easy to extend.

---

# Documentation Overview

This directory contains all documentation related to the theme architecture and design token system.

| Document             | Description                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **THEME_SYSTEM.md**  | Explains the overall theme architecture, folder structure, token flow, theme switching, import order, and implementation guidelines. |
| **DESIGN_TOKENS.md** | Documents the complete design token architecture, token layers, categories, naming conventions, and usage guidelines.                |

---

# Theme Features

The Theme System provides:

- Light Theme
- Dark Theme
- Theme-aware components
- Centralized Design Tokens
- Foundation, Shared, and Component token layers
- Consistent semantic architecture
- Accessible color system
- Typography scale
- Radius scale
- Motion system
- Shadow system
- Overlay support
- Glassmorphism support
- Scrollbar customization
- Future-ready architecture

---

# Folder Structure

```text
src/
└── styles/
    ├── globals.css
    ├── index.css
    │
    └── tokens/
        ├── foundation/
        │   ├── light.css
        │   ├── dark.css
        │   └── index.css
        │
        ├── shared/
        │   ├── form.css
        │   ├── button.css
        │   ├── card.css
        │   ├── navigation.css
        │   ├── overlay.css
        │   ├── feedback.css
        │   ├── display.css
        │   └── index.css
        │
        ├── components.css
        └── index.css
```

---

# Architecture Overview

The theme system follows a layered token architecture.

```text
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

Each layer has a single responsibility and depends only on the layer directly below it.

---

# Theme Support

The starter kit currently supports:

- Light Theme
- Dark Theme
- System Theme

Both themes expose the same token names.

Only token values change.

Components never contain theme-specific logic—they always consume semantic tokens.

---

# Import Order

The token system should always be imported in the following order.

```text
Foundation
      ↓
Shared
      ↓
Component Tokens
      ↓
Application Styles
```

Example

```css
@import './foundation/index.css';
@import './shared/index.css';
@import './components.css';
```

---

# Getting Started

If you're new to the Theme System, read the documentation in the following order:

1. **THEME_SYSTEM.md**
2. **DESIGN_TOKENS.md**

This sequence introduces the overall architecture before exploring the complete token system.

---

# Design Principles

The Theme System is built around the following principles:

- Single Source of Truth
- Semantic Token Architecture
- Separation of Concerns
- Theme Independence
- Accessibility First
- Reusability
- Consistency
- Scalability
- Maintainability

---

# Contributing

When modifying the Theme System:

- Keep Foundation Tokens implementation-agnostic.
- Reuse Shared Tokens whenever possible.
- Create Component Tokens only when necessary.
- Maintain identical token names across all themes.
- Avoid hardcoded visual values.
- Update documentation whenever new token groups are introduced.

---

# Related Documentation

- `ARCHITECTURE.md`
- `COMPONENT_GUIDELINES.md`
- `API_GUIDELINES.md`
- `CONTRIBUTING.md`

---

# Version

Current Theme Architecture: **v1.0**

Maintained as part of the **ProCoderX React Starter Kit**.
