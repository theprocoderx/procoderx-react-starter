import { Skeleton } from '@/components/ui/Skeleton';

export default function SkeletonPlayground() {
  return (
    <div className='space-y-14'>
      {/* ---------------------------------------------------------------- */}
      {/* Basic */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Basic</h2>

        <Skeleton className='h-5 w-64' />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Variants */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Variants</h2>

        <div className='flex flex-wrap items-center gap-8'>
          <div className='space-y-2'>
            <p className='text-sm'>Default</p>

            <Skeleton variant='default' className='h-16 w-32' />
          </div>

          <div className='space-y-2'>
            <p className='text-sm'>Rounded</p>

            <Skeleton variant='rounded' className='h-16 w-32' />
          </div>

          <div className='space-y-2'>
            <p className='text-sm'>Circular</p>

            <Skeleton variant='circular' className='h-16 w-16' />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Animation */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Animation</h2>

        <div className='space-y-4'>
          <div>
            <p className='mb-2 text-sm'>Pulse</p>

            <Skeleton animation='pulse' className='h-5 w-60' />
          </div>

          <div>
            <p className='mb-2 text-sm'>Wave</p>

            <Skeleton animation='wave' className='h-5 w-60' />
          </div>

          <div>
            <p className='mb-2 text-sm'>None</p>

            <Skeleton animation='none' className='h-5 w-60' />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Avatar */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Avatar</h2>

        <div className='flex items-center gap-4'>
          <Skeleton variant='circular' className='h-14 w-14' />

          <div className='space-y-3'>
            <Skeleton className='h-4 w-40' />

            <Skeleton className='h-4 w-28' />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Card */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Card</h2>

        <div className='max-w-md rounded-xl border p-6'>
          <div className='space-y-4'>
            <Skeleton className='h-6 w-44' />

            <Skeleton className='h-4 w-full' />

            <Skeleton className='h-4 w-5/6' />

            <Skeleton className='h-4 w-2/3' />

            <Skeleton className='mt-6 h-10 w-32 rounded-md' />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Blog Article */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Blog Article</h2>

        <div className='space-y-4'>
          <Skeleton className='h-56 w-full rounded-xl' />

          <Skeleton className='h-8 w-2/3' />

          <Skeleton className='h-4 w-full' />

          <Skeleton className='h-4 w-full' />

          <Skeleton className='h-4 w-5/6' />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Dashboard Widget */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Dashboard Widget</h2>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='rounded-xl border p-5'>
              <div className='space-y-4'>
                <Skeleton className='h-4 w-24' />

                <Skeleton className='h-8 w-20' />

                <Skeleton className='h-24 w-full rounded-lg' />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Table */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Table Rows</h2>

        <div className='rounded-xl border'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='flex items-center gap-6 border-b p-4 last:border-b-0'>
              <Skeleton variant='circular' className='h-10 w-10' />

              <Skeleton className='h-4 flex-1' />

              <Skeleton className='h-4 w-28' />

              <Skeleton className='h-8 w-20 rounded-md' />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
