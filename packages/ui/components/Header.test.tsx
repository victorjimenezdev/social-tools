import * as React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, within, cleanup, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
vi.mock('next/navigation', () => ({ usePathname: vi.fn() }));
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { configureAxe } from 'vitest-axe';
vi.mock('next/font/google', () => ({
  Lobster_Two: () => ({ className: 'lobster' }),
}));

describe('Header', () => {
  const usePathnameMock = usePathname as unknown as vi.Mock;

  beforeEach(() => {
    usePathnameMock.mockReturnValue('/');
  });

  afterEach(() => {
    cleanup();
    usePathnameMock.mockReset();
  });

  it('renders links for home and primary actions', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    const links = within(nav).getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('marks the current route as active', () => {
    usePathnameMock.mockReturnValue('/tool/fancy-text');
    render(<Header />);
    const activeLink = screen.getByRole('link', { name: /Browse Tools/i });
    expect(activeLink).toHaveClass('ring-primary');
    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });

  it('moves focus to first link when menu opens and back to button when closed', () => {
    render(<Header />);
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
});
