# Token Reference

The Token Reference documents every Design Token available in the **ProCoderX React Starter Kit**.

Unlike **THEME_SYSTEM.md** and **DESIGN_TOKENS.md**, this document serves purely as a reference.

Each token is grouped by category and includes its intended purpose.

---

# Table of Contents

- Foundation Tokens
  - Background
  - Surface
  - Text
  - Brand
  - Primary
  - Border
  - Status
  - Status Background
  - Typography
  - Shadow
  - Elevation
  - Radius
  - Motion
  - Opacity
  - Focus
  - Overlay
  - Glass
  - Glow
  - Selection
  - Z-Index
  - Scrollbar

- Shared Tokens
  - Form
  - Button
  - Card
  - Navigation
  - Overlay
  - Feedback
  - Data Display
  - Scrollbar

- Component Tokens
  - Switch
  - Slider
  - Progress
  - Spinner
  - Avatar
  - Calendar
  - Rating
  - Divider
  - Resize Handle

---

# Foundation Tokens

Foundation Tokens define the raw visual language of the design system.

Components should not consume these tokens directly.

---

## Background

| Token | Description |
|-------|-------------|
| `--bg` | Primary application background. |
| `--bg-secondary` | Secondary application background. |
| `--bg-tertiary` | Tertiary application background. |

---

## Surface

| Token | Description |
|-------|-------------|
| `--surface` | Primary container surface. |
| `--surface-secondary` | Secondary surface. |
| `--surface-tertiary` | Tertiary surface. |
| `--surface-hover` | Hover state surface. |
| `--surface-active` | Active state surface. |

---

## Text

| Token | Description |
|-------|-------------|
| `--text` | Primary text color. |
| `--text-secondary` | Secondary text color. |
| `--text-muted` | Muted text color. |
| `--text-disabled` | Disabled text color. |
| `--text-inverse` | Inverse text color. |

---

## Brand

| Token | Description |
|-------|-------------|
| `--brand` | Primary brand color. |
| `--brand-hover` | Brand hover state. |
| `--brand-active` | Brand active state. |
| `--brand-text` | Text displayed on brand surfaces. |
| `--brand-accent` | Secondary brand color. |
| `--brand-accent-hover` | Brand accent hover state. |
| `--brand-accent-active` | Brand accent active state. |
| `--brand-accent-text` | Text on brand accent surfaces. |

---

## Primary

| Token | Description |
|-------|-------------|
| `--primary` | Primary interactive color. |
| `--primary-hover` | Hover state. |
| `--primary-active` | Active state. |
| `--primary-text` | Text on primary surfaces. |
| `--primary-accent` | Accent primary color. |
| `--primary-accent-hover` | Accent hover state. |
| `--primary-accent-active` | Accent active state. |
| `--primary-accent-text` | Text on accent surfaces. |

---

## Border

| Token | Description |
|-------|-------------|
| `--border` | Default border color used across the application. |
| `--border-muted` | Muted border for subtle separation. |
| `--border-strong` | High emphasis border. |
| `--divider` | Divider and separator color. |

---

## Status

### Success

| Token | Description |
|-------|-------------|
| `--success` | Success color. |
| `--success-hover` | Success hover state. |
| `--success-active` | Success active state. |
| `--success-text` | Text displayed on success surfaces. |

### Warning

| Token | Description |
|-------|-------------|
| `--warning` | Warning color. |
| `--warning-hover` | Warning hover state. |
| `--warning-active` | Warning active state. |
| `--warning-text` | Text displayed on warning surfaces. |

### Info

| Token | Description |
|-------|-------------|
| `--info` | Informational color. |
| `--info-hover` | Info hover state. |
| `--info-active` | Info active state. |
| `--info-text` | Text displayed on informational surfaces. |

### Error

| Token | Description |
|-------|-------------|
| `--error` | Error color. |
| `--error-hover` | Error hover state. |
| `--error-active` | Error active state. |
| `--error-text` | Text displayed on error surfaces. |

---

## Status Background

| Token | Description |
|-------|-------------|
| `--success-bg` | Success background surface. |
| `--success-border` | Success border color. |
| `--warning-bg` | Warning background surface. |
| `--warning-border` | Warning border color. |
| `--info-bg` | Informational background surface. |
| `--info-border` | Informational border color. |
| `--error-bg` | Error background surface. |
| `--error-border` | Error border color. |

---

## Typography

### Font Family

