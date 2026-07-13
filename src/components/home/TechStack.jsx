const technologies = [
  {
    name: 'React 19',
    description: 'Modern UI library',
    icon: '⚛️',
  },
  {
    name: 'Vite 8',
    description: 'Lightning-fast bundler',
    icon: '⚡',
  },
  {
    name: 'Tailwind CSS v4',
    description: 'Utility-first CSS framework',
    icon: '🎨',
  },
  {
    name: 'React Router v7',
    description: 'Declarative routing',
    icon: '🧭',
  },
  {
    name: 'Context API',
    description: 'Global state management',
    icon: '🌗',
  },
  {
    name: 'JavaScript ES2024',
    description: 'Modern JavaScript',
    icon: '🟨',
  },
  {
    name: 'ESLint',
    description: 'Code quality',
    icon: '✔️',
  },
  {
    name: 'Prettier',
    description: 'Consistent formatting',
    icon: '💎',
  },
];

export default function TechStack() {
  return (
    <section aria-labelledby='tech-stack-heading' className='border-b border-(--border) bg-(--bg) py-20'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Section Header */}
        <header className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='text-sm font-semibold tracking-widest text-(--primary-text) uppercase'>Tech Stack</p>

          <h2 id='tech-stack-heading' className='mt-3 text-3xl font-bold text-(--text) sm:text-4xl'>
            Built with modern technologies.
          </h2>

          <p className='mt-4 text-lg text-(--text-secondary)'>
            Carefully selected tools and libraries that provide an excellent developer experience while
            following modern React best practices.
          </p>
        </header>

        {/* Technologies */}
        <div role='list' aria-label='Technology stack' className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {technologies.map((tech) => {
            const id = tech.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '');

            return (
              <article
                key={tech.name}
                role='listitem'
                aria-labelledby={`tech-${id}`}
                className='rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <div aria-hidden='true' className='mb-5 text-4xl'>
                  {tech.icon}
                </div>

                <h3 id={`tech-${id}`} className='mb-2 text-lg font-semibold text-(--primary-text)'>
                  {tech.name}
                </h3>

                <p className='text-sm leading-6 text-(--text-secondary)'>{tech.description}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom Information */}
        <article
          aria-labelledby='production-ready-heading'
          className='mt-14 rounded-2xl border border-(--border) bg-(--surface) p-8 text-center'
        >
          <h3 id='production-ready-heading' className='text-xl font-semibold text-(--text)'>
            Production-ready by default
          </h3>

          <p className='mx-auto mt-3 max-w-3xl leading-7 text-(--text-secondary)'>
            The starter follows modern React architecture with reusable components, Context API, barrel
            exports, path aliases, responsive layouts, and a scalable folder structure so you can focus on
            building features instead of configuring your project.
          </p>
        </article>
      </div>
    </section>
  );
}
