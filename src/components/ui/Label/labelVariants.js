import { cva } from 'class-variance-authority';

export const labelVariants = cva(
  [
    // Layout
    'inline-flex',
    'items-center',
    'gap-1',

    // Typography
    'font-medium',
    'leading-none',
    'text-[var(--field-label)]',

    // Interaction
    'select-none',
    'transition-colors',
    'duration-200',
    'ease-out',

    // Hover
    'group-hover:text-[var(--field-label-hover)]',
  ],
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },

      disabled: {
        true: ['cursor-not-allowed', 'text-[var(--field-disabled-text)]'],

        false: 'cursor-pointer',
      },

      muted: {
        true: 'text-[var(--field-label-muted)]',

        false: null,
      },

      required: {
        true: "after:ml-1 after:text-[var(--field-error)] after:content-['*']",

        false: null,
      },

      hidden: {
        true: 'sr-only',

        false: null,
      },
    },

    defaultVariants: {
      size: 'md',
      disabled: false,
      muted: false,
      required: false,
      hidden: false,
    },
  },
);
