import { ArrowLeft, ArrowRight, Download, Plus } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

import { Button } from '@/components/ui/button';

export default function ButtonPlayground() {
  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg md:text-2xl font-semibold tracking-tight';

  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-16';

  return (
    // Responsive container padding
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}
      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Button Component</h1>
        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Button component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}
      <section aria-labelledby='variants-heading' className={sectionClass}>
        <h2 id='variants-heading' className={headingClass}>
          Variants
        </h2>
        {/* Mobile par elements aapas me chipke na isliye gap-3 mobile-first aur gap-4 responsive lagaya */}
        <div className={optionsWrapperClass}>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='destructive'>Delete</Button>
          <Button variant='link'>Learn More</Button>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section aria-labelledby='sizes-heading' className={sectionClass}>
        <h2 id='sizes-heading' className={headingClass}>
          Sizes
        </h2>
        <div className={optionsWrapperClass}>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
          <Button size='icon' ariaLabel='Add item'>
            <Plus size={18} />
          </Button>
        </div>
      </section>

      {/* ====================================================== */}
      {/* States */}
      {/* ====================================================== */}
      <section aria-labelledby='states-heading' className={sectionClass}>
        <h2 id='states-heading' className={headingClass}>
          States
        </h2>
        <div className={optionsWrapperClass}>
          <Button loading>Saving...</Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth className='sm:w-auto'>
            Full Width
          </Button>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Icons */}
      {/* ====================================================== */}
      <section aria-labelledby='icons-heading' className={sectionClass}>
        <h2 id='icons-heading' className={headingClass}>
          Icons
        </h2>
        <div className={optionsWrapperClass}>
          <Button ariaLabel='Next'>
            <ArrowRight size={18} />
          </Button>
          <Button ariaLabel='Download'>
            <Download size={18} />
          </Button>
          <Button ariaLabel='Previous'>
            <ArrowLeft size={18} />
          </Button>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Links */}
      {/* ====================================================== */}
      <section aria-labelledby='links-heading' className={sectionClass}>
        <h2 id='links-heading' className={headingClass}>
          Links
        </h2>
        <div className={optionsWrapperClass}>
          <Button
            href='https://github.com/theprocoderx/procoderx-react-starter'
            ariaLabel='Open GitHub repository'
          >
            <SiGithub size={22} color='currentColor' />
          </Button>

          {/* Mobile screen size ke hisab se fluid text handle karne ke liye simple button flow layout */}
          <Button href='/resume.pdf' download>
            Download Resume
          </Button>
        </div>
      </section>
    </section>
  );
}
