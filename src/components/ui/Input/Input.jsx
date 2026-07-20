import { forwardRef, useId } from 'react';

import { cn } from '@/utils';

import { inputVariants } from './inputVariants';

const Input = forwardRef(function Input(
  {
    type = 'text',

    variant,
    size,
    fullWidth = false,
    className,

    id,
    name,

    disabled = false,
    readOnly = false,
    required = false,

    invalid = false,
    success = false,

    helperText,
    errorMessage,
    successMessage,

    startIcon,
    endIcon,

    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,

    ...props
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const hasError = Boolean(invalid);
  const hasSuccess = !hasError && Boolean(success);

  const hasHelperContent = helperText || errorMessage || successMessage;

  const helperId = hasHelperContent ? `${inputId}-helper` : undefined;

  const describedBy =
    [
      ariaDescribedBy,

      helperText && !hasError && !hasSuccess ? helperId : null,

      hasError && errorMessage ? helperId : null,

      hasSuccess && successMessage ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

  // if (import.meta.env.DEV && !ariaLabel && !ariaLabelledBy) {
  //   console.warn(
  //     '[Input] Provide an accessible name using a Label component, aria-label, or aria-labelledby.',
  //   );
  // }

  return (
    <div className={cn(fullWidth ? 'w-full' : 'w-fit')}>
      <div
        className={cn(
          inputVariants({
            variant,
            size,
            fullWidth,
            invalid: hasError,
            success: hasSuccess,
          }),
        )}
      >
        {startIcon && (
          <span aria-hidden='true' className='flex shrink-0 items-center justify-center text-(--text-muted)'>
            {startIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full min-w-0 bg-transparent',
            'text-(--text)',
            'placeholder:text(--text-muted)',
            'outline-none',
            'disabled:cursor-not-allowed',
            className,
          )}
          {...props}
        />

        {endIcon && (
          <span aria-hidden='true' className='flex shrink-0 items-center justify-center text-(--text-muted)'>
            {endIcon}
          </span>
        )}
      </div>

      {!hasError && !hasSuccess && helperText && (
        <p id={helperId} className='mt-1 text-sm text-(--text-muted)'>
          {helperText}
        </p>
      )}

      {hasError && errorMessage && (
        <p id={helperId} className='mt-1 text-sm font-medium text-(--error)'>
          {errorMessage}
        </p>
      )}

      {hasSuccess && successMessage && (
        <p id={helperId} className='mt-1 text-sm font-medium text-(--success)'>
          {successMessage}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
