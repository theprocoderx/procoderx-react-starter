import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center gap-2',

    // Shape
    'rounded-[var(--button-radius)]',

    // Typography
    'font-medium whitespace-nowrap',

    // Interaction
    'overflow-hidden select-none cursor-pointer',

    // Disabled
    'disabled:pointer-events-none',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',

    // Transition
    'transition-[background-color,color,border-color,box-shadow,transform]',
    'duration-[var(--button-duration)]',
    'ease-[var(--button-easing)]',

    // Focus
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--button-focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',

    // Active
    'active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border',
          'border-[var(--button-primary-border)]',

          'bg-[var(--button-primary-bg)]',
          'text-white',

          'shadow-[var(--button-shadow)]',

          'hover:bg-[var(--button-primary-bg-hover)]',
          'hover:-translate-y-0.5',
          'hover:shadow-[var(--button-shadow-hover)]',

          'active:bg-[var(--button-primary-bg-active)]',
          'active:translate-y-0',
        ],

        secondary: [
          'border',
          'border-[var(--button-secondary-border)]',

          'bg-[var(--button-secondary-bg)]',
          'text-[var(--button-secondary-text)]',

          'hover:bg-[var(--button-secondary-bg-hover)]',

          'active:bg-[var(--button-secondary-bg-active)]',
        ],

        outline: [
          'border',
          'border-[var(--button-outline-border)]',

          'bg-[var(--button-outline-bg)]',
          'text-[var(--button-outline-text)]',

          'hover:bg-[var(--button-outline-bg-hover)]',
        ],

        ghost: [
          'border',
          'border-transparent',

          'bg-[var(--button-ghost-bg)]',
          'text-[var(--button-ghost-text)]',

          'hover:bg-[var(--button-ghost-bg-hover)]',
        ],

        destructive: [
          'border',
          'border-transparent',

          'bg-[var(--error)]',
          'text-[var(--error-text)]',

          'hover:bg-[var(--error-hover)]',
          'active:bg-[var(--error-active)]',
        ],

        link: [
          'border-0',
          'rounded-none',
          'bg-transparent',
          'p-0',

          'text-[var(--button-link-text)]',

          'hover:text-[var(--button-link-hover)]',
          'hover:underline',

          'underline-offset-4',
        ],
      },

      size: {
        sm: 'h-9 px-3 text-sm',

        md: 'h-11 px-5 text-base',

        lg: 'h-12 px-6 text-lg',

        icon: 'size-11 p-0',
      },

      fullWidth: {
        true: 'w-full',

        false: 'w-fit',
      },
    },

    defaultVariants: {
      variant: 'primary',

      size: 'md',

      fullWidth: false,
    },
  },
);
