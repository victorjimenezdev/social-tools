import * as React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, within, cleanup, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Header } from './Header';
import { configureAxe } from 'vitest-axe';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

describe('Header', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders links for home and primary actions', () => {
    render(<Header pathname="/" />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    const links = within(nav).getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('marks the current route as active', () => {
    render(<Header pathname="/tool/fancy-text" />);
    const activeLink = screen.getByRole('link', { name: /Browse Tools/i });
    expect(activeLink).toHaveClass('text-primary');
    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });

  it('moves focus to first link when menu opens and back to button when closed', () => {
    render(<Header pathname="/" />);
    const button = screen.getByLabelText('Toggle navigation');
    fireEvent.click(button);
    const panel = screen.getByTestId('mobile-nav');
    const firstLink = within(panel).getByRole('link', { name: 'Learn More' });
    expect(firstLink).toHaveFocus();
    fireEvent.click(button);
    expect(button).toHaveFocus();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Header />);
    const runAxe = configureAxe({
      rules: {
        'landmark-no-duplicate-banner': { enabled: false },
      },
    });
    const results = await runAxe(container);
    expect(results.violations).toHaveLength(0);
  });

  const setBreakpoint = (width: number) => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: width });
    window.dispatchEvent(new Event('resize'));
  };

  it('matches snapshot at sm breakpoint', () => {
    setBreakpoint(640);
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot at md breakpoint', () => {
    setBreakpoint(768);
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
