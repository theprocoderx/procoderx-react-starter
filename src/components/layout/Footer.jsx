import { Container } from '@/components/common';
import { useTheme } from '@/hooks';
import { Link } from 'react-router-dom';
const Footer = () => {
  const { isDark } = useTheme();
  // console.log(theme);
  return (
    <footer className='bg-(--surface) py-8 backdrop-blur-xl'>
      <Container>
        <div className='flex flex-col items-center gap-5 text-center'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-3 transition-opacity hover:opacity-80'>
            <img
              src='/procoderx-logo.webp'
              alt='ProCoderX'
              width={180}
              height={180}
              loading='lazy'
              decoding='async'
              className={`size-16 rounded-2xl transition-colors duration-300 ${
                isDark ? 'bg-white' : 'bg-[#0f172a]'
              }`}
            />
          </Link>

          {/* Project Name */}
          <h2 className='text-lg font-semibold'>ProCoderX React Starter</h2>

          {/* Description */}
          <p className='max-w-xl text-sm leading-6 text-(--text-secondary)'>
            A modern, production-ready React starter template built with React 19, Vite 8, Tailwind CSS v4,
            and React Router v7.
          </p>

          {/* Links */}
          <nav aria-label='Footer navigation'>
            <ul className='flex flex-wrap items-center justify-center gap-6 text-sm font-medium'>
              <li>
                <a
                  href='https://github.com/theprocoderx/procoderx-react-starter'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-colors hover:text-cyan-500'
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href='https://procoderx.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-colors hover:text-cyan-500'
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href='https://github.com/theprocoderx/procoderx-react-starter/blob/main/LICENSE'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-colors hover:text-cyan-500'
                >
                  MIT License
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className='text-xs text-(--text-secondary)'>
            © {new Date().getFullYear()} ProCoderX. Released under the MIT License.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
