import { useTheme } from '@/hooks';

const includedFeatures = [
  'Light Theme',
  'Dark Theme',
  'System Theme Detection',
  'Context API',
  'Local Storage Persistence',
  'CSS Variables',
  'Automatic Theme Sync',
  'Accessible Theme Switching',
];

export default function ThemeShowcase() {
  const { theme, isDark } = useTheme();

  const selectedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);

  const resolvedTheme = theme === 'system' ? (isDark ? 'Dark' : 'Light') : selectedTheme;

  return (
    <section aria-labelledby='theme-showcase-heading' className='border-b border-(--border) bg-(--bg) py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        {/* Section Header */}
        <header className='mx-auto mb-14 max-w-3xl text-center'>
          <p className='text-sm font-semibold tracking-widest text-(--primary-text) uppercase'>
            Theme System
          </p>

          <h2 id='theme-showcase-heading' className='mt-3 text-3xl font-bold text-(--text) sm:text-4xl'>
            Built-in Theme Management
          </h2>

          <p className='mt-4 text-lg text-(--text-secondary)'>
            Switch seamlessly between Light, Dark, and System themes. The starter automatically remembers user
            preferences and follows the operating system theme when System mode is selected.
          </p>
        </header>

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Current Theme */}
          <article
            aria-labelledby='current-theme-heading'
            className='rounded-2xl border border-(--border) bg-(--surface) p-8 shadow-sm'
          >
            <h3 id='current-theme-heading' className='mb-6 text-xl font-semibold text-(--text)'>
              Current Theme
            </h3>

            <dl className='space-y-4'>
              <div className='flex items-center justify-between rounded-xl border border-(--border) p-4'>
                <dt className='text-(--text-secondary)'>Selected Theme</dt>

                <dd
                  aria-live='polite'
                  className='rounded-full bg-(--primary)/10 px-3 py-1 font-medium text-(--text)'
                >
                  {selectedTheme}
                </dd>
              </div>

              <div className='flex items-center justify-between rounded-xl border border-(--border) p-4'>
                <dt className='text-(--text-secondary)'>Resolved Theme</dt>

                <dd
                  aria-live='polite'
                  className='rounded-full bg-(--primary)/10 px-3 py-1 font-medium text-(--text)'
                >
                  {resolvedTheme}
                </dd>
              </div>

              <div className='flex items-center justify-between rounded-xl border border-(--border) p-4'>
                <dt className='text-(--text-secondary)'>Dark Mode Active</dt>

                <dd
                  aria-live='polite'
                  className={`rounded-full px-3 py-1 font-medium ${
                    isDark ? 'bg-green-500/15 text-green-600' : 'bg-zinc-500/15 text-zinc-600'
                  }`}
                >
                  {isDark ? 'Yes' : 'No'}
                </dd>
              </div>
            </dl>
          </article>

          {/* Included Features */}
          <article
            aria-labelledby='included-features-heading'
            className='rounded-2xl border border-(--border) bg-(--surface) p-8 shadow-sm'
          >
            <h3 id='included-features-heading' className='mb-6 text-xl font-semibold text-(--text)'>
              Included Features
            </h3>

            <ul aria-label='Included theme features' className='space-y-4'>
              {includedFeatures.map((item) => (
                <li key={item} className='flex items-center gap-3'>
                  <span
                    aria-hidden='true'
                    className='flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm text-white'
                  >
                    ✓
                  </span>

                  <span className='text-(--text-secondary)'>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
