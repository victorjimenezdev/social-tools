import * as React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, within, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
vi.mock('next/navigation', () => ({ usePathname: vi.fn() }));
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { tools } from '@lib/tools';
import { configureAxe } from 'vitest-axe';

describe('Header', () => {
  const usePathnameMock = usePathname as unknown as vi.Mock;

  beforeEach(() => {
    usePathnameMock.mockReturnValue('/');
  });

  afterEach(() => {
    cleanup();
    usePathnameMock.mockReset();
  });

  it('renders links for home and tools', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    const links = within(nav).getAllByRole('link');
    expect(links).toHaveLength(tools.length + 1);
  });

  it('marks the current route as active', () => {
    usePathnameMock.mockReturnValue('/tool/fancy-text');
    render(<Header />);
    const activeLink = screen.getByRole('link', { name: /Fancy Text/i });
    expect(activeLink).toHaveClass('text-primary', 'font-semibold');
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
