import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  /* ---------------------------------------------------------------------- */
  /* Rendering                                                             */
  /* ---------------------------------------------------------------------- */

  describe('Rendering', () => {
    it('renders successfully', () => {
      render(<Skeleton data-testid='skeleton' />);

      expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('renders as a div element', () => {
      render(<Skeleton data-testid='skeleton' />);

      expect(screen.getByTestId('skeleton').tagName).toBe('DIV');
    });

    it('renders with default variant', () => {
      render(<Skeleton data-testid='skeleton' />);

      expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('renders with default animation', () => {
      render(<Skeleton data-testid='skeleton' />);

      expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('renders children-free by default', () => {
      render(<Skeleton data-testid='skeleton' />);

      expect(screen.getByTestId('skeleton')).toBeEmptyDOMElement();
    });
  });

  /* ---------------------------------------------------------------------- */
  /* Refs                                                                   */
  /* ---------------------------------------------------------------------- */

  describe('Refs', () => {
    it('forwards ref correctly', () => {
      const ref = createRef();

      render(<Skeleton ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  /* ---------------------------------------------------------------------- */
  /* Display Name                                                           */
  /* ---------------------------------------------------------------------- */

  describe('Display Name', () => {
    it('has correct displayName', () => {
      expect(Skeleton.displayName).toBe('Skeleton');
    });
  });
});

describe('Variants', () => {
  it.each([
    ['default', []],
    ['rounded', []],
    ['circular', ['rounded-full']],
  ])('supports "%s" variant', (variant, expectedClasses) => {
    render(<Skeleton variant={variant} data-testid='skeleton' />);

    const skeleton = screen.getByTestId('skeleton');

    expectedClasses.forEach((cls) => {
      expect(skeleton).toHaveClass(cls);
    });
  });

  it('uses default variant when none is provided', () => {
    render(<Skeleton data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});

describe('Animation', () => {
  it('supports pulse animation', () => {
    render(<Skeleton animation='pulse' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse');
  });

  it('supports wave animation', () => {
    render(<Skeleton animation='wave' data-testid='skeleton' />);

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveClass('relative');
    expect(skeleton).toHaveClass('overflow-hidden');
  });

  it('supports no animation', () => {
    render(<Skeleton animation='none' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).not.toHaveClass('animate-pulse');
  });

  it('uses pulse animation by default', () => {
    render(<Skeleton data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse');
  });
});

describe('Class Names', () => {
  it('merges custom className', () => {
    render(<Skeleton className='custom-skeleton' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveClass('custom-skeleton');
  });

  it('supports custom width', () => {
    render(<Skeleton className='w-64' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveClass('w-64');
  });

  it('supports custom height', () => {
    render(<Skeleton className='h-8' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveClass('h-8');
  });

  it('supports custom sizing classes together', () => {
    render(<Skeleton className='h-10 w-32' data-testid='skeleton' />);

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveClass('h-10');
    expect(skeleton).toHaveClass('w-32');
  });
});

describe('Accessibility', () => {
  it('is hidden from assistive technologies by default', () => {
    render(<Skeleton data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not expose a semantic role', () => {
    render(<Skeleton data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).not.toHaveAttribute('role');
  });

  it('is not focusable by default', () => {
    render(<Skeleton data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).not.toHaveAttribute('tabindex');
  });
});

describe('Native HTML Props', () => {
  it('supports id', () => {
    render(<Skeleton id='loading-placeholder' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('id', 'loading-placeholder');
  });

  it('supports title attribute', () => {
    render(<Skeleton title='Loading content' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('title', 'Loading content');
  });

  it('supports inline styles', () => {
    render(<Skeleton style={{ opacity: 0.5 }} data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      opacity: '0.5',
    });
  });

  it('supports data attributes', () => {
    render(<Skeleton data-state='loading' data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('data-state', 'loading');
  });

  it('supports draggable attribute', () => {
    render(<Skeleton draggable={false} data-testid='skeleton' />);

    expect(screen.getByTestId('skeleton')).toHaveAttribute('draggable', 'false');
  });
});

it('supports dashboard loading layouts', () => {
  render(
    <div className='grid gap-4'>
      <Skeleton data-testid='card-1' className='h-32' />
      <Skeleton data-testid='card-2' className='h-32' />
    </div>,
  );

  expect(screen.getByTestId('card-1')).toBeInTheDocument();
  expect(screen.getByTestId('card-2')).toBeInTheDocument();
});
