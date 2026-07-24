import { forwardRef, useCallback, useMemo, useState } from 'react';

import { AccordionContext } from './context/AccordionContext';
import { accordionVariants } from './accordionVariants';

import { cn } from '@/utils';

const Accordion = forwardRef(function Accordion(
  {
    type = 'single',
    value,
    defaultValue,
    onValueChange,
    collapsible = false,
    disabled = false,
    variant = 'default',
    size = 'md',
    radius = 'md',
    fullWidth = true,
    className,
    children,
    ...props
  },
  ref,
) {
  if (import.meta.env.DEV) {
    if (!['single', 'multiple'].includes(type)) {
      throw new Error('Accordion: "type" must be either "single" or "multiple".');
    }

    if (type === 'single') {
      if (Array.isArray(value)) {
        throw new Error('Accordion: "value" must not be an array when type="single".');
      }

      if (Array.isArray(defaultValue)) {
        throw new Error('Accordion: "defaultValue" must not be an array when type="single".');
      }
    }

    if (type === 'multiple') {
      if (value != null && !Array.isArray(value)) {
        throw new Error('Accordion: "value" must be an array when type="multiple".');
      }

      if (defaultValue != null && !Array.isArray(defaultValue)) {
        throw new Error('Accordion: "defaultValue" must be an array when type="multiple".');
      }
    }
  }

  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState(() => {
    if (defaultValue !== undefined) {
      return defaultValue;
    }

    return type === 'multiple' ? [] : null;
  });

  const currentValue = isControlled ? value : internalValue;

  const toggleItem = useCallback(
    (itemValue) => {
      let nextValue;

      if (type === 'multiple') {
        const values = Array.isArray(currentValue) ? currentValue : [];

        nextValue = values.includes(itemValue)
          ? values.filter((current) => current !== itemValue)
          : [...values, itemValue];
      } else {
        nextValue = currentValue === itemValue ? (collapsible ? null : itemValue) : itemValue;
      }

      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [collapsible, currentValue, isControlled, onValueChange, type],
  );

  const isItemOpen = useCallback(
    (itemValue) => {
      if (type === 'multiple') {
        return Array.isArray(currentValue) && currentValue.includes(itemValue);
      }

      return currentValue === itemValue;
    },
    [currentValue, type],
  );

  const contextValue = useMemo(
    () => ({
      type,
      value: currentValue,
      disabled,
      toggleItem,
      isItemOpen,
    }),
    [type, currentValue, disabled, toggleItem, isItemOpen],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <section
        ref={ref}
        data-slot='accordion'
        data-orientation='vertical'
        data-disabled={disabled ? '' : undefined}
        className={cn(
          accordionVariants({
            variant,
            size,
            radius,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </section>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;
