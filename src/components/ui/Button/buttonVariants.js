import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',

    'rounded-xl',

    'font-medium',

    'whitespace-nowrap',

    'overflow-hidden',

    'select-none',

    'cursor-pointer',

    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
    'disabled:opacity-50',

    'transition-[background-color,color,border-color,box-shadow,transform]',
    'duration-200',
    'ease-out',

    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--focus-ring)]',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-[var(--bg)]',

    'active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border',
          'border-transparent',

          'bg-[var(--button-bg)]',
          'text-[var(--text-inverse)]',

          'shadow-md',

          'hover:bg-[var(--button-hover)]',
          'hover:-translate-y-0.5',
          'hover:shadow-xl',

          'active:translate-y-0',
        ],

        secondary: [
          'border',
          'border-[var(--border)]',

          'bg-[var(--surface)]',
          'text-[var(--text)]',

          'hover:bg-[var(--surface-hover)]',
          'hover:border-[var(--divider)]',
        ],

        outline: [
          'border',
          'border-[var(--border)]',

          'bg-transparent',

          'text-[var(--text)]',

          'hover:bg-[var(--surface)]',
          'hover:border-[var(--divider)]',
        ],

        ghost: [
          'bg-transparent',

          'text-[var(--text)]',

          'hover:bg-[var(--surface)]',
          'hover:text-[var(--primary)]',

          'focus-visible:text-[var(--primary)]',
        ],

        destructive: [
          'border',
          'border-transparent',

          'bg-[var(--error)]',

          'text-white',

          'hover:brightness-110',
        ],

        link: [
          'border-0',

          'rounded-none',

          'bg-transparent',

          'p-0',

          'text-[var(--primary)]',

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
