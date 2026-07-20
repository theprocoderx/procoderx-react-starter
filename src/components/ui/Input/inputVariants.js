import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    // Layout
    'flex items-center gap-2',
    'min-w-0',
    'overflow-hidden',

    // Shape
    'rounded-[var(--radius-md)]',

    // Border & Background
    'border',
    'bg-[var(--field-bg)]',

    // Typography
    'text-[var(--field-text)]',

    // Cursor
    'cursor-text',
    'has-[:disabled]:cursor-not-allowed',
    'has-[:disabled]:opacity-50',

    // Shadow
    'shadow-[var(--shadow-xs)]',

    // Animation
    'transition-[background-color,border-color,color,box-shadow]',
    'duration-[var(--duration-normal)]',
    'ease-[var(--ease-out)]',

    // Focus
    'focus-within:ring-2',
    'focus-within:ring-[var(--field-focus-ring)]',
    'focus-within:ring-offset-2',
    'focus-within:ring-offset-[var(--bg)]',

    // Read-only
    'has-[:read-only]:cursor-default',
    'has-[:read-only]:bg-[var(--field-readonly-bg)]',
    'has-[:read-only]:border-[var(--field-readonly-border)]',
    'has-[:read-only]:text-[var(--field-readonly-text)]',

    // File Input
    'has-[input[type=file]]:py-0',

    '[&_input::file-selector-button]:mr-4',
    '[&_input::file-selector-button]:rounded-md',
    '[&_input::file-selector-button]:border-0',
    '[&_input::file-selector-button]:bg-transparent',
    '[&_input::file-selector-button]:px-2',
    '[&_input::file-selector-button]:py-1',
    '[&_input::file-selector-button]:font-medium',
    '[&_input::file-selector-button]:text-[var(--field-text)]',
    '[&_input::file-selector-button]:cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-[var(--field-border)]',

          'has-[:enabled]:hover:border-[var(--field-border-hover)]',

          'focus-within:border-[var(--field-border-focus)]',
        ],

        filled: [
          'border-transparent',

          'bg-[var(--field-bg)]',

          'has-[:enabled]:hover:bg-[var(--field-bg-hover)]',

          'focus-within:border-[var(--field-border-focus)]',
        ],

        ghost: [
          'border-transparent',

          'bg-transparent',

          'has-[:enabled]:hover:bg-[var(--field-bg-hover)]',

          'focus-within:border-[var(--field-border-focus)]',
        ],
      },

      size: {
        sm: 'h-10 px-3 text-sm',

        md: 'h-12 px-4 text-base',

        lg: 'h-14 px-5 text-lg',
      },

      invalid: {
        true: [
          'border-[var(--field-error)]',

          'focus-within:border-[var(--field-error)]',

          'focus-within:ring-[var(--field-error)]/20',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--field-success)]',

          'focus-within:border-[var(--field-success)]',

          'focus-within:ring-[var(--field-success)]/20',
        ],

        false: null,
      },

      fullWidth: {
        true: 'w-full',

        false: 'w-fit',
      },
    },

    defaultVariants: {
      variant: 'default',

      size: 'md',

      invalid: false,

      success: false,

      fullWidth: false,
    },
  },
);
