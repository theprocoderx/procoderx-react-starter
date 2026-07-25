import { cva } from 'class-variance-authority';

/* -------------------------------------------------------------------------- */
/* Skeleton                                                                   */
/* -------------------------------------------------------------------------- */

export const skeletonVariants = cva(
  [
    // Layout
    'block',
    'shrink-0',

    // Appearance
    'bg-[var(--display-skeleton)]',

    // Interaction
    'select-none',
    'pointer-events-none',

    // Animation
    'transition-[background-color]',
    'duration-[var(--display-duration)]',
    'ease-[var(--display-easing)]',
  ],
  {
    variants: {
      variant: {
        default: 'rounded-[var(--radius-sm)]',

        rounded: 'rounded-[var(--radius-md)]',

        circular: 'rounded-full',
      },

      animation: {
        pulse: 'animate-pulse',

        wave: [
          'relative',
          'overflow-hidden',

          'before:absolute',
          'before:inset-0',
          'before:-translate-x-full',

          'before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)]',

          'before:animate-[skeleton-wave_1.6s_linear_infinite]',
        ],

        none: '',
      },
    },

    defaultVariants: {
      variant: 'default',
      animation: 'pulse',
    },
  },
);
