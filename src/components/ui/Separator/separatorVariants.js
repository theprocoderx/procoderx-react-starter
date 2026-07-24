import { cva } from 'class-variance-authority';

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

export const separatorVariants = cva(
  [
    // Layout
    'shrink-0',

    // Appearance
    'bg-[var(--display-separator)]',

    // Transition
    'transition-[background-color]',
    'duration-[var(--display-duration)]',
    'ease-[var(--display-easing)]',
  ],
  {
    variants: {
      orientation: {
        horizontal: ['h-px', 'w-full'],

        vertical: ['w-px', 'h-full', 'self-stretch'],
      },

      inset: {
        none: '',

        sm: 'mx-2',

        md: 'mx-4',

        lg: 'mx-6',
      },
    },

    compoundVariants: [
      {
        orientation: 'vertical',
        inset: 'sm',
        class: 'mx-0 my-2',
      },
      {
        orientation: 'vertical',
        inset: 'md',
        class: 'mx-0 my-4',
      },
      {
        orientation: 'vertical',
        inset: 'lg',
        class: 'mx-0 my-6',
      },
    ],

    defaultVariants: {
      orientation: 'horizontal',
      inset: 'none',
    },
  },
);
