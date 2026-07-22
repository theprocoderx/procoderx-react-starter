import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Avatar from './Avatar';

describe('Avatar', () => {
  describe('Rendering', () => {
    it('renders image when src is provided', () => {
      render(<Avatar src='https://example.com/avatar.jpg' alt='John Doe' />);

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders fallback when src is not provided', () => {
      render(<Avatar name='John Doe' />);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders custom fallback', () => {
      render(<Avatar fallback='PX' name='John Doe' />);

      expect(screen.getByText('PX')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Avatar name='John Doe' className='custom-class' />);

      expect(screen.getByText('JD').parentElement).toHaveClass('custom-class');
    });

    it('forwards ref', () => {
      const ref = createRef();

      render(<Avatar ref={ref} name='John Doe' />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Initials', () => {
    it('renders initials from first and last name', () => {
      render(<Avatar name='John Doe' />);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders first two letters for a single word', () => {
      render(<Avatar name='John' />);

      expect(screen.getByText('JO')).toBeInTheDocument();
    });

    it('renders initials for multiple words', () => {
      render(<Avatar name='John Michael Doe' />);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders ? when name is missing', () => {
      render(<Avatar />);

      expect(screen.getByText('?')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it.each(['default', 'filled', 'outline', 'ghost', 'soft'])('renders %s variant', (variant) => {
      render(<Avatar variant={variant} name='John Doe' />);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it.each(['xs', 'sm', 'md', 'lg', 'xl', '2xl'])('renders %s size', (size) => {
      render(<Avatar size={size} name='John Doe' />);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  describe('Shapes', () => {
    it.each(['circle', 'rounded', 'square'])('renders %s shape', (shape) => {
      render(<Avatar shape={shape} name='John Doe' />);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  describe('Fallback Colors', () => {
    it.each(['neutral', 'primary', 'success', 'warning', 'danger'])(
      'renders %s fallback color',
      (fallbackColor) => {
        render(<Avatar fallbackColor={fallbackColor} name='John Doe' />);

        expect(screen.getByText('JD')).toBeInTheDocument();
      },
    );
  });

  describe('Image', () => {
    it('calls onLoad', () => {
      const handleLoad = vi.fn();

      render(<Avatar src='https://example.com/avatar.jpg' alt='John Doe' onLoad={handleLoad} />);

      screen.getByRole('img').dispatchEvent(new Event('load'));

      expect(handleLoad).toHaveBeenCalledTimes(1);
    });

    it('calls onError', () => {
      const handleError = vi.fn();

      render(
        <Avatar src='https://example.com/avatar.jpg' alt='John Doe' name='John Doe' onError={handleError} />,
      );

      screen.getByRole('img').dispatchEvent(new Event('error'));

      expect(handleError).toHaveBeenCalledTimes(1);
    });

    it('shows fallback after image error', () => {
      render(<Avatar src='https://example.com/avatar.jpg' alt='John Doe' name='John Doe' />);

      const image = screen.getByRole('img');

      fireEvent.error(image);

      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders image with alt text', () => {
      render(<Avatar src='https://example.com/avatar.jpg' alt='John Doe' />);

      expect(
        screen.getByRole('img', {
          name: 'John Doe',
        }),
      ).toBeInTheDocument();
    });

    it('marks fallback as aria-hidden', () => {
      render(<Avatar name='John Doe' />);

      expect(screen.getByText('JD')).toHaveAttribute('aria-hidden', 'true');
    });

    describe('Image Attributes', () => {
      it('renders lazy loaded image', () => {
        render(<Avatar src='/avatar.jpg' alt='John Doe' />);

        expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy');
      });

      it('renders draggable=false', () => {
        render(<Avatar src='/avatar.jpg' alt='John Doe' />);

        expect(screen.getByRole('img')).toHaveAttribute('draggable', 'false');
      });

      it('uses empty alt by default', () => {
        const { container } = render(<Avatar src='/avatar.jpg' />);

        const image = container.querySelector('img');

        expect(image).toHaveAttribute('alt', '');
      });
    });

    describe('Class Names', () => {
      it('applies imageClassName', () => {
        render(<Avatar src='/avatar.jpg' alt='John Doe' imageClassName='image-class' />);

        expect(screen.getByRole('img')).toHaveClass('image-class');
      });

      it('applies fallbackClassName', () => {
        render(<Avatar name='John Doe' fallbackClassName='fallback-class' />);

        expect(screen.getByText('JD')).toHaveClass('fallback-class');
      });
    });

    describe('Native Props', () => {
      it('forwards native props', () => {
        render(<Avatar name='John Doe' data-testid='avatar' />);

        expect(screen.getByTestId('avatar')).toBeInTheDocument();
      });
    });

    describe('Image Recovery', () => {
      it('calls onError callback', () => {
        const handleError = vi.fn();

        render(<Avatar src='/avatar.jpg' alt='John Doe' onError={handleError} />);

        fireEvent.error(screen.getByAltText('John Doe'));

        expect(handleError).toHaveBeenCalledTimes(1);
      });

      it('calls onError callback', () => {
        const handleError = vi.fn();

        render(<Avatar src='/avatar.jpg' alt='John Doe' onError={handleError} />);

        fireEvent.error(screen.getByAltText('John Doe'));

        expect(handleError).toHaveBeenCalledTimes(1);
      });
    });
  });
});
