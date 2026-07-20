import { createRef, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Radio from './Radio';
import userEvent from '@testing-library/user-event';

describe('Radio', () => {
  describe('Rendering', () => {
    it('renders radio', () => {
      render(<Radio aria-label='React' />);

      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('renders helper text', () => {
      render(<Radio aria-label='React' helperText='Select one option' />);

      expect(screen.getByText('Select one option')).toBeInTheDocument();
    });

    it('renders error message', () => {
      render(<Radio aria-label='React' invalid errorMessage='Selection is required' />);

      expect(screen.getByText('Selection is required')).toBeInTheDocument();
    });

    it('renders success message', () => {
      render(<Radio aria-label='React' success successMessage='Looks good' />);

      expect(screen.getByText('Looks good')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Radio aria-label='React' className='custom-class' />);

      expect(screen.getByRole('radio')).toHaveClass('custom-class');
    });
  });

  describe('Ref', () => {
    it('forwards ref', () => {
      const ref = createRef();

      render(<Radio ref={ref} aria-label='React' />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current.type).toBe('radio');
    });
  });

  describe('Native Props', () => {
    it('supports id', () => {
      render(<Radio id='framework' aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveAttribute('id', 'framework');
    });

    it('supports name', () => {
      render(<Radio name='framework' aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveAttribute('name', 'framework');
    });

    it('supports value', () => {
      render(<Radio value='react' aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveAttribute('value', 'react');
    });

    it('supports disabled', () => {
      render(<Radio disabled aria-label='React' />);

      expect(screen.getByRole('radio')).toBeDisabled();
    });

    it('supports required', () => {
      render(<Radio required aria-label='React' />);

      expect(screen.getByRole('radio')).toBeRequired();
    });

    it('supports checked', () => {
      render(<Radio checked aria-label='React' onChange={() => {}} />);

      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('supports defaultChecked', () => {
      render(<Radio defaultChecked aria-label='React' />);

      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('supports autoFocus', () => {
      render(<Radio autoFocus aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveFocus();
    });

    it('supports readOnly', () => {
      render(<Radio readOnly aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveAttribute('readonly');
    });

    it('supports onChange', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Radio aria-label='React' onChange={handleChange} />);

      await user.click(screen.getByRole('radio'));

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Generated IDs', () => {
    it('generates an id when one is not provided', () => {
      render(<Radio aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveAttribute('id');
    });

    it('uses provided id', () => {
      render(<Radio id='custom-id' aria-label='React' />);

      expect(screen.getByRole('radio')).toHaveAttribute('id', 'custom-id');
    });

    it('supports onChange', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<Radio aria-label='React' onChange={handleChange} />);

      await user.click(screen.getByRole('radio'));

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    describe('Variants', () => {
      it('renders default variant', () => {
        render(<Radio aria-label='React' variant='default' />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
      });

      it('renders outline variant', () => {
        render(<Radio aria-label='React' variant='outline' />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
      });

      it('renders invalid variant', () => {
        render(<Radio aria-label='React' invalid />);

        expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
      });

      it('renders success variant', () => {
        render(<Radio aria-label='React' success />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
      });
    });

    describe('Sizes', () => {
      it('renders small size', () => {
        render(<Radio aria-label='React' size='sm' />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
      });

      it('renders medium size', () => {
        render(<Radio aria-label='React' size='md' />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
      });

      it('renders large size', () => {
        render(<Radio aria-label='React' size='lg' />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
      });
    });

    describe('Controlled', () => {
      it('updates controlled state', async () => {
        const user = userEvent.setup();

        function ControlledRadio() {
          const [value, setValue] = useState('react');

          return (
            <>
              <Radio
                aria-label='React'
                name='framework'
                value='react'
                checked={value === 'react'}
                onChange={(e) => setValue(e.target.value)}
              />

              <Radio
                aria-label='Vue'
                name='framework'
                value='vue'
                checked={value === 'vue'}
                onChange={(e) => setValue(e.target.value)}
              />
            </>
          );
        }

        render(<ControlledRadio />);

        const react = screen.getByRole('radio', { name: 'React' });
        const vue = screen.getByRole('radio', { name: 'Vue' });

        expect(react).toBeChecked();
        expect(vue).not.toBeChecked();

        await user.click(vue);

        expect(vue).toBeChecked();
        expect(react).not.toBeChecked();
      });
    });

    describe('Uncontrolled', () => {
      it('supports defaultChecked', () => {
        render(<Radio aria-label='React' defaultChecked />);

        expect(screen.getByRole('radio')).toBeChecked();
      });
    });

    describe('Edge Cases', () => {
      it('accepts custom className', () => {
        render(<Radio aria-label='React' className='custom-class' />);

        expect(screen.getByRole('radio')).toHaveClass('custom-class');
      });

      it('accepts name and value', () => {
        render(<Radio aria-label='React' name='framework' value='react' />);

        const radio = screen.getByRole('radio');

        expect(radio).toHaveAttribute('name', 'framework');
        expect(radio).toHaveAttribute('value', 'react');
      });

      it('supports required attribute', () => {
        render(<Radio aria-label='React' required />);

        expect(screen.getByRole('radio')).toBeRequired();
      });

      it('supports disabled attribute', () => {
        render(<Radio aria-label='React' disabled />);

        expect(screen.getByRole('radio')).toBeDisabled();
      });

      it('supports autoFocus', () => {
        render(<Radio aria-label='React' autoFocus />);

        expect(screen.getByRole('radio')).toHaveFocus();
      });
    });
  });
});
