import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from './page';
import { tools } from '@lib/tools';

describe('homepage', () => {
  it('renders a card for each tool', () => {
    render(<Page />);
    expect(screen.getAllByLabelText(/^Open /)).toHaveLength(tools.length);
  });

  it('renders feature cards', () => {
    render(<Page />);
    expect(screen.getAllByText('Why choose us').length).toBeGreaterThan(0);
    expect(screen.getAllByText('No log-in').length).toBeGreaterThan(0);
  });
});
