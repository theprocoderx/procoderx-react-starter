// src/pages/Components.jsx
import { FaGithub } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { ArrowLeft, ArrowRight, Download, GitBranch, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function Components() {
  return (
    <main className='mx-auto max-w-7xl space-y-12 p-6 md:p-10'>
      <header className='space-y-2'>
        <h1 className='text-3xl font-bold'>Button Component</h1>

        <p className='text-(--text-muted)'>
          Production-ready button component with variants, sizes, icons, loading state, links, and theme
          support.
        </p>
      </header>

      {/* Variants */}
      <section aria-labelledby='variants-heading' className='space-y-4'>
        <h2 id='variants-heading' className='text-xl font-semibold'>
          Variants
        </h2>

        <div className='flex flex-wrap gap-4'>
          <Button>Primary</Button>

          <Button variant='secondary'>Secondary</Button>

          <Button variant='outline'>Outline</Button>

          <Button variant='ghost'>Ghost</Button>

          <Button variant='destructive'>Delete</Button>

          <Button variant='link'>Learn More</Button>
        </div>
      </section>

      {/* Sizes */}
      <section aria-labelledby='sizes-heading' className='space-y-4'>
        <h2 id='sizes-heading' className='text-xl font-semibold'>
          Sizes
        </h2>

        <div className='flex flex-wrap items-center gap-4'>
          <Button size='sm'>Small</Button>

          <Button size='md'>Medium</Button>

          <Button size='lg'>Large</Button>

          <Button size='icon' ariaLabel='Add item'>
            <Plus size={20} />
          </Button>
        </div>
      </section>

      {/* States */}
      <section aria-labelledby='states-heading' className='space-y-4'>
        <h2 id='states-heading' className='text-xl font-semibold'>
          States
        </h2>

        <div className='flex flex-wrap gap-4'>
          <Button loading>Saving...</Button>

          <Button disabled>Disabled</Button>

          <Button fullWidth className='sm:w-auto'>
            Full Width
          </Button>
        </div>
      </section>

      {/* Icons */}
      <section aria-labelledby='icons-heading' className='space-y-4'>
        <h2 id='icons-heading' className='text-xl font-semibold'>
          Icons
        </h2>

        <div className='flex flex-wrap gap-4'>
          <Button>
            <ArrowRight size={18} />
          </Button>

          <Button>
            <Download size={18} />
          </Button>
          <Button>
            <ArrowLeft size={18} />
          </Button>
        </div>
      </section>

      {/* Links */}
      <section aria-labelledby='links-heading' className='space-y-4'>
        <h2 id='links-heading' className='text-xl font-semibold'>
          Links
        </h2>

        <div className='flex flex-wrap gap-4'>
          <Button
            href='https://github.com/theprocoderx/procoderx-react-starter'
            ariaLabel='Open GitHub repository'
          >
            <FaGithub size={40} color='#000' />
          </Button>
          <Button
            href='https://github.com/theprocoderx/procoderx-react-starter'
            ariaLabel='Open GitHub repository'
          >
            <AiFillGithub size={40} color='#24292e' />
          </Button>

          <Button href='/resume.pdf' download>
            Download Resume
          </Button>
        </div>
      </section>
    </main>
  );
}
