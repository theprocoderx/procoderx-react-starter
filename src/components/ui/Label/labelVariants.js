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
    'text-[var(--text)]',

    // Interaction
    'select-none',

    // Animation
    'transition-colors',
    'duration-200',
    'ease-out',
  ],
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },

      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },

      hidden: {
        true: 'sr-only',
        false: null,
      },
    },

    defaultVariants: {
      size: 'md',
      disabled: false,
      hidden: false,
    },
  },
);
