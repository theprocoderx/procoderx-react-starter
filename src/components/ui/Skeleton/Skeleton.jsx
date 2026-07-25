import { forwardRef } from 'react';

import { cn } from '@/utils';

import { skeletonVariants } from './skeletonVariants';

/* -------------------------------------------------------------------------- */
/* Skeleton                                                                   */
/* -------------------------------------------------------------------------- */

const Skeleton = forwardRef(function Skeleton(
  { className, variant, animation, 'aria-label': ariaLabel = 'Loading', ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden='true'
      aria-label={ariaLabel}
      className={cn(
        skeletonVariants({
          variant,
          animation,
        }),
        className,
      )}
      {...props}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export { Skeleton };

export default Skeleton;
