import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    // Layout
    'block',
    'min-w-0',
    'w-full',

    // Shape
    'rounded-[var(--radius-md)]',

    // Border & Background
    'border',
    'bg-[var(--field-bg)]',

    // Typography
    'text-[var(--field-text)]',
    'placeholder:text-[var(--field-placeholder)]',

    // Selection
    'selection:bg-[var(--field-selection-bg)]',
    'selection:text-[var(--field-selection-text)]',

    // Cursor
    'cursor-text',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',

    // Shadow
    'shadow-[var(--shadow-xs)]',

    // Animation
    'transition-[background-color,border-color,color,box-shadow]',
    'duration-[var(--duration-normal)]',
    'ease-[var(--ease-out)]',

    // Focus (wrapper will own the visual presentation)
    'focus:outline-none',

    // Read-only
    'read-only:cursor-default',
    'read-only:bg-[var(--field-readonly-bg)]',
    'read-only:border-[var(--field-readonly-border)]',
    'read-only:text-[var(--field-readonly-text)]',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-[var(--field-border)]',

          'enabled:hover:border-[var(--field-border-hover)]',

          'focus:border-[var(--field-border-focus)]',
        ],

        filled: [
          'border-transparent',

          'bg-[var(--field-bg)]',

          'enabled:hover:bg-[var(--field-bg-hover)]',

          'focus:border-[var(--field-border-focus)]',
        ],

        ghost: [
          'border-transparent',

          'bg-transparent',

          'enabled:hover:bg-[var(--field-bg-hover)]',

          'focus:border-[var(--field-border-focus)]',
        ],
      },

      size: {
        sm: 'min-h-24 px-3 py-2 text-sm',

        md: 'min-h-32 px-4 py-3 text-base',

        lg: 'min-h-40 px-5 py-4 text-lg',
      },

      resize: {
        none: 'resize-none',

        vertical: 'resize-y',

        horizontal: 'resize-x',

        both: 'resize',
      },

      invalid: {
        true: [
          'border-[var(--field-error)]',

          'focus:border-[var(--field-error)]',

          'focus:ring-2',

          'focus:ring-[var(--field-error)]/20',

          'focus:ring-offset-2',

          'focus:ring-offset-[var(--bg)]',
        ],

        false: null,
      },

      success: {
        true: [
          'border-[var(--field-success)]',

          'focus:border-[var(--field-success)]',

          'focus:ring-2',

          'focus:ring-[var(--field-success)]/20',

          'focus:ring-offset-2',

          'focus:ring-offset-[var(--bg)]',
        ],

        false: null,
      },

      fullWidth: {
        true: 'w-full',

        false: 'w-fit',
      },
    },

    compoundVariants: [
      {
        invalid: false,
        success: false,
        className: [
          'focus:ring-2',

          'focus:ring-[var(--field-focus-ring)]',

          'focus:ring-offset-2',

          'focus:ring-offset-[var(--bg)]',
        ],
      },
    ],

    defaultVariants: {
      variant: 'default',

      size: 'md',

      resize: 'vertical',

      invalid: false,

      success: false,

      fullWidth: false,
    },
  },
);
