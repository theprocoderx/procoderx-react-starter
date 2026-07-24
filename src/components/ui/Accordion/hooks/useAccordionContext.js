import { useContext } from 'react';
import { AccordionContext } from '../context/AccordionContext';

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('Accordion components must be used within an <Accordion>.');
  }

  return context;
}
