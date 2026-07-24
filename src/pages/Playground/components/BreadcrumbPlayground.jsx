import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';

export default function BreadcrumbPlayground() {
  return (
    <div className='space-y-12'>
      {/* ---------------------------------------------------------------- */}
      {/* Basic */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Basic</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Multiple Levels */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Multiple Levels</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/docs'>Documentation</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/docs/components'>Components</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Custom Separator */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Custom Separator</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>/</BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>/</BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage>React Starter Kit</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Ellipsis */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Ellipsis</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbEllipsis />

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/guides'>Guides</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Installation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Blog Example */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Blog Example</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/blog/react'>React</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Building Production UI Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Dashboard Example */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Dashboard Example</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/users'>Users</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>John Doe</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Long Breadcrumb */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Long Breadcrumb</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/documentation'>Documentation</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/documentation/components'>Components</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/documentation/components/navigation'>Navigation</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb Component</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Custom Styling */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Custom Styling</h2>

        <Breadcrumb className='rounded-lg border p-4'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Custom Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Accessibility */}
      {/* ---------------------------------------------------------------- */}

      <section className='space-y-6'>
        <h2 className='text-xl font-semibold'>Accessibility</h2>

        <Breadcrumb aria-label='Blog navigation'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Accessibility</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    </div>
  );
}