| Token | Description |
|-------|-------------|
| `--font-sans` | Default sans-serif font stack. |
| `--font-mono` | Default monospace font stack. |

### Font Size

| Token | Description |
|-------|-------------|
| `--text-xs` | Extra small text size. |
| `--text-sm` | Small text size. |
| `--text-md` | Base text size. |
| `--text-lg` | Large text size. |
| `--text-xl` | Extra large text size. |
| `--text-2xl` | Heading size. |
| `--text-3xl` | Large heading size. |
| `--text-4xl` | Display heading size. |

### Font Weight

| Token | Description |
|-------|-------------|
| `--font-light` | Light font weight. |
| `--font-normal` | Regular font weight. |
| `--font-medium` | Medium font weight. |
| `--font-semibold` | Semi-bold font weight. |
| `--font-bold` | Bold font weight. |

### Line Height

| Token | Description |
|-------|-------------|
| `--leading-tight` | Compact line height. |
| `--leading-normal` | Default line height. |
| `--leading-relaxed` | Relaxed line height. |

### Letter Spacing

| Token | Description |
|-------|-------------|
| `--tracking-tight` | Tight letter spacing. |
| `--tracking-normal` | Default letter spacing. |
| `--tracking-wide` | Wide letter spacing. |

---

## Shadow

| Token | Description |
|-------|-------------|
| `--shadow-xs` | Extra small shadow. |
| `--shadow-sm` | Small shadow. |
| `--shadow-md` | Medium shadow. |
| `--shadow-lg` | Large shadow. |
| `--shadow-xl` | Extra large shadow. |

---

## Elevation

| Token | Description |
|-------|-------------|
| `--elevation-0` | No elevation. |
| `--elevation-1` | Level 1 elevation. |
| `--elevation-2` | Level 2 elevation. |
| `--elevation-3` | Level 3 elevation. |
| `--elevation-4` | Level 4 elevation. |
| `--elevation-5` | Level 5 elevation. |

---

## Radius

| Token | Description |
|-------|-------------|
| `--radius-xs` | Extra small corner radius. |
| `--radius-sm` | Small corner radius. |
| `--radius-md` | Default corner radius used by most components. |
| `--radius-lg` | Large corner radius. |
| `--radius-xl` | Extra large corner radius. |
| `--radius-2xl` | Very large corner radius. |
| `--radius-full` | Fully rounded radius used for pills and circular elements. |

---

## Motion

### Duration

| Token | Description |
|-------|-------------|
| `--duration-instant` | No animation duration. |
| `--duration-fast` | Fast transition duration. |
| `--duration-normal` | Default transition duration. |
| `--duration-slow` | Slow transition duration. |
| `--duration-slower` | Extra slow transition duration. |

### Easing

| Token | Description |
|-------|-------------|
| `--ease-linear` | Linear timing function. |
| `--ease-default` | Default easing curve. |
| `--ease-in` | Ease-in transition. |
| `--ease-out` | Ease-out transition. |
| `--ease-in-out` | Ease-in-out transition. |

### Cubic Bezier

| Token | Description |
|-------|-------------|
| `--ease-emphasized` | Emphasized animation curve. |
| `--ease-decelerate` | Decelerating motion curve. |
| `--ease-accelerate` | Accelerating motion curve. |

---

## Opacity

| Token | Description |
|-------|-------------|
| `--opacity-0` | Fully transparent. |
| `--opacity-25` | 25% opacity. |
| `--opacity-50` | 50% opacity. |
| `--opacity-75` | 75% opacity. |
| `--opacity-100` | Fully opaque. |
| `--opacity-disabled` | Opacity used for disabled elements. |
| `--opacity-overlay` | Default overlay opacity. |
| `--opacity-glass` | Glassmorphism opacity level. |

---

## Focus

| Token | Description |
|-------|-------------|
| `--focus-ring` | Primary focus ring color. |
| `--focus-ring-offset` | Background used behind the focus ring. |
| `--focus-ring-width` | Focus ring thickness. |
| `--focus-ring-offset-width` | Gap between component and focus ring. |

---

## Overlay

| Token | Description |
|-------|-------------|
| `--overlay` | Default overlay color. |
| `--overlay-light` | Light overlay variant. |
| `--overlay-dark` | Dark overlay variant. |

---

## Glass

| Token | Description |
|-------|-------------|
| `--glass` | Glass surface background. |
| `--glass-border` | Glass surface border. |
| `--glass-backdrop` | Backdrop blur amount. |
| `--glass-saturate` | Backdrop saturation level. |

