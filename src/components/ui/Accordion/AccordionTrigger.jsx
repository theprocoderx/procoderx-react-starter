import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/utils';
import { useAccordionItemContext } from './hooks/useAccordionItemContext';

const AccordionTrigger = forwardRef(function AccordionTrigger({ className, children, ...props }, ref) {
  const { isOpen, disabled, toggle, triggerId, contentId } = useAccordionItemContext();

  return (
    <h3>
      <button
        ref={ref}
        id={triggerId}
        type='button'
        aria-expanded={isOpen}
        aria-controls={contentId}
        data-slot='accordion-trigger'
        data-state={isOpen ? 'open' : 'closed'}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          [
            'flex w-full items-start justify-between',
            'gap-4',
            'px-4 py-3',

            'text-left',
            'font-medium',

            'transition-[background-color,color]',
            'duration-(--display-duration)',
            'ease-(--display-easing)',

            'enabled:hover:bg-(--display-accordion-hover)',

            'focus-visible:outline-none',
            'focus-visible:ring-2',
            'focus-visible:ring-(--display-focus-ring)',
            'focus-visible:ring-offset-2',
            'focus-visible:ring-offset-(--focus-ring-offset)',

            'disabled:cursor-not-allowed',
            'disabled:opacity-60',
          ].join(' '),
          className,
        )}
        {...props}
      >
        <span className='min-w-0 flex-1'>{children}</span>

        <ChevronDown
          aria-hidden='true'
          className={cn(
            [
              'h-4',
              'w-4',
              'flex-none',

              'text-(--display-text)',

              'transition-transform',
              'duration-(--display-duration)',
              'ease-(--display-easing)',
            ].join(' '),
            isOpen && 'rotate-180',
          )}
        />
      </button>
    </h3>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
