import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';

export default function BadgePlayground() {
  const [variant, setVariant] = useState('primary');

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 shadow-(--shadow-xs) md:p-8';

  const headingClass = 'border-b border-(--divider) pb-3 text-xl font-semibold md:text-2xl';

  const optionsWrapperClass = 'flex flex-wrap items-center gap-4 md:gap-6';

  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}
      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Badge Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Badge component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}
      <section id='basic' className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>

        <div className={optionsWrapperClass}>
          <Badge>Primary Badge</Badge>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}
      <section id='variants' className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className={optionsWrapperClass}>
          <Badge variant='primary'>Primary</Badge>

          <Badge variant='secondary'>Secondary</Badge>

          <Badge variant='success'>Success</Badge>

          <Badge variant='warning'>Warning</Badge>

          <Badge variant='error'>Error</Badge>

          <Badge variant='info'>Info</Badge>

          <Badge variant='outline'>Outline</Badge>

          <Badge variant='ghost'>Ghost</Badge>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section id='sizes' className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>

        <div className={optionsWrapperClass}>
          <Badge size='sm'>Small</Badge>

          <Badge size='md'>Medium</Badge>

          <Badge size='lg'>Large</Badge>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Rounded */}
      {/* ====================================================== */}
      <section id='rounded' className={sectionClass}>
        <h2 className={headingClass}>Rounded</h2>

        <div className={optionsWrapperClass}>
          <Badge rounded='sm'>Small</Badge>

          <Badge rounded='md'>Medium</Badge>

          <Badge rounded='full'>Full</Badge>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}
      <section id='full-width' className={sectionClass}>
        <h2 className={headingClass}>Full Width</h2>

        <div className='flex w-full flex-col gap-4'>
          <Badge fullWidth>Full Width Badge</Badge>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}
      <section id='controlled' className={sectionClass}>
        <h2 className={headingClass}>Controlled Variant</h2>

        <div className='space-y-6'>
          <Badge variant={variant}>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Badge>

          <div className='flex flex-wrap gap-3'>
            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('primary')}
            >
              Primary
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('secondary')}
            >
              Secondary
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('success')}
            >
              Success
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('warning')}
            >
              Warning
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('error')}
            >
              Error
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('info')}
            >
              Info
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('outline')}
            >
              Outline
            </button>

            <button
              className='rounded-md border border-(--border) px-3 py-2 text-sm'
              onClick={() => setVariant('ghost')}
            >
              Ghost
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Custom Styling */}
      {/* ====================================================== */}
      <section id='custom-styling' className={sectionClass}>
        <h2 className={headingClass}>Custom Styling</h2>

        <div className={optionsWrapperClass}>
          <Badge className='tracking-[0.2em] uppercase'>Custom Badge</Badge>

          <Badge variant='outline' className='border-dashed border-(--primary) text-(--primary)'>
            Dashed Badge
          </Badge>
        </div>
      </section>
    </section>
  );
}
