import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Badge from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders children', () => {
      render(<Badge>Badge</Badge>);

      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('renders as a span by default', () => {
      render(<Badge>Badge</Badge>);

      expect(screen.getByText('Badge').tagName).toBe('SPAN');
    });

    it('applies default classes', () => {
      render(<Badge>Default</Badge>);

      const badge = screen.getByText('Default');

      expect(badge).toHaveClass(
        'inline-flex',
        'items-center',
        'justify-center',
        'h-6',
        'rounded-[var(--display-radius-pill)]',
      );
    });

    it('merges custom className', () => {
      render(<Badge className='custom-class'>Custom</Badge>);

      expect(screen.getByText('Custom')).toHaveClass('custom-class');
    });

    it('forwards refs', () => {
      const ref = createRef();

      render(<Badge ref={ref}>Badge</Badge>);

      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe('Variants', () => {
    it.each(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'outline', 'ghost'])(
      'supports "%s" variant',
      (variant) => {
        render(<Badge variant={variant}>{variant}</Badge>);

        const badge = screen.getByText(variant);

        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass('inline-flex');
      },
    );
  });

  describe('Sizes', () => {
    it.each([
      ['sm', 'h-5'],
      ['md', 'h-6'],
      ['lg', 'h-7'],
    ])('supports "%s" size', (size, cls) => {
      render(<Badge size={size}>{size}</Badge>);

      expect(screen.getByText(size)).toHaveClass(cls);
    });
  });

  it.each([
    ['sm', 'rounded-[var(--radius-sm)]'],
    ['md', 'rounded-[var(--display-radius)]'],
    ['full', 'rounded-[var(--display-radius-pill)]'],
  ])('supports "%s" radius', (radius, cls) => {
    render(<Badge radius={radius}>Badge</Badge>);

    expect(screen.getByText('Badge')).toHaveClass(cls);
  });

  it.each([
    ['none', ''],
    ['sm', 'shadow-[var(--display-shadow-subtle)]'],
    ['md', 'shadow-[var(--display-shadow)]'],
  ])('supports "%s" elevation', (elevation, cls) => {
    render(<Badge elevation={elevation}>Badge</Badge>);

    const badge = screen.getByText('Badge');

    if (cls) {
      expect(badge).toHaveClass(cls);
    }
  });

  describe('Interactive', () => {
    it('supports interactive mode', () => {
      render(<Badge interactive>Interactive</Badge>);

      expect(screen.getByText('Interactive')).toHaveClass('cursor-pointer');
    });
  });

  describe('Layout', () => {
    it('supports full width', () => {
      render(<Badge fullWidth>Full Width</Badge>);

      expect(screen.getByText('Full Width')).toHaveClass('w-full');
    });
  });

  describe('Icons', () => {
    it('renders start icon', () => {
      render(<Badge startIcon={<svg data-testid='start-icon' />}>Badge</Badge>);

      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('renders end icon', () => {
      render(<Badge endIcon={<svg data-testid='end-icon' />}>Badge</Badge>);

      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('renders without children when only icons are provided', () => {
      render(<Badge startIcon={<svg data-testid='icon' />} />);

      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('supports aria-label', () => {
      render(<Badge aria-label='New Notifications'>99+</Badge>);

      expect(screen.getByLabelText('New Notifications')).toBeInTheDocument();
    });
  });

  describe('Native Props', () => {
    it('passes native HTML attributes', () => {
      render(
        <Badge data-testid='badge' title='Status Badge'>
          Badge
        </Badge>,
      );

      const badge = screen.getByTestId('badge');

      expect(badge).toHaveAttribute('title', 'Status Badge');
    });
  });
});
