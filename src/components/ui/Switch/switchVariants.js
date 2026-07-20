import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  [
    // Layout
    'relative',
    'inline-flex',
    'items-center',
    'justify-start',
    'shrink-0',

    // Shape
    'rounded-full',

    // Padding
    'p-0.5',

    // Border
    'border-2',

    // Cursor
    'cursor-pointer',

    // Transition
    'transition-[background-color,border-color,box-shadow]',
    'duration-200',
    'ease-out',

    // Active
    'active:scale-[0.98]',

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--field-focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',

    // Disabled - standard common variables mapped directly
    'disabled:cursor-not-allowed',
    'disabled:bg-[var(--field-disabled-bg)]',
    'disabled:border-[var(--field-disabled-border)]',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--field-bg)]',
          'border-[var(--field-border)]',

          'hover:bg-[var(--field-bg-hover)]',
          'hover:border-[var(--field-border-hover)]',
          'active:bg-[var(--field-bg-active)]',

          // Checked State
          'data-[state=checked]:bg-[var(--field-border-focus)]',
          'data-[state=checked]:border-[var(--field-border-focus)]',
        ],

        outline: [
          'bg-transparent',
          'border-[var(--field-border)]',

          'hover:bg-[var(--field-bg-hover)]',
          'hover:border-[var(--field-border-hover)]',

          // 🔒 FIX: Checked hone par background ko fill mat karo, use transparent rakho!
          // Aur thumb (circle) ko highlight karne ke liye sirf border ka color badlo.
          'data-[state=checked]:bg-transparent',
          'data-[state=checked]:border-[var(--field-border-focus)]',
        ],
      },

      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },

      invalid: {
        true: [
          'border-[var(--field-error)]',

          'data-[state=checked]:bg-[var(--field-error)]',
          'data-[state=checked]:border-[var(--field-error)]',

          'focus-visible:ring-[var(--field-error)]/20',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--field-success)]',

          'data-[state=checked]:bg-[var(--field-success)]',
          'data-[state=checked]:border-[var(--field-success)]',

          'focus-visible:ring-[var(--field-success)]/20',
        ],

        false: null,
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      invalid: false,
      success: false,
    },
  },
);
