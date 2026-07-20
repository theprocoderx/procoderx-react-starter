import { forwardRef, useId } from 'react';

import { cn } from '@/utils/cn';
import { mergeRefs } from '@/utils/mergeRefs';

import { radioVariants } from './radioVariants';

const Radio = forwardRef(function Radio(
  {
    variant,
    size,
    className,

    id,
    name,
    value,

    checked,
    defaultChecked,

    disabled = false,
    required = false,

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
  const radioId = id ?? generatedId;

  const hasError = invalid;
  const hasSuccess = !hasError && success;

  const helperId = helperText || errorMessage || successMessage ? `${radioId}-helper` : undefined;

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
    <div className='inline-flex flex-col gap-1'>
      <input
        ref={mergeRefs(ref)}
        id={radioId}
        name={name}
        value={value}
        type='radio'
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onChange={onChange}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={describedBy}
        aria-invalid={hasError || undefined}
        className={cn(
          radioVariants({
            variant,
            size,
            invalid: hasError,
            success: hasSuccess,
          }),
          className,
        )}
        {...props}
      />

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

Radio.displayName = 'Radio';

export default Radio;
