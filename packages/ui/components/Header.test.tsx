import * as React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, within, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Header } from './Header';
import { configureAxe } from 'vitest-axe';
import styles from './Header.module.scss';

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
    expect(activeLink).toHaveClass(styles['site-nav__link--active']);
    expect(activeLink).toHaveAttribute('aria-current', 'page');
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