---

## Glow

| Token | Description |
|-------|-------------|
| `--glow-primary` | Primary glow color. |
| `--glow-brand` | Brand glow color. |
| `--glow-success` | Success glow color. |
| `--glow-warning` | Warning glow color. |
| `--glow-error` | Error glow color. |

---

## Selection

| Token | Description |
|-------|-------------|
| `--selection-bg` | Text selection background. |
| `--selection-text` | Text selection foreground. |

---

## Z-Index

| Token | Description |
|-------|-------------|
| `--z-hide` | Hidden elements. |
| `--z-base` | Base stacking level. |
| `--z-dropdown` | Dropdown menus. |
| `--z-sticky` | Sticky positioned elements. |
| `--z-fixed` | Fixed positioned elements. |
| `--z-overlay` | Generic overlays. |
| `--z-drawer` | Drawer components. |
| `--z-dialog` | Dialog and modal windows. |
| `--z-popover` | Popovers and floating panels. |
| `--z-tooltip` | Tooltip components. |
| `--z-toast` | Toast notifications. |

---

## Scrollbar

| Token | Description |
|-------|-------------|
| `--scrollbar-track` | Scrollbar track color. |
| `--scrollbar-thumb` | Default scrollbar thumb color. |
| `--scrollbar-thumb-hover` | Hover state of the scrollbar thumb. |
| `--scrollbar-thumb-active` | Active state of the scrollbar thumb. |
| `--scrollbar-corner` | Scrollbar corner color. |
| `--scrollbar-size` | Scrollbar thickness. |
| `--scrollbar-radius` | Scrollbar corner radius. |
| `--scrollbar-duration` | Scrollbar transition duration. |
| `--scrollbar-easing` | Scrollbar transition timing function. |

---

# Shared Tokens

Shared Tokens provide semantic meaning for groups of related components.

Unlike Foundation Tokens, Shared Tokens describe **how a value is used** rather than **what the value is**.

The following sections document every shared token category available in the design system.

---

## Form

Shared tokens used by all form-related components.

**Components**

- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Slider
- OTP
- Search
- Password
- Combobox
- Date Picker

### Field Surface

| Token | Description |
|-------|-------------|
| `--field-bg` | Default field background. |
| `--field-bg-hover` | Background when hovered. |
| `--field-bg-active` | Background while active. |

### Border

| Token | Description |
|-------|-------------|
| `--field-border` | Default field border. |
| `--field-border-hover` | Hover border color. |
| `--field-border-focus` | Border during focus. |

### Text

| Token | Description |
|-------|-------------|
| `--field-text` | Field text color. |
| `--field-placeholder` | Placeholder text color. |

### Label

| Token | Description |
|-------|-------------|
| `--field-label` | Default label color. |
| `--field-label-hover` | Label hover color. |
| `--field-label-muted` | Secondary label color. |

### Icon

| Token | Description |
|-------|-------------|
| `--field-icon` | Default icon color. |
| `--field-icon-hover` | Icon hover color. |

### Focus

| Token | Description |
|-------|-------------|
| `--field-focus-ring` | Field focus ring color. |

### Validation

| Token | Description |
|-------|-------------|
| `--field-success` | Success state color. |
| `--field-warning` | Warning state color. |
| `--field-error` | Error state color. |

### Helper Text

| Token | Description |
|-------|-------------|
| `--field-helper` | Helper text color. |

### Selection

| Token | Description |
|-------|-------------|
| `--field-selection-bg` | Selection background. |
| `--field-selection-text` | Selection text color. |

### Disabled

| Token | Description |
|-------|-------------|
| `--field-disabled-bg` | Disabled background. |
| `--field-disabled-border` | Disabled border. |
| `--field-disabled-text` | Disabled text color. |
| `--field-disabled-placeholder` | Disabled placeholder color. |

### Read Only

| Token | Description |
|-------|-------------|
| `--field-readonly-bg` | Read-only background. |
| `--field-readonly-border` | Read-only border. |
| `--field-readonly-text` | Read-only text color. |
| `--field-readonly-placeholder` | Read-only placeholder color. |

---

## Button

Shared tokens used by every button variant.

### Primary

| Token | Description |
|-------|-------------|
| `--button-primary-bg` | Primary button background. |
| `--button-primary-bg-hover` | Primary hover background. |
| `--button-primary-bg-active` | Primary active background. |
| `--button-primary-text` | Primary button text. |
| `--button-primary-border` | Primary border color. |

