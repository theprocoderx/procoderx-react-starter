import { forwardRef } from 'react';

import { cn } from '@/utils';

import {
  cardContentVariants,
  cardDescriptionVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardVariants,
} from './cardVariants';

/* -------------------------------------------------------------------------- */
/* Card                                                                       */
/* -------------------------------------------------------------------------- */

const Card = forwardRef(function Card(
  { className, variant, size, radius, fullWidth, interactive, ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          size,
          radius,
          fullWidth,
          interactive,
        }),
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

/* -------------------------------------------------------------------------- */
/* Card Header                                                                */
/* -------------------------------------------------------------------------- */

const CardHeader = forwardRef(function CardHeader({ className, ...props }, ref) {
  return <header ref={ref} className={cn(cardHeaderVariants(), className)} {...props} />;
});

CardHeader.displayName = 'CardHeader';

/* -------------------------------------------------------------------------- */
/* Card Title                                                                 */
/* -------------------------------------------------------------------------- */

const CardTitle = forwardRef(function CardTitle({ as: Component = 'h2', className, ...props }, ref) {
  return <Component ref={ref} className={cn(cardTitleVariants(), className)} {...props} />;
});

CardTitle.displayName = 'CardTitle';

/* -------------------------------------------------------------------------- */
/* Card Description                                                           */
/* -------------------------------------------------------------------------- */

const CardDescription = forwardRef(function CardDescription(
  { as: Component = 'p', className, ...props },
  ref,
) {
  return <Component ref={ref} className={cn(cardDescriptionVariants(), className)} {...props} />;
});

CardDescription.displayName = 'CardDescription';

/* -------------------------------------------------------------------------- */
/* Card Content                                                               */
/* -------------------------------------------------------------------------- */

const CardContent = forwardRef(function CardContent({ className, ...props }, ref) {
  return <div ref={ref} className={cn(cardContentVariants(), className)} {...props} />;
});

CardContent.displayName = 'CardContent';

/* -------------------------------------------------------------------------- */
/* Card Footer                                                                */
/* -------------------------------------------------------------------------- */

const CardFooter = forwardRef(function CardFooter({ className, ...props }, ref) {
  return <footer ref={ref} className={cn(cardFooterVariants(), className)} {...props} />;
});

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

export default Card;
