# ProCoderX UI

A production-ready React component library built with **React**, **Tailwind CSS v4**, and **Class Variance Authority (CVA)**.

ProCoderX UI provides accessible, customizable, and theme-aware components designed for modern web applications.

---

## Features

- Accessible by default
- Theme-aware using CSS variables
- Tailwind CSS v4
- Class Variance Authority (CVA)
- Fully customizable
- Tree-shakeable components
- Production-ready architecture
- Modern React patterns
- Type-safe friendly
- Lightweight
- Unit tested
- Responsive components

---

## Requirements

- React 19+
- Tailwind CSS v4
- Vite 7+
- Class Variance Authority
- clsx
- tailwind-merge

---

## Installation

```bash
npm install @procoderx/ui
```

or

```bash
pnpm add @procoderx/ui
```

---

## Getting Started

Import components from the barrel export.

```jsx
import { Button, Input } from '@procoderx/ui';
```

Example:

```jsx
import { Button, Input } from '@procoderx/ui';

export default function App() {
  return (
    <>
      <Input placeholder='Email address' />

      <Button>Continue</Button>
    </>
  );
}
```

---

## Available Components

### Form

- Button
- Input
- Label
- Textarea _(planned)_
- Select _(planned)_
- Checkbox _(planned)_
- Radio _(planned)_
- Switch _(planned)_

### Feedback

- Alert _(planned)_
- Spinner _(planned)_
- Skeleton _(planned)_
- Toast _(planned)_

### Overlay

- Dialog _(planned)_
- Drawer _(planned)_
- Tooltip _(planned)_
- Popover _(planned)_

### Navigation

- Breadcrumb _(planned)_
- Pagination _(planned)_
- Tabs _(planned)_
- Accordion _(planned)_

### Data Display

- Badge _(planned)_
- Avatar _(planned)_
- Card _(planned)_
- Table _(planned)_

---

## Documentation

Each component includes its own documentation.

```text
components/
├── Button/
│   └── README.md
│
├── Input/
│   └── README.md
│
├── Label/
│   └── README.md
```

Additional project documentation:

```text
docs/
├── ARCHITECTURE.md
├── COMPONENT_GUIDELINES.md
├── CHANGELOG.md
└── ROADMAP.md
```

---

## Project Structure

```text
src/
│
├── components/
│   └── ui/
│       ├── Button/
│       ├── Input/
│       ├── Label/
│       └── ...
│
├── contexts/
│
├── hooks/
│
├── pages/
│   └── Playground/
│
├── styles/
│
└── utils/
```

---

## Playground

A dedicated Playground is included for manual testing during development.

The Playground demonstrates:

- Variants
- Sizes
- Theme switching
- Accessibility
- Icons
- Validation states
- Responsive behavior

---

## Development

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Run unit tests.

```bash
npm test
```

Build the library.

```bash
npm run build
```

---

## Coding Standards

All components follow consistent design principles.

- Accessibility first
- Composition over configuration
- Semantic HTML
- CSS variable theming
- CVA variant management
- Forwarded refs
- Native HTML behavior
- Responsive by default

---

## Testing

Every component includes unit tests.

Coverage typically includes:

- Rendering
- Variants
- Sizes
- States
- Accessibility
- Keyboard interaction
- Ref forwarding
- Native HTML behavior

---

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

---

## Contributing

Contributions are welcome.

Before opening a pull request:

- Follow the component architecture
- Follow the component guidelines
- Write unit tests
- Update documentation
- Keep components accessible

---

## Roadmap

Current development includes:

- Label
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Modal
- Tooltip
- Dropdown Menu
- Accordion
- Tabs
- Toast
- Table

See **docs/ROADMAP.md** for more information.

---

## License

MIT License

procoderx-ui/
│
├── README.md ← Root README
├── LICENSE
├── package.json
├── tsconfig.json
├── vite.config.js
│
├── docs/
│ ├── ARCHITECTURE.md
│ ├── COMPONENT_GUIDELINES.md
│ ├── CHANGELOG.md
│ └── ROADMAP.md
│
├── src/
│ ├── components/
│ │ └── ui/
│ │ ├── Button/
│ │ ├── Input/
│ │ ├── Label/
│ │ └── ...
│ ├── pages/
│ │ └── Playground/
│ ├── styles/
│ ├── contexts/
│ └── utils/
│
└── .github/
