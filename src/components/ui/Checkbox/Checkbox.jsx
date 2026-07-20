import { forwardRef, useEffect, useId, useRef, useState } from 'react';

import { Check, Minus } from 'lucide-react';

import { cn } from '@/utils/cn';
import { mergeRefs } from '@/utils/mergeRefs';

import { checkboxVariants } from './checkboxVariants';

const Checkbox = forwardRef(function Checkbox(
  {
    variant,
    size = 'md', // Default size fallback
    className,

    id,
    name,
    value,

    checked,
    defaultChecked = false,

    disabled = false,
    readOnly = false,
    required = false,

    invalid = false,
    success = false,

    indeterminate = false,

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
  const checkboxId = id ?? generatedId;

  const internalRef = useRef(null);

  const isControlled = checked !== undefined;

  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const currentChecked = isControlled ? checked : internalChecked;

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const hasError = invalid;
  const hasSuccess = !hasError && success;

  const helperId = helperText || errorMessage || successMessage ? `${checkboxId}-helper` : undefined;

  const describedBy =
    [
      ariaDescribedBy,

      helperText && !hasError && !hasSuccess ? helperId : null,

      hasError && errorMessage ? helperId : null,

      hasSuccess && successMessage ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

  const state = indeterminate ? 'indeterminate' : currentChecked ? 'checked' : 'unchecked';

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
  const checkboxProps = isControlled ? { checked: currentChecked } : { defaultChecked };

  return (
    <div className='inline-flex w-fit flex-col items-start gap-1'>
      <div className='relative inline-flex h-fit w-fit shrink-0'>
        <input
          ref={mergeRefs(ref, internalRef)}
          id={checkboxId}
          name={name}
          value={value}
          type='checkbox'
          {...checkboxProps}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onChange={handleChange}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={describedBy}
          aria-invalid={hasError || undefined}
          data-state={state}
          className={cn(
            checkboxVariants({
              variant,
              size,
              invalid: hasError,
              success: hasSuccess,
            }),
            className,
          )}
          {...props}
        />

        <span
          aria-hidden='true'
          className={cn(
            'pointer-events-none absolute inset-0 flex items-center justify-center text-white',
            'transition-all duration-200',
            state === 'unchecked' ? 'scale-75 opacity-0' : 'scale-100 opacity-100',
          )}
        >
          {indeterminate ? (
            <Minus
              className={cn(
                size === 'sm' && 'size-2.5',
                size === 'md' && 'size-3',
                size === 'lg' && 'size-4',
              )}
            />
          ) : (
            <Check
              className={cn(
                size === 'sm' && 'size-2.5',
                size === 'md' && 'size-3',
                size === 'lg' && 'size-4',
              )}
            />
          )}
        </span>
      </div>

      {/* Messages under the checkbox box */}
      {!hasError && !hasSuccess && helperText && (
        <p id={helperId} className='max-w-50 text-sm wrap-break-word text-(--text-muted)'>
          {helperText}
        </p>
      )}

      {hasError && errorMessage && (
        <p id={helperId} className='max-w-50 text-sm font-medium wrap-break-word text-(--error)'>
          {errorMessage}
        </p>
      )}

      {hasSuccess && successMessage && (
        <p id={helperId} className='max-w-50 text-sm font-medium wrap-break-word text-(--success)'>
          {successMessage}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
