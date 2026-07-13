const highlights = [
  {
    title: 'Modular Components',
    description:
      'Components are grouped by responsibility, making the codebase easier to navigate and maintain.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Designed to support growing applications without frequent folder restructuring.',
  },
  {
    title: 'Developer Friendly',
    description:
      'Includes path aliases, barrel exports, reusable layouts, hooks, and context-based architecture.',
  },
];

const folderStructure = `src
├── assets
├── components
│   ├── common
│   ├── home
│   ├── layout
│   └── ui
├── contexts
├── hooks
├── pages
├── routes
├── styles
├── utils
├── App.jsx
└── main.jsx`;

export default function ProjectStructure() {
  return (
    <section
      aria-labelledby='project-structure-heading'
      className='border-b border-(--border) bg-(--bg-secondary) py-20'
    >
      <div className='mx-auto max-w-6xl px-6'>
        {/* Section Header */}
        <header className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='text-sm font-semibold tracking-widest text-(--primary-text) uppercase'>
            Project Structure
          </p>

          <h2 id='project-structure-heading' className='mt-3 text-3xl font-bold text-(--text) sm:text-4xl'>
            Organized for scalability.
          </h2>

          <p className='mt-4 text-lg text-(--text-secondary)'>
            A clean, production-ready folder structure that scales from small applications to enterprise-level
            React projects.
          </p>
        </header>

        {/* Code Block */}
        <figure className='overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-sm'>
          <figcaption className='flex items-center gap-2 border-b border-(--border) px-5 py-3'>
            <span aria-hidden='true' className='h-3 w-3 rounded-full bg-red-500' />
            <span aria-hidden='true' className='h-3 w-3 rounded-full bg-yellow-500' />
            <span aria-hidden='true' className='h-3 w-3 rounded-full bg-green-500' />

            <span className='ml-4 text-sm font-medium text-(--text-secondary)'>src/</span>
          </figcaption>

          <pre
            aria-label='Project folder structure'
            className='overflow-x-auto p-6 text-sm leading-8 text-(--text)'
          >
            <code>{folderStructure}</code>
          </pre>
        </figure>

        {/* Highlights */}
        <div
          role='list'
          aria-label='Project structure highlights'
          className='mt-10 grid gap-6 md:grid-cols-3'
        >
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              role='listitem'
              aria-labelledby={`highlight-${highlight.title.toLowerCase().replace(/\s+/g, '-')}`}
              className='rounded-2xl border border-(--border) bg-(--surface) p-6'
            >
              <h3
                id={`highlight-${highlight.title.toLowerCase().replace(/\s+/g, '-')}`}
                className='mb-3 text-lg font-semibold text-(--text)'
              >
                {highlight.title}
              </h3>

              <p className='text-(--text-secondary)'>{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
