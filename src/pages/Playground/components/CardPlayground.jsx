import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

export default function CardPlayground() {
  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg md:text-2xl font-semibold tracking-tight';

  const optionsWrapperClass = 'grid gap-6 md:grid-cols-2 xl:grid-cols-3';

  return (
    // Responsive container padding matching Button playground
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}
      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Card Component</h1>
        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Card component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}
      <section aria-labelledby='variants-heading' className={sectionClass}>
        <h2 id='variants-heading' className={headingClass}>
          Variants
        </h2>
        <div className={optionsWrapperClass}>
          {['default', 'outlined', 'filled', 'elevated', 'ghost'].map((variant) => (
            <Card key={variant} variant={variant}>
              <CardHeader>
                <CardTitle className='capitalize'>{variant}</CardTitle>
                <CardDescription>Production ready Card component.</CardDescription>
              </CardHeader>

              <CardContent>
                This card demonstrates the <strong>{variant}</strong> variant.
              </CardContent>

              <CardFooter>
                <Button size='sm'>Action</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section aria-labelledby='sizes-heading' className={sectionClass}>
        <h2 id='sizes-heading' className={headingClass}>
          Sizes
        </h2>
        <div className='grid gap-6 md:grid-cols-3'>
          {['sm', 'md', 'lg'].map((size) => (
            <Card key={size} size={size}>
              <CardHeader>
                <CardTitle>{size.toUpperCase()}</CardTitle>
                <CardDescription>Card size example.</CardDescription>
              </CardHeader>

              <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* Radius */}
      {/* ====================================================== */}
      <section aria-labelledby='radius-heading' className={sectionClass}>
        <h2 id='radius-heading' className={headingClass}>
          Radius
        </h2>
        <div className='grid gap-6 md:grid-cols-3'>
          {['sm', 'md', 'lg'].map((radius) => (
            <Card key={radius} radius={radius}>
              <CardHeader>
                <CardTitle className='uppercase'>{radius}</CardTitle>
                <CardDescription>Radius demonstration.</CardDescription>
              </CardHeader>

              <CardContent>Border radius uses shared display tokens.</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* Interactive */}
      {/* ====================================================== */}
      <section aria-labelledby='interactive-heading' className={sectionClass}>
        <h2 id='interactive-heading' className={headingClass}>
          Interactive
        </h2>
        <div>
          <Card interactive className='max-w-md'>
            <CardHeader>
              <CardTitle>Hover Me</CardTitle>
              <CardDescription>Interactive cards have hover effects.</CardDescription>
            </CardHeader>

            <CardContent>Move the cursor over this card.</CardContent>
          </Card>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}
      <section aria-labelledby='fullwidth-heading' className={sectionClass}>
        <h2 id='fullwidth-heading' className={headingClass}>
          Full Width
        </h2>
        <div>
          <Card fullWidth>
            <CardHeader>
              <CardTitle>Full Width Card</CardTitle>
              <CardDescription>Occupies the entire available width.</CardDescription>
            </CardHeader>

            <CardContent>Useful for forms, dashboards and tables.</CardContent>

            <CardFooter>
              <Button>Save</Button>
              <Button variant='outline'>Cancel</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Long Content */}
      {/* ====================================================== */}
      <section aria-labelledby='longcontent-heading' className={sectionClass}>
        <h2 id='longcontent-heading' className={headingClass}>
          Long Content
        </h2>
        <div>
          <Card className='max-w-2xl'>
            <CardHeader>
              <CardTitle>
                Extremely Long Title Demonstrating Proper Text Wrapping Inside the Card Component
              </CardTitle>
              <CardDescription>
                The description should wrap naturally without overflowing its parent container.
              </CardDescription>
            </CardHeader>

            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae doloribus ipsum,
              exercitationem provident reprehenderit dolorem minima deserunt distinctio molestiae aspernatur
              officiis temporibus quidem laboriosam vero recusandae aliquam, voluptate quaerat.
            </CardContent>

            <CardFooter>
              <Button>Primary</Button>
              <Button variant='outline'>Secondary</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Media Card */}
      {/* ====================================================== */}
      <section aria-labelledby='media-heading' className={sectionClass}>
        <h2 id='media-heading' className={headingClass}>
          Media Card
        </h2>
        <div>
          <Card className='max-w-sm overflow-hidden p-0'>
            <img src='https://picsum.photos/600/300' alt='Sample' className='h-48 w-full object-cover' />
            <div className='space-y-4 p-5 md:p-6'>
              <CardHeader className='p-0'>
                <CardTitle>Card With Image</CardTitle>
                <CardDescription>Demonstrates media support.</CardDescription>
              </CardHeader>

              <CardContent className='p-0'>
                Images respect the card radius because of overflow-hidden.
              </CardContent>

              <CardFooter className='p-0 pt-2'>
                <Button size='sm'>Learn More</Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      </section>
    </section>
  );
}
