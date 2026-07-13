import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export default function LabelPlayground() {
  return (
    <main className='mx-auto max-w-6xl space-y-12 p-8'>
      <header>
        <h1 className='text-4xl font-bold'>Label Component</h1>

        <p className='mt-2 text-[var(--text-muted)]'>
          Playground for manually verifying every Label feature.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Basic</h2>

        <Label htmlFor='basic'>Full Name</Label>

        <Input id='basic' placeholder='John Doe' />
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Sizes</h2>

        <div className='space-y-5'>
          <div className='space-y-2'>
            <Label htmlFor='sm' size='sm'>
              Small Label
            </Label>

            <Input id='sm' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='md' size='md'>
              Medium Label
            </Label>

            <Input id='md' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='lg' size='lg'>
              Large Label
            </Label>

            <Input id='lg' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Required */}
      {/* ====================================================== */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Required</h2>

        <div className='space-y-2'>
          <Label htmlFor='email' required>
            Email Address
          </Label>

          <Input id='email' type='email' required placeholder='john@example.com' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Disabled */}
      {/* ====================================================== */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Disabled</h2>

        <div className='space-y-2'>
          <Label htmlFor='disabled' disabled>
            Username
          </Label>

          <Input id='disabled' disabled defaultValue='procoderx' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Multiple Labels */}
      {/* ====================================================== */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Form Example</h2>

        <div className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-2'>
            <Label htmlFor='firstName'>First Name</Label>

            <Input id='firstName' placeholder='John' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='lastName'>Last Name</Label>

            <Input id='lastName' placeholder='Doe' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='password' required>
              Password
            </Label>

            <Input id='password' type='password' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='phone'>Phone</Label>

            <Input id='phone' type='tel' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Custom Styling */}
      {/* ====================================================== */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Custom Class</h2>

        <div className='space-y-2'>
          <Label htmlFor='custom' className='text-(--primary)'>
            Custom Color Label
          </Label>

          <Input id='custom' />
        </div>
      </section>
    </main>
  );
}
