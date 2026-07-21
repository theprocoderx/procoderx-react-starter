import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    // Layout
    'inline-flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'whitespace-nowrap',
    'select-none',

    // Typography
    'font-medium',
    'leading-none',

    // Base Border
    'border',

    // Animation
    'transition-[background-color,border-color,color,box-shadow]',
    'duration-[var(--duration-normal)]',
    'ease-[var(--ease-out)]',

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',

    // Disabled
    'disabled:pointer-events-none',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-[var(--primary-bg)]', 'text-[var(--primary-bg-text)]', 'border-transparent'],

        secondary: ['bg-[var(--surface-secondary)]', 'text-[var(--text)]', 'border-[var(--border)]'],

        success: ['bg-[var(--success-bg)]', 'text-[var(--success)]', 'border-[var(--success)]'],

        warning: ['bg-[var(--warning-bg)]', 'text-[var(--warning)]', 'border-[var(--warning)]'],

        error: ['bg-[var(--error-bg)]', 'text-[var(--error)]', 'border-[var(--error)]'],

        info: ['bg-[var(--info-bg)]', 'text-[var(--info)]', 'border-[var(--info)]'],

        outline: ['bg-transparent', 'text-[var(--text)]', 'border-[var(--border)]'],

        ghost: ['bg-transparent', 'text-[var(--text)]', 'border-transparent'],
      },

      size: {
        sm: 'h-5 px-2 text-xs gap-1',
        md: 'h-6 px-2.5 text-sm gap-1.5',
        lg: 'h-7 px-3 text-base gap-2',
      },

      radius: {
        sm: 'rounded-[var(--radius-sm)]',
        md: 'rounded-[var(--radius-md)]',
        full: 'rounded-[var(--radius-full)]',
      },

      elevation: {
        none: '',
        sm: 'shadow-[var(--shadow-xs)]',
        md: 'shadow-[var(--shadow-sm)]',
      },

      interactive: {
        true: ['cursor-pointer', 'hover:brightness-95', 'active:brightness-90'],
        false: '',
      },

      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      radius: 'full',
      elevation: 'none',
      interactive: false,
      fullWidth: false,
    },
  },
);
