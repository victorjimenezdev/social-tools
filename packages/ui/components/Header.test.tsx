import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';
import { tools } from '@lib/tools';
import { axe, configureAxe } from 'vitest-axe';

describe('Header', () => {
  it('renders links for home and tools', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    const links = within(nav).getAllByRole('link');
    expect(links).toHaveLength(tools.length + 1);
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
