import { forwardRef } from 'react';

import { cn } from '@/utils';
import { useAccordionItemContext } from './hooks/useAccordionItemContext';

const AccordionContent = forwardRef(function AccordionContent({ className, children, ...props }, ref) {
  const { isOpen, triggerId, contentId } = useAccordionItemContext();

  return (
    <div
      ref={ref}
      id={contentId}
      role='region'
      aria-labelledby={triggerId}
      aria-hidden={!isOpen}
      data-slot='accordion-content'
      data-state={isOpen ? 'open' : 'closed'}
      hidden={!isOpen}
      className={cn(
        [
          'overflow-hidden',

          'px-4',
          'pb-4',

          'text-[var(--display-text)]',

          'transition-[height,opacity]',
          'duration-[var(--display-duration)]',
          'ease-[var(--display-easing)]',
        ].join(' '),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
