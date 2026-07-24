import { cva } from 'class-variance-authority';

/* -------------------------------------------------------------------------- */
/* Breadcrumb                                                                  */
/* -------------------------------------------------------------------------- */

export const breadcrumbVariants = cva(['w-full']);

/* -------------------------------------------------------------------------- */
/* Breadcrumb List                                                             */
/* -------------------------------------------------------------------------- */

export const breadcrumbListVariants = cva([
  'flex',
  'flex-wrap',
  'items-center',

  'gap-2',

  'text-sm',

  'text-[var(--display-muted-text)]',
]);

/* -------------------------------------------------------------------------- */
/* Breadcrumb Item                                                             */
/* -------------------------------------------------------------------------- */

export const breadcrumbItemVariants = cva(['inline-flex', 'items-center', 'gap-2', 'min-w-0']);

/* -------------------------------------------------------------------------- */
/* Breadcrumb Link                                                             */
/* -------------------------------------------------------------------------- */

export const breadcrumbLinkVariants = cva([
  'rounded-[var(--radius-sm)]',

  'text-[var(--display-muted-text)]',

  'transition-[color]',

  'duration-[var(--display-duration)]',
  'ease-[var(--display-easing)]',

  'outline-none',

  'focus-visible:ring-2',
  'focus-visible:ring-[var(--display-focus-ring)]',
  'focus-visible:ring-offset-2',

  'hover:text-[var(--display-text)]',
]);

/* -------------------------------------------------------------------------- */
/* Breadcrumb Page                                                             */
/* -------------------------------------------------------------------------- */

export const breadcrumbPageVariants = cva(['font-medium', 'text-[var(--display-text)]', 'truncate']);

/* -------------------------------------------------------------------------- */
/* Breadcrumb Separator                                                        */
/* -------------------------------------------------------------------------- */

export const breadcrumbSeparatorVariants = cva([
  'shrink-0',

  'select-none',

  'text-[var(--display-muted-text)]',
]);

/* -------------------------------------------------------------------------- */
/* Breadcrumb Ellipsis                                                         */
/* -------------------------------------------------------------------------- */

export const breadcrumbEllipsisVariants = cva([
  'inline-flex',

  'items-center',
  'justify-center',

  'text-[var(--display-muted-text)]',
]);
