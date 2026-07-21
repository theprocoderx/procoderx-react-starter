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
  ],

  {
    variants: {
      variant: {
        default: [
          'border-[var(--feedback-info-border)]',
          'bg-[var(--feedback-info-bg)]',
          'text-[var(--feedback-info-text)]',
        ],

        info: [
          'border-[var(--feedback-info-border)]',
          'bg-[var(--feedback-info-bg)]',
          'text-[var(--feedback-info-text)]',
        ],

        success: [
          'border-[var(--feedback-success-border)]',
          'bg-[var(--feedback-success-bg)]',
          'text-[var(--feedback-success-text)]',
        ],

        warning: [
          'border-[var(--feedback-warning-border)]',
          'bg-[var(--feedback-warning-bg)]',
          'text-[var(--feedback-warning-text)]',
        ],

        error: [
          'border-[var(--feedback-error-border)]',
          'bg-[var(--feedback-error-bg)]',
          'text-[var(--feedback-error-text)]',
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
