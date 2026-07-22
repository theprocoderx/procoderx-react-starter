import { cva } from 'class-variance-authority';

/* -------------------------------------------------------------------------- */
/* Avatar Container                                                           */
/* -------------------------------------------------------------------------- */

export const avatarVariants = cva(
  [
    // Layout
    'relative inline-flex shrink-0 overflow-hidden',

    // Alignment
    'items-center justify-center',

    // Appearance
    'select-none border',

    // Typography
    'font-medium uppercase',

    // Shared Display Tokens
    'border-[var(--display-avatar-border)]',
    'bg-[var(--display-avatar-bg)]',
    'text-[var(--display-avatar-text)]',

    // Shadow
    'shadow-[var(--display-avatar-shadow)]',

    // Transition
    'transition-[background-color,border-color,color,box-shadow]',
    'duration-[var(--display-duration)]',
    'ease-[var(--display-easing)]',
  ],
  {
    variants: {
      variant: {
        default: '',

        filled: 'bg-[var(--display-avatar-bg)]',

        outline: 'bg-transparent',

        ghost: 'border-transparent bg-transparent shadow-none',

        soft: 'border-transparent bg-[var(--display-avatar-soft-bg)] shadow-none',
      },

      size: {
        xs: 'size-6 text-[10px]',
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
        xl: 'size-16 text-lg',
        '2xl': 'size-20 text-xl',
      },

      shape: {
        circle: 'rounded-[var(--display-avatar-radius)]',
        rounded: 'rounded-[var(--display-radius)]',
        square: 'rounded-none',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'circle',
    },
  },
);

/* -------------------------------------------------------------------------- */
/* Avatar Image                                                               */
/* -------------------------------------------------------------------------- */

export const avatarImageVariants = cva(['block', 'h-full', 'w-full', 'object-cover', 'object-center']);

/* -------------------------------------------------------------------------- */
/* Avatar Fallback                                                            */
/* -------------------------------------------------------------------------- */

export const avatarFallbackVariants = cva(
  [
    'flex',
    'h-full',
    'w-full',
    'items-center',
    'justify-center',

    'font-medium',
    'uppercase',
    'leading-none',

    'select-none',
  ],
  {
    variants: {
      color: {
        neutral: 'bg-[var(--display-avatar-bg)] text-[var(--display-avatar-text)]',

        primary: 'bg-[var(--primary-bg)] text-[var(--primary-bg-text)]',

        success: 'bg-[var(--success)] text-white',

        warning: 'bg-[var(--warning)] text-white',

        danger: 'bg-[var(--error)] text-white',
      },
    },

    defaultVariants: {
      color: 'neutral',
    },
  },
);
