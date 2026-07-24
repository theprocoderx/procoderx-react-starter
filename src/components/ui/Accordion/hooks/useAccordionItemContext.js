import { useContext } from 'react';
import { AccordionItemContext } from '../context/AccordionItemContext';

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error('AccordionItem components must be used within an <AccordionItem>.');
  }

  return context;
}
