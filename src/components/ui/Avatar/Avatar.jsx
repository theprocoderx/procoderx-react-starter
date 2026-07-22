import { forwardRef, useEffect, useState } from 'react';

import { cn } from '@/utils';

import { avatarFallbackVariants, avatarImageVariants, avatarVariants } from './avatarVariants';

/* -------------------------------------------------------------------------- */
/* Utilities                                                                   */
/* -------------------------------------------------------------------------- */

function getInitials(name) {
  if (!name?.trim()) return '?';

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words.at(-1)[0]}`.toUpperCase();
}

/* -------------------------------------------------------------------------- */
/* Component                                                                    */
/* -------------------------------------------------------------------------- */

const Avatar = forwardRef(function Avatar(
  {
    src,
    alt = '',
    name,

    variant,
    size,
    shape,

    fallback,
    fallbackColor = 'neutral',

    className,
    imageClassName,
    fallbackClassName,

    onLoad,
    onError,

    ...props
  },
  ref,
) {
  const [imageError, setImageError] = useState(false);

  // Reset error whenever image source changes.
  useEffect(() => {
    setImageError(false);
  }, [src]);

  const initials = fallback ?? getInitials(name);

  const showFallback = !src || imageError;

  function handleLoad(event) {
    setImageError(false);
    onLoad?.(event);
  }

  function handleError(event) {
    setImageError(true);
    onError?.(event);
  }

  return (
    <div
      ref={ref}
      className={cn(
        avatarVariants({
          variant,
          size,
          shape,
        }),
        className,
      )}
      {...props}
    >
      {!showFallback && (
        <img
          src={src}
          alt={alt}
          loading='lazy'
          draggable={false}
          className={cn(avatarImageVariants(), imageClassName)}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {showFallback && (
        <span
          aria-hidden='true'
          className={cn(
            avatarFallbackVariants({
              color: fallbackColor,
            }),
            fallbackClassName,
          )}
        >
          {initials}
        </span>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
