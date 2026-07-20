import { useState } from 'react';
import { Eye, Lock, Mail, Phone, Search, User } from 'lucide-react';

import { Input } from '@/components/ui/Input';

export default function InputPlayground() {
  const [email, setEmail] = useState('');

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-5 md:p-8 shadow-(--shadow-xs)';

  const headingClass = 'border-b border-(--divider) pb-3 text-lg md:text-2xl font-semibold tracking-tight';

  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-16';

  return (
    // Responsive outer layout padding
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:gap-16 md:px-6 md:py-10'>
      {/* ====================================================== */}
      {/* Header */}
      {/* ====================================================== */}
      <header className='space-y-2 md:space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>Input Component</h1>
        <p className='max-w-2xl text-base text-(--text-muted) md:text-lg'>
          Playground for manually verifying every Input component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}
      <section id='basic' className={sectionClass}>
        <h2 className={headingClass}>Basic</h2>
        <div className={optionsWrapperClass}>
          <Input placeholder='Enter your name' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}
      <section id='variants' className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>
        {/* Mobile par ek ke neeche ek, tablets par grid */}
        <div className={optionsWrapperClass}>
          <Input variant='default' placeholder='Default' />
          <Input variant='filled' placeholder='Filled' />
          <Input variant='ghost' placeholder='Ghost' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}
      <section id='sizes' className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>
        <div className={optionsWrapperClass}>
          <Input size='sm' placeholder='Small' />
          <Input size='md' placeholder='Medium' />
          <Input size='lg' placeholder='Large' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Icons */}
      {/* ====================================================== */}
      <section id='icons' className={sectionClass}>
        <h2 className={headingClass}>Icons</h2>
        <div className={optionsWrapperClass}>
          <Input startIcon={<Mail size={18} />} type='email' placeholder='Email Address' />
          <Input endIcon={<Eye size={18} />} type='password' placeholder='Password' />
          <Input
            startIcon={<Search size={18} />}
            endIcon={<Eye size={18} />}
            type='search'
            placeholder='Search...'
            className='sm:col-span-2' // Desktop par full row le lega taaki symmetry bani rahe
          />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Validation */}
      {/* ====================================================== */}
      <section id='validation' className={sectionClass}>
        <h2 className={headingClass}>Validation</h2>
        <div className={optionsWrapperClass}>
          <Input type='email' placeholder='Email Address' invalid errorMessage='Email is required.' />
          <Input type='email' defaultValue='john@example.com' success successMessage='Looks good!' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Helper Text */}
      {/* ====================================================== */}
      <section id='helper-text' className={sectionClass}>
        <h2 className={headingClass}>Helper Text</h2>
        <div className={optionsWrapperClass}>
          <div className='w-full sm:max-w-md'>
            <Input type='email' placeholder='john@example.com' helperText="We'll never share your email." />
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* States */}
      {/* ====================================================== */}
      <section id='states' className={sectionClass}>
        <h2 className={headingClass}>States</h2>
        <div className={optionsWrapperClass}>
          <Input disabled placeholder='Disabled' />
          <Input readOnly defaultValue='Read Only' />
          <Input required placeholder='Required Field' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}
      <section id='full-width' className={sectionClass}>
        <h2 className={headingClass}>Full Width</h2>
        <Input fullWidth placeholder='Full Width Input' />
      </section>

      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}
      <section id='controlled' className={sectionClass}>
        <h2 className={headingClass}>Controlled Input</h2>
        <div className={optionsWrapperClass}>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Type your email'
          />
          <p className='text-sm text-(--text-muted)'>
            Current value: <span className='font-medium text-(--text)'>{email || '—'}</span>
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Uncontrolled */}
      {/* ====================================================== */}
      <section id='uncontrolled' className={sectionClass}>
        <h2 className={headingClass}>Uncontrolled Input</h2>
        <div className={optionsWrapperClass}>
          <Input defaultValue='John Doe' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Input Types */}
      {/* ====================================================== */}
      <section id='input-types' className={sectionClass}>
        <h2 className={headingClass}>Input Types</h2>
        <div className={optionsWrapperClass}>
          <Input type='text' startIcon={<User size={18} />} placeholder='Username' />
          <Input type='email' startIcon={<Mail size={18} />} placeholder='Email' />
          <Input type='password' startIcon={<Lock size={18} />} placeholder='Password' />
          <Input type='search' startIcon={<Search size={18} />} placeholder='Search' />
          <Input
            type='tel'
            startIcon={<Phone size={18} />}
            placeholder='Phone Number'
            className='sm:col-span-2'
          />
        </div>
      </section>
    </section>
  );
}
