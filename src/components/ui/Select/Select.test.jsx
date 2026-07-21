import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Select from './Select';

describe('Select', () => {
  describe('Rendering', () => {
    it('renders a select element', () => {
      render(
        <Select aria-label='Country'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders placeholder', () => {
      render(
        <Select aria-label='Country' placeholder='Choose a country'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByText(/choose a country/i)).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <Select aria-label='Country'>
          <option value='india'>India</option>
          <option value='usa'>United States</option>
        </Select>,
      );

      expect(screen.getByRole('option', { name: /india/i })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: /united states/i })).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <Select aria-label='Country' className='custom-class'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveClass('custom-class');
    });

    it('forwards ref', () => {
      const ref = createRef();

      render(
        <Select ref={ref} aria-label='Country'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(ref.current).toBeInstanceOf(HTMLSelectElement);
    });

    it('generates an id automatically', () => {
      render(
        <Select aria-label='Country'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveAttribute('id');
    });
  });

  describe('Variants', () => {
    it.each(['default', 'filled', 'ghost'])('renders %s variant', (variant) => {
      render(
        <Select aria-label='Country' variant={variant}>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it.each(['sm', 'md', 'lg'])('renders %s size', (size) => {
      render(
        <Select aria-label='Country' size={size}>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Messages', () => {
    it('renders helper text', () => {
      render(
        <Select aria-label='Country' helperText='Select your country'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByText(/select your country/i)).toBeInTheDocument();
    });

    it('renders error message', () => {
      render(
        <Select aria-label='Country' invalid errorMessage='Country is required.'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByText(/country is required/i)).toBeInTheDocument();
    });

    it('renders success message', () => {
      render(
        <Select aria-label='Country' success successMessage='Looks good!'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByText(/looks good/i)).toBeInTheDocument();
    });

    it('prioritizes error over success', () => {
      render(
        <Select
          aria-label='Country'
          invalid
          success
          errorMessage='Invalid selection'
          successMessage='Looks good'
        >
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByText(/invalid selection/i)).toBeInTheDocument();

      expect(screen.queryByText(/looks good/i)).not.toBeInTheDocument();
    });
  });

  describe('State', () => {
    it('renders disabled select', () => {
      render(
        <Select aria-label='Country' disabled>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('renders required select', () => {
      render(
        <Select aria-label='Country' required>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toBeRequired();
    });

    it('sets aria-invalid', () => {
      render(
        <Select aria-label='Country' invalid>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('renders full width', () => {
      render(
        <Select aria-label='Country' fullWidth>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox').parentElement?.parentElement).toHaveClass('w-full');
    });
  });

  describe('Controlled Select', () => {
    it('updates controlled value', async () => {
      const user = userEvent.setup();

      function Demo() {
        const [value, setValue] = React.useState('');

        return (
          <Select aria-label='Country' value={value} onChange={(e) => setValue(e.target.value)}>
            <option value='india'>India</option>
            <option value='usa'>United States</option>
          </Select>
        );
      }

      render(<Demo />);

      const select = screen.getByRole('combobox');

      await user.selectOptions(select, 'usa');

      expect(select).toHaveValue('usa');
    });
  });

  describe('Uncontrolled Select', () => {
    it('renders default value', () => {
      render(
        <Select aria-label='Country' defaultValue='india'>
          <option value='india'>India</option>
          <option value='usa'>United States</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveValue('india');
    });
  });

  describe('Native Attributes', () => {
    it('supports name attribute', () => {
      render(
        <Select aria-label='Country' name='country'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveAttribute('name', 'country');
    });

    it('supports custom id', () => {
      render(
        <Select aria-label='Country' id='country-select'>
          <option value='india'>India</option>
        </Select>,
      );

      expect(screen.getByRole('combobox')).toHaveAttribute('id', 'country-select');
    });

    it('supports multiple', () => {
      render(
        <Select aria-label='Countries' multiple>
          <option value='india'>India</option>
          <option value='usa'>United States</option>
        </Select>,
      );

      expect(screen.getByRole('listbox')).toHaveAttribute('multiple');
    });
  });

  describe('Interaction', () => {
    it('fires onChange', async () => {
      const user = userEvent.setup();

      const handleChange = vi.fn();

      render(
        <Select aria-label='Country' onChange={handleChange}>
          <option value='india'>India</option>
          <option value='usa'>United States</option>
        </Select>,
      );

      await user.selectOptions(screen.getByRole('combobox'), 'usa');

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
