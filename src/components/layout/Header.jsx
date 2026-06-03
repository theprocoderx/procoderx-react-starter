import { useTheme } from '../../contexts/theme/useTheme';
import Container from '../common/Container';

export default function Header() {
  const { isDark, setIsDark } = useTheme();

  return (
    <header className={`w-full ${isDark ? 'dark' : ''} sticky top-0 z-10 p-2 shadow-lg`}>
      <Container>
        <div className='mx-auto flex w-full justify-between'>
          <h2 className='text-xl font-bold sm:text-2xl'>
            <a href='/' className='flex items-center gap-2'>
              <img src='/favicon.webp' alt='GlobScope logo' className='w-12 rounded-4xl' />
              @maganstackforge
            </a>
          </h2>

          <button onClick={() => setIsDark(!isDark)}>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
        </div>
      </Container>
    </header>
  );
}
