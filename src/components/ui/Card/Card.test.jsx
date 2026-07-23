import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

const renderCard = (props = {}) => render(<Card {...props}>Card Content</Card>);

describe('Card', () => {
  describe('Rendering', () => {
    it('renders children', () => {
      renderCard();

      expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('renders as a section element', () => {
      renderCard();

      expect(screen.getByText('Card Content').closest('section')).toBeInTheDocument();
    });

    it('renders without crashing', () => {
      render(<Card />);

      expect(document.querySelector('section')).toBeInTheDocument();
    });
  });

  describe('Compound Components', () => {
    it('renders CardHeader', () => {
      render(
        <Card>
          <CardHeader>Header</CardHeader>
        </Card>,
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Header').tagName).toBe('HEADER');
    });

    it('renders CardTitle', () => {
      render(
        <Card>
          <CardTitle>Profile</CardTitle>
        </Card>,
      );

      expect(
        screen.getByRole('heading', {
          name: 'Profile',
        }),
      ).toBeInTheDocument();
    });

    it('renders CardDescription', () => {
      render(
        <Card>
          <CardDescription>Description</CardDescription>
        </Card>,
      );

      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('renders CardContent', () => {
      render(
        <Card>
          <CardContent>Main Content</CardContent>
        </Card>,
      );

      expect(screen.getByText('Main Content')).toBeInTheDocument();
    });

    it('renders CardFooter', () => {
      render(
        <Card>
          <CardFooter>Footer</CardFooter>
        </Card>,
      );

      expect(screen.getByText('Footer')).toBeInTheDocument();
      expect(screen.getByText('Footer').tagName).toBe('FOOTER');
    });

    it('renders complete card composition', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Overview</CardDescription>
          </CardHeader>

          <CardContent>Statistics</CardContent>

          <CardFooter>Actions</CardFooter>
        </Card>,
      );

      expect(
        screen.getByRole('heading', {
          name: 'Dashboard',
        }),
      ).toBeInTheDocument();

      expect(screen.getByText('Overview')).toBeInTheDocument();
      expect(screen.getByText('Statistics')).toBeInTheDocument();
      expect(screen.getByText('Actions')).toBeInTheDocument();
    });

    it('supports nested content', () => {
      render(
        <Card>
          <CardContent>
            <button>Save</button>
          </CardContent>
        </Card>,
      );

      expect(
        screen.getByRole('button', {
          name: 'Save',
        }),
      ).toBeInTheDocument();
    });

    it('supports multiple children', () => {
      render(
        <Card>
          <p>One</p>
          <p>Two</p>
          <p>Three</p>
        </Card>,
      );

      expect(screen.getByText('One')).toBeInTheDocument();
      expect(screen.getByText('Two')).toBeInTheDocument();
      expect(screen.getByText('Three')).toBeInTheDocument();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards Card ref', () => {
      const ref = createRef();

      render(<Card ref={ref}>Content</Card>);

      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current.tagName).toBe('SECTION');
    });

    it('forwards CardHeader ref', () => {
      const ref = createRef();

      render(<CardHeader ref={ref}>Header</CardHeader>);

      expect(ref.current.tagName).toBe('HEADER');
    });

    it('forwards CardTitle ref', () => {
      const ref = createRef();

      render(<CardTitle ref={ref}>Title</CardTitle>);

      expect(ref.current.tagName).toBe('H2');
    });

    it('forwards CardDescription ref', () => {
      const ref = createRef();

      render(<CardDescription ref={ref}>Description</CardDescription>);

      expect(ref.current.tagName).toBe('P');
    });

    it('forwards CardContent ref', () => {
      const ref = createRef();

      render(<CardContent ref={ref}>Content</CardContent>);

      expect(ref.current.tagName).toBe('DIV');
    });

    it('forwards CardFooter ref', () => {
      const ref = createRef();

      render(<CardFooter ref={ref}>Footer</CardFooter>);

      expect(ref.current.tagName).toBe('FOOTER');
    });
  });
});
describe('Variants', () => {
  it.each(['default', 'outlined', 'filled', 'elevated', 'ghost'])('supports "%s" variant', (variant) => {
    render(<Card variant={variant}>Card</Card>);

    expect(screen.getByText('Card')).toBeInTheDocument();
  });
});

describe('Width', () => {
  it('supports fullWidth=true', () => {
    render(<Card fullWidth>Card</Card>);

    expect(screen.getByText('Card').closest('section')).toHaveClass('w-full');
  });

  it('supports fullWidth=false', () => {
    render(<Card fullWidth={false}>Card</Card>);

    expect(screen.getByText('Card').closest('section')).toHaveClass('w-fit');
  });
});

describe('Sizes', () => {
  it.each([
    ['sm', 'p-[var(--card-padding-sm)]'],
    ['md', 'p-[var(--card-padding-md)]'],
    ['lg', 'p-[var(--card-padding-lg)]'],
  ])('supports "%s" size', (size, expectedClass) => {
    render(<Card size={size}>Card</Card>);

    expect(screen.getByText('Card').closest('section')).toHaveClass(expectedClass);
  });
});

describe('Radius', () => {
  it.each([
    ['sm', 'rounded-[var(--radius-sm)]'],
    ['md', 'rounded-[var(--card-radius)]'],
    ['lg', 'rounded-[var(--radius-lg)]'],
  ])('supports "%s" radius', (radius, expectedClass) => {
    render(<Card radius={radius}>Card</Card>);

    expect(screen.getByText('Card').closest('section')).toHaveClass(expectedClass);
  });
});

describe('Interactive', () => {
  it('adds interactive classes when enabled', () => {
    render(<Card interactive>Card</Card>);

    const card = screen.getByText('Card').closest('section');

    expect(card).toHaveClass('cursor-pointer');
    expect(card.className).toContain('hover:bg-[var(--card-bg-hover)]');
  });

  it('does not add interactive classes when disabled', () => {
    render(<Card interactive={false}>Card</Card>);

    expect(screen.getByText('Card').closest('section')).not.toHaveClass('cursor-pointer');
  });
});

describe('Layout', () => {
  it('supports custom className', () => {
    render(<Card className='custom-card'>Card</Card>);

    expect(screen.getByText('Card').closest('section')).toHaveClass('custom-card');
  });

  it('supports nested layout', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>

        <CardContent>
          <div>
            <button>Edit</button>
          </div>
        </CardContent>

        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(
      screen.getByRole('button', {
        name: 'Edit',
      }),
    ).toBeInTheDocument();
  });
});
describe('Composition & Edge Cases', () => {
  it('renders without optional compound components', () => {
    render(<Card>Simple Card</Card>);

    expect(screen.getByText('Simple Card')).toBeInTheDocument();
  });

  it('renders only CardContent', () => {
    render(
      <Card>
        <CardContent>Only Content</CardContent>
      </Card>,
    );

    expect(screen.getByText('Only Content')).toBeInTheDocument();
  });

  it('renders header without description', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
      </Card>,
    );

    expect(
      screen.getByRole('heading', {
        name: 'Profile',
      }),
    ).toBeInTheDocument();
  });

  it('renders footer without content', () => {
    render(
      <Card>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('supports deeply nested elements', () => {
    render(
      <Card>
        <CardContent>
          <div>
            <section>
              <button>Submit</button>
            </section>
          </div>
        </CardContent>
      </Card>,
    );

    expect(
      screen.getByRole('button', {
        name: 'Submit',
      }),
    ).toBeInTheDocument();
  });

  it('renders multiple Card components independently', () => {
    render(
      <>
        <Card>
          <CardTitle>First</CardTitle>
        </Card>

        <Card>
          <CardTitle>Second</CardTitle>
        </Card>
      </>,
    );

    expect(
      screen.getByRole('heading', {
        name: 'First',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Second',
      }),
    ).toBeInTheDocument();
  });

  it('supports long content', () => {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '.repeat(20);

    render(
      <Card>
        <CardContent>{text}</CardContent>
      </Card>,
    );

    expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/)).toBeInTheDocument();
  });

  it('supports React fragments', () => {
    render(
      <Card>
        <>
          <CardTitle>Fragment Title</CardTitle>
          <CardDescription>Fragment Description</CardDescription>
        </>
      </Card>,
    );

    expect(screen.getByText('Fragment Title')).toBeInTheDocument();
    expect(screen.getByText('Fragment Description')).toBeInTheDocument();
  });

  it('renders buttons inside footer', () => {
    render(
      <Card>
        <CardFooter>
          <button>Save</button>
          <button>Cancel</button>
        </CardFooter>
      </Card>,
    );

    expect(
      screen.getByRole('button', {
        name: 'Save',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: 'Cancel',
      }),
    ).toBeInTheDocument();
  });

  it('preserves children order', () => {
    render(
      <Card>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </Card>,
    );

    const paragraphs = screen.getAllByText(/One|Two|Three/);

    expect(paragraphs[0]).toHaveTextContent('One');
    expect(paragraphs[1]).toHaveTextContent('Two');
    expect(paragraphs[2]).toHaveTextContent('Three');
  });

  it('supports nested Card components', () => {
    render(
      <Card>
        Parent
        <Card>Child</Card>
      </Card>,
    );

    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});

describe('Display Names', () => {
  it('exports correct display names', () => {
    expect(Card.displayName).toBe('Card');
    expect(CardHeader.displayName).toBe('CardHeader');
    expect(CardTitle.displayName).toBe('CardTitle');
    expect(CardDescription.displayName).toBe('CardDescription');
    expect(CardContent.displayName).toBe('CardContent');
    expect(CardFooter.displayName).toBe('CardFooter');
  });
});
