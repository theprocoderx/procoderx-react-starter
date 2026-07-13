import { useState } from 'react';
import { Eye, Lock, Mail, Phone, Search, User } from 'lucide-react';

import { Input } from '@/components/ui/Input';

export default function InputDemo() {
  const [email, setEmail] = useState('');

  return (
    <main className='mx-auto max-w-6xl space-y-12 p-8'>
      <header className='space-y-2'>
        <h1 className='text-4xl font-bold'>Input Component</h1>

        <p className='text-[var(--text-muted)]'>
          Playground for manually verifying every Input component feature before release.
        </p>
      </header>

      {/* ====================================================== */}
      {/* Basic */}
      {/* ====================================================== */}

      <section id='basic' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Basic</h2>

        <Input placeholder='Enter your name' />
      </section>

      {/* ====================================================== */}
      {/* Variants */}
      {/* ====================================================== */}

      <section id='variants' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Variants</h2>

        <div className='grid gap-4 md:grid-cols-3'>
          <Input variant='default' placeholder='Default' />

          <Input variant='filled' placeholder='Filled' />

          <Input variant='ghost' placeholder='Ghost' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Sizes */}
      {/* ====================================================== */}

      <section id='sizes' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Sizes</h2>

        <div className='space-y-4'>
          <Input size='sm' placeholder='Small' />

          <Input size='md' placeholder='Medium' />

          <Input size='lg' placeholder='Large' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Icons */}
      {/* ====================================================== */}

      <section id='icons' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Icons</h2>

        <div className='space-y-4'>
          <Input startIcon={<Mail />} type='email' placeholder='Email Address' />

          <Input endIcon={<Eye />} type='password' placeholder='Password' />

          <Input startIcon={<Search />} endIcon={<Eye />} type='search' placeholder='Search...' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Validation */}
      {/* ====================================================== */}

      <section id='validation' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Validation</h2>

        <div className='space-y-4'>
          <Input type='email' placeholder='Email Address' invalid errorMessage='Email is required.' />

          <Input type='email' defaultValue='john@example.com' success successMessage='Looks good!' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Helper Text */}
      {/* ====================================================== */}

      <section id='helper-text' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Helper Text</h2>

        <Input type='email' placeholder='john@example.com' helperText="We'll never share your email." />
      </section>

      {/* ====================================================== */}
      {/* States */}
      {/* ====================================================== */}

      <section id='states' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>States</h2>

        <div className='space-y-4'>
          <Input disabled placeholder='Disabled' />

          <Input readOnly defaultValue='Read Only' />

          <Input required placeholder='Required Field' />
        </div>
      </section>

      {/* ====================================================== */}
      {/* Full Width */}
      {/* ====================================================== */}

      <section id='full-width' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Full Width</h2>

        <Input fullWidth placeholder='Full Width Input' />
      </section>

      {/* ====================================================== */}
      {/* Controlled */}
      {/* ====================================================== */}

      <section id='controlled' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Controlled Input</h2>

        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Type your email'
        />

        <p className='text-sm text-[var(--text-muted)]'>
          Current value: <span className='font-medium'>{email || '—'}</span>
        </p>
      </section>

      {/* ====================================================== */}
      {/* Uncontrolled */}
      {/* ====================================================== */}

      <section id='uncontrolled' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Uncontrolled Input</h2>

        <Input defaultValue='John Doe' />
      </section>

      {/* ====================================================== */}
      {/* Input Types */}
      {/* ====================================================== */}

      <section id='input-types' className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Input Types</h2>

        <div className='grid gap-4 md:grid-cols-2'>
          <Input type='text' startIcon={<User />} placeholder='Username' />

          <Input type='email' startIcon={<Mail />} placeholder='Email' />

          <Input type='password' startIcon={<Lock />} placeholder='Password' />

          <Input type='search' startIcon={<Search />} placeholder='Search' />

          <Input type='tel' startIcon={<Phone />} placeholder='Phone Number' />
        </div>
      </section>
    </main>
  );
}
