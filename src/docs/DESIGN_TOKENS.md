# Design Tokens

> Design Tokens define the visual language of the **ProCoderX React Starter Kit**. They provide a centralized, scalable, and theme-aware system that ensures consistency across all components while supporting Light Mode, Dark Mode, accessibility, and future customization.

---

# Table of Contents

- Introduction
- Design Token Philosophy
- Token Architecture
- Token Layers
- Foundation Tokens
- Domain Tokens
- Component Tokens
- Theme Integration
- Naming Conventions
- Token Categories
- Token Usage
- Accessibility
- Best Practices
- Common Mistakes
- Future Expansion
- Summary

---

# Introduction

Design Tokens are the single source of truth for every reusable visual decision within the design system.

Instead of hardcoding colors, spacing, shadows, or radii inside components, every component consumes semantic tokens.

This approach improves:

- Consistency
- Maintainability
- Scalability
- Accessibility
- Theme support
- Developer Experience

---

# Design Token Philosophy

The design system follows one fundamental rule:

> Components never own visual values.

Instead, components consume semantic tokens that ultimately resolve to Foundation Tokens.

Example

```text
Button

↓

--button-primary-bg

↓

--primary-bg

↓

#0B3B5C
```

Changing a Foundation Token automatically updates every component that depends on it.

---

# Token Architecture

```text
Raw Values
      │
      ▼
Foundation Tokens
      │
      ▼
Domain Tokens
      │
      ▼
Component Tokens
      │
      ▼
React Components
      │
      ▼
Variants
```

Every layer has exactly one responsibility.

---

# Token Layers

| Layer      | Responsibility             |
| ---------- | -------------------------- |
| Foundation | Visual primitives          |
| Domain     | Semantic meaning           |
| Component  | Component-specific visuals |
| Components | UI implementation          |
| Variants   | Appearance customization   |

---

# Foundation Tokens

Foundation Tokens define the actual visual values used throughout the system.

They should never be consumed directly by application code unless absolutely necessary.

Current Foundation Categories include:

- Background
- Surface
- Text
- Brand
- Border
- Status
- Shadow
- Radius
- Motion
- Focus
- Glass
- Glow
- Selection

Example

```css
--bg
--surface
--text
--primary
--border
```

Foundation Tokens are responsible only for visual primitives.

---

# Domain Tokens

Domain Tokens give semantic meaning to Foundation Tokens.

Instead of using

```css
var(--primary)
```

components consume

```css
var(--button-primary-bg)
```

Current Domains include

- Form
- Button
- Card
- Navigation
- Overlay
- Feedback
- Data Display
- Scrollbar

Examples

```css
--field-bg

--button-primary-bg

--card-border

--nav-bg
```

---

# Component Tokens

Component Tokens exist only for visuals unique to a single component.

Examples

```css
--switch-thumb-bg

--spinner-color

--calendar-selected-bg

--slider-thumb-bg

--rating-active
```

Avoid creating Component Tokens when an appropriate Domain Token already exists.

---

# Theme Integration

The design system supports multiple themes while maintaining a single API.

Current themes

- Light
- Dark

Structure

```text
:root

↓

Light Theme

[data-theme="dark"]

↓

Dark Theme
```

Components never detect the active theme.

They always consume semantic tokens.

---

# Naming Conventions

Design Tokens use descriptive semantic names.

Good

```css
--button-primary-bg

--field-border

--card-shadow

--overlay-backdrop
```

Avoid

```css
--blue

--gray100

--greenButton

--darkBorder
```

Tokens describe purpose rather than color.

---

# Token Categories

Current token groups include

## Foundation

- Background
- Surface
- Text
- Brand
- Border
- Status
- Shadow
- Radius
- Motion
- Focus
- Glass
- Glow
- Selection

## Domain

- Form
- Button
- Card
- Navigation
- Overlay
- Feedback
- Data Display
- Scrollbar

## Component

- Switch
- Slider
- Spinner
- Progress
- Avatar
- Calendar
- Rating
- Divider
- Resize Handle

---

# Token Usage

Components should always consume Domain or Component Tokens.

Good

```css
.button {
  background: var(--button-primary-bg);
}
```

Good

```css
.input {
  border-color: var(--field-border);
}
```

Avoid

```css
.button {
  background: var(--primary);
}
```

Avoid

```css
.button {
  background: #0b3b5c;
}
```

---

# Accessibility

Design Tokens are designed to support accessibility across the entire design system.

Requirements include

- WCAG AA contrast ratios
- Visible focus indicators
- Consistent disabled states
- Readable typography
- Accessible selection colors
- Theme-aware color combinations

Accessibility should be implemented at the token level whenever possible rather than inside individual components.

---

# Best Practices

✅ Use semantic tokens inside components.

✅ Keep Foundation Tokens implementation-agnostic.

✅ Prefer Domain Tokens whenever possible.

✅ Create Component Tokens only when necessary.

✅ Keep Light and Dark token structures identical.

✅ Reuse existing tokens before introducing new ones.

---

# Common Mistakes

❌ Hardcoding colors inside components.

❌ Skipping the Domain layer.

❌ Naming tokens after colors.

❌ Creating duplicate tokens.

❌ Using Foundation Tokens directly in component implementations.

❌ Mixing semantic responsibilities between token layers.

---

# Future Expansion

The current architecture supports future enhancements without requiring changes to component APIs.

Planned capabilities include

- High Contrast Theme
- Multiple Brand Themes
- Compact Density
- Comfortable Density
- Motion Preferences
- RTL Support
- Custom Theme Generation
- User-defined Color Schemes

---

# Summary

```text
Foundation Tokens
        │
        ▼
Domain Tokens
        │
        ▼
Component Tokens
        │
        ▼
React Components
        │
        ▼
Variants
```

Foundation Tokens define visual primitives.

Domain Tokens provide semantic meaning.

Component Tokens support unique component behavior.

Components consume semantic tokens rather than raw values.

This layered architecture ensures consistency, scalability, accessibility, maintainability, and long-term flexibility across the entire **ProCoderX React Starter Kit**.