### Secondary

| Token | Description |
|-------|-------------|
| `--button-secondary-bg` | Secondary background. |
| `--button-secondary-bg-hover` | Secondary hover background. |
| `--button-secondary-bg-active` | Secondary active background. |
| `--button-secondary-text` | Secondary text color. |
| `--button-secondary-border` | Secondary border color. |

### Outline

| Token | Description |
|-------|-------------|
| `--button-outline-bg` | Outline background. |
| `--button-outline-bg-hover` | Outline hover background. |
| `--button-outline-text` | Outline text color. |
| `--button-outline-border` | Outline border color. |

### Ghost

| Token | Description |
|-------|-------------|
| `--button-ghost-bg` | Ghost background. |
| `--button-ghost-bg-hover` | Ghost hover background. |
| `--button-ghost-text` | Ghost text color. |

### Link

| Token | Description |
|-------|-------------|
| `--button-link-text` | Link button text color. |
| `--button-link-hover` | Link button hover color. |

### Disabled

| Token | Description |
|-------|-------------|
| `--button-disabled-bg` | Disabled background. |
| `--button-disabled-border` | Disabled border. |
| `--button-disabled-text` | Disabled text color. |

### Shared

| Token | Description |
|-------|-------------|
| `--button-focus-ring` | Focus ring color. |
| `--button-shadow` | Default shadow. |
| `--button-shadow-hover` | Hover shadow. |
| `--button-radius` | Border radius. |
| `--button-duration` | Transition duration. |
| `--button-easing` | Transition easing. |

---

## Card

Shared tokens for all card-based components.

### Surface

| Token | Description |
|-------|-------------|
| `--card-bg` | Card background. |
| `--card-bg-hover` | Hover background. |
| `--card-bg-active` | Active background. |

### Border

| Token | Description |
|-------|-------------|
| `--card-border` | Card border. |
| `--card-border-hover` | Hover border. |

### Text

| Token | Description |
|-------|-------------|
| `--card-title` | Card title color. |
| `--card-description` | Card description color. |
| `--card-muted` | Muted card text. |

### Shadow

| Token | Description |
|-------|-------------|
| `--card-shadow` | Default shadow. |
| `--card-shadow-hover` | Hover shadow. |

### Layout

| Token | Description |
|-------|-------------|
| `--card-radius` | Card border radius. |
| `--card-padding-sm` | Small padding. |
| `--card-padding-md` | Medium padding. |
| `--card-padding-lg` | Large padding. |

### Shared

| Token | Description |
|-------|-------------|
| `--card-focus-ring` | Focus ring. |
| `--card-duration` | Transition duration. |
| `--card-easing` | Transition easing. |

---

The next section (**Part-5**) will document:

- Navigation Tokens
- Overlay Tokens
- Feedback Tokens

## Navigation

Shared tokens used by navigation-related components.

**Components**

- Navbar
- Sidebar
- Tabs
- Breadcrumb
- Pagination
- Menubar

### Surface

| Token | Description |
|-------|-------------|
| `--nav-bg` | Navigation background. |
| `--nav-bg-hover` | Hover background. |
| `--nav-bg-active` | Active background. |

### Border

| Token | Description |
|-------|-------------|
| `--nav-border` | Navigation border color. |

### Text

| Token | Description |
|-------|-------------|
| `--nav-text` | Default navigation text. |
| `--nav-text-hover` | Hover text color. |
| `--nav-text-active` | Active text color. |
| `--nav-text-muted` | Muted navigation text. |

### Icon

| Token | Description |
|-------|-------------|
| `--nav-icon` | Default icon color. |
| `--nav-icon-hover` | Hover icon color. |
| `--nav-icon-active` | Active icon color. |

### Item

| Token | Description |
|-------|-------------|
| `--nav-item-bg-hover` | Hover item background. |
| `--nav-item-bg-active` | Active item background. |

### Indicator

| Token | Description |
|-------|-------------|
| `--nav-indicator` | Active indicator color. |

### Divider

| Token | Description |
|-------|-------------|
| `--nav-divider` | Divider color. |

### Shared

| Token | Description |
|-------|-------------|
| `--nav-focus-ring` | Focus ring color. |
| `--nav-shadow` | Navigation shadow. |
| `--nav-radius` | Border radius. |
| `--nav-duration` | Transition duration. |
| `--nav-easing` | Transition easing. |

