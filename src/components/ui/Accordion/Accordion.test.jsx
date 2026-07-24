import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './';

function TestAccordion(props = {}) {
  return (
    <Accordion {...props}>
      <AccordionItem value='item-1'>
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>First Content</AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-2'>
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>Second Content</AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3'>
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>Third Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

describe('Accordion', () => {
  it('renders all accordion triggers', () => {
    render(<TestAccordion />);

    expect(screen.getByRole('button', { name: /first item/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /second item/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /third item/i })).toBeInTheDocument();
  });

  it('keeps every item collapsed by default', () => {
    render(<TestAccordion />);

    expect(screen.getByText(/first content/i)).not.toBeVisible();
    expect(screen.getByText(/second content/i)).not.toBeVisible();
    expect(screen.getByText(/third content/i)).not.toBeVisible();
  });

  it('opens the defaultValue item on initial render', () => {
    render(<TestAccordion defaultValue='item-2' />);

    expect(screen.getByText(/second content/i)).toBeVisible();
    expect(screen.getByText(/first content/i)).not.toBeVisible();
    expect(screen.getByText(/third content/i)).not.toBeVisible();
  });

  it('opens an item when its trigger is clicked', async () => {
    const user = userEvent.setup();

    render(<TestAccordion />);

    await user.click(
      screen.getByRole('button', {
        name: /first item/i,
      }),
    );

    expect(screen.getByText(/first content/i)).toBeVisible();
  });

  it('closes the previously opened item in single mode', async () => {
    const user = userEvent.setup();

    render(<TestAccordion />);

    await user.click(
      screen.getByRole('button', {
        name: /first item/i,
      }),
    );

    await user.click(
      screen.getByRole('button', {
        name: /second item/i,
      }),
    );

    expect(screen.getByText(/first content/i)).not.toBeVisible();
    expect(screen.getByText(/second content/i)).toBeVisible();
  });

  it('supports collapsible mode', async () => {
    const user = userEvent.setup();

    render(<TestAccordion collapsible />);

    const trigger = screen.getByRole('button', {
      name: /first item/i,
    });

    await user.click(trigger);

    expect(screen.getByText(/first content/i)).toBeVisible();

    await user.click(trigger);

    expect(screen.getByText(/first content/i)).not.toBeVisible();
  });

  it('supports multiple mode', async () => {
    const user = userEvent.setup();

    render(<TestAccordion type='multiple' />);

    await user.click(
      screen.getByRole('button', {
        name: /first item/i,
      }),
    );

    await user.click(
      screen.getByRole('button', {
        name: /second item/i,
      }),
    );

    expect(screen.getByText(/first content/i)).toBeVisible();
    expect(screen.getByText(/second content/i)).toBeVisible();
    expect(screen.getByText(/third content/i)).not.toBeVisible();
  });

  it('supports multiple default values', () => {
    render(<TestAccordion type='multiple' defaultValue={['item-1', 'item-3']} />);

    expect(screen.getByText(/first content/i)).toBeVisible();
    expect(screen.getByText(/third content/i)).toBeVisible();
    expect(screen.getByText(/second content/i)).not.toBeVisible();
  });

  it('calls onValueChange when the value changes', async () => {
    const user = userEvent.setup();

    const onValueChange = vi.fn();

    render(<TestAccordion onValueChange={onValueChange} />);

    await user.click(
      screen.getByRole('button', {
        name: /first item/i,
      }),
    );

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith('item-1');
  });
  it('supports controlled mode', async () => {
    const user = userEvent.setup();

    function ControlledAccordion() {
      return (
        <Accordion value='item-2'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>First Item</AccordionTrigger>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>Second Item</AccordionTrigger>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }

    render(<ControlledAccordion />);

    expect(screen.getByText(/second content/i)).toBeVisible();

    await user.click(
      screen.getByRole('button', {
        name: /first item/i,
      }),
    );

    // Value should remain unchanged because the component is controlled.
    expect(screen.getByText(/second content/i)).toBeVisible();
    expect(screen.getByText(/first content/i)).not.toBeVisible();
  });

  it('disables every trigger when Accordion is disabled', () => {
    render(<TestAccordion disabled />);

    const triggers = screen.getAllByRole('button');

    triggers.forEach((trigger) => {
      expect(trigger).toBeDisabled();
    });
  });

  it('disables an individual AccordionItem', async () => {
    const user = userEvent.setup();

    render(
      <Accordion>
        <AccordionItem value='item-1' disabled>
          <AccordionTrigger>Disabled Item</AccordionTrigger>
          <AccordionContent>Hidden Content</AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger>Enabled Item</AccordionTrigger>
          <AccordionContent>Visible Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const disabledTrigger = screen.getByRole('button', {
      name: /disabled item/i,
    });

    expect(disabledTrigger).toBeDisabled();

    await user.click(disabledTrigger);

    expect(screen.getByText(/hidden content/i)).not.toBeVisible();
  });

  it('applies correct accessibility attributes', () => {
    render(<TestAccordion />);

    const trigger = screen.getByRole('button', {
      name: /first item/i,
    });

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-controls');

    const region = document.getElementById(trigger.getAttribute('aria-controls'));

    expect(region).toBeInTheDocument();
    expect(region).toHaveAttribute('aria-labelledby', trigger.getAttribute('id'));
    expect(region).toHaveAttribute('id', trigger.getAttribute('aria-controls'));
  });

  it('updates data-state attributes correctly', async () => {
    const user = userEvent.setup();

    render(<TestAccordion />);

    const trigger = screen.getByRole('button', {
      name: /first item/i,
    });

    expect(trigger).toHaveAttribute('data-state', 'closed');

    await user.click(trigger);

    expect(trigger).toHaveAttribute('data-state', 'open');
  });

  it('supports keyboard interaction', async () => {
    const user = userEvent.setup();

    render(<TestAccordion />);

    const trigger = screen.getByRole('button', {
      name: /first item/i,
    });

    trigger.focus();

    await user.keyboard('{Enter}');

    expect(screen.getByText(/first content/i)).toBeVisible();
  });

  it('forwards refs to the accordion root element', () => {
    const ref = createRef();

    render(<Accordion ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current.tagName).toBe('SECTION');
  });

  it('applies custom className', () => {
    render(<Accordion className='custom-class' />);

    expect(document.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('throws when AccordionItem is rendered outside Accordion', () => {
    expect(() =>
      render(
        <AccordionItem value='item-1'>
          <AccordionTrigger>Item</AccordionTrigger>
        </AccordionItem>,
      ),
    ).toThrow();
  });

  it('throws when AccordionTrigger is rendered outside AccordionItem', () => {
    expect(() => render(<AccordionTrigger>Trigger</AccordionTrigger>)).toThrow();
  });

  it('throws when AccordionContent is rendered outside AccordionItem', () => {
    expect(() => render(<AccordionContent>Content</AccordionContent>)).toThrow();
  });
});
