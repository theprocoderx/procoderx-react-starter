import { useState } from 'react';

import { Avatar } from '@/components/ui/Avatar';

export default function AvatarPlayground() {
  const [image, setImage] = useState(true);

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg md:text-2xl font-semibold tracking-tight';

  const optionsWrapperClass = 'flex flex-wrap items-center gap-6';

  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}

      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Avatar Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Avatar component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>

        <div className={optionsWrapperClass}>
          <Avatar name='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>

        <div className={optionsWrapperClass}>
          <Avatar size='xs' name='John Doe' />

          <Avatar size='sm' name='John Doe' />

          <Avatar size='md' name='John Doe' />

          <Avatar size='lg' name='John Doe' />

          <Avatar size='xl' name='John Doe' />

          <Avatar size='2xl' name='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className={optionsWrapperClass}>
          <Avatar variant='default' name='John Doe' />

          <Avatar variant='filled' name='John Doe' />

          <Avatar variant='outline' name='John Doe' />

          <Avatar variant='ghost' name='John Doe' />

          <Avatar variant='soft' name='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Shapes */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Shapes</h2>

        <div className={optionsWrapperClass}>
          <Avatar shape='circle' name='John Doe' />

          <Avatar shape='rounded' name='John Doe' />

          <Avatar shape='square' name='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Fallback Colors */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Fallback Colors</h2>

        <div className={optionsWrapperClass}>
          <Avatar fallbackColor='neutral' name='John Doe' />

          <Avatar fallbackColor='primary' name='John Doe' />

          <Avatar fallbackColor='success' name='John Doe' />

          <Avatar fallbackColor='warning' name='John Doe' />

          <Avatar fallbackColor='danger' name='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Custom Fallback */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Custom Fallback</h2>

        <div className={optionsWrapperClass}>
          <Avatar fallback='PC' />

          <Avatar fallback='JS' />

          <Avatar fallback='RX' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Images */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Image Avatar</h2>

        <div className={optionsWrapperClass}>
          <Avatar src='https://i.pravatar.cc/150?img=12' alt='Avatar' name='John Doe' />

          <Avatar src='https://i.pravatar.cc/150?img=32' alt='Avatar' size='lg' name='Jane Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Broken Image */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Broken Image Fallback</h2>

        <div className={optionsWrapperClass}>
          <Avatar src='https://i.pravatar.cc/150?img=1' name='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Interactive */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Interactive</h2>

        <button
          type='button'
          className='rounded-lg border border-(--divider) px-4 py-2'
          onClick={() => setImage((prev) => !prev)}
        >
          Toggle Image
        </button>

        <Avatar src={image ? 'https://i.pravatar.cc/150?img=45' : undefined} name='ProCoderX' size='xl' />
      </section>

      {/* ====================================================== */}
      {/* Accessibility */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Accessibility</h2>

        <div className={optionsWrapperClass}>
          <Avatar src='https://i.pravatar.cc/150?img=5' alt='John Doe' />

          <Avatar name='Jane Doe' aria-label='Jane Doe' />
        </div>
      </section>
    </section>
  );
}
