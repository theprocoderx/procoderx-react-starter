import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  [
    // Layout
    'relative flex items-start gap-3',

    // Typography
    'text-sm leading-relaxed',

    // Shape
    'rounded-[var(--feedback-radius)]',

    // Spacing
    'p-[var(--feedback-padding)]',

    // Border
    'border',

    // Shadow
    'shadow-[var(--feedback-shadow)]',

    // Transition
    'transition-[background-color,border-color,color,box-shadow]',
    'duration-[var(--feedback-duration)]',
    'ease-[var(--feedback-easing)]',

    // Focus
    'focus-within:ring-2',
    'focus-within:ring-[var(--feedback-focus-ring)]',
    'focus-within:ring-offset-2',
    'focus-within:ring-offset-[var(--bg)]',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--feedback-bg)]',
          'text-[var(--feedback-text)]',
          'border-[var(--feedback-border)]',
        ],

        info: [
          'bg-[var(--feedback-info-bg)]',
          'text-[var(--feedback-info-text)]',
          'border-[var(--feedback-info-border)]',
        ],

        success: [
          'bg-[var(--feedback-success-bg)]',
          'text-[var(--feedback-success-text)]',
          'border-[var(--feedback-success-border)]',
        ],

        warning: [
          'bg-[var(--feedback-warning-bg)]',
          'text-[var(--feedback-warning-text)]',
          'border-[var(--feedback-warning-border)]',
        ],

        error: [
          'bg-[var(--feedback-error-bg)]',
          'text-[var(--feedback-error-text)]',
          'border-[var(--feedback-error-border)]',
        ],
      },

      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },

    defaultVariants: {
      variant: 'default',
      fullWidth: true,
    },
  },
);
