import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './Breadcrumb';

describe('Breadcrumb', () => {
  describe('Rendering', () => {
    it('renders successfully', () => {
      render(
        <Breadcrumb data-testid='breadcrumb'>
          <BreadcrumbList />
        </Breadcrumb>,
      );

      expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
    });

    it('renders as a nav element', () => {
      render(
        <Breadcrumb data-testid='breadcrumb'>
          <BreadcrumbList />
        </Breadcrumb>,
      );

      expect(screen.getByTestId('breadcrumb').tagName).toBe('NAV');
    });

    it('renders BreadcrumbList', () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>List</BreadcrumbList>
        </Breadcrumb>,
      );

      expect(screen.getByText('List').tagName).toBe('OL');
    });

    it('renders BreadcrumbItem', () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>Item</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>,
      );

      expect(screen.getByText('Item').tagName).toBe('LI');
    });

    it('renders BreadcrumbLink', () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>,
      );

      expect(
        screen.getByRole('link', {
          name: 'Home',
        }),
      ).toBeInTheDocument();
    });

    it('renders BreadcrumbPage', () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>,
      );

      expect(screen.getByText('Current Page')).toBeInTheDocument();
    });

    it('renders BreadcrumbSeparator', () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbSeparator data-testid='separator' />
          </BreadcrumbList>
        </Breadcrumb>,
      );

      expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    it('renders BreadcrumbEllipsis', () => {
      render(<BreadcrumbEllipsis data-testid='ellipsis' />);

      expect(screen.getByTestId('ellipsis')).toBeInTheDocument();
    });

    it('renders complete breadcrumb composition', () => {
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>,
      );

      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();

      expect(screen.getByText('Components')).toBeInTheDocument();
    });
  });

  describe('Refs', () => {
    it('forwards ref on Breadcrumb', () => {
      const ref = createRef();

      render(
        <Breadcrumb ref={ref}>
          <BreadcrumbList />
        </Breadcrumb>,
      );

      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current.tagName).toBe('NAV');
    });

    it('forwards ref on BreadcrumbList', () => {
      const ref = createRef();

      render(<BreadcrumbList ref={ref} />);

      expect(ref.current.tagName).toBe('OL');
    });

    it('forwards ref on BreadcrumbItem', () => {
      const ref = createRef();

      render(<BreadcrumbItem ref={ref}>Item</BreadcrumbItem>);

      expect(ref.current.tagName).toBe('LI');
    });

    it('forwards ref on BreadcrumbLink', () => {
      const ref = createRef();

      render(
        <BreadcrumbLink ref={ref} href='/'>
          Home
        </BreadcrumbLink>,
      );

      expect(ref.current.tagName).toBe('A');
    });

    it('forwards ref on BreadcrumbPage', () => {
      const ref = createRef();

      render(<BreadcrumbPage ref={ref}>Current</BreadcrumbPage>);

      expect(ref.current.tagName).toBe('SPAN');
    });

    it('forwards ref on BreadcrumbSeparator', () => {
      const ref = createRef();

      render(<BreadcrumbSeparator ref={ref} />);

      expect(ref.current.tagName).toBe('LI');
    });

    it('forwards ref on BreadcrumbEllipsis', () => {
      const ref = createRef();

      render(<BreadcrumbEllipsis ref={ref} />);

      expect(ref.current.tagName).toBe('SPAN');
    });
  });

  describe('Display Names', () => {
    it('has correct display names', () => {
      expect(Breadcrumb.displayName).toBe('Breadcrumb');
      expect(BreadcrumbList.displayName).toBe('BreadcrumbList');
      expect(BreadcrumbItem.displayName).toBe('BreadcrumbItem');
      expect(BreadcrumbLink.displayName).toBe('BreadcrumbLink');
      expect(BreadcrumbPage.displayName).toBe('BreadcrumbPage');
      expect(BreadcrumbSeparator.displayName).toBe('BreadcrumbSeparator');
      expect(BreadcrumbEllipsis.displayName).toBe('BreadcrumbEllipsis');
    });
  });
});

