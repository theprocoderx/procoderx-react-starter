import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Textarea from './Textarea';

describe('Textarea', () => {
  describe('Rendering', () => {
    it('renders a textarea element', () => {
      render(<Textarea aria-label='Message' />);

      expect(
        screen.getByRole('textbox', {
          name: /message/i,
        }),
      ).toBeInTheDocument();
    });

    it('renders placeholder', () => {
      render(<Textarea aria-label='Message' placeholder='Enter message' />);

      expect(screen.getByPlaceholderText(/enter message/i)).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Textarea aria-label='Message' className='custom-class' />);

      expect(screen.getByRole('textbox')).toHaveClass('custom-class');
    });

    it('forwards ref', () => {
      const ref = createRef();

      render(<Textarea ref={ref} aria-label='Message' />);

      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });

    it('generates an id automatically', () => {
      render(<Textarea aria-label='Message' />);

      expect(screen.getByRole('textbox')).toHaveAttribute('id');
    });
  });

  describe('Variants', () => {
    it.each(['default', 'filled', 'ghost'])('renders %s variant', (variant) => {
      render(<Textarea aria-label='Message' variant={variant} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it.each(['sm', 'md', 'lg'])('renders %s size', (size) => {
      render(<Textarea aria-label='Message' size={size} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Resize', () => {
    it.each(['none', 'vertical', 'horizontal', 'both'])('renders %s resize option', (resize) => {
      render(<Textarea aria-label='Message' resize={resize} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Messages', () => {
    it('renders helper text', () => {
      render(<Textarea aria-label='Message' helperText='Maximum 500 characters.' />);

      expect(screen.getByText(/maximum 500 characters/i)).toBeInTheDocument();
    });

    it('renders error message', () => {
      render(<Textarea aria-label='Message' invalid errorMessage='Message is required.' />);

      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    it('renders success message', () => {
      render(<Textarea aria-label='Message' success successMessage='Looks good!' />);

      expect(screen.getByText(/looks good/i)).toBeInTheDocument();
    });

    it('prioritizes error over success', () => {
      render(
        <Textarea
          aria-label='Message'
          invalid
          success
          errorMessage='Invalid message'
          successMessage='Looks good'
        />,
      );

      expect(screen.getByText(/invalid message/i)).toBeInTheDocument();

      expect(screen.queryByText(/looks good/i)).not.toBeInTheDocument();
    });
  });

  describe('State', () => {
    it('renders disabled textarea', () => {
      render(<Textarea aria-label='Message' disabled />);

      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('renders readonly textarea', () => {
      render(<Textarea aria-label='Message' readOnly />);

      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('renders required textarea', () => {
      render(<Textarea aria-label='Message' required />);

      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('sets aria-invalid', () => {
      render(<Textarea aria-label='Message' invalid />);

      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('renders full width', () => {
      render(<Textarea aria-label='Message' fullWidth />);

      expect(screen.getByRole('textbox').parentElement).toHaveClass('w-full');
    });
  });

  describe('Controlled Textarea', () => {
    it('updates controlled value', async () => {
      const user = userEvent.setup();

      function Demo() {
        const [value, setValue] = React.useState('');

        return <Textarea aria-label='Message' value={value} onChange={(e) => setValue(e.target.value)} />;
      }

      render(<Demo />);

      const textarea = screen.getByRole('textbox');

      await user.type(textarea, 'hello');

      expect(textarea).toHaveValue('hello');
    });
  });

  describe('Uncontrolled Textarea', () => {
    it('renders default value', () => {
      render(<Textarea aria-label='Message' defaultValue='Hello World' />);

      expect(screen.getByRole('textbox')).toHaveValue('Hello World');
    });
  });

  describe('Native Attributes', () => {
    it('supports rows attribute', () => {
      render(<Textarea aria-label='Message' rows={8} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '8');
    });

    it('supports name attribute', () => {
      render(<Textarea aria-label='Message' name='message' />);

      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'message');
    });

    it('supports custom id', () => {
      render(<Textarea aria-label='Message' id='message-box' />);

      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'message-box');
    });
  });

  describe('Interaction', () => {
    it('fires onChange', async () => {
      const user = userEvent.setup();

      const handleChange = vi.fn();

      render(<Textarea aria-label='Message' onChange={handleChange} />);

      await user.type(screen.getByRole('textbox'), 'abc');

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
