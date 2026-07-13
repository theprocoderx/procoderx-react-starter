import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Eye, Mail } from 'lucide-react';
import { describe, expect, it, vi } from 'vitest';

import Input from './Input';

describe('Input', () => {
  describe('Rendering', () => {
    it('renders an input element', () => {
      render(<Input aria-label='Name' />);

      expect(
        screen.getByRole('textbox', {
          name: /name/i,
        }),
      ).toBeInTheDocument();
    });

    it('renders placeholder', () => {
      render(<Input aria-label='Name' placeholder='Enter name' />);

      expect(screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Input aria-label='Name' className='custom-class' />);

      expect(screen.getByRole('textbox')).toHaveClass('custom-class');
    });

    it('forwards ref', () => {
      const ref = createRef();

      render(<Input ref={ref} aria-label='Name' />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    it('generates an id automatically', () => {
      render(<Input aria-label='Name' />);

      expect(screen.getByRole('textbox')).toHaveAttribute('id');
    });
  });

  describe('Variants', () => {
    it.each(['default', 'filled', 'ghost'])('renders %s variant', (variant) => {
      render(<Input aria-label='Name' variant={variant} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it.each(['sm', 'md', 'lg'])('renders %s size', (size) => {
      render(<Input aria-label='Name' size={size} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders start icon', () => {
      render(<Input aria-label='Email' startIcon={<Mail data-testid='start-icon' />} />);

      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('renders end icon', () => {
      render(<Input aria-label='Password' endIcon={<Eye data-testid='end-icon' />} />);

      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('renders both icons', () => {
      render(
        <Input
          aria-label='Search'
          startIcon={<Mail data-testid='start-icon' />}
          endIcon={<Eye data-testid='end-icon' />}
        />,
      );

      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });
  });

  describe('Messages', () => {
    it('renders helper text', () => {
      render(<Input aria-label='Email' helperText="We'll never share your email." />);

      expect(screen.getByText(/we'll never share your email/i)).toBeInTheDocument();
    });

    it('renders error message', () => {
      render(<Input aria-label='Email' invalid errorMessage='Email is required.' />);

      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });

    it('renders success message', () => {
      render(<Input aria-label='Email' success successMessage='Looks good!' />);

      expect(screen.getByText(/looks good/i)).toBeInTheDocument();
    });

    it('prioritizes error over success', () => {
      render(
        <Input aria-label='Email' invalid success errorMessage='Invalid email' successMessage='Looks good' />,
      );

      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();

      expect(screen.queryByText(/looks good/i)).not.toBeInTheDocument();
    });
  });

  describe('State', () => {
    it('renders disabled input', () => {
      render(<Input aria-label='Name' disabled />);

      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('renders readOnly input', () => {
      render(<Input aria-label='Name' readOnly />);

      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('renders required input', () => {
      render(<Input aria-label='Name' required />);

      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('sets aria-invalid', () => {
      render(<Input aria-label='Email' invalid />);

      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('renders full width', () => {
      render(<Input aria-label='Name' fullWidth />);

      expect(screen.getByRole('textbox').parentElement?.parentElement).toHaveClass('w-full');
    });
  });

  describe('Controlled Input', () => {
    it('updates controlled value', async () => {
      const user = userEvent.setup();

      function Demo() {
        const [value, setValue] = React.useState('');

        return <Input aria-label='Email' value={value} onChange={(e) => setValue(e.target.value)} />;
      }

      render(<Demo />);

      const input = screen.getByRole('textbox');

      await user.type(input, 'hello');

      expect(input).toHaveValue('hello');
    });
  });

  describe('Uncontrolled Input', () => {
    it('renders default value', () => {
      render(<Input aria-label='Name' defaultValue='John Doe' />);

      expect(screen.getByRole('textbox')).toHaveValue('John Doe');
    });
  });

  describe('Native Attributes', () => {
    it('supports input type', () => {
      render(<Input aria-label='Password' type='password' />);

      expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
    });

    it('supports name attribute', () => {
      render(<Input aria-label='Email' name='email' />);

      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    });

    it('supports custom id', () => {
      render(<Input aria-label='Email' id='email-input' />);

      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email-input');
    });
  });

  describe('Interaction', () => {
    it('fires onChange', async () => {
      const user = userEvent.setup();

      const handleChange = vi.fn();

      render(<Input aria-label='Name' onChange={handleChange} />);

      await user.type(screen.getByRole('textbox'), 'abc');

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
