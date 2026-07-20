# ProCoderX React Starter Kit — Project Context

Version: v0.7.0
Status: Active Development
Purpose: AI & Developer Entry Point

---

# Project Overview

ProCoderX React Starter Kit is a production-ready React UI component library inspired by shadcn/ui but built completely from scratch.

The project emphasizes:

- Clean Architecture
- Accessibility First
- Reusability
- Scalability
- Performance
- Developer Experience
- Production-ready components

---

# Tech Stack

Core

- React 19
- Vite
- React Router v7

Styling

- Tailwind CSS v4
- CSS Variables
- Design Tokens

Utilities

- class-variance-authority (CVA)
- clsx
- tailwind-merge

Icons

- lucide-react

Testing

- Vitest
- React Testing Library

---

# Current Project Status

## Foundation

Completed

- Theme System
- Design Tokens
- Shared Form Token System
- Shared Component Token System
- cn() Utility
- Unified Playground Design

---

## Stable Components

- Button
- Input
- Label
- Checkbox
- Radio
- Switch

Each stable component includes:

- Production-ready implementation
- README
- Playground
- Unit Tests
- Accessibility verification
- Theme support

---

# Current Sprint

Sprint Goal

Complete the remaining Form Components.

Current Tasks

- Textarea
- Select

Development Rule

Never begin a new component until the current component has:

- Been implemented
- Been manually verified in the Playground
- Been documented
- Passed unit tests
- Passed accessibility review
- Been declared Stable

---

# Component Development Workflow

Every component follows the same lifecycle.

Planning

↓

Implementation

↓

Variants

↓

Playground

↓

README

↓

Unit Tests

↓

Accessibility Review

↓

Stable

---

# Folder Structure

Every component follows:

```text
Component/
├── Component.jsx
├── componentVariants.js
├── Component.test.jsx
├── README.md
└── index.js
```

---

# Documentation

This project is driven by the following documentation.

## MASTER_CONTEXT.md

Contains overall project architecture, coding conventions, roadmap, current sprint, and development rules.

---

## ARCHITECTURE.md

Defines project architecture and folder organization.

---

## API_GUIDELINES.md

Defines public API design principles and naming conventions.

---

## COMPONENT_GUIDELINES.md

Defines how every reusable UI component should be built.

---

## TESTING_GUIDELINES.md

Defines testing philosophy, workflows, accessibility testing, and quality standards.

---

# AI Instructions

Before implementing or modifying any component:

1. Read this document first.
2. Use MASTER_CONTEXT.md as the primary project reference.
3. Follow COMPONENT_GUIDELINES.md for implementation.
4. Follow API_GUIDELINES.md when designing APIs.
5. Follow TESTING_GUIDELINES.md before writing tests.
6. Follow ARCHITECTURE.md when creating files or folders.
7. Never violate the current Development Rule.

If multiple documents conflict, prefer:

1. MASTER_CONTEXT.md
2. COMPONENT_GUIDELINES.md
3. API_GUIDELINES.md
4. TESTING_GUIDELINES.md
5. ARCHITECTURE.md

---

# Next Milestone

Complete the Form Component library.

Remaining components:

- Textarea
- Select

After Form Components:

- Display Components
- Overlay Components
- Navigation Components

---

# Final Principle

This project prioritizes:

1. Production Quality
2. Consistency
3. Accessibility
4. Reusability
5. Scalability
6. Long-term Maintainability

Every implementation decision should align with these principles.
