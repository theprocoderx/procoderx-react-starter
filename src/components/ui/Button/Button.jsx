import { forwardRef } from 'react';

import { buttonVariants } from './buttonVariants';
import { cn } from '@/utils/cn';

const Button = forwardRef(function Button(
  {
    children,

    variant,
    size,
    fullWidth = false,
    className,

    href,
    target = '_blank',
    download = false,

    type = 'button',
    onClick,

    disabled = false,
    loading = false,

    startIcon,
    endIcon,

    ariaLabel,

    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;

  const classes = cn(
    buttonVariants({
      variant,
      size,
      fullWidth,
    }),
    className,
  );

  if (import.meta.env.DEV && size === 'icon' && !ariaLabel) {
    console.warn('[Button] Icon-only buttons should include an ariaLabel for accessibility.');
  }

  const content = (
    <>
      {loading && (
        <span
          role='status'
          aria-label='Loading'
          className='size-4 animate-spin rounded-full border-2 border-current border-t-transparent'
        />
      )}

      {!loading && startIcon && (
        <span className='inline-flex shrink-0 items-center justify-center' aria-hidden='true'>
          {startIcon}
        </span>
      )}

      <span>{children}</span>

      {!loading && endIcon && (
        <span className='inline-flex shrink-0 items-center justify-center' aria-hidden='true'>
          {endIcon}
        </span>
      )}
    </>
  );

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={isDisabled ? undefined : href}
        target={!isDisabled ? target : undefined}
        rel={!isDisabled && target === '_blank' ? 'noopener noreferrer' : undefined}
        download={!isDisabled && download ? true : undefined}
        onClick={handleClick}
        aria-label={ariaLabel || undefined}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(classes, isDisabled && 'pointer-events-none opacity-50')}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={ariaLabel || undefined}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
