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

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--display-focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',
  ],
  {
    variants: {
      variant: {
        default: '',

        filled: 'bg-[var(--display-avatar-bg)]',

        outline: 'bg-transparent',

        ghost: 'border-transparent bg-transparent shadow-none',

        soft: 'border-transparent bg-[var(--display-bg-hover)] shadow-none',
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

export const avatarImageVariants = cva(['h-full', 'w-full', 'object-cover', 'object-center']);

/* -------------------------------------------------------------------------- */
/* Avatar Fallback                                                            */
/* -------------------------------------------------------------------------- */

export const avatarFallbackVariants = cva(
  ['flex', 'h-full', 'w-full', 'items-center', 'justify-center', 'font-medium', 'uppercase', 'select-none'],
  {
    variants: {
      color: {
        neutral: 'bg-[var(--display-avatar-bg)] text-[var(--display-avatar-text)]',

        primary: 'bg-[var(--primary-bg)] text-[var(--primary-bg-text)]',

        success: 'bg-[var(--success-bg)] text-[var(--success)]',

        warning: 'bg-[var(--warning-bg)] text-[var(--warning)]',

        danger: 'bg-[var(--error-bg)] text-[var(--error)]',
      },
    },

    defaultVariants: {
      color: 'neutral',
    },
  },
);
