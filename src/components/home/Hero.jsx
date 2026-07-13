import { Link } from 'react-router-dom';

export default function Hero() {
  const techStack = ['React 19', 'Vite 8', 'Tailwind CSS v4', 'React Router v7'];

  return (
    <section className='border-b border-(--border) bg-(--bg)' aria-labelledby='hero-heading'>
      <div className='mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center lg:py-28'>
        {/* Badge */}
        <p
          className='mb-6 rounded-full border border-(--border) bg-(--surface) px-4 py-1 text-sm font-medium text-(--text-secondary)'
          aria-label='Production-ready React starter template'
        >
          <span aria-hidden='true'>🚀</span> Production Ready React Starter
        </p>

        {/* Heading */}
        <h1
          id='hero-heading'
          className='max-w-3xl text-4xl font-extrabold tracking-tight text-(--text) sm:text-5xl lg:text-6xl'
        >
          ProCoderX React Starter
        </h1>

        {/* Description */}
        <p className='mt-6 max-w-2xl text-lg leading-8 text-(--text-secondary)'>
          A modern, scalable, production-ready React starter template built with React 19, Vite 8, Tailwind
          CSS v4, React Router v7, Context API, and developer-focused best practices.
        </p>

        {/* Tech Stack */}
        <ul className='mt-8 flex flex-wrap justify-center gap-3' aria-label='Technology stack'>
          {techStack.map((item) => (
            <li key={item}>
              <span className='rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium'>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className='mt-10 flex flex-col gap-4 sm:flex-row' aria-label='Primary actions'>
          <a
            href='#quick-start'
            className='rounded-xl bg-(--button-bg) px-6 py-3 font-semibold text-(--button-text) transition-transform duration-300 hover:-translate-y-0.5 hover:bg-(--button-hover) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            Get Started
          </a>

          <Link
            to='https://github.com/theprocoderx/procoderx-react-starter'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='View ProCoderX React Starter on GitHub (opens in a new tab)'
            className='rounded-xl border border-(--border) bg-(--surface) px-6 py-3 font-semibold transition-all duration-300 hover:bg-(--surface-hover) focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
