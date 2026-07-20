import { createRef, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  describe('Rendering', () => {
    it('renders checkbox', () => {
      render(<Checkbox aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Checkbox aria-label='Terms' className='custom-class' />);

      expect(screen.getByRole('checkbox')).toHaveClass('custom-class');
    });

    it('renders helper text', () => {
      render(<Checkbox aria-label='Terms' helperText='Accept the terms.' />);

      expect(screen.getByText('Accept the terms.')).toBeInTheDocument();
    });

    it('renders error message', () => {
      render(<Checkbox aria-label='Terms' invalid errorMessage='Required' />);

      expect(screen.getByText('Required')).toBeInTheDocument();
    });

    it('renders success message', () => {
      render(<Checkbox aria-label='Terms' success successMessage='Looks good!' />);

      expect(screen.getByText('Looks good!')).toBeInTheDocument();
    });
  });

  describe('Ref', () => {
    it('forwards ref', () => {
      const ref = createRef();

      render(<Checkbox ref={ref} aria-label='Terms' />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('Native Props', () => {
    it('supports id', () => {
      render(<Checkbox id='terms' aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'terms');
    });

    it('supports name', () => {
      render(<Checkbox name='terms' aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'terms');
    });

    it('supports value', () => {
      render(<Checkbox value='accepted' aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toHaveAttribute('value', 'accepted');
    });

    it('supports required', () => {
      render(<Checkbox required aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toBeRequired();
    });

    it('supports disabled', () => {
      render(<Checkbox disabled aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('supports readOnly', () => {
      render(<Checkbox readOnly aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toHaveAttribute('readonly');
    });
  });

  describe('Controlled', () => {
    function Demo() {
      const [checked, setChecked] = useState(false);

      return <Checkbox aria-label='Terms' checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
    }

    it('updates controlled state', async () => {
      const user = userEvent.setup();

      render(<Demo />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);

      expect(checkbox).toBeChecked();
    });
  });

  describe('Uncontrolled', () => {
    it('supports defaultChecked', () => {
      render(<Checkbox defaultChecked aria-label='Terms' />);

      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });

  describe('Interaction', () => {
    it('fires onChange', async () => {
      const user = userEvent.setup();

      const handleChange = vi.fn();

      render(<Checkbox aria-label='Terms' onChange={handleChange} />);

      await user.click(screen.getByRole('checkbox'));

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('toggles checked state', async () => {
      const user = userEvent.setup();

      render(<Checkbox aria-label='Terms' />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);

      expect(checkbox).toBeChecked();

      await user.click(checkbox);

      expect(checkbox).not.toBeChecked();
    });

    it('does not toggle when disabled', async () => {
      const user = userEvent.setup();

      render(<Checkbox disabled aria-label='Terms' />);

      const checkbox = screen.getByRole('checkbox');

      await user.click(checkbox);

      expect(checkbox).not.toBeChecked();
    });

    // Part -2

    describe('Accessibility', () => {
      it('supports aria-label', () => {
        render(<Checkbox aria-label='Accept Terms' />);

        expect(
          screen.getByRole('checkbox', {
            name: 'Accept Terms',
          }),
        ).toBeInTheDocument();
      });

      it('supports aria-labelledby', () => {
        render(
          <>
            <span id='checkbox-label'>Accept Terms</span>

            <Checkbox aria-labelledby='checkbox-label' />
          </>,
        );

        expect(
          screen.getByRole('checkbox', {
            name: 'Accept Terms',
          }),
        ).toBeInTheDocument();
      });

      it('supports aria-describedby', () => {
        render(
          <>
            <p id='helper'>Additional information</p>

            <Checkbox aria-label='Terms' aria-describedby='helper' />
          </>,
        );

        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-describedby', 'helper');
      });

      it('sets aria-invalid when invalid', () => {
        render(<Checkbox aria-label='Terms' invalid />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
      });

      it('does not set aria-invalid by default', () => {
        render(<Checkbox aria-label='Terms' />);

        expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-invalid');
      });
    });

    describe('Validation', () => {
      it('renders helper text only', () => {
        render(<Checkbox aria-label='Terms' helperText='Please accept.' />);

        expect(screen.getByText('Please accept.')).toBeInTheDocument();
      });

      it('renders error message', () => {
        render(<Checkbox aria-label='Terms' invalid errorMessage='Required' />);

        expect(screen.getByText('Required')).toBeInTheDocument();
      });

      it('renders success message', () => {
        render(<Checkbox aria-label='Terms' success successMessage='Accepted' />);

        expect(screen.getByText('Accepted')).toBeInTheDocument();
      });

      it('prioritizes error over success', () => {
        render(<Checkbox aria-label='Terms' invalid success errorMessage='Error' successMessage='Success' />);

        expect(screen.getByText('Error')).toBeInTheDocument();

        expect(screen.queryByText('Success')).not.toBeInTheDocument();
      });
    });

    describe('States', () => {
      it('supports indeterminate state', () => {
        render(<Checkbox aria-label='Terms' indeterminate />);

        const checkbox = screen.getByRole('checkbox');

        expect(checkbox.indeterminate).toBe(true);
      });

      it('sets checked data-state', () => {
        render(<Checkbox aria-label='Terms' checked readOnly />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'checked');
      });

      it('sets unchecked data-state', () => {
        render(<Checkbox aria-label='Terms' />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'unchecked');
      });

      it('sets indeterminate data-state', () => {
        render(<Checkbox aria-label='Terms' indeterminate />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'indeterminate');
      });

      it('prevents changes when readOnly', async () => {
        const user = userEvent.setup();

        render(<Checkbox aria-label='Terms' readOnly />);

        const checkbox = screen.getByRole('checkbox');

        await user.click(checkbox);

        expect(checkbox).not.toBeChecked();
      });
    });

    // Part-3
    describe('Variants', () => {
      it('renders default variant', () => {
        render(<Checkbox aria-label='Terms' variant='default' />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });

      it('renders outline variant', () => {
        render(<Checkbox aria-label='Terms' variant='outline' />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });

      it('renders invalid variant', () => {
        render(<Checkbox aria-label='Terms' invalid />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
      });

      it('renders success variant', () => {
        render(<Checkbox aria-label='Terms' success />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });
    });

    describe('Sizes', () => {
      it('renders small size', () => {
        render(<Checkbox aria-label='Terms' size='sm' />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });

      it('renders medium size', () => {
        render(<Checkbox aria-label='Terms' size='md' />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });

      it('renders large size', () => {
        render(<Checkbox aria-label='Terms' size='lg' />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });
    });

    describe('Generated IDs', () => {
      it('generates an id when one is not provided', () => {
        render(<Checkbox aria-label='Terms' />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('id');
      });

      it('uses provided id', () => {
        render(<Checkbox id='terms' aria-label='Terms' />);

        expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'terms');
      });
    });

    describe('Helper Text Association', () => {
      it('associates helper text with aria-describedby', () => {
        render(<Checkbox aria-label='Terms' helperText='Accept the agreement.' />);

        const checkbox = screen.getByRole('checkbox');
        const helper = screen.getByText('Accept the agreement.');

        expect(checkbox).toHaveAttribute('aria-describedby', helper.id);
      });

      it('associates error message with aria-describedby', () => {
        render(<Checkbox aria-label='Terms' invalid errorMessage='Required' />);

        const checkbox = screen.getByRole('checkbox');
        const error = screen.getByText('Required');

        expect(checkbox).toHaveAttribute('aria-describedby', error.id);
      });

      it('associates success message with aria-describedby', () => {
        render(<Checkbox aria-label='Terms' success successMessage='Looks good' />);

        const checkbox = screen.getByRole('checkbox');
        const success = screen.getByText('Looks good');

        expect(checkbox).toHaveAttribute('aria-describedby', success.id);
      });
    });

    describe('Edge Cases', () => {
      it('accepts custom className', () => {
        render(<Checkbox aria-label='Terms' className='custom-class' />);

        expect(screen.getByRole('checkbox')).toHaveClass('custom-class');
      });

      it('accepts name and value', () => {
        render(<Checkbox aria-label='Terms' name='agreement' value='accepted' />);

        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).toHaveAttribute('name', 'agreement');

        expect(checkbox).toHaveAttribute('value', 'accepted');
      });

      it('supports required attribute', () => {
        render(<Checkbox aria-label='Terms' required />);

        expect(screen.getByRole('checkbox')).toBeRequired();
      });

      it('supports disabled attribute', () => {
        render(<Checkbox aria-label='Terms' disabled />);

        expect(screen.getByRole('checkbox')).toBeDisabled();
      });

      it('supports autoFocus', () => {
        render(<Checkbox aria-label='Terms' autoFocus />);

        expect(screen.getByRole('checkbox')).toHaveFocus();
      });
    });
  });
});
