import { useState } from 'react';

import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';

export default function CheckboxPlayground() {
  const [checked, setChecked] = useState(false);

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
        <h1 className='text-2xl font-bold tracking-tight md:text-4xl'>Checkbox Component</h1>
        <p className='max-w-6xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Checkbox component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}
      <section id='basic' className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Checkbox id='basic' />
            <Label htmlFor='basic'>Basic Checkbox</Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section id='sizes' className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Checkbox id='sm' size='sm' />
            <Label htmlFor='sm'>Small</Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox id='md' size='md' />
            <Label htmlFor='md'>Medium</Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox id='lg' size='lg' />
            <Label htmlFor='lg'>Large</Label>
          </div>
        </div>
      </section>
      {/* ====================================================== */}
      {/* States */}
      {/* ====================================================== */}
      <section id='states' className={sectionClass}>
        <h2 className={headingClass}>States</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Checkbox id='checked' defaultChecked />
            <Label htmlFor='checked'>Checked</Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox id='disabled' disabled />
            <Label htmlFor='disabled'>Disabled</Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox id='disabled-checked' disabled defaultChecked />
            <Label htmlFor='disabled-checked'>Disabled Checked</Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox id='required' required />
            <Label htmlFor='required' required>
              Required
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox id='indeterminate' indeterminate />
            <Label htmlFor='indeterminate'>Indeterminate</Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Validation */}
      {/* ====================================================== */}
      <section id='validation' className={sectionClass}>
        <h2 className={headingClass}>Validation</h2>
        <div className={optionsWrapperClass}>
          <div className='flex flex-col gap-4'>
            <Label htmlFor='error'>Error State</Label>
            <Checkbox id='error' invalid errorMessage='You must accept the terms.' />
          </div>
          <div className='flex flex-col gap-4'>
            <Label htmlFor='success'>Success State</Label>
            <Checkbox id='success' success successMessage='Accepted successfully.' defaultChecked />
          </div>

          <div className='flex flex-col gap-4'>
            <Label htmlFor='helper'>Helper Text</Label>
            <Checkbox id='helper' helperText='Accept to continue.' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}
      <section id='controlled' className={sectionClass}>
        <h2 className={headingClass}>Controlled</h2>

        {/* optionsWrapperClass ka perfect use case */}
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Checkbox id='controlled' checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <Label htmlFor='controlled'>Controlled Checkbox</Label>
          </div>

          {/* Live State Tracker: Jo dynamic value show karega bina label text ko chede */}
          <p className='text-sm text-(--text-muted)'>
            State:
            <span className='ml-1 font-medium text-(--text)'>{checked ? 'true' : 'false'}</span>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Uncontrolled */}
      {/* ====================================================== */}
      <section id='uncontrolled' className={sectionClass}>
        <h2 className={headingClass}>Uncontrolled</h2>

        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Checkbox id='uncontrolled' defaultChecked />
            <Label htmlFor='uncontrolled'>Default Checked</Label>
          </div>
        </div>
      </section>
    </section>
  );
}
