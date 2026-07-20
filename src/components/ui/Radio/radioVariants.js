import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  [
    // Layout
    'shrink-0',
    'appearance-none',

    // Shape
    'rounded-full',

    // Border
    'border-2',

    // Background
    'bg-[var(--field-bg)]',

    // Cursor
    'cursor-pointer',

    // Transition
    'transition-[background-color,border-color,box-shadow]',
    'duration-200',
    'ease-out',

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--field-focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',

    // Checked Indicator
    'checked:border-[var(--field-border-focus)]',
    'checked:bg-[var(--field-border-focus)]',
    'checked:bg-radial-[circle_at_center]',
    'checked:from-[var(--text-inverse)]',
    'checked:from-0%',
    'checked:from-35%',
    'checked:to-[var(--field-border-focus)]',
    'checked:to-36%',

    // Disabled
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:bg-[var(--field-disabled-bg)]',
    'disabled:border-[var(--field-disabled-border)]',
  ],
  {
    variants: {
      variant: {
        default: ['border-[var(--field-border)]', 'enabled:hover:border-[var(--field-border-hover)]'],

        outline: [
          'border-[var(--field-border-focus)]',

          'bg-transparent',

          'enabled:hover:bg-[var(--field-bg-hover)]',
        ],
      },

      size: {
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },

      invalid: {
        true: [
          'border-[var(--field-error)]',

          'checked:border-[var(--field-error)]',
          'checked:bg-[var(--field-error)]',

          'checked:to-[var(--field-error)]',

          'focus-visible:ring-[var(--field-error)]/20',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--field-success)]',

          'checked:border-[var(--field-success)]',
          'checked:bg-[var(--field-success)]',

          'checked:to-[var(--field-success)]',

          'focus-visible:ring-[var(--field-success)]/20',
        ],

        false: null,
      },
    },

    compoundVariants: [
      {
        invalid: true,
        success: true,
        class: '',
      },
    ],

    defaultVariants: {
      variant: 'default',
      size: 'md',
      invalid: false,
      success: false,
    },
  },
);
