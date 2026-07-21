import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Bell } from 'lucide-react';
import { describe, expect, it, vi } from 'vitest';

import Alert from './Alert';

describe('Alert', () => {
  describe('Rendering', () => {
    it('renders children', () => {
      render(<Alert>Alert message</Alert>);

      expect(screen.getByText(/alert message/i)).toBeInTheDocument();
    });

    it('renders title', () => {
      render(<Alert title='Notice'>Alert message</Alert>);

      expect(screen.getByText(/notice/i)).toBeInTheDocument();
    });

    it('renders title and description together', () => {
      render(<Alert title='Success'>Your changes have been saved.</Alert>);

      expect(screen.getByText(/success/i)).toBeInTheDocument();
      expect(screen.getByText(/your changes have been saved/i)).toBeInTheDocument();
    });

    it('renders without title', () => {
      render(<Alert>Only description</Alert>);

      expect(screen.getByText(/only description/i)).toBeInTheDocument();
    });

    it('renders without children', () => {
      render(<Alert title='Notice' />);

      expect(screen.getByText(/notice/i)).toBeInTheDocument();
    });

    it('renders without title and children', () => {
      render(<Alert />);

      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders ReactNode children', () => {
      render(
        <Alert>
          <strong>Important</strong>
        </Alert>,
      );

      expect(screen.getByText(/important/i)).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Alert className='custom-class'>Alert message</Alert>);

      expect(screen.getByRole('status')).toHaveClass('custom-class');
    });

    it('forwards ref', () => {
      const ref = createRef();

      render(<Alert ref={ref}>Alert message</Alert>);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Variants', () => {
    it.each(['default', 'info', 'success', 'warning', 'error'])('renders %s variant', (variant) => {
      render(<Alert variant={variant}>Alert message</Alert>);

      expect(screen.getByText(/alert message/i)).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders default icon', () => {
      render(<Alert>Alert message</Alert>);

      expect(screen.getByRole('status').querySelector('svg')).toBeInTheDocument();
    });

    it('renders custom icon', () => {
      render(<Alert icon={<Bell data-testid='custom-icon' />}>Alert message</Alert>);

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  describe('Dismiss', () => {
    it('does not render dismiss button by default', () => {
      render(<Alert>Alert message</Alert>);

      expect(
        screen.queryByRole('button', {
          name: /dismiss alert/i,
        }),
      ).not.toBeInTheDocument();
    });

    it('renders dismiss button', () => {
      render(<Alert dismissible>Alert message</Alert>);

      expect(
        screen.getByRole('button', {
          name: /dismiss alert/i,
        }),
      ).toBeInTheDocument();
    });

    it('fires onDismiss when close button is clicked', async () => {
      const user = userEvent.setup();

      const handleDismiss = vi.fn();

      render(
        <Alert dismissible onDismiss={handleDismiss}>
          Alert message
        </Alert>,
      );

      await user.click(
        screen.getByRole('button', {
          name: /dismiss alert/i,
        }),
      );

      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard interaction', async () => {
      const user = userEvent.setup();

      const handleDismiss = vi.fn();

      render(
        <Alert dismissible onDismiss={handleDismiss}>
          Alert message
        </Alert>,
      );

      await user.tab();

      const button = screen.getByRole('button', {
        name: /dismiss alert/i,
      });

      expect(button).toHaveFocus();

      await user.keyboard('{Enter}');

      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it('does not call onDismiss when dismiss button is not rendered', () => {
      const handleDismiss = vi.fn();

      render(<Alert onDismiss={handleDismiss}>Alert message</Alert>);

      expect(handleDismiss).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('uses status role for default variant', () => {
      render(<Alert>Alert message</Alert>);

      expect(screen.getByRole('status')).toHaveAttribute('role', 'status');
    });

    it('uses alert role for error variant', () => {
      render(<Alert variant='error'>Error occurred</Alert>);

      expect(screen.getByRole('alert')).toHaveAttribute('role', 'alert');
    });

    it('supports custom role', () => {
      render(<Alert role='region'>Alert message</Alert>);

      expect(screen.queryByRole('status')).not.toBeInTheDocument();

      expect(screen.getByRole('region')).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('forwards native HTML props', () => {
      render(
        <Alert data-testid='alert' data-custom='demo'>
          Alert message
        </Alert>,
      );

      expect(screen.getByTestId('alert')).toHaveAttribute('data-custom', 'demo');
    });
  });

  describe('Updates', () => {
    it('supports rerendering with different variants', () => {
      const { rerender } = render(<Alert variant='info'>Alert message</Alert>);

      rerender(<Alert variant='success'>Alert message</Alert>);

      expect(screen.getByText(/alert message/i)).toBeInTheDocument();
    });
  });
});
