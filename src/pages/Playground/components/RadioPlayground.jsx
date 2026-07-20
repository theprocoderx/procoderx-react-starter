import { useState } from 'react';

import { Label } from '@/components/ui/Label';
import { Radio } from '@/components/ui/Radio';

export default function RadioPlayground() {
  const [framework, setFramework] = useState('react');

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-2xl font-semibold';

  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-16';

  return (
    <div className='flex w-full flex-col gap-10 md:gap-16'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}

      <header className='space-y-2 md:space-y-3'>
        {/* 🛠️ Heading size updated to match the responsive 2xl/4xl hierarchy */}
        <h1 className='text-2xl font-bold tracking-tight md:text-4xl'>Radio Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Radio component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>

        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Radio id='basic' />

            <Label htmlFor='basic'>Basic Radio</Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className={optionsWrapperClass}>
          <div className='max-w-sm'>
            <div className='flex items-center gap-3'>
              <Radio id='default' variant='default' name='variant-radio' />

              <Label htmlFor='default'>Default</Label>
            </div>
          </div>

          <div className='max-w-sm'>
            <div className='flex items-center gap-3'>
              <Radio id='outline' variant='outline' name='variant-radio' />

              <Label htmlFor='outline'>Outline</Label>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>

        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Radio id='sm' size='sm' name='size-radio' />
            <Label htmlFor='sm' size='sm'>
              Small
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Radio id='md' size='md' name='size-radio' />
            <Label htmlFor='md' size='md'>
              Medium
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Radio id='lg' size='lg' name='size-radio' />
            <Label htmlFor='lg' size='lg'>
              Large
            </Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Controlled</h2>

        <div className='flex flex-col gap-5'>
          <div className={optionsWrapperClass}>
            <div className='flex items-center gap-3'>
              <Radio
                id='react'
                name='framework'
                value='react'
                checked={framework === 'react'}
                onChange={(e) => setFramework(e.target.value)}
              />
              <Label htmlFor='react'>React</Label>
            </div>

            <div className='flex items-center gap-3'>
              <Radio
                id='vue'
                name='framework'
                value='vue'
                checked={framework === 'vue'}
                onChange={(e) => setFramework(e.target.value)}
              />
              <Label htmlFor='vue'>Vue</Label>
            </div>

            <div className='flex items-center gap-3'>
              <Radio
                id='angular'
                name='framework'
                value='angular'
                checked={framework === 'angular'}
                onChange={(e) => setFramework(e.target.value)}
              />
              <Label htmlFor='angular'>Angular</Label>
            </div>
          </div>

          <p className='text-sm text-(--text-muted)'>
            Selected:
            <span className='ml-1 font-medium text-(--text)'>{framework}</span>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Uncontrolled */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Uncontrolled</h2>

        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Radio id='male' name='gender' defaultChecked />
            <Label htmlFor='male'>Male</Label>
          </div>

          <div className='flex items-center gap-3'>
            <Radio id='female' name='gender' />
            <Label htmlFor='female'>Female</Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Disabled */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Disabled</h2>

        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Radio id='disabled' disabled />
            <Label htmlFor='disabled' disabled>
              Disabled
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Radio id='disabledChecked' disabled checked />

            <Label htmlFor='disabledChecked' disabled>
              Disabled Checked
            </Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Validation */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Validation</h2>

        <div className={optionsWrapperClass}>
          <div className='flex flex-col items-start gap-3'>
            <Label htmlFor='helper'>Helper Text</Label>
            <Radio id='helper' helperText='Choose one option.' name='validation-radio' />
          </div>

          <div className='flex flex-col items-start gap-3'>
            <Label htmlFor='error'>Error</Label>
            <Radio id='error' invalid errorMessage='This field is required.' name='validation-radio' />
          </div>

          <div className='flex flex-col items-start gap-3'>
            <Label htmlFor='success'>Success</Label>
            <Radio id='success' success successMessage='Looks good.' name='validation-radio' />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Required */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Required</h2>

        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Radio id='required' required />
            <Label htmlFor='required' required>
              Accept Selection
            </Label>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Custom Styling */}
      {/* ====================================================== */}

      <section className={sectionClass}>
        <h2 className={headingClass}>Custom Styling</h2>

        <div className={optionsWrapperClass}>
          <Radio id='custom' className='shadow-(--shadow-md)' />

          <Label htmlFor='custom'>Custom Styled Radio</Label>
        </div>
      </section>
    </div>
  );
}
