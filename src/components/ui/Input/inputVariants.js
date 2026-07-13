import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    // Layout
    'flex items-center gap-2',
    'min-w-0',
    'overflow-hidden',

    // Shape
    'rounded-xl',

    // Border & Background
    'border',
    'bg-[var(--bg)]',

    // Typography
    'text-[var(--text)]',

    // Cursor
    'cursor-text',
    'has-[:disabled]:cursor-not-allowed',
    'has-[:disabled]:opacity-50',

    // Shadow
    'shadow-sm',

    // Animation
    'transition-[background-color,border-color,color,box-shadow]',
    'duration-200',
    'ease-out',

    // Focus
    'focus-within:ring-2',
    'focus-within:ring-[var(--focus-ring)]',
    'focus-within:ring-offset-2',
    'focus-within:ring-offset-[var(--bg)]',

    // Read-only
    'has-[:read-only]:cursor-default',
    'has-[:read-only]:bg-[var(--surface)]',

    // File Input Support
    'has-[input[type=file]]:py-0',

    '[&_input::file-selector-button]:mr-4',
    '[&_input::file-selector-button]:rounded-md',
    '[&_input::file-selector-button]:border-0',
    '[&_input::file-selector-button]:bg-transparent',
    '[&_input::file-selector-button]:px-2',
    '[&_input::file-selector-button]:py-1',
    '[&_input::file-selector-button]:font-medium',
    '[&_input::file-selector-button]:text-[var(--text)]',
    '[&_input::file-selector-button]:cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-[var(--border)]',

          'has-[:enabled]:hover:border-[var(--divider)]',

          'focus-within:border-[var(--primary)]',
        ],

        filled: [
          'border-transparent',

          'bg-[var(--bg-secondary)]',

          'has-[:enabled]:hover:bg-[var(--surface-hover)]',

          'focus-within:border-[var(--primary)]',
        ],

        ghost: [
          'border-transparent',

          'bg-transparent',

          'has-[:enabled]:hover:bg-[var(--surface)]',

          'focus-within:border-[var(--primary)]',
        ],
      },

      size: {
        sm: 'h-9 px-3 text-sm',

        md: 'h-11 px-4 text-base',

        lg: 'h-12 px-5 text-lg',
      },

      invalid: {
        true: [
          'border-[var(--error)]',

          'focus-within:border-[var(--error)]',

          'focus-within:ring-[var(--error)]/20',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--success)]',

          'focus-within:border-[var(--success)]',

          'focus-within:ring-[var(--success)]/20',
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
