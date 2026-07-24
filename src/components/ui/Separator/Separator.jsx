import { forwardRef } from 'react';

import { cn } from '@/utils';

import { separatorVariants } from './separatorVariants';

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

const Separator = forwardRef(function Separator(
  { className, orientation = 'horizontal', inset, decorative = true, ...props },
  ref,
) {
  const accessibilityProps = decorative
    ? {
        'aria-hidden': true,
      }
    : {
        role: 'separator',
        'aria-orientation': orientation,
      };

  return (
    <div
      ref={ref}
      {...accessibilityProps}
      className={cn(
        separatorVariants({
          orientation,
          inset,
        }),
        className,
      )}
      {...props}
    />
  );
});

Separator.displayName = 'Separator';

export { Separator };

export default Separator;
