import { cva } from 'class-variance-authority';

/* -------------------------------------------------------------------------- */
/* Card                                                                        */
/* -------------------------------------------------------------------------- */

export const cardVariants = cva(
  [
    // Layout
    'relative',
    'flex',
    'flex-col',
    'overflow-hidden',

    // Appearance
    'border',

    // Shared Display Tokens (Updated with --card-* tokens)
    'bg-[var(--card-bg)]',
    'border-[var(--card-border)]',
    'text-[var(--card-title)]',

    // Animation
    'transform-gpu',
    'transition-[background-color,border-color,color,box-shadow,transform]',
    'duration-[var(--card-duration)]',
    'ease-[var(--card-easing)]',

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--card-focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--card-bg)]',
  ],
  {
    variants: {
      variant: {
        default: '',

        outlined: ['bg-transparent', 'border-[var(--card-border)]', 'shadow-none'],

        elevated: ['shadow-[var(--card-shadow)]'],

        filled: ['bg-[var(--card-bg-hover)]', 'border-transparent'],

        ghost: ['bg-transparent', 'border-transparent', 'shadow-none'],
      },

      size: {
        sm: 'p-[var(--card-padding-sm)] gap-3',
        md: 'p-[var(--card-padding-md)] gap-4',
        lg: 'p-[var(--card-padding-lg)] gap-5',
      },

      radius: {
        sm: 'rounded-[var(--radius-sm)]',
        md: 'rounded-[var(--card-radius)]',
        lg: 'rounded-[var(--radius-lg)]',
      },

      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },

      interactive: {
        true: [
          'cursor-pointer',
          'hover:bg-[var(--card-bg-hover)]',
          'hover:border-[var(--card-border-hover)]',
          'hover:shadow-[var(--card-shadow-hover)]',
          'hover:-translate-y-0.5',
          'active:translate-y-0',
        ],

        false: '',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      fullWidth: true,
      interactive: false,
    },
  },
);

/* -------------------------------------------------------------------------- */
/* Card Header                                                                 */
/* -------------------------------------------------------------------------- */

export const cardHeaderVariants = cva(['flex', 'flex-col', 'gap-1.5', 'min-w-0']);

/* -------------------------------------------------------------------------- */
/* Card Title                                                                  */
/* -------------------------------------------------------------------------- */

export const cardTitleVariants = cva([
  'font-semibold',
  'leading-none',
  'tracking-tight',
  'break-words',
  'text-[var(--card-title)]',
]);

/* -------------------------------------------------------------------------- */
/* Card Description                                                            */
/* -------------------------------------------------------------------------- */

export const cardDescriptionVariants = cva([
  'text-sm',
  'leading-relaxed',
  'break-words',
  'text-[var(--card-description)]',
]);

/* -------------------------------------------------------------------------- */
/* Card Content                                                                */
/* -------------------------------------------------------------------------- */

export const cardContentVariants = cva(['flex-1', 'min-w-0']);

/* -------------------------------------------------------------------------- */
/* Card Footer                                                                 */
/* -------------------------------------------------------------------------- */

export const cardFooterVariants = cva(['flex', 'items-center', 'justify-between', 'flex-wrap', 'gap-2']);