---

## Overlay

Shared tokens used by overlay-based components.

**Components**

- Dialog
- Drawer
- Popover
- Tooltip
- Sheet
- Dropdown Menu
- Context Menu

### Surface

| Token | Description |
|-------|-------------|
| `--overlay-bg` | Overlay background. |
| `--overlay-bg-hover` | Hover background. |

### Border

| Token | Description |
|-------|-------------|
| `--overlay-border` | Overlay border. |

### Backdrop

| Token | Description |
|-------|-------------|
| `--overlay-backdrop` | Background overlay behind dialogs. |

### Text

| Token | Description |
|-------|-------------|
| `--overlay-title` | Overlay title color. |
| `--overlay-description` | Overlay description color. |

### Shadow

| Token | Description |
|-------|-------------|
| `--overlay-shadow` | Overlay shadow. |

### Layout

| Token | Description |
|-------|-------------|
| `--overlay-radius` | Overlay border radius. |
| `--overlay-z-index` | Overlay stacking order. |

### Shared

| Token | Description |
|-------|-------------|
| `--overlay-focus-ring` | Focus ring color. |
| `--overlay-duration` | Transition duration. |
| `--overlay-easing` | Transition easing. |

---

## Feedback

Shared tokens used by feedback and status components.

**Components**

- Alert
- Toast
- Progress
- Spinner
- Skeleton

### Success

| Token | Description |
|-------|-------------|
| `--feedback-success-bg` | Success background. |
| `--feedback-success-border` | Success border. |
| `--feedback-success-text` | Success text. |

### Warning

| Token | Description |
|-------|-------------|
| `--feedback-warning-bg` | Warning background. |
| `--feedback-warning-border` | Warning border. |
| `--feedback-warning-text` | Warning text. |

### Error

| Token | Description |
|-------|-------------|
| `--feedback-error-bg` | Error background. |
| `--feedback-error-border` | Error border. |
| `--feedback-error-text` | Error text. |

### Info

| Token | Description |
|-------|-------------|
| `--feedback-info-bg` | Information background. |
| `--feedback-info-border` | Information border. |
| `--feedback-info-text` | Information text. |

### Loading

| Token | Description |
|-------|-------------|
| `--feedback-loading` | Loading indicator color. |

### Skeleton

| Token | Description |
|-------|-------------|
| `--feedback-skeleton-bg` | Skeleton background. |
| `--feedback-skeleton-highlight` | Skeleton shimmer highlight. |

### Shared

| Token | Description |
|-------|-------------|
| `--feedback-focus-ring` | Focus ring color. |
| `--feedback-radius` | Border radius. |
| `--feedback-shadow` | Shadow. |
| `--feedback-duration` | Transition duration. |
| `--feedback-easing` | Transition easing. |
| `--feedback-padding` | Default feedback padding. |

---
# Data Display

Shared tokens used by components that present information rather than collect input.

**Components**

- Badge
- Chip
- Avatar
- Card
- Accordion
- Table
- Timeline
- Statistic

## Surface

| Token | Description |
|-------|-------------|
| `--display-bg` | Default display surface. |
| `--display-bg-hover` | Hover surface. |

## Border

| Token | Description |
|-------|-------------|
| `--display-border` | Default border. |
| `--display-divider` | Divider color. |

## Text

| Token | Description |
|-------|-------------|
| `--display-title` | Primary heading color. |
| `--display-text` | Primary body text color. |
| `--display-muted` | Secondary text color. |

## Radius

| Token | Description |
|-------|-------------|
| `--display-radius` | Default border radius. |
| `--display-radius-pill` | Fully rounded radius. |

## Skeleton

| Token | Description |
|-------|-------------|
| `--display-skeleton` | Skeleton placeholder color. |

## Shadow

| Token | Description |
|-------|-------------|
| `--display-shadow` | Default shadow. |
| `--display-shadow-subtle` | Subtle shadow. |

## Shared

| Token | Description |
|-------|-------------|
| `--display-focus-ring` | Focus ring color. |
| `--display-duration` | Transition duration. |
| `--display-easing` | Transition easing. |

## Badge

| Token | Description |
|-------|-------------|
| `--display-badge-bg` | Badge background. |
| `--display-badge-text` | Badge text color. |
| `--display-badge-padding` | Badge padding. |

## Chip

