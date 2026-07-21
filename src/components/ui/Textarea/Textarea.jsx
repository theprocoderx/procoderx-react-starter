import { forwardRef, useId } from 'react';

import { cn } from '@/utils';

import { textareaVariants } from './textareaVariants';

const Textarea = forwardRef(function Textarea(
  {
    variant,
    size,
    resize = 'vertical',
    fullWidth = false,

    className,

    id,
    name,

    rows = 4,

    disabled = false,
    readOnly = false,
    required = false,

    invalid = false,
    success = false,

    helperText,
    errorMessage,
    successMessage,

    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,

    ...props
  },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const hasError = Boolean(invalid);
  const hasSuccess = !hasError && Boolean(success);

  const hasHelperContent = helperText || errorMessage || successMessage;

  const helperId = hasHelperContent ? `${textareaId}-helper` : undefined;

  const describedBy =
    [
      ariaDescribedBy,

      helperText && !hasError && !hasSuccess ? helperId : null,

      hasError && errorMessage ? helperId : null,

      hasSuccess && successMessage ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className={cn(fullWidth ? 'w-full' : 'w-fit')}>
      <textarea
        ref={ref}
        id={textareaId}
        name={name}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        className={cn(
          textareaVariants({
            variant,
            size,
            resize,
            fullWidth,
            invalid: hasError,
            success: hasSuccess,
          }),
          className,
        )}
        {...props}
      />

      {!hasError && !hasSuccess && helperText && (
        <p id={helperId} className='mt-1 text-sm text-(--field-helper)'>
          {helperText}
        </p>
      )}

      {hasError && errorMessage && (
        <p id={helperId} className='mt-1 text-sm font-medium text-(--field-error)'>
          {errorMessage}
        </p>
      )}

      {hasSuccess && successMessage && (
        <p id={helperId} className='mt-1 text-sm font-medium text-(--field-success)'>
          {successMessage}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
