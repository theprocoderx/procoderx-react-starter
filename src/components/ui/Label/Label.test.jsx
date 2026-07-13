import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Label from './Label';

describe('Label', () => {
  describe('Rendering', () => {
    it('renders children', () => {
      render(<Label htmlFor='email'>Email Address</Label>);

      expect(screen.getByText('Email Address')).toBeInTheDocument();
    });

    it('renders a label element', () => {
      render(<Label htmlFor='email'>Email</Label>);

      const label = screen.getByText('Email').closest('label');

      expect(label).toBeInTheDocument();
      expect(label).toBeInstanceOf(HTMLLabelElement);
    });

    it('applies custom className', () => {
      render(
        <Label htmlFor='email' className='custom-class'>
          Email
        </Label>,
      );

      expect(screen.getByText('Email').closest('label')).toHaveClass('custom-class');
    });
  });

  describe('Association', () => {
    it('supports htmlFor', () => {
      render(<Label htmlFor='email'>Email</Label>);

      expect(screen.getByText('Email').closest('label')).toHaveAttribute('for', 'email');
    });
  });

  describe('States', () => {
    it('renders required indicator', () => {
      render(
        <Label htmlFor='email' required>
          Email
        </Label>,
      );

      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('marks required indicator as aria-hidden', () => {
      render(
        <Label htmlFor='email' required>
          Email
        </Label>,
      );

      expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders visually hidden label', () => {
      render(
        <Label htmlFor='email' hidden>
          Email
        </Label>,
      );

      expect(screen.getByText('Email').closest('label')).toHaveClass('sr-only');
    });

    it('renders disabled label', () => {
      render(
        <Label htmlFor='email' disabled>
          Email
        </Label>,
      );

      expect(screen.getByText('Email')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(
        <Label htmlFor='email' size='sm'>
          Small
        </Label>,
      );

      expect(screen.getByText('Small')).toBeInTheDocument();
    });

    it('renders medium size', () => {
      render(
        <Label htmlFor='email' size='md'>
          Medium
        </Label>,
      );

      expect(screen.getByText('Medium')).toBeInTheDocument();
    });

    it('renders large size', () => {
      render(
        <Label htmlFor='email' size='lg'>
          Large
        </Label>,
      );

      expect(screen.getByText('Large')).toBeInTheDocument();
    });
  });

  describe('Ref', () => {
    it('forwards ref', () => {
      const ref = createRef();

      render(
        <Label ref={ref} htmlFor='email'>
          Email
        </Label>,
      );

      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
    });
  });

  describe('Accessibility', () => {
    it('warns when htmlFor is missing', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(<Label>Email</Label>);

      expect(warn).toHaveBeenCalledTimes(1);

      warn.mockRestore();
    });
  });
});
