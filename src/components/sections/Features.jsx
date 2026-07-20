const features = [
  {
    title: 'React 19',
    description: 'Build modern applications with the latest React features and improvements.',
    icon: '⚛️',
  },
  {
    title: 'Vite 8',
    description: 'Lightning-fast development server and optimized production builds.',
    icon: '⚡',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Utility-first styling with a modern CSS architecture.',
    icon: '🎨',
  },
  {
    title: 'React Router v7',
    description: 'Powerful client-side routing with scalable route management.',
    icon: '🧭',
  },
  {
    title: 'Theme System',
    description: 'Built-in Light, Dark, and System theme with Context API and CSS variables.',
    icon: '🌗',
  },
  {
    title: 'Developer Experience',
    description: 'Path aliases, barrel exports, ESLint, and Prettier configured out of the box.',
    icon: '🛠️',
  },
  {
    title: 'Production Structure',
    description: 'Scalable folder architecture following modern React best practices.',
    icon: '📦',
  },
  {
    title: 'Accessibility & SEO',
    description: 'Semantic HTML, keyboard accessibility, and SEO-friendly foundation.',
    icon: '♿',
  },
];

export default function Features() {
  return (
    <section
      className='border-b border-(--border) bg-(--bg-secondary) py-20'
      aria-labelledby='features-heading'
    >
      <div className='mx-auto max-w-7xl px-6'>
        {/* Heading */}
        <header className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='text-sm font-semibold tracking-widest bg-(--primary-bg) py-2 rounded-4xl text-(--primary-bg-text) uppercase'>Features</p>

          <h2 id='features-heading' className='mt-3 text-3xl font-bold text-(--text) sm:text-4xl'>
            Everything you need to start building.
          </h2>

          <p className='mt-4 text-lg text-(--text-secondary)'>
            A carefully crafted starter template designed for modern React applications with scalability,
            maintainability, and developer experience in mind.
          </p>
        </header>

        {/* Feature Cards */}
        <div
          className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'
          role='list'
          aria-label='Starter template features'
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              role='listitem'
              aria-labelledby={`feature-${feature.title}`}
              className='rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              <div
                className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary)/10 text-2xl'
                aria-hidden='true'
              >
                {feature.icon}
              </div>

              <h3 id={`feature-${feature.title}`} className='mb-3 text-xl font-semibold text-(--text)'>
                {feature.title}
              </h3>

              <p className='leading-7 text-(--text-secondary)'>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
