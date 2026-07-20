import { Link } from 'react-router-dom';

const stats = [
  {
    value: '100%',
    label: 'Responsive Layout',
  },
  {
    value: '3',
    label: 'Built-in Themes',
  },
  {
    value: '0',
    label: 'Configuration Required',
  },
];

export default function CallToAction() {
  return (
    <section aria-labelledby='cta-heading' className='bg-(--bg) py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='overflow-hidden rounded-3xl border border-(--border) bg-(--surface) p-10 text-center shadow-sm sm:p-16'>
          {/* Header */}
          <header>
            <p className='rounded-full bg-(--primary-bg) px-4 py-2 text-sm font-semibold text-(--primary-bg-text)'>
              Open Source
            </p>

            <h2 id='cta-heading' className='mt-6 text-3xl font-bold tracking-tight text-(--text) sm:text-5xl'>
              Ready to build your next React project?
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-(--text-secondary)'>
              Skip the repetitive setup and start with a clean, scalable, production-ready foundation. Clone
              the repository and focus on building features instead of configuration.
            </p>
          </header>

          {/* CTA Buttons */}
          <nav aria-label='Call to action' className='mt-10 flex flex-col justify-center gap-4 sm:flex-row'>
            <a
              href='https://github.com/theprocoderx/procoderx-react-starter'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Star ProCoderX React Starter on GitHub (opens in a new tab)'
              className='rounded-xl bg-(--primary-bg) px-6 py-3 font-semibold text-(--primary-bg-text) transition-all duration-300 hover:-translate-y-1 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:outline-none'
            >
              <span aria-hidden='true'>⭐</span> Star on GitHub
            </a>

            <Link
              to='/'
              className='rounded-xl border border-(--border) bg-(--bg) px-6 py-3 font-semibold text-(--text) transition-all duration-300 hover:bg-(--surface-hover) focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:outline-none'
            >
              Start Building
            </Link>
          </nav>

          {/* Stats */}
          <dl
            aria-label='Starter template highlights'
            className='mt-14 grid gap-6 border-t border-(--border) pt-10 sm:grid-cols-3'
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className='mt-2 text-sm text-(--text-secondary)'>{stat.label}</dt>

                <dd className='text-2xl font-bold text-(--text)'>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
