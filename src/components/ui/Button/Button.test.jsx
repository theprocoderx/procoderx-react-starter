import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArrowRight, Download } from 'lucide-react';
import { describe, expect, it, vi } from 'vitest';

import Button from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children', () => {
      render(<Button>Submit</Button>);

      expect(
        screen.getByRole('button', {
          name: /submit/i,
        }),
      ).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Button className='custom-class'>Button</Button>);

      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('supports button type', () => {
      render(<Button type='submit'>Submit</Button>);

      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('forwards ref', () => {
      const ref = createRef();

      render(<Button ref={ref}>Button</Button>);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('Variants', () => {
    it.each(['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'])(
      'renders %s variant',
      (variant) => {
        render(<Button variant={variant}>Button</Button>);

        expect(screen.getByRole('button')).toBeInTheDocument();
      },
    );
  });

  describe('Sizes', () => {
    it.each(['sm', 'md', 'lg', 'icon'])('renders %s size', (size) => {
      render(
        <Button size={size} ariaLabel={size === 'icon' ? 'Icon Button' : undefined}>
          {size === 'icon' ? '+' : 'Button'}
        </Button>,
      );

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders start icon', () => {
      render(<Button startIcon={<Download data-testid='start-icon' />}>Download</Button>);

      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('renders end icon', () => {
      render(<Button endIcon={<ArrowRight data-testid='end-icon' />}>Continue</Button>);

      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('hides icons while loading', () => {
      render(
        <Button loading startIcon={<Download data-testid='start-icon' />}>
          Save
        </Button>,
      );

      expect(screen.queryByTestId('start-icon')).not.toBeInTheDocument();
    });
  });

  describe('Loading', () => {
    it('renders loading spinner', () => {
      render(<Button loading>Saving</Button>);

      expect(
        screen.getByRole('status', {
          name: /loading/i,
        }),
      ).toBeInTheDocument();
    });

    it('sets aria-busy', () => {
      render(<Button loading>Saving</Button>);

      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });

    it('disables button while loading', () => {
      render(<Button loading>Saving</Button>);

      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('prevents click while loading', async () => {
      const user = userEvent.setup();

      const handleClick = vi.fn();

      render(
        <Button loading onClick={handleClick}>
          Save
        </Button>,
      );

      await user.click(screen.getByRole('button'));

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('State', () => {
    it('renders disabled button', () => {
      render(<Button disabled>Submit</Button>);

      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders full width button', () => {
      render(<Button fullWidth>Continue</Button>);

      expect(screen.getByRole('button')).toHaveClass('w-full');
    });

    it('supports aria-label', () => {
      render(<Button ariaLabel='Custom Button'>+</Button>);

      expect(
        screen.getByRole('button', {
          name: /custom button/i,
        }),
      ).toBeInTheDocument();
    });

    it('fires click event', async () => {
      const user = userEvent.setup();

      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>Click Me</Button>);

      await user.click(screen.getByRole('button'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Links', () => {
    it('renders anchor when href is provided', () => {
      render(<Button href='https://example.com'>Visit</Button>);

      expect(
        screen.getByRole('link', {
          name: /visit/i,
        }),
      ).toBeInTheDocument();
    });

    it('applies target attribute', () => {
      render(<Button href='https://example.com'>Visit</Button>);

      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('applies rel for external links', () => {
      render(<Button href='https://example.com'>Visit</Button>);

      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('supports download attribute', () => {
      render(
        <Button href='/resume.pdf' download>
          Resume
        </Button>,
      );

      expect(screen.getByRole('link')).toHaveAttribute('download');
    });

    it('disables link when disabled', () => {
      const { container } = render(
        <Button href='https://example.com' disabled>
          Visit
        </Button>,
      );

      const anchor = container.querySelector('a');

      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute('aria-disabled', 'true');
      expect(anchor).not.toHaveAttribute('href');
    });
  });
});
