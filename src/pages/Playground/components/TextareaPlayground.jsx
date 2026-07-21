import { useState } from 'react';

import { Textarea } from '@/components/ui/Textarea';

export default function TextareaPlayground() {
  const [message, setMessage] = useState('');

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg md:text-2xl font-semibold tracking-tight';

  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-16';

  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}

      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Textarea Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Textarea component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}

      <section id='basic' className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>

        <div className={optionsWrapperClass}>
          <Textarea placeholder='Enter your message' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}

      <section id='variants' className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className={optionsWrapperClass}>
          <Textarea variant='default' placeholder='Default' />

          <Textarea variant='filled' placeholder='Filled' />

          <Textarea variant='ghost' placeholder='Ghost' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}

      <section id='sizes' className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>

        <div className={optionsWrapperClass}>
          <Textarea size='sm' placeholder='Small textarea' />

          <Textarea size='md' placeholder='Medium textarea' />

          <Textarea size='lg' placeholder='Large textarea' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Resize */}
      {/* ====================================================== */}

      <section id='resize' className={sectionClass}>
        <h2 className={headingClass}>Resize</h2>

        <div className={optionsWrapperClass}>
          <Textarea resize='none' placeholder='Resize disabled' />

          <Textarea resize='vertical' placeholder='Vertical resize' />

          <Textarea resize='horizontal' placeholder='Horizontal resize' />

          <Textarea resize='both' placeholder='Resize both directions' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Validation */}
      {/* ====================================================== */}

      <section id='validation' className={sectionClass}>
        <h2 className={headingClass}>Validation</h2>

        <div className={optionsWrapperClass}>
          <Textarea invalid placeholder='Invalid textarea' errorMessage='Description is required.' />

          <Textarea success defaultValue='Everything looks good.' successMessage='Valid description.' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Helper Text */}
      {/* ====================================================== */}

      <section id='helper-text' className={sectionClass}>
        <h2 className={headingClass}>Helper Text</h2>

        <div className={optionsWrapperClass}>
          <div className='w-full sm:max-w-md'>
            <Textarea placeholder='Write something...' helperText='Maximum 500 characters allowed.' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* States */}
      {/* ====================================================== */}

      <section id='states' className={sectionClass}>
        <h2 className={headingClass}>States</h2>

        <div className={optionsWrapperClass}>
          <Textarea disabled placeholder='Disabled textarea' />

          <Textarea readOnly defaultValue='Read only content' />

          <Textarea required placeholder='Required textarea' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Rows */}
      {/* ====================================================== */}

      <section id='rows' className={sectionClass}>
        <h2 className={headingClass}>Rows</h2>

        <div className={optionsWrapperClass}>
          <Textarea rows={3} placeholder='3 rows' />

          <Textarea rows={8} placeholder='8 rows' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}

      <section id='full-width' className={sectionClass}>
        <h2 className={headingClass}>Full Width</h2>

        <Textarea fullWidth placeholder='Full width textarea' />
      </section>

      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}

      <section id='controlled' className={sectionClass}>
        <h2 className={headingClass}>Controlled Textarea</h2>

        <div className={optionsWrapperClass}>
          <Textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder='Type your message'
          />

          <p className='text-sm text-(--text-muted)'>
            Current value: <span className='font-medium text-(--text)'>{message || '—'}</span>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Uncontrolled */}
      {/* ====================================================== */}

      <section id='uncontrolled' className={sectionClass}>
        <h2 className={headingClass}>Uncontrolled Textarea</h2>

        <div className={optionsWrapperClass}>
          <Textarea defaultValue='Default textarea value' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Accessibility */}
      {/* ====================================================== */}

      <section id='accessibility' className={sectionClass}>
        <h2 className={headingClass}>Accessibility</h2>

        <div className={optionsWrapperClass}>
          <Textarea aria-label='Message textarea' placeholder='Accessible textarea' />

          <Textarea aria-labelledby='description-label' placeholder='Labelled textarea' />
        </div>
      </section>
    </section>
  );
}