| Token | Description |
|-------|-------------|
| `--display-chip-bg` | Chip background. |
| `--display-chip-text` | Chip text color. |
| `--display-chip-padding` | Chip padding. |

## Table

| Token | Description |
|-------|-------------|
| `--display-table-header` | Table header background. |
| `--display-table-row-hover` | Table row hover background. |

## Accordion

| Token | Description |
|-------|-------------|
| `--display-accordion-hover` | Accordion item hover background. |

---

# Scrollbar

Shared tokens used for custom scrollbar styling.

| Token | Description |
|-------|-------------|
| `--scrollbar-track` | Scrollbar track color. |
| `--scrollbar-thumb` | Scrollbar thumb color. |
| `--scrollbar-thumb-hover` | Thumb hover color. |
| `--scrollbar-thumb-active` | Thumb active color. |
| `--scrollbar-corner` | Scrollbar corner color. |
| `--scrollbar-size` | Scrollbar thickness. |
| `--scrollbar-radius` | Scrollbar radius. |
| `--scrollbar-duration` | Transition duration. |
| `--scrollbar-easing` | Transition easing. |

---

# Component Tokens

Component Tokens exist only for visuals that are unique to an individual component.

Unlike Shared Tokens, these values are not intended for reuse across multiple component groups.

Current Component Token Groups include:

- Switch
- Slider
- Progress
- Spinner
- Avatar
- Calendar
- Rating
- Divider
- Resize Handle

Examples

```css
--switch-thumb-bg

--slider-thumb-bg

--progress-fill-bg

--spinner-color

--avatar-fallback-bg

--calendar-selected-bg

--rating-active

--divider-color

--resize-handle
```

Whenever possible, prefer Shared Tokens before introducing new Component Tokens.

---

# Token Dependency Rules

The token system follows a strict one-way dependency model.

```text
Foundation
      │
      ▼
Shared
      │
      ▼
Component
      │
      ▼
React Components
```

Rules

- Foundation Tokens must never reference Shared or Component Tokens.
- Shared Tokens should consume Foundation Tokens.
- Component Tokens should consume Foundation or Shared Tokens.
- React Components should consume Shared or Component Tokens.
- Avoid bypassing the Shared layer unless absolutely necessary.

---

# Best Practices

- Use semantic token names.
- Keep Foundation Tokens implementation-agnostic.
- Prefer Shared Tokens whenever possible.
- Create Component Tokens only when required.
- Keep Light and Dark themes structurally identical.
- Reuse existing tokens before introducing new ones.
- Keep token names stable across releases.
- Document every new token group.

---

# Common Mistakes

Avoid the following practices:

- Hardcoding colors inside components.
- Using Foundation Tokens directly in component implementations.
- Creating duplicate tokens.
- Naming tokens after colors instead of purpose.
- Mixing responsibilities between token layers.
- Creating unnecessary Component Tokens.
- Using different token names across themes.

---

# Quick Reference

```text
Foundation
│
├── Background
├── Surface
├── Text
├── Brand
├── Primary
├── Border
├── Status
├── Typography
├── Shadow
├── Radius
├── Motion
├── Focus
└── Scrollbar

↓

Shared

├── Form
├── Button
├── Card
├── Navigation
├── Overlay
├── Feedback
├── Data Display
└── Scrollbar

↓

Component

├── Switch
├── Slider
├── Progress
├── Spinner
├── Avatar
├── Calendar
├── Rating
├── Divider
└── Resize Handle

↓

React Components
```

---

# Summary

The Design Token System separates visual decisions into three independent layers.

- **Foundation Tokens** define raw design values.
- **Shared Tokens** provide reusable semantic meaning.
- **Component Tokens** handle visuals unique to individual components.

This layered architecture keeps the **ProCoderX React Starter Kit** consistent, scalable, maintainable, theme-aware, and easy to extend as the component library grows.
---
## Documentation Structure

```text
docs/
│
├── architecture/
│   ├── ARCHITECTURE.md
│   ├── COMPONENT_GUIDELINES.md
│   ├── API_GUIDELINES.md
│   └── TESTING_GUIDELINES.md
│
├── theme/
│   ├── README.md
│   ├── THEME_SYSTEM.md
│   └── TOKEN_REFERENCE.md
│
├── CONTRIBUTING.md
├── ROADMAP.md
└── CHANGELOG.md
```

---
 **TOKEN_REFERENCE.md** — Complete reference for every Foundation, Shared, and Component token.