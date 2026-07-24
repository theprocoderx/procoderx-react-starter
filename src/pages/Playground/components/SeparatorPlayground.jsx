import { Separator } from '@/components/ui/Separator';

export default function SeparatorPlayground() {
  return (
    <div className='space-y-12'>
      {/* ---------------------------------------------------------------- */}
      {/* Default */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Default</h2>

        <div className='space-y-4 rounded-lg border p-6'>
          <p>Above the separator</p>

          <Separator />

          <p>Below the separator</p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Insets */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Insets</h2>

        <div className='space-y-8 rounded-lg border p-6'>
          <div className='space-y-2'>
            <p className='font-medium'>None</p>

            <Separator inset='none' />
          </div>

          <div className='space-y-2'>
            <p className='font-medium'>Small</p>

            <Separator inset='sm' />
          </div>

          <div className='space-y-2'>
            <p className='font-medium'>Medium</p>

            <Separator inset='md' />
          </div>

          <div className='space-y-2'>
            <p className='font-medium'>Large</p>

            <Separator inset='lg' />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Horizontal Example */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Article Layout</h2>

        <div className='space-y-4 rounded-lg border p-6'>
          <h3 className='text-lg font-semibold'>Building Production UI Components</h3>

          <Separator />

          <p>
            Separators help organize content into logical sections while maintaining a clean visual hierarchy.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Vertical */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Vertical</h2>

        <div className='rounded-lg border p-6'>
          <div className='flex h-20 items-center justify-center gap-6'>
            <span>Profile</span>

            <Separator orientation='vertical' />

            <span>Settings</span>

            <Separator orientation='vertical' />

            <span>Security</span>

            <Separator orientation='vertical' />

            <span>Billing</span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Decorative */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Decorative Separator</h2>

        <div className='space-y-4 rounded-lg border p-6'>
          <p>Decorative separators improve visual hierarchy and are hidden from assistive technologies.</p>

          <Separator decorative />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Semantic */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Semantic Separator</h2>

        <div className='space-y-4 rounded-lg border p-6'>
          <p>
            Semantic separators expose structure to assistive technologies by using{' '}
            <code>role="separator"</code>.
          </p>

          <Separator decorative={false} />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Custom Styling */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Custom Styling</h2>

        <div className='space-y-8 rounded-lg border p-6'>
          <div className='space-y-2'>
            <p className='font-medium'>Thicker Separator</p>

            <Separator className='h-1' />
          </div>

          <div className='space-y-2'>
            <p className='font-medium'>Primary Accent</p>

            <Separator className='bg-blue-500' />
          </div>

          <div className='flex h-24 items-center justify-center gap-6'>
            <span>Left</span>

            <Separator orientation='vertical' className='bg-blue-500' />

            <span>Right</span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Real World Example */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Settings Page Example</h2>

        <div className='rounded-lg border p-6'>
          <div className='space-y-4'>
            <div>General</div>

            <Separator />

            <div>Notifications</div>

            <Separator />

            <div>Privacy</div>

            <Separator />

            <div>Security</div>
          </div>
        </div>
      </section>
    </div>
  );
}
