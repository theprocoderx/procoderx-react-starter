import { useState } from 'react';

import { Select } from '@/components/ui/Select';

export default function SelectPlayground() {
  const [country, setCountry] = useState('');

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
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Select Component</h1>

        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Select component feature before release.
        </p>
      </header>
      {/* ====================================================== */}
      {/* Placeholder */}
      {/* ====================================================== */}
      <section id='placeholder' className={sectionClass}>
        <h2 className={headingClass}>Placeholder</h2>

        <div className={optionsWrapperClass}>
          <Select placeholder='Choose a country' aria-label='Country'>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
            <option value='uk'>United Kingdom</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}
      <section id='variants' className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>

        <div className={optionsWrapperClass}>
          <Select variant='default' placeholder='Default' aria-label='Default'>
            <option value='india'>India</option>
          </Select>

          <Select variant='filled' placeholder='Filled' aria-label='Filled'>
            <option value='india'>India</option>
          </Select>

          <Select variant='ghost' placeholder='Ghost' aria-label='Ghost'>
            <option value='india'>India</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section id='sizes' className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>

        <div className={optionsWrapperClass}>
          <Select size='sm' placeholder='Small' aria-label='Small'>
            <option value='india'>India</option>
          </Select>

          <Select size='md' placeholder='Medium' aria-label='Medium'>
            <option value='india'>India</option>
          </Select>

          <Select size='lg' placeholder='Large' aria-label='Large'>
            <option value='india'>India</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Validation */}
      {/* ====================================================== */}
      <section id='validation' className={sectionClass}>
        <h2 className={headingClass}>Validation</h2>

        <div className={optionsWrapperClass}>
          <Select
            invalid
            placeholder='Select Country'
            errorMessage='Please select a country.'
            aria-label='Invalid'
          >
            <option value='india'>India</option>
            <option value='usa'>United States</option>
          </Select>

          <Select success defaultValue='india' successMessage='Looks good!' aria-label='Success'>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Helper Text */}
      {/* ====================================================== */}
      <section id='helper-text' className={sectionClass}>
        <h2 className={headingClass}>Helper Text</h2>

        <div className={optionsWrapperClass}>
          <div className='w-full sm:max-w-md'>
            <Select
              placeholder='Choose your country'
              helperText='Select your country of residence.'
              aria-label='Country'
            >
              <option value='india'>India</option>
              <option value='usa'>United States</option>
            </Select>
          </div>
        </div>
      </section>
      {/* ====================================================== */}
      {/* States */}
      {/* ====================================================== */}
      <section id='states' className={sectionClass}>
        <h2 className={headingClass}>States</h2>

        <div className={optionsWrapperClass}>
          <Select disabled defaultValue='india' aria-label='Disabled'>
            <option value='india'>India</option>
          </Select>

          <Select required placeholder='Required' aria-label='Required'>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
          </Select>

          <Select disabled placeholder='Disabled Placeholder' aria-label='Disabled Placeholder'>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
          </Select>
        </div>
      </section>{' '}
      {/* ====================================================== */}
      {/* Disabled Options */}
      {/* ====================================================== */}
      <section id='disabled-options' className={sectionClass}>
        <h2 className={headingClass}>Disabled Options</h2>

        <div className={optionsWrapperClass}>
          <Select defaultValue='india' aria-label='Disabled Options'>
            <option value='india'>India</option>
            <option disabled>Coming Soon</option>
            <option value='usa'>United States</option>
            <option value='uk'>United Kingdom</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Option Groups */}
      {/* ====================================================== */}
      <section id='option-groups' className={sectionClass}>
        <h2 className={headingClass}>Option Groups</h2>

        <div className={optionsWrapperClass}>
          <Select aria-label='Country Groups' placeholder='Select a country'>
            <optgroup label='Asia'>
              <option value='india'>India</option>
              <option value='japan'>Japan</option>
              <option value='china'>China</option>
            </optgroup>

            <optgroup label='Europe'>
              <option value='france'>France</option>
              <option value='germany'>Germany</option>
              <option value='uk'>United Kingdom</option>
            </optgroup>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Long Options */}
      {/* ====================================================== */}
      <section id='long-options' className={sectionClass}>
        <h2 className={headingClass}>Long Options</h2>

        <div className={optionsWrapperClass}>
          <Select aria-label='Long Options' placeholder='Choose a country'>
            <option value='india'>India</option>

            <option value='uk'>United Kingdom of Great Britain and Northern Ireland</option>

            <option value='usa'>United States of America</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}
      <section id='controlled' className={sectionClass}>
        <h2 className={headingClass}>Controlled Select</h2>

        <div className={optionsWrapperClass}>
          <Select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder='Select a country'
            aria-label='Controlled'
          >
            <option value='india'>India</option>
            <option value='usa'>United States</option>
            <option value='uk'>United Kingdom</option>
          </Select>

          <div className='text-sm text-(--text-muted)'>
            <span className='font-medium text-(--text)'>Selected Country:</span> {country || '—'}
          </div>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Multiple */}
      {/* ====================================================== */}
      <section id='multiple' className={sectionClass}>
        <h2 className={headingClass}>Multiple Select</h2>

        <div className={optionsWrapperClass}>
          <Select multiple size={5} aria-label='Multiple Countries'>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
            <option value='uk'>United Kingdom</option>
            <option value='canada'>Canada</option>
            <option value='australia'>Australia</option>
          </Select>
        </div>
      </section>
      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}
      <section id='full-width' className={sectionClass}>
        <h2 className={headingClass}>Full Width</h2>

        <Select fullWidth placeholder='Select a country' aria-label='Full Width'>
          <option value='india'>India</option>
          <option value='usa'>United States</option>
          <option value='uk'>United Kingdom</option>
        </Select>
      </section>
      {/* ====================================================== */}
      {/* Accessibility */}
      {/* ====================================================== */}
      <section id='accessibility' className={sectionClass}>
        <h2 className={headingClass}>Accessibility</h2>

        <div className={optionsWrapperClass}>
          <Select aria-label='Country' placeholder='Accessible select'>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
          </Select>

          <div className='space-y-2'>
            <label id='country-label' className='text-sm font-medium text-(--text)'>
              Country
            </label>

            <Select aria-labelledby='country-label' placeholder='Labelled select'>
              <option value='india'>India</option>
              <option value='usa'>United States</option>
            </Select>
          </div>
        </div>
      </section>
    </section>
  );
}
