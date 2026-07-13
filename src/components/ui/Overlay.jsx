import { useEffect, useState } from 'react';
import Portal from './Portal';

export default function Overlay({
  open,
  onClose,
  children,
  className = '',
  overlayClassName = '',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockScroll = true,
  animationDuration = 300,
}) {
  const [mounted, setMounted] = useState(open);

  // Mount immediately when opening.
  // Delay unmount when closing so the exit animation can complete.
  useEffect(() => {
    if (open) {
      // This state update is intentional. The overlay must mount
      // immediately so the enter animation can run.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
      return;
    }

    const timer = setTimeout(() => {
      setMounted(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [open, animationDuration]);

  // Close on Escape key
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeOnEscape, onClose]);

  // Lock body scroll while the overlay is open
  useEffect(() => {
    if (!lockScroll || !open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, lockScroll]);

  if (!mounted) return null;

  return (
    <Portal>
      <div
        role='presentation'
        aria-hidden='true'
        onClick={() => {
          if (closeOnOverlayClick) {
            onClose?.();
          }
        }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ${overlayClassName}`}
        style={{
          transition: `opacity ${animationDuration}ms ease`,
        }}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${className}`}
          style={{
            transition: `all ${animationDuration}ms ease`,
          }}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
