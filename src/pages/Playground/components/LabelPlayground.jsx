import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export default function LabelPlayground() {
  const [email, setEmail] = useState('');

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-xl md:text-2xl font-semibold';

  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-16';

  return (
    // Responsive outer layout layout
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}
      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Label Component</h1>
        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Label component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}
      <section id='basic' className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>

        <div className={optionsWrapperClass}>
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <Label htmlFor='basic'>Full Name</Label>
            <Input id='basic' placeholder='John Doe' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section id='sizes' className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>
        <div className={optionsWrapperClass}>
          <div className='space-y-2'>
            <Label htmlFor='sml' size='sm'>
              Small Label
            </Label>
            <Input id='sml' placeholder='Small size field' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='mdl' size='md'>
              Medium Label
            </Label>
            <Input id='mdl' placeholder='Medium size field' />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='lgl' size='lg'>
              Large Label
            </Label>
            <Input id='lgl' placeholder='Large size field' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Required */}
      {/* ====================================================== */}
      <section id='required' className={sectionClass}>
        <h2 className={headingClass}>Required</h2>

        <div className={optionsWrapperClass}>
          {/* Label aur Input ka grouped container */}
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <Label htmlFor='email-required' required>
              Email Address
            </Label>
            <Input id='email-required' type='email' required placeholder='john@example.com' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Disabled */}
      {/* ====================================================== */}
      <section id='disabled' className={sectionClass}>
        <h2 className={headingClass}>Disabled</h2>

        <div className={optionsWrapperClass}>
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <Label htmlFor='disabled' disabled>
              Username
            </Label>
            <Input id='disabled' disabled defaultValue='procoderx' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Muted */}
      {/* ====================================================== */}
      <section id='muted' className={sectionClass}>
        <h2 className={headingClass}>Muted</h2>
        <div className={{ optionsWrapperClass }}>
          <Label htmlFor='muted' muted>
            Optional Field
          </Label>
          <Input id='muted' placeholder='Optional value' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Controlled  */}
      {/* ====================================================== */}
      <section id='controlled' className={sectionClass}>
        <h2 className={headingClass}>Controlled Input</h2>

        <div className={optionsWrapperClass}>
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <Label htmlFor='controlled-email'>Email Sync</Label>
            <Input
              id='controlled-email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Type your email'
            />
          </div>

          {/* Current value display */}
          <p className='text-sm text-(--text-muted)'>
            Current value: <span className='font-medium text-(--text)'>{email || '—'}</span>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Form Example */}
      {/* ====================================================== */}
      <section id='form-example' className={sectionClass}>
        <h2 className={headingClass}>Form Example</h2>
        <div className={optionsWrapperClass}>
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
            <Input id='phone' type='tel' placeholder='+1 (555) 000-0000' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Custom Styling */}
      {/* ====================================================== */}
      <section id='custom-styling' className={sectionClass}>
        <h2 className={headingClass}>Custom Styling</h2>

        <div className={optionsWrapperClass}>
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <Label htmlFor='custom' className='text-(--primary)'>
              Custom Color Label
            </Label>
            <Input id='custom' placeholder='Custom color field' />
          </div>
        </div>
      </section>
    </section>
  );
}
