const commands = [
  {
    title: 'Clone Repository',
    command: 'git clone https://github.com/theprocoderx/procoderx-react-starter.git',
  },
  {
    title: 'Navigate',
    command: 'cd procoderx-react-starter',
  },
  {
    title: 'Install Dependencies',
    command: 'npm install',
  },
  {
    title: 'Start Development',
    command: 'npm run dev',
  },
];

const includedFeatures = [
  'React 19',
  'Vite 8',
  'Tailwind CSS v4',
  'React Router v7',
  'Theme System',
  'Path Aliases',
  'Barrel Exports',
  'Production Folder Structure',
];

export default function QuickStart() {
  return (
    <section
      id='quick-start'
      aria-labelledby='quick-start-heading'
      className='border-b border-(--border) bg-(--bg-secondary) py-20'
    >
      <div className='mx-auto max-w-6xl px-6'>
        {/* Section Header */}
        <header className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='text-sm font-semibold tracking-widest text-(--primary-text) uppercase'>Quick Start</p>

          <h2 id='quick-start-heading' className='mt-3 text-3xl font-bold text-(--text) sm:text-4xl'>
            Start building in less than a minute.
          </h2>

          <p className='mt-4 text-lg text-(--text-secondary)'>
            Clone the repository, install dependencies, and launch the development server. Everything is
            pre-configured and ready to use.
          </p>
        </header>

        {/* Commands */}
        <div role='list' aria-label='Quick start steps' className='space-y-5'>
          {commands.map((item, index) => (
            <article
              key={item.title}
              role='listitem'
              aria-labelledby={`step-${index + 1}`}
              className='rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm'
            >
              <div className='mb-3 flex items-center justify-between'>
                <h3 id={`step-${index + 1}`} className='font-semibold text-(--text)'>
                  Step {index + 1}
                </h3>

                <p className='rounded-full bg-(--primary) px-3 py-1 text-xs font-medium text-(--primary-text)'>
                  {item.title}
                </p>
              </div>

              <pre
                aria-label={`${item.title} terminal command`}
                className='overflow-x-auto rounded-xl bg-zinc-950 p-4 text-sm text-green-400'
              >
                <code>{item.command}</code>
              </pre>
            </article>
          ))}
        </div>

        {/* Included Features */}
        <article
          aria-labelledby='included-heading'
          className='mt-10 rounded-2xl border border-(--border) bg-(--surface) p-8'
        >
          <h3 id='included-heading' className='mb-4 text-xl font-semibold text-(--text)'>
            Included out of the box
          </h3>

          <ul
            aria-label='Included technologies and features'
            className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
          >
            {includedFeatures.map((item) => (
              <li
                key={item}
                className='flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--bg) px-4 py-3 text-center text-sm font-medium'
              >
                <span aria-hidden='true'>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
