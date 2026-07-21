import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Badge</Badge>);

    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('renders as a span by default', () => {
    render(<Badge>Badge</Badge>);

    expect(screen.getByText('Badge').tagName).toBe('SPAN');
  });

  it('applies default variant classes', () => {
  render(<Badge>Default</Badge>);

  const badge = screen.getByText('Default');

  expect(badge).toHaveClass('h-6');
  expect(badge).toHaveClass('rounded-[var(--radius-full)]');
});

  it.each(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'outline', 'ghost'])(
    'supports "%s" variant',
    (variant) => {
      render(<Badge variant={variant}>{variant}</Badge>);

      expect(screen.getByText(variant)).toBeInTheDocument();
    },
  );

  it.each([
    ['sm', 'h-5'],
    ['md', 'h-6'],
    ['lg', 'h-7'],
  ])('supports "%s" size', (size, cls) => {
    render(<Badge size={size}>{size}</Badge>);

    expect(screen.getByText(size).className).toContain(cls);
  });

  it.each([
    ['sm', 'h-5'],
    ['md', 'h-6'],
    ['lg', 'h-7'],
  ])('supports "%s" size', (size, cls) => {
    render(<Badge size={size}>{size}</Badge>);

    const badge = screen.getByText(size).closest('span');

    expect(badge).toHaveClass(cls);
    screen.debug();
  });

  it('supports full width', () => {
    render(<Badge fullWidth>Full Width</Badge>);

    expect(screen.getByText('Full Width').className).toContain('w-full');
  });

  it('renders start icon', () => {
    render(<Badge startIcon={<svg data-testid='start-icon' />}>Badge</Badge>);

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('renders end icon', () => {
    render(<Badge endIcon={<svg data-testid='end-icon' />}>Badge</Badge>);

    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<Badge className='custom-class'>Custom</Badge>);

    expect(screen.getByText('Custom')).toHaveClass('custom-class');
  });

  it('forwards refs', () => {
    const ref = createRef();

    render(<Badge ref={ref}>Badge</Badge>);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('passes native HTML attributes', () => {
    render(
      <Badge data-testid='badge' title='Status Badge'>
        Badge
      </Badge>,
    );

    const badge = screen.getByTestId('badge');

    expect(badge).toHaveAttribute('title', 'Status Badge');
  });

  it('supports aria-label', () => {
    render(<Badge aria-label='New Notifications'>99+</Badge>);

    expect(screen.getByLabelText('New Notifications')).toBeInTheDocument();
  });

  it('renders without children when only icons are provided', () => {
    render(<Badge startIcon={<svg data-testid='icon' />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
