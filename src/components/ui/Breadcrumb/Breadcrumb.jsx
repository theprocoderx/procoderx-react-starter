import { forwardRef } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/utils';

import {
  breadcrumbVariants,
  breadcrumbListVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
  breadcrumbEllipsisVariants,
} from './breadcrumbVariants';

/* -------------------------------------------------------------------------- */
/* Breadcrumb                                                                 */
/* -------------------------------------------------------------------------- */

const Breadcrumb = forwardRef(function Breadcrumb(
  { className, 'aria-label': ariaLabel = 'Breadcrumb', ...props },
  ref,
) {
  return <nav ref={ref} aria-label={ariaLabel} className={cn(breadcrumbVariants(), className)} {...props} />;
});

/* -------------------------------------------------------------------------- */
/* Breadcrumb List                                                            */
/* -------------------------------------------------------------------------- */

const BreadcrumbList = forwardRef(function BreadcrumbList({ className, ...props }, ref) {
  return <ol ref={ref} className={cn(breadcrumbListVariants(), className)} {...props} />;
});

/* -------------------------------------------------------------------------- */
/* Breadcrumb Item                                                            */
/* -------------------------------------------------------------------------- */

const BreadcrumbItem = forwardRef(function BreadcrumbItem({ className, ...props }, ref) {
  return <li ref={ref} className={cn(breadcrumbItemVariants(), className)} {...props} />;
});

/* -------------------------------------------------------------------------- */
/* Breadcrumb Link                                                            */
/* -------------------------------------------------------------------------- */

const BreadcrumbLink = forwardRef(function BreadcrumbLink({ className, ...props }, ref) {
  return <a ref={ref} className={cn(breadcrumbLinkVariants(), className)} {...props} />;
});

/* -------------------------------------------------------------------------- */
/* Breadcrumb Page                                                            */
/* -------------------------------------------------------------------------- */

const BreadcrumbPage = forwardRef(function BreadcrumbPage({ className, ...props }, ref) {
  return (
    <span ref={ref} aria-current='page' className={cn(breadcrumbPageVariants(), className)} {...props} />
  );
});

/* -------------------------------------------------------------------------- */
/* Breadcrumb Separator                                                       */
/* -------------------------------------------------------------------------- */

const BreadcrumbSeparator = forwardRef(function BreadcrumbSeparator({ className, children, ...props }, ref) {
  return (
    <li ref={ref} aria-hidden='true' className={cn(breadcrumbSeparatorVariants(), className)} {...props}>
      {children ?? <ChevronRight size={16} />}
    </li>
  );
});

/* -------------------------------------------------------------------------- */
/* Breadcrumb Ellipsis                                                        */
/* -------------------------------------------------------------------------- */

const BreadcrumbEllipsis = forwardRef(function BreadcrumbEllipsis({ className, ...props }, ref) {
  return (
    <span ref={ref} aria-hidden='true' className={cn(breadcrumbEllipsisVariants(), className)} {...props}>
      <MoreHorizontal size={16} />
    </span>
  );
});

/* -------------------------------------------------------------------------- */
/* Display Names                                                              */
/* -------------------------------------------------------------------------- */

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbList.displayName = 'BreadcrumbList';
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbLink.displayName = 'BreadcrumbLink';
BreadcrumbPage.displayName = 'BreadcrumbPage';
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

export default Breadcrumb;
