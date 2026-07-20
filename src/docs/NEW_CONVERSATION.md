Since you're building ProCoderX UI as a long-term, production-ready component library, I recommend having one "starter context" that you paste into every new conversation. That way I immediately understand the project's architecture, conventions, and current progress.

Essential files (always provide)

These are enough for me to work correctly without guessing.

docs/MASTER_CONTEXT.md ⭐⭐⭐⭐⭐
The single source of truth.
Project goals.
Coding standards.
Current architecture.
Component development rules.
Current progress.
docs/PROJECT_CONTEXT.md ⭐⭐⭐⭐⭐
Folder structure.
Tech stack.
Project status.
Current implementation details.
docs/COMPONENT_GUIDELINES.md ⭐⭐⭐⭐⭐
Component architecture.
Folder structure.
Naming conventions.
Required files.
Accessibility rules.

These three files are usually sufficient for starting work.

Helpful files (only when relevant)

If the task is specifically about one area, also include:

Theme work
docs/DESIGN_TOKENS.md
docs/THEME_SYSTEM.md
API or hooks
docs/API_GUIDELINES.md
Architecture discussions
docs/ARCHITECTURE_GUIDELINES.md
Testing
docs/TESTING_GUIDELINES.md
Roadmap or planning
docs/ROADMAP.md
For component development

When asking me to build or review a component, also provide:

src/components/ui/
└── ComponentName/

Including:

Component.jsx / Component.tsx
Component.test.jsx
Component.stories.jsx (if applicable)
index.js
related CSS or utility files
My recommended workflow

For every new conversation, start with:

1. MASTER_CONTEXT.md
2. PROJECT_CONTEXT.md
3. COMPONENT_GUIDELINES.md

Then add the task-specific file(s):

Theme → DESIGN_TOKENS.md, THEME_SYSTEM.md
Architecture → ARCHITECTURE_GUIDELINES.md
Testing → TESTING_GUIDELINES.md
API → API_GUIDELINES.md

Finally, include the component folder you're currently working on.

An even better approach

Instead of pasting multiple files each time, keep MASTER_CONTEXT.md as the central document and make it contain:

Project overview
Tech stack
Folder structure
Design token philosophy
Theme architecture
Component rules
Naming conventions
Testing standards
Current completed components
Current roadmap
Links/references to the other docs

Then, in a new conversation, you can usually provide:

MASTER_CONTEXT.md

- the component folder you're working on

That is enough for me to understand the project and continue working consistently, while the other documentation serves as reference only when a task specifically depends on it.
