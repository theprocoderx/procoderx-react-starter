import { forwardRef, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { avatarFallbackVariants, avatarImageVariants, avatarVariants } from './avatarVariants';

function getInitials(name) {
  if (!name) return '?';

  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

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

    onError,
    onLoad,

    ...props
  },
  ref,
) {
  const [imageError, setImageError] = useState(false);

  const initials = useMemo(() => {
    return fallback ?? getInitials(name);
  }, [fallback, name]);

  const showFallback = !src || imageError;

  function handleImageError(event) {
    setImageError(true);
    onError?.(event);
  }

  function handleImageLoad(event) {
    setImageError(false);
    onLoad?.(event);
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
          onError={handleImageError}
          onLoad={handleImageLoad}
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
