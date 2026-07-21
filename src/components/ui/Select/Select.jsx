import { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/utils';

import { selectVariants } from './selectVariants';

const Select = forwardRef(function Select(
  {
    variant,
    size,
    fullWidth = false,

    invalid = false,
    success = false,

    helperText,
    errorMessage,
    successMessage,

    placeholder,

    id,
    name,
    className,

    children,

    disabled = false,
    required = false,

    value,
    defaultValue,

    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,

    ...props
  },
  ref,
) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  const hasError = Boolean(invalid);
  const hasSuccess = !hasError && Boolean(success);

  const messageId = helperText || hasError || hasSuccess ? `${selectId}-message` : undefined;

  const describedBy = [ariaDescribedBy, messageId].filter(Boolean).join(' ') || undefined;

  // Never pass both value and defaultValue.
  const valueProps =
    value !== undefined
      ? { value }
      : {
          defaultValue: placeholder ? '' : defaultValue,
        };

  return (
    <div className={cn(fullWidth ? 'w-full' : 'w-fit')}>
      <div
        className={selectVariants({
          variant,
          size,
          fullWidth,
          invalid: hasError,
          success: hasSuccess,
        })}
      >
        <select
          ref={ref}
          id={selectId}
          name={name}
          disabled={disabled}
          required={required}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          className={cn('w-full appearance-none bg-transparent pr-10', className)}
          {...valueProps}
          {...props}
        >
          {placeholder && (
            <option value='' disabled hidden>
              {placeholder}
            </option>
          )}

          {children}
        </select>

        <ChevronDown
          size={18}
          aria-hidden='true'
          className='pointer-events-none absolute right-3 text-(--field-placeholder)'
        />
      </div>

      {(helperText || hasError || hasSuccess) && (
        <p
          id={messageId}
          className={cn(
            'mt-1 text-sm',
            hasError && 'text-(--error)',
            hasSuccess && 'text-(--success)',
            !hasError && !hasSuccess && 'text-(--text-muted)',
          )}
        >
          {hasError ? errorMessage : hasSuccess ? successMessage : helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
