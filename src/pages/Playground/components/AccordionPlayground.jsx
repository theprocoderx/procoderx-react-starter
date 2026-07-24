import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AccordionPlayground() {
  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 shadow-(--shadow-xs) md:p-8';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg font-semibold tracking-tight md:text-2xl';

  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}

      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Accordion Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Accordion component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className='space-y-6'>
          <Accordion variant='default'>
            <AccordionItem value='default'>
              <AccordionTrigger>Default</AccordionTrigger>
              <AccordionContent>Default accordion variant.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion variant='outline'>
            <AccordionItem value='outline'>
              <AccordionTrigger>Outline</AccordionTrigger>
              <AccordionContent>Outline accordion variant.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion variant='filled'>
            <AccordionItem value='filled'>
              <AccordionTrigger>Filled</AccordionTrigger>
              <AccordionContent>Filled accordion variant.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion variant='ghost'>
            <AccordionItem value='ghost'>
              <AccordionTrigger>Ghost</AccordionTrigger>
              <AccordionContent>Ghost accordion variant.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>

        <div className='space-y-6'>
          <Accordion size='sm'>
            <AccordionItem value='sm'>
              <AccordionTrigger>Small</AccordionTrigger>
              <AccordionContent>Small size accordion.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion size='md'>
            <AccordionItem value='md'>
              <AccordionTrigger>Medium</AccordionTrigger>
              <AccordionContent>Medium size accordion.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion size='lg'>
            <AccordionItem value='lg'>
              <AccordionTrigger>Large</AccordionTrigger>
              <AccordionContent>Large size accordion.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Border Radius */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Border Radius</h2>

        <div className='space-y-6'>
          <Accordion radius='none'>
            <AccordionItem value='none'>
              <AccordionTrigger>None</AccordionTrigger>
              <AccordionContent>No border radius.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion radius='sm'>
            <AccordionItem value='sm-radius'>
              <AccordionTrigger>Small</AccordionTrigger>
              <AccordionContent>Small border radius.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion radius='md'>
            <AccordionItem value='md-radius'>
              <AccordionTrigger>Medium</AccordionTrigger>
              <AccordionContent>Medium border radius.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion radius='lg'>
            <AccordionItem value='lg-radius'>
              <AccordionTrigger>Large</AccordionTrigger>
              <AccordionContent>Large border radius.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Single Mode */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Single Mode</h2>

        <Accordion type='single' collapsible>
          <AccordionItem value='react'>
            <AccordionTrigger>What is React?</AccordionTrigger>

            <AccordionContent>React is a JavaScript library for building user interfaces.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='tailwind'>
            <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>

            <AccordionContent>Tailwind CSS is a utility-first CSS framework.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='cva'>
            <AccordionTrigger>What is CVA?</AccordionTrigger>

            <AccordionContent>
              Class Variance Authority helps build scalable component variants.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ====================================================== */}
      {/* Multiple Mode */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Multiple Mode</h2>

        <Accordion type='multiple'>
          <AccordionItem value='1'>
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>Multiple items can stay open simultaneously.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='2'>
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>Useful for FAQ and documentation pages.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='3'>
            <AccordionTrigger>Third Item</AccordionTrigger>
            <AccordionContent>Each item manages its own expanded state.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ====================================================== */}
      {/* Disabled */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Disabled</h2>

        <Accordion>
          <AccordionItem value='enabled'>
            <AccordionTrigger>Enabled Item</AccordionTrigger>
            <AccordionContent>This item is interactive.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='disabled' disabled>
            <AccordionTrigger>Disabled Item</AccordionTrigger>
            <AccordionContent>This content cannot be expanded.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Full Width</h2>

        <Accordion fullWidth>
          <AccordionItem value='full'>
            <AccordionTrigger>Full Width Accordion</AccordionTrigger>
            <AccordionContent>Expands to fill the available horizontal space.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ====================================================== */}
      {/* Complex Content */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Complex Content</h2>

        <Accordion>
          <AccordionItem value='profile'>
            <AccordionTrigger>User Profile</AccordionTrigger>

            <AccordionContent>
              <div className='space-y-3'>
                <p>This section demonstrates nested layouts inside accordion content.</p>

                <ul className='list-disc space-y-1 pl-5 text-sm'>
                  <li>Profile Information</li>
                  <li>Account Settings</li>
                  <li>Notification Preferences</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </section>
  );
}
