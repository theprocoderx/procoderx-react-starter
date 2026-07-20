import { useState } from 'react';
import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';

function SwitchPlayground() {
  const [notifications, setNotifications] = useState(true);

  const sectionClass =
    'space-y-6 rounded-2xl border border-(--divider) bg-(--surface) p-8 shadow-(--shadow-xs)';
  const headingClass = 'border-b border-(--divider) pb-3 text-2xl font-semibold';
  const optionsWrapperClass = 'flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-16';

  return (
    <section className='mx-auto flex w-full max-w-6xl flex-col gap-16'>
      <header className='space-y-3'>
        <h1 className='text-5xl font-bold tracking-tight'>Switch Component</h1>
        <p className='max-w-2xl text-lg text-(--text-muted)'>
          Playground for manually verifying every Switch component feature before release.
        </p>
      </header>

      {/* Controlled */}
      <section className={sectionClass}>
        <h2 className={headingClass}>Controlled</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Switch
              id='controlled-switch'
              aria-label='Notifications'
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <Label htmlFor='controlled-switch'>Notifications {notifications ? 'Enabled' : 'Disabled'}</Label>
          </div>
        </div>
      </section>

      {/* Uncontrolled */}
      <section className={sectionClass}>
        <h2 className={headingClass}>Uncontrolled</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Switch id='uncontrolled-switch' aria-label='Remember me' defaultChecked />
            <Label htmlFor='uncontrolled-switch'>Remember me</Label>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className={sectionClass}>
        <h2 className={headingClass}>Variants</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Switch id='variant-default' aria-label='Default variant' variant='default' defaultChecked />
            <Label htmlFor='variant-default'>Default</Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='variant-outline' aria-label='Outline variant' variant='outline' defaultChecked />
            <Label htmlFor='variant-outline'>Outline</Label>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className={sectionClass}>
        <h2 className={headingClass}>Sizes</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Switch id='size-sm' aria-label='Small size' size='sm' defaultChecked />
            <Label htmlFor='size-sm'>Small</Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='size-md' aria-label='Medium size' size='md' defaultChecked />
            <Label htmlFor='size-md'>Medium</Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='size-lg' aria-label='Large size' size='lg' defaultChecked />
            <Label htmlFor='size-lg'>Large</Label>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className={sectionClass}>
        <h2 className={headingClass}>Validation</h2>
        <div className={optionsWrapperClass}>
          <div className='flex flex-col items-start gap-2'>
            <Label htmlFor='val-helper'>Helper Text</Label>
            <Switch
              id='val-helper'
              aria-label='Helper text switch'
              helperText='Enable this feature to receive updates.'
            />
          </div>
          <div className='flex flex-col items-start gap-2'>
            <Label htmlFor='val-error'>Error State</Label>
            <Switch
              id='val-error'
              aria-label='Error state switch'
              invalid
              errorMessage='This setting is required.'
              defaultChecked
            />
          </div>
          <div className='flex flex-col items-start gap-2'>
            <Label htmlFor='val-success'>Success State</Label>
            <Switch
              id='val-success'
              aria-label='Success state switch'
              success
              successMessage='Settings saved successfully.'
              defaultChecked
            />
          </div>
        </div>
      </section>

      {/* States */}
      <section className={sectionClass}>
        <h2 className={headingClass}>States</h2>
        <div className={optionsWrapperClass}>
          <div className='flex items-center gap-3'>
            <Switch id='state-disabled' aria-label='Disabled unchecked' disabled />
            <Label htmlFor='state-disabled' disabled>
              Disabled Unchecked
            </Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='state-disabled-checked' aria-label='Disabled checked' disabled defaultChecked />
            <Label htmlFor='state-disabled-checked' disabled>
              Disabled Checked
            </Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='state-required' aria-label='Required switch' required />
            <Label htmlFor='state-required' required>
              Required
            </Label>
          </div>
          <div className='flex items-center gap-3'>
            <Switch id='state-readonly' aria-label='Read only switch' readOnly defaultChecked />
            <Label htmlFor='state-readonly'>Read Only</Label>
          </div>
        </div>
      </section>

      {/* Custom Styling */}
      <section id='custom-styling' className={sectionClass}>
        <h2 className={headingClass}>Custom Styling</h2>
        <div className={optionsWrapperClass}>
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <Label htmlFor='state-custom'>Custom Styled Switch</Label>
            <div className='flex items-center gap-3'>
              <Switch id='state-custom' aria-label='Custom styled switch' className='shadow-(--shadow-md)' />
              <span className='text-sm text-(--text-muted)'>Enable custom styling</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SwitchPlayground;
