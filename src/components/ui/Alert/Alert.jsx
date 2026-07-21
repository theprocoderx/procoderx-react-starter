import { forwardRef } from 'react';
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react';

import { cn } from '@/utils';

import { alertVariants } from './alertVariants';

const alertIcons = {
  default: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
};

const Alert = forwardRef(function Alert(
  {
    variant = 'default',

    title,
    children,

    icon,

    dismissible = false,
    onDismiss,

    className,

    role,

    ...props
  },
  ref,
) {
  const Icon = alertIcons[variant] ?? alertIcons.default;

  const alertRole = role ?? (variant === 'info' || variant === 'default' ? 'status' : 'alert');

  if (import.meta.env.DEV && dismissible && !onDismiss) {
    console.warn('[Alert] dismissible requires an onDismiss callback.');
  }

  return (
    <div
      ref={ref}
      role={alertRole}
      className={cn(
        alertVariants({
          variant,
        }),
        className,
      )}
      {...props}
    >
      {/* Icon */}
      <div className='mt-0.5 shrink-0 text-(--alert-icon)' aria-hidden='true'>
        {icon ?? <Icon size={20} />}
      </div>

      {/* Content */}
      <div className='flex-1 space-y-1'>
        {title && <div className='font-medium text-(--alert-title)'>{title}</div>}

        {children && <div className='text-(--alert-description)'>{children}</div>}
      </div>

      {/* Close Button */}
      {dismissible && (
        <button
          type='button'
          onClick={onDismiss}
          aria-label='Dismiss alert'
          className={cn(
            'shrink-0 rounded-md p-1',
            'text-current opacity-70',
            'transition-opacity',
            'hover:opacity-100',
            'focus-visible:outline-none',
            'focus-visible:ring-2',
            'focus-visible:ring-(--alert-focus-ring)',
          )}
        >
          <X size={18} aria-hidden='true' />
        </button>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
