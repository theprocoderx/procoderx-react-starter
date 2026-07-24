import { forwardRef, useCallback, useId, useMemo } from 'react';

import { cn } from '@/utils';

import { AccordionItemContext } from './context/AccordionItemContext';
import { useAccordionContext } from './hooks/useAccordionContext';

const AccordionItem = forwardRef(function AccordionItem(
  { value, disabled = false, className, children, ...props },
  ref,
) {
  if (import.meta.env.DEV && value === undefined) {
    throw new Error('AccordionItem requires a unique "value" prop.');
  }

  const { disabled: accordionDisabled, toggleItem, isItemOpen } = useAccordionContext();

  const generatedId = useId();

  const triggerId = `accordion-trigger-${value ?? generatedId}`;
  const contentId = `accordion-content-${value ?? generatedId}`;

  const isOpen = isItemOpen(value);
  const isDisabled = Boolean(accordionDisabled || disabled);

  const toggle = useCallback(() => {
    if (!isDisabled) {
      toggleItem(value);
    }
  }, [toggleItem, value, isDisabled]);

  const contextValue = useMemo(
    () => ({
      value,
      disabled: isDisabled,
      isOpen,
      toggle,
      triggerId,
      contentId,
    }),
    [value, isDisabled, isOpen, toggle, triggerId, contentId],
  );

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div
        ref={ref}
        data-slot='accordion-item'
        data-state={isOpen ? 'open' : 'closed'}
        data-disabled={isDisabled ? '' : undefined}
        className={cn('border-b border-(--display-divider) last:border-b-0', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
