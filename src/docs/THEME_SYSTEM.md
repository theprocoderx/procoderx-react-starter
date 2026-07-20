# Theme System

The Theme System is the foundation of the ProCoderX React Starter Kit.

It defines a scalable token architecture that separates design values from component implementation, allowing Light Mode, Dark Mode, accessibility, and future customization without changing component code.

---

# Table of Contents

1. Introduction
2. Design Goals
3. Design Principles
4. Theme Architecture
5. Theme Token Architecture
6. Token Layers
7. Theme Structure
8. Theme Switching
9. Token Flow
10. Component Integration
11. Token Rules
12. Best Practices
13. Common Mistakes
14. Future Expansion

---

# 1. Introduction

## What is the Theme System?

The Theme System is a centralized collection of design tokens that control the visual appearance of the entire application.

Instead of hardcoding colors, borders, shadows, spacing, or motion inside components, every component consumes semantic design tokens.

This allows the application's appearance to change without modifying component implementations.

---

## Why it exists

The Theme System provides:

- Consistent UI
- Reusable design tokens
- Light & Dark theme support
- Better maintainability
- Better scalability
- Accessibility
- Future customization

---

# 2. Design Goals

The Theme System is designed around the following goals.

- Consistency
- Scalability
- Maintainability
- Accessibility
- Theme Independence

---

# 3. Design Principles

## Single Source of Truth

Every reusable visual value should exist only once.

---

## Semantic First

Components should consume semantic tokens instead of raw colors.

Good

```css
background: var(--button-primary-bg);
```

Avoid

```css
background: #2563eb;
```

---

## Theme Independence

Components should never know whether the application is using Light Theme or Dark Theme.

Only token values change.

---

## Separation of Concerns

Every layer has one responsibility.

Foundation defines raw values.

Semantic Tokens define meaning.

Component Tokens define unique visuals.

Components consume semantic tokens.

---

## Accessibility First

Accessibility should be solved inside the Theme System instead of individual components.

Examples:

- Focus Ring
- Disabled State
- Error Colors
- Selection Colors
- Contrast

---

# 4. Theme Architecture

```
Components
      │
      ▼
Component Tokens
      │
      ▼
Semantic Tokens
      │
      ▼
Foundation Tokens
```

Each layer depends only on the layer directly below it.

---

# 5. Theme Token Architecture

```
Foundation
│
├── Colors
├── Radius
├── Motion
├── Shadow
├── Focus
│
├── Form
├── Button
├── Card
├── Navigation
├── Overlay
├── Feedback
├── Display
├── Scrollbar
│
└── Component Specific
    ├── Switch
    ├── Slider
    ├── Spinner
    ├── Progress
    ├── Avatar
    ├── Calendar
    └── Rating
```

---

# 6. Token Layers

## Foundation Tokens

Foundation Tokens define raw design values.

Examples

- Colors
- Radius
- Motion
- Shadow
- Focus

Example

```css
--primary
--surface
--border
--text
```

Foundation Tokens should never be consumed directly by components.

---

## Semantic Tokens

Semantic Tokens provide reusable meanings shared across multiple components.

Current semantic groups include

- Form
- Button
- Card
- Navigation
- Overlay
- Feedback
- Display
- Scrollbar

Example

```css
--field-border

--button-primary-bg

--card-bg

--overlay-bg
```

Components should consume Semantic Tokens whenever possible.

---

## Component Tokens

Component Tokens exist only when a component has unique visuals that cannot be shared.

Examples

```css
--switch-thumb-bg

--slider-thumb-bg

--spinner-color

--calendar-selected-bg

--rating-active
```

Create Component Tokens only when necessary.

---

# 7. Theme Structure

```
theme.css

:root

Foundation Tokens

Semantic Tokens

Component Tokens

--------------------------------

[data-theme="dark"]

Foundation Tokens

Semantic Tokens

Component Tokens
```

Both themes expose identical token names.

Only values change.

---

# 8. Theme Switching

The starter kit supports

- Light Theme
- Dark Theme
- System Theme

Components never contain theme-specific logic.

---

# 9. Token Flow

Example

```
Button
      │
      ▼
button-primary-bg
      │
      ▼
primary-bg
      │
      ▼
Light / Dark Value
```

Another example

```
Input
      │
      ▼
field-bg
      │
      ▼
surface
      │
      ▼
Light / Dark Value
```

---

# 10. Component Integration

Good

```css
.button {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
}
```

Avoid

```css
.button {
  background: #0b3b5c;
}
```

Always consume semantic tokens.

---

# 11. Token Rules

1. Never hardcode design values inside components.

2. Components should consume Semantic Tokens.

3. Foundation Tokens should never be used directly inside components.

4. Create Component Tokens only for unique visuals.

5. Keep identical token names across themes.

6. Prefer reusing existing tokens before creating new ones.

---

# 12. Best Practices

- Keep tokens semantic.
- Reuse existing tokens whenever possible.
- Keep token names descriptive.
- Separate Foundation, Semantic, and Component layers.
- Support accessibility through tokens.
- Keep themes structurally identical.

---

# 13. Common Mistakes

- Hardcoding colors
- Using Foundation Tokens directly inside components
- Creating duplicate tokens
- Naming tokens after colors
- Different token names between themes
- Creating Component Tokens unnecessarily

---

# 14. Future Expansion

The architecture supports future enhancements without changing component APIs.

Possible additions

- High Contrast Theme
- Brand Themes
- Multiple Color Schemes
- Compact Density
- Comfortable Density
- Motion Preferences
- RTL Support
- User-defined Themes

---

# Summary

The Theme System separates implementation from visual values through a layered architecture.

```
Foundation Tokens
        │
        ▼
Semantic Tokens
        │
        ▼
Component Tokens
        │
        ▼
Components
```

Foundation Tokens define raw design values.

Semantic Tokens provide reusable meaning.

Component Tokens handle unique visuals.

Components consume semantic tokens instead of hardcoded values, resulting in a scalable, maintainable, and production-ready design system.
