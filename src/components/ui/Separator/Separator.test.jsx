import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Separator } from './Separator';

describe('Separator', () => {
  describe('Rendering', () => {
    it('renders successfully', () => {
      render(<Separator data-testid='separator' />);

      expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    it('renders as a div element', () => {
      render(<Separator data-testid='separator' />);

      expect(screen.getByTestId('separator').tagName).toBe('DIV');
    });

    it('uses horizontal orientation by default', () => {
      render(<Separator data-testid='separator' />);

      const separator = screen.getByTestId('separator');

      expect(separator).toHaveClass('h-px');
      expect(separator).toHaveClass('w-full');
    });
  });

  describe('Refs', () => {
    it('forwards ref correctly', () => {
      const ref = createRef();

      render(<Separator ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Display Name', () => {
    it('has correct displayName', () => {
      expect(Separator.displayName).toBe('Separator');
    });
  });
});
describe('Variants', () => {
  it('supports horizontal orientation', () => {
    render(<Separator orientation='horizontal' data-testid='separator' />);

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveClass('h-px');
    expect(separator).toHaveClass('w-full');
  });

  it('supports vertical orientation', () => {
    render(
      <div className='h-20'>
        <Separator orientation='vertical' data-testid='separator' />
      </div>,
    );

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveClass('w-px');
    expect(separator).toHaveClass('h-full');
    expect(separator).toHaveClass('self-stretch');
  });
});

describe('Insets', () => {
  it.each([
    ['none', []],
    ['sm', ['mx-2']],
    ['md', ['mx-4']],
    ['lg', ['mx-6']],
  ])('supports "%s" inset', (inset, expectedClasses) => {
    render(<Separator inset={inset} data-testid='separator' />);

    const separator = screen.getByTestId('separator');

    expectedClasses.forEach((cls) => {
      expect(separator).toHaveClass(cls);
    });
  });

  it.each([
    ['sm', 'my-2'],
    ['md', 'my-4'],
    ['lg', 'my-6'],
  ])('applies vertical compound variant for "%s" inset', (inset, expectedClass) => {
    render(
      <div className='h-20'>
        <Separator orientation='vertical' inset={inset} data-testid='separator' />
      </div>,
    );

    expect(screen.getByTestId('separator')).toHaveClass(expectedClass);
  });
});

describe('Class Names', () => {
  it('merges custom className', () => {
    render(<Separator className='custom-separator' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveClass('custom-separator');
  });
});
describe('Accessibility', () => {
  it('is decorative by default', () => {
    render(<Separator data-testid='separator' />);

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveAttribute('aria-hidden', 'true');
    expect(separator).not.toHaveAttribute('role');
    expect(separator).not.toHaveAttribute('aria-orientation');
  });

  it('supports decorative=true', () => {
    render(<Separator decorative data-testid='separator' />);

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveAttribute('aria-hidden', 'true');
    expect(separator).not.toHaveAttribute('role');
    expect(separator).not.toHaveAttribute('aria-orientation');
  });

  it('supports decorative=false', () => {
    render(<Separator decorative={false} data-testid='separator' />);

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveAttribute('role', 'separator');
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal');
    expect(separator).not.toHaveAttribute('aria-hidden');
  });

  it('supports vertical semantic separator', () => {
    render(<Separator decorative={false} orientation='vertical' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('supports horizontal semantic separator', () => {
    render(<Separator decorative={false} orientation='horizontal' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('supports custom role override', () => {
    render(<Separator decorative={false} role='presentation' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('role', 'presentation');
  });
});
describe('Native HTML Props', () => {
  it('supports id', () => {
    render(<Separator id='main-separator' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('id', 'main-separator');
  });

  it('supports title attribute', () => {
    render(<Separator title='Divider' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('title', 'Divider');
  });

  it('supports inline styles', () => {
    render(<Separator style={{ opacity: 0.5 }} data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveStyle({
      opacity: '0.5',
    });
  });

  it('supports data attributes', () => {
    render(<Separator data-state='active' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('data-state', 'active');
  });
});

describe('Edge Cases', () => {
  it('renders without crashing with no props', () => {
    render(<Separator />);

    expect(document.querySelector('div')).toBeInTheDocument();
  });

  it('renders with all props combined', () => {
    render(
      <Separator
        orientation='vertical'
        inset='lg'
        decorative={false}
        className='custom-separator'
        data-testid='separator'
      />,
    );

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveAttribute('role', 'separator');

    expect(separator).toHaveAttribute('aria-orientation', 'vertical');

    expect(separator).toHaveClass('custom-separator');
  });

  it('renders inside flex layouts', () => {
    render(
      <div className='flex h-20'>
        <Separator orientation='vertical' data-testid='separator' />
      </div>,
    );

    expect(screen.getByTestId('separator')).toBeInTheDocument();
  });

  it('renders multiple separators independently', () => {
    render(
      <>
        <Separator data-testid='separator-1' />
        <Separator data-testid='separator-2' />
      </>,
    );

    expect(screen.getByTestId('separator-1')).toBeInTheDocument();

    expect(screen.getByTestId('separator-2')).toBeInTheDocument();
  });

  it('applies default separator styles', () => {
    render(<Separator data-testid='separator' />);

    const separator = screen.getByTestId('separator');

    expect(separator).toHaveClass('shrink-0');
    expect(separator).toHaveClass('bg-[var(--display-separator)]');
    expect(separator).toHaveClass('transition-[background-color]');
  });
});
