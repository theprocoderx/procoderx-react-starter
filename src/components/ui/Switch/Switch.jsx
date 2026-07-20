import { forwardRef, useId, useRef, useState } from 'react';

import { cn } from '@/utils/cn';
import { mergeRefs } from '@/utils/mergeRefs';

import { switchVariants } from './switchVariants';

const thumbSizes = {
  sm: {
    size: 'size-4',
    on: 'translate-x-4',
    off: 'translate-x-0',
  },

  md: {
    size: 'size-5',
    on: 'translate-x-5',
    off: 'translate-x-0',
  },

  lg: {
    size: 'size-6',
    on: 'translate-x-7',
    off: 'translate-x-0',
  },
};

const Switch = forwardRef(function Switch(
  {
    variant,
    size = 'md',
    className,

    id,
    name,
    value,

    checked,
    defaultChecked = false,

    disabled = false,
    required = false,
    readOnly = false,

    invalid = false,
    success = false,

    helperText,
    errorMessage,
    successMessage,

    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,

    onChange,

    ...props
  },
  ref,
) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  const internalRef = useRef(null);

  // -----------------------------
  // Controlled / Uncontrolled
  // -----------------------------

  const isControlled = checked !== undefined;

  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isChecked = isControlled ? checked : internalChecked;

  // -----------------------------
  // Validation State
  // -----------------------------

  const hasError = invalid;
  const hasSuccess = !hasError && success;

  // -----------------------------
  // Helper IDs
  // -----------------------------

  const helperId = helperText || errorMessage || successMessage ? `${switchId}-helper` : undefined;

  const describedBy =
    [
      ariaDescribedBy,

      helperText && !hasError && !hasSuccess ? helperId : null,

      hasError && errorMessage ? helperId : null,

      hasSuccess && successMessage ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

  // -----------------------------
  // Accessibility Warning
  // -----------------------------

  if (import.meta.env.DEV && !ariaLabel && !ariaLabelledBy) {
    console.warn(
      '[Switch] Provide an accessible name using a Label component, aria-label, or aria-labelledby.',
    );
  }

  // -----------------------------
  // Change Handler
  // -----------------------------

  const handleChange = (event) => {
    if (readOnly) {
      event.preventDefault();
      return;
    }

    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }

    onChange?.(event);
  };

  // -----------------------------
  // Thumb Config
  // -----------------------------
  const thumb = thumbSizes[size] ?? thumbSizes.md;

  return (
    <div className='inline-flex flex-col gap-1'>
      <label
        htmlFor={switchId}
        className={cn('inline-flex w-fit items-center', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}
      >
        <input
          ref={mergeRefs(ref, internalRef)}
          id={switchId}
          name={name}
          value={value}
          type='checkbox'
          role='switch'
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={describedBy}
          aria-invalid={hasError || undefined}
          aria-checked={isChecked}
          data-state={isChecked ? 'checked' : 'unchecked'}
          className='peer sr-only'
          onChange={handleChange}
          {...props}
        />

        <span
          aria-hidden='true'
          data-state={isChecked ? 'checked' : 'unchecked'}
          className={cn(
            switchVariants({
              variant,
              size,
              invalid: hasError,
              success: hasSuccess,
            }),
            className,
          )}
        >
          <span
            className={cn(
              'block rounded-full border shadow-sm',
              'transition-all duration-150 ease-out active:scale-[0.97]',
              thumb.size,
              isChecked ? thumb.on : thumb.off,
              isChecked
                ? 'border-(--switch-thumb-border-checked) bg-(--switch-thumb-bg-checked)'
                : 'border-(--switch-thumb-border) bg-(--switch-thumb-bg)',
            )}
          />
        </span>
      </label>

      {!hasError && !hasSuccess && helperText && (
        <p id={helperId} className='text-sm text-(--text-muted)'>
          {helperText}
        </p>
      )}

      {hasError && errorMessage && (
        <p id={helperId} className='text-sm font-medium text-(--error)'>
          {errorMessage}
        </p>
      )}

      {hasSuccess && successMessage && (
        <p id={helperId} className='text-sm font-medium text-(--success)'>
          {successMessage}
        </p>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