describe('Accessibility', () => {
  it('uses "Breadcrumb" as the default aria-label', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(
      screen.getByRole('navigation', {
        name: 'Breadcrumb',
      }),
    ).toBeInTheDocument();
  });

  it('supports custom aria-label', () => {
    render(
      <Breadcrumb aria-label='Main Navigation'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(
      screen.getByRole('navigation', {
        name: 'Main Navigation',
      }),
    ).toBeInTheDocument();
  });

  it('marks BreadcrumbPage as current page', () => {
    render(<BreadcrumbPage>Current Page</BreadcrumbPage>);

    expect(screen.getByText('Current Page')).toHaveAttribute('aria-current', 'page');
  });

  it('hides BreadcrumbSeparator from assistive technologies', () => {
    render(<BreadcrumbSeparator data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides BreadcrumbEllipsis from assistive technologies', () => {
    render(<BreadcrumbEllipsis data-testid='ellipsis' />);

    expect(screen.getByTestId('ellipsis')).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('Native HTML Props', () => {
  it('supports id', () => {
    render(
      <Breadcrumb id='breadcrumb' data-testid='breadcrumb'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByTestId('breadcrumb')).toHaveAttribute('id', 'breadcrumb');
  });

  it('supports title', () => {
    render(
      <Breadcrumb title='Navigation' data-testid='breadcrumb'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByTestId('breadcrumb')).toHaveAttribute('title', 'Navigation');
  });

  it('supports data attributes', () => {
    render(
      <Breadcrumb data-state='active' data-testid='breadcrumb'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByTestId('breadcrumb')).toHaveAttribute('data-state', 'active');
  });

  it('supports inline styles', () => {
    render(
      <Breadcrumb style={{ opacity: 0.5 }} data-testid='breadcrumb'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByTestId('breadcrumb')).toHaveStyle({
      opacity: '0.5',
    });
  });

  it('supports href on BreadcrumbLink', () => {
    render(<BreadcrumbLink href='/docs'>Docs</BreadcrumbLink>);

    expect(
      screen.getByRole('link', {
        name: 'Docs',
      }),
    ).toHaveAttribute('href', '/docs');
  });

  it('supports target attribute', () => {
    render(
      <BreadcrumbLink href='https://example.com' target='_blank'>
        External
      </BreadcrumbLink>,
    );

    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('supports rel attribute', () => {
    render(
      <BreadcrumbLink href='https://example.com' rel='noopener'>
        External
      </BreadcrumbLink>,
    );

    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener');
  });
});

describe('Class Names', () => {
  it('merges custom className on Breadcrumb', () => {
    render(
      <Breadcrumb className='custom-breadcrumb' data-testid='breadcrumb'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByTestId('breadcrumb')).toHaveClass('custom-breadcrumb');
  });

  it('merges custom className on BreadcrumbList', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList className='custom-list'>List</BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('List')).toHaveClass('custom-list');
  });

  it('merges custom className on BreadcrumbItem', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className='custom-item'>Item</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Item')).toHaveClass('custom-item');
  });

  it('merges custom className on BreadcrumbLink', () => {
    render(
      <BreadcrumbLink href='/' className='custom-link'>
        Home
      </BreadcrumbLink>,
    );

    expect(screen.getByRole('link')).toHaveClass('custom-link');
  });

  it('merges custom className on BreadcrumbPage', () => {
    render(<BreadcrumbPage className='custom-page'>Current</BreadcrumbPage>);

    expect(screen.getByText('Current')).toHaveClass('custom-page');
  });

  it('merges custom className on BreadcrumbSeparator', () => {
    render(<BreadcrumbSeparator className='custom-separator' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveClass('custom-separator');
  });

  it('merges custom className on BreadcrumbEllipsis', () => {
    render(<BreadcrumbEllipsis className='custom-ellipsis' data-testid='ellipsis' />);

    expect(screen.getByTestId('ellipsis')).toHaveClass('custom-ellipsis');
  });
});

describe('Navigation Behaviour', () => {
  it('renders multiple breadcrumb links', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href='/docs'>Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Docs' })).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  it('supports custom separator content', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('does not render BreadcrumbPage as a link', () => {
    render(<BreadcrumbPage>Current</BreadcrumbPage>);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});

describe('Composition & Edge Cases', () => {
  it('renders without optional components', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(
      screen.getByRole('navigation', {
        name: 'Breadcrumb',
      }),
    ).toBeInTheDocument();
  });

  it('renders with only one breadcrumb item', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders multiple separators independently', () => {
    render(
      <>
        <BreadcrumbSeparator data-testid='separator-1' />
        <BreadcrumbSeparator data-testid='separator-2' />
      </>,
    );

    expect(screen.getByTestId('separator-1')).toBeInTheDocument();
    expect(screen.getByTestId('separator-2')).toBeInTheDocument();
  });

  it('renders multiple ellipsis independently', () => {
    render(
      <>
        <BreadcrumbEllipsis data-testid='ellipsis-1' />
        <BreadcrumbEllipsis data-testid='ellipsis-2' />
      </>,
    );

    expect(screen.getByTestId('ellipsis-1')).toBeInTheDocument();
    expect(screen.getByTestId('ellipsis-2')).toBeInTheDocument();
  });

  it('supports React fragments', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Current</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(
      screen.getByRole('link', {
        name: 'Home',
      }),
    ).toBeInTheDocument();

    expect(screen.getByText('Current')).toBeInTheDocument();
  });

  it('supports nested elements inside BreadcrumbPage', () => {
    render(
      <BreadcrumbPage>
        <strong>Dashboard</strong>
      </BreadcrumbPage>,
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('supports nested elements inside BreadcrumbLink', () => {
    render(
      <BreadcrumbLink href='/'>
        <span>Home</span>
      </BreadcrumbLink>,
    );

    expect(
      screen.getByRole('link', {
        name: 'Home',
      }),
    ).toBeInTheDocument();
  });

  it('renders long breadcrumb text', () => {
    const text = 'Building Production Ready React Component Libraries';

    render(<BreadcrumbPage>{text}</BreadcrumbPage>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('preserves children order', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>One</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink href='/two'>Two</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage>Three</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(3);
  });

  it('supports empty className', () => {
    render(
      <Breadcrumb className='' data-testid='breadcrumb'>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
  });

  it('supports empty BreadcrumbList', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList />
      </Breadcrumb>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders custom separator icon', () => {
    render(
      <BreadcrumbSeparator>
        <span data-testid='custom-icon'>{'>'}</span>
      </BreadcrumbSeparator>,
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders complete production composition', () => {
    render(
      <Breadcrumb aria-label='Documentation'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href='/docs'>Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbEllipsis />

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(
      screen.getByRole('navigation', {
        name: 'Documentation',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: 'Home',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: 'Docs',
      }),
    ).toBeInTheDocument();

    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });
});
