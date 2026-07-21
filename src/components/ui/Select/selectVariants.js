import { cva } from 'class-variance-authority';

export const selectVariants = cva(
  [
    // Layout
    'relative flex items-center',

    // Width
    'w-fit',

    // Shape
    'rounded-[var(--field-radius)]',

    // Border
    'border border-[var(--field-border)]',

    // Background
    'bg-[var(--field-bg)]',

    // Shadow
    'shadow-[var(--shadow-xs)]',

    // Transition
    'transition-[background-color,border-color,box-shadow]',
    'duration-[var(--field-duration)]',
    'ease-[var(--field-easing)]',

    // Focus
    'focus-within:border-[var(--field-border-focus)]',
    'focus-within:ring-2',
    'focus-within:ring-[var(--field-focus-ring)]',
    'focus-within:ring-offset-2',
    'focus-within:ring-offset-[var(--bg)]',

    // Disabled
    'has-[:disabled]:cursor-not-allowed',
    'has-[:disabled]:opacity-50',

    // Selection
    'selection:bg-[var(--field-selection-bg)]',
    'selection:text-[var(--field-selection-text)]',
  ],
  {
    variants: {
      variant: {
        default: ['border-[var(--field-border)]', 'bg-[var(--field-bg)]'],

        filled: ['border-transparent', 'bg-[var(--field-filled-bg)]'],

        ghost: ['border-transparent', 'bg-transparent', 'shadow-none'],
      },

      size: {
        sm: 'min-h-9',

        md: 'min-h-11',

        lg: 'min-h-12',
      },

      fullWidth: {
        true: 'w-full',

        false: 'w-fit',
      },

      invalid: {
        true: [
          'border-[var(--error)]',

          'focus-within:border-[var(--error)]',

          'focus-within:ring-[var(--error-ring)]',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--success)]',

          'focus-within:border-[var(--success)]',

          'focus-within:ring-[var(--success-ring)]',
        ],

        false: null,
      },
    },

    compoundVariants: [
      {
        invalid: true,
        success: true,
        className: '',
      },
    ],

    defaultVariants: {
      variant: 'default',

      size: 'md',

      fullWidth: false,

      invalid: false,

      success: false,
    },
  },
);
