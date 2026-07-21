import { useState } from 'react';
import { Bell, CheckCircle, Info, TriangleAlert } from 'lucide-react';

import { Alert } from '@/components/ui/Alert';

export default function AlertPlayground() {
  const [showDismissible, setShowDismissible] = useState(true);

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg md:text-2xl font-semibold tracking-tight';

  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:gap-8';

  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}

      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Alert Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Alert component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}

      <section id='basic' className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>

        <div className={optionsWrapperClass}>
          <Alert>This is a default alert message.</Alert>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}

      <section id='variants' className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className={optionsWrapperClass}>
          <Alert variant='default'>Default alert message.</Alert>

          <Alert variant='info'>New information is available.</Alert>

          <Alert variant='success'>Operation completed successfully.</Alert>

          <Alert variant='warning'>Please review this warning.</Alert>

          <Alert variant='error'>Something went wrong.</Alert>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Title */}
      {/* ====================================================== */}

      <section id='title' className={sectionClass}>
        <h2 className={headingClass}>Title</h2>

        <div className={optionsWrapperClass}>
          <Alert variant='success' title='Success'>
            Your changes have been saved.
          </Alert>

          <Alert variant='error' title='Error'>
            Unable to complete your request.
          </Alert>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Custom Icons */}
      {/* ====================================================== */}

      <section id='icons' className={sectionClass}>
        <h2 className={headingClass}>Custom Icons</h2>

        <div className={optionsWrapperClass}>
          <Alert icon={<Bell size={20} />}>Alert with custom icon.</Alert>

          <Alert variant='success' icon={<CheckCircle size={20} />}>
            Custom success icon.
          </Alert>

          <Alert variant='warning' icon={<TriangleAlert size={20} />}>
            Custom warning icon.
          </Alert>

          <Alert variant='info' icon={<Info size={20} />}>
            Custom information icon.
          </Alert>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Dismissible */}
      {/* ====================================================== */}

      <section id='dismissible' className={sectionClass}>
        <h2 className={headingClass}>Dismissible</h2>

        <div className={optionsWrapperClass}>
          {showDismissible ? (
            <Alert
              variant='info'
              title='Dismissible Alert'
              dismissible
              onDismiss={() => setShowDismissible(false)}
            >
              Click the close button to remove this alert.
            </Alert>
          ) : (
            <button
              type='button'
              onClick={() => setShowDismissible(true)}
              className='rounded-md border border-(--divider) px-4 py-2 text-sm'
            >
              Show Alert Again
            </button>
          )}
        </div>
      </section>

      {/* ====================================================== */}
      {/* Without Title */}
      {/* ====================================================== */}

      <section id='without-title' className={sectionClass}>
        <h2 className={headingClass}>Without Title</h2>

        <div className={optionsWrapperClass}>
          <Alert variant='warning'>This alert only contains description content.</Alert>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}

      <section id='full-width' className={sectionClass}>
        <h2 className={headingClass}>Layout</h2>

        <Alert variant='success'>Alert automatically uses full container width.</Alert>
      </section>

      {/* ====================================================== */}
      {/* Accessibility */}
      {/* ====================================================== */}

      <section id='accessibility' className={sectionClass}>
        <h2 className={headingClass}>Accessibility</h2>

        <div className={optionsWrapperClass}>
          <Alert variant='info' role='status'>
            Informational status message.
          </Alert>

          <Alert variant='error' role='alert'>
            Critical error message.
          </Alert>
        </div>
      </section>
    </section>
  );
}
