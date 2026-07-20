import { forwardRef } from 'react';

import { cn } from '@/utils';
import { labelVariants } from './labelVariants';

const Label = forwardRef(function Label(
  {
    htmlFor,
    children,

    required = false,
    disabled = false,
    hidden = false,

    size,
    className,

    ...props
  },
  ref,
) {
  if (import.meta.env.DEV && !htmlFor) {
    console.warn('[Label] Labels should include an htmlFor attribute associated with a form control.');
  }

  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        labelVariants({
          size,
          disabled,
          hidden,
        }),
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      {required && (
        <span aria-hidden='true' className='text-(--error)'>
          *
        </span>
      )}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;
