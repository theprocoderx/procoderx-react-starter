const reasons = [
  {
    title: 'Production Architecture',
    description: 'A scalable folder structure designed for real-world React applications.',
    icon: '🏗️',
  },
  {
    title: 'Reusable Components',
    description: 'Build faster with reusable layouts, UI components, hooks, and utilities.',
    icon: '♻️',
  },
  {
    title: 'Developer Experience',
    description: 'Path aliases, barrel exports, ESLint, Prettier, and a clean development workflow.',
    icon: '🛠️',
  },
  {
    title: 'Modern Best Practices',
    description: 'Built using modern React patterns, semantic HTML, and maintainable code.',
    icon: '✨',
  },
  {
    title: 'Accessibility First',
    description: 'Keyboard-friendly, semantic markup and accessible component architecture.',
    icon: '♿',
  },
  {
    title: 'Performance Focused',
    description: 'Optimized structure with Vite, code splitting support, and efficient rendering.',
    icon: '⚡',
  },
];

export default function WhyChooseStarter() {
  return (
    <section aria-labelledby='why-choose-heading' className='border-b border-(--border) bg-(--bg) py-20'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Section Header */}
        <header className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='rounded-4xl bg-(--primary-bg) py-2 text-sm font-semibold tracking-widest text-(--primary-bg-text) uppercase'>
            Why Choose This Starter
          </p>

          <h2 id='why-choose-heading' className='mt-3 text-3xl font-bold text-(--text) sm:text-4xl'>
            Built for developers who value quality.
          </h2>

          <p className='mt-4 text-lg text-(--text-secondary)'>
            Everything is structured with scalability, maintainability, and modern development workflows in
            mind so you can spend less time configuring and more time building.
          </p>
        </header>

        {/* Reasons */}
        <div
          role='list'
          aria-label='Reasons to choose ProCoderX React Starter'
          className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {reasons.map((reason) => {
            const id = reason.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '');

            return (
              <article
                key={reason.title}
                role='listitem'
                aria-labelledby={`reason-${id}`}
                className='rounded-2xl border border-(--border) bg-(--surface) p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <div
                  aria-hidden='true'
                  className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary)/10 text-3xl'
                >
                  {reason.icon}
                </div>

                <h3 id={`reason-${id}`} className='mb-3 text-xl font-semibold text-(--text)'>
                  {reason.title}
                </h3>

                <p className='leading-7 text-(--text-secondary)'>{reason.description}</p>
              </article>
            );
          })}
        </div>

        {/* Summary */}
        <article
          aria-labelledby='build-confidence-heading'
          className='mt-14 rounded-3xl border border-(--border) bg-(--surface) p-8 text-center shadow-sm'
        >
          <h3 id='build-confidence-heading' className='text-2xl font-bold text-(--text)'>
            Build with confidence.
          </h3>

          <p className='mx-auto mt-4 max-w-3xl leading-8 text-(--text-secondary)'>
            ProCoderX React Starter provides a clean foundation with modern tooling, reusable architecture,
            built-in theming, responsive layouts, and production-ready practices so you can start building
            immediately instead of spending hours configuring your project.
          </p>
        </article>
      </div>
    </section>
  );
}
