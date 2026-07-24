import { cva } from 'class-variance-authority';

export const accordionVariants = cva(
  [
    'transition-[background-color,border-color,box-shadow]',
    'duration-[var(--display-duration)]',
    'ease-[var(--display-easing)]',
    'focus-within:ring-2',
    'focus-within:ring-[var(--display-focus-ring)]',
    'focus-within:ring-offset-2',
    'focus-within:ring-offset-[var(--focus-ring-offset)]',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--display-bg)]',
          'border',
          'border-[var(--display-border)]',
          'shadow-[var(--display-shadow-subtle)]',
        ].join(' '),

        outline: ['bg-transparent', 'border', 'border-[var(--display-border)]'].join(' '),

        filled: [
          'bg-[var(--display-accordion-bg)]',
          'border-transparent',
          'shadow-[var(--display-shadow)]',
        ].join(' '),

        ghost: ['bg-transparent', 'border-transparent', 'shadow-none'].join(' '),
      },

      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },

      radius: {
        none: 'rounded-none',
        sm: 'rounded-[var(--radius-sm)]',
        md: 'rounded-[var(--display-radius)]',
        lg: 'rounded-[var(--radius-lg)]',
      },

      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      fullWidth: true,
    },
  },
);
