import { useEffect, useState } from 'react';
import { Portal } from '../Portal';

export function Overlay({
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

  // Mount / Unmount animation
  useEffect(() => {
    if (open) {
      setMounted(true);
      return;
    }

    const timer = setTimeout(() => {
      setMounted(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [open, animationDuration]);

  // Escape key
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

  // Lock body scroll
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
        onClick={() => {
          if (closeOnOverlayClick) {
            onClose?.();
          }
        }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${overlayClassName} `}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`transition-all duration-300 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${className} `}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
