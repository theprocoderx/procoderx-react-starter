import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks';
import { Container } from '@/components/common';
import { ThemeSwitcher } from '@/components/ui';

export default function Header() {
  const { isDark } = useTheme();

  return (
    <header className='sticky top-0 z-50 bg-(--surface) shadow-sm backdrop-blur-xl'>
      <Container>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-3 transition-opacity hover:opacity-80'>
            <img
              src='/procoderx-logo.webp'
              alt='ProCoderX'
              width={180}
              height={180}
              loading='lazy'
              decoding='async'
              className={`size-12 rounded-2xl transition-colors duration-300 ${
                isDark ? 'bg-white' : 'bg-[#0f172a]'
              }`}
            />

            <div className='hidden text-(--text-secondary) sm:block'>
              <h1 className='text-lg font-bold'>ProCoderX React Starter</h1>

              <p className='text-xs'>Production Ready</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className='hidden items-center gap-8 text-sm font-medium md:flex'>
              <li>
                <Link to='/' className='transition-colors hover:text-blue-600 dark:hover:text-blue-400'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/playground'
                  className='transition-colors hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Playground
                </Link>
              </li>
              <li>
                <a
                  href='https://github.com/theprocoderx/procoderx-react-starter'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-colors hover:text-blue-600 dark:hover:text-blue-400'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
}
