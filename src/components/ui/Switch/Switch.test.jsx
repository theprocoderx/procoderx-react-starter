import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Switch from './Switch';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';

describe('Switch', () => {
  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------

  describe('Rendering', () => {
    it('renders switch', () => {
      render(<Switch aria-label='Notifications' />);

      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Switch aria-label='Notifications' className='custom-switch' />);

      const track = screen.getByRole('switch').nextElementSibling;

      expect(track).toHaveClass('custom-switch');
    });

    it('renders helper text', () => {
      render(<Switch aria-label='Notifications' helperText='Enable notifications' />);

      expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    });

    it('renders error message', () => {
      render(<Switch aria-label='Notifications' invalid errorMessage='This field is required' />);

      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('renders success message', () => {
      render(<Switch aria-label='Notifications' success successMessage='Saved successfully' />);

      expect(screen.getByText('Saved successfully')).toBeInTheDocument();
    });

    it('renders without optional props', () => {
      render(<Switch aria-label='Notifications' />);

      expect(screen.getByRole('switch')).toBeInTheDocument();

      expect(screen.queryByText('Enable notifications')).not.toBeInTheDocument();

      expect(screen.queryByText('This field is required')).not.toBeInTheDocument();

      expect(screen.queryByText('Saved successfully')).not.toBeInTheDocument();
    });

    // ---------------------------------------------------------------------------
    // Accessibility
    // ---------------------------------------------------------------------------

    describe('Accessibility', () => {
      it('renders with role="switch"', () => {
        render(<Switch aria-label='Notifications' />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });

      it('supports aria-label', () => {
        render(<Switch aria-label='Enable notifications' />);

        expect(
          screen.getByRole('switch', {
            name: 'Enable notifications',
          }),
        ).toBeInTheDocument();
      });

      it('supports aria-labelledby', () => {
        render(
          <>
            <span id='switch-label'>Notifications</span>

            <Switch aria-labelledby='switch-label' />
          </>,
        );

        expect(
          screen.getByRole('switch', {
            name: 'Notifications',
          }),
        ).toBeInTheDocument();
      });

      it('supports aria-describedby', () => {
        render(
          <>
            <p id='description'>Toggle notifications</p>

            <Switch aria-label='Notifications' aria-describedby='description' />
          </>,
        );

        expect(screen.getByRole('switch')).toHaveAttribute('aria-describedby', 'description');
      });

      it('sets aria-invalid when invalid', () => {
        render(<Switch aria-label='Notifications' invalid />);

        expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
      });

      it('does not set aria-invalid by default', () => {
        render(<Switch aria-label='Notifications' />);

        expect(screen.getByRole('switch')).not.toHaveAttribute('aria-invalid');
      });

      it('supports required', () => {
        render(<Switch aria-label='Notifications' required />);

        expect(screen.getByRole('switch')).toBeRequired();
      });

      it('supports disabled', () => {
        render(<Switch aria-label='Notifications' disabled />);

        expect(screen.getByRole('switch')).toBeDisabled();
      });

      it('receives keyboard focus', () => {
        render(<Switch aria-label='Notifications' />);

        const switchElement = screen.getByRole('switch');

        switchElement.focus();

        expect(switchElement).toHaveFocus();
      });
    });

    // ---------------------------------------------------------------------------
    // Controlled / Uncontrolled
    // ---------------------------------------------------------------------------

    describe('Controlled / Uncontrolled', () => {
      it('supports defaultChecked', () => {
        render(<Switch aria-label='Notifications' defaultChecked />);

        expect(screen.getByRole('switch')).toBeChecked();
      });

      it('supports checked', () => {
        render(<Switch aria-label='Notifications' checked onChange={() => {}} />);

        expect(screen.getByRole('switch')).toBeChecked();
      });

      it('toggles uncontrolled switch', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).not.toBeChecked();

        await user.click(switchElement);

        expect(switchElement).toBeChecked();

        await user.click(switchElement);

        expect(switchElement).not.toBeChecked();
      });

      it('does not update controlled switch automatically', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' checked={false} onChange={() => {}} />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).not.toBeChecked();

        await user.click(switchElement);

        expect(switchElement).not.toBeChecked();
      });

      it('checked overrides defaultChecked', () => {
        render(<Switch aria-label='Notifications' checked={false} defaultChecked onChange={() => {}} />);

        expect(screen.getByRole('switch')).not.toBeChecked();
      });

      it('supports readOnly', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' readOnly defaultChecked />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).toBeChecked();

        await user.click(switchElement);

        expect(switchElement).toBeChecked();
      });

      it('prevents toggle when disabled', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' disabled />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).not.toBeChecked();

        await user.click(switchElement);

        expect(switchElement).not.toBeChecked();
      });

      it('supports uncontrolled default unchecked state', () => {
        render(<Switch aria-label='Notifications' />);

        expect(screen.getByRole('switch')).not.toBeChecked();
      });
    });

    // ---------------------------------------------------------------------------
    // Controlled / Uncontrolled
    // ---------------------------------------------------------------------------

    describe('Controlled / Uncontrolled', () => {
      it('supports defaultChecked', () => {
        render(<Switch aria-label='Notifications' defaultChecked />);

        expect(screen.getByRole('switch')).toBeChecked();
      });

      it('supports checked', () => {
        render(<Switch aria-label='Notifications' checked onChange={() => {}} />);

        expect(screen.getByRole('switch')).toBeChecked();
      });

      it('toggles uncontrolled switch', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).not.toBeChecked();

        await user.click(switchElement);

        expect(switchElement).toBeChecked();

        await user.click(switchElement);

        expect(switchElement).not.toBeChecked();
      });

      it('does not update controlled switch automatically', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' checked={false} onChange={() => {}} />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).not.toBeChecked();

        await user.click(switchElement);

        expect(switchElement).not.toBeChecked();
      });

      it('checked overrides defaultChecked', () => {
        render(<Switch aria-label='Notifications' checked={false} defaultChecked onChange={() => {}} />);

        expect(screen.getByRole('switch')).not.toBeChecked();
      });

      it('supports readOnly', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' readOnly defaultChecked />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).toBeChecked();

        await user.click(switchElement);

        expect(switchElement).toBeChecked();
      });

      it('prevents toggle when disabled', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label='Notifications' disabled />);

        const switchElement = screen.getByRole('switch');

        expect(switchElement).not.toBeChecked();

        await user.click(switchElement);

        expect(switchElement).not.toBeChecked();
      });

      it('supports uncontrolled default unchecked state', () => {
        render(<Switch aria-label='Notifications' />);

        expect(screen.getByRole('switch')).not.toBeChecked();
      });
    });

    // ---------------------------------------------------------------------------
    // Variants
    // ---------------------------------------------------------------------------

    describe('Variants', () => {
      it('renders default variant', () => {
        render(<Switch aria-label='Notifications' />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });

      it('renders outline variant', () => {
        render(<Switch aria-label='Notifications' variant='outline' />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });

      it('renders invalid variant', () => {
        render(<Switch aria-label='Notifications' invalid />);

        expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
      });

      it('renders success variant', () => {
        render(<Switch aria-label='Notifications' success />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });
    });

    // ---------------------------------------------------------------------------
    // Sizes
    // ---------------------------------------------------------------------------

    describe('Sizes', () => {
      it('renders small size', () => {
        render(<Switch aria-label='Notifications' size='sm' />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });

      it('renders medium size', () => {
        render(<Switch aria-label='Notifications' size='md' />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });

      it('renders large size', () => {
        render(<Switch aria-label='Notifications' size='lg' />);

        expect(screen.getByRole('switch')).toBeInTheDocument();
      });
    });

    // ---------------------------------------------------------------------------
    // Native Props
    // ---------------------------------------------------------------------------

    describe('Native Props', () => {
      it('supports id', () => {
        render(<Switch id='notifications' aria-label='Notifications' />);

        expect(screen.getByRole('switch')).toHaveAttribute('id', 'notifications');
      });

      it('supports name', () => {
        render(<Switch aria-label='Notifications' name='notifications' />);

        expect(screen.getByRole('switch')).toHaveAttribute('name', 'notifications');
      });

      it('supports value', () => {
        render(<Switch aria-label='Notifications' value='enabled' />);

        expect(screen.getByRole('switch')).toHaveAttribute('value', 'enabled');
      });

      it('forwards ref', () => {
        const ref = createRef();

        render(<Switch aria-label='Notifications' ref={ref} />);

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
      });
    });

    // ---------------------------------------------------------------------------
    // Helper Messages
    // ---------------------------------------------------------------------------

    describe('Helper Messages', () => {
      it('renders helper text', () => {
        render(<Switch aria-label='Notifications' helperText='Enable notifications' />);

        expect(screen.getByText('Enable notifications')).toBeInTheDocument();
      });

      it('renders error message', () => {
        render(<Switch aria-label='Notifications' invalid errorMessage='Required field' />);

        expect(screen.getByText('Required field')).toBeInTheDocument();
      });

      it('renders success message', () => {
        render(<Switch aria-label='Notifications' success successMessage='Saved successfully' />);

        expect(screen.getByText('Saved successfully')).toBeInTheDocument();
      });

      it('prioritizes error message over helper text', () => {
        render(
          <Switch
            aria-label='Notifications'
            invalid
            helperText='Helper text'
            errorMessage='Required field'
          />,
        );

        expect(screen.getByText('Required field')).toBeInTheDocument();

        expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
      });
    });
  });
});
