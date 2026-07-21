import { forwardRef } from 'react';
import { cn } from '@/utils';
import { badgeVariants } from './badgeVariants';

/**
 * Badge
 *
 * Used to display status, labels, categories,
 * counts, tags, and metadata.
 */
const Badge = forwardRef(function Badge(
  {
    children,

    variant,
    size,
    radius,
    elevation = 'none',
    interactive = false,
    fullWidth = false,

    startIcon,
    endIcon,

    className,

    ...props
  },
  ref,
) {
  const classes = cn(
    badgeVariants({
      variant,
      size,
      radius,
      elevation,
      interactive,
      fullWidth,
    }),
    className,
  );

  return (
    <span ref={ref} className={classes} {...props}>
      {startIcon && (
        <span className='inline-flex shrink-0 items-center justify-center' aria-hidden='true'>
          {startIcon}
        </span>
      )}

      {children}

      {endIcon && (
        <span className='inline-flex shrink-0 items-center justify-center' aria-hidden='true'>
          {endIcon}
        </span>
      )}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
