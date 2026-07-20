import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    // Appearance
    'appearance-none',

    // Layout
    'inline-flex',
    'items-center',
    'justify-center',
    'shrink-0',

    // Alignment
    'select-none',
    'align-middle',

    // Shape
    'rounded-md',

    // Border
    'border-2',

    // Background
    'bg-[var(--field-bg)]',

    // Cursor
    'cursor-pointer',

    // Animation
    'transition-all',
    'duration-200',
    'ease-out',
    'active:scale-[0.97]',

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--field-focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',

    // Disabled
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:bg-[var(--field-disabled-bg)]',
    'disabled:border-[var(--field-disabled-border)]',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-[var(--field-border)]',

          'enabled:hover:border-[var(--field-border-hover)]',

          'data-[state=checked]:border-[var(--field-border-focus)]',
          'data-[state=checked]:bg-[var(--field-border-focus)]',
          'data-[state=checked]:text-[var(--text-inverse)]',

          'data-[state=indeterminate]:border-[var(--field-border-focus)]',
          'data-[state=indeterminate]:bg-[var(--field-border-focus)]',
          'data-[state=indeterminate]:text-[var(--text-inverse)]',
        ],

        outline: [
          'border-[var(--field-border-focus)]',
          'bg-transparent',

          'enabled:hover:bg-[var(--field-bg-hover)]',

          'data-[state=checked]:bg-[var(--field-border-focus)]',
          'data-[state=checked]:text-[var(--text-inverse)]',

          'data-[state=indeterminate]:bg-[var(--field-border-focus)]',
          'data-[state=indeterminate]:text-[var(--text-inverse)]',
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

          'data-[state=checked]:border-[var(--field-error)]',
          'data-[state=checked]:bg-[var(--field-error)]',

          'data-[state=indeterminate]:border-[var(--field-error)]',
          'data-[state=indeterminate]:bg-[var(--field-error)]',

          'focus-visible:ring-[var(--field-error)]/20',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--field-success)]',

          'data-[state=checked]:border-[var(--field-success)]',
          'data-[state=checked]:bg-[var(--field-success)]',

          'data-[state=indeterminate]:border-[var(--field-success)]',
          'data-[state=indeterminate]:bg-[var(--field-success)]',

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
