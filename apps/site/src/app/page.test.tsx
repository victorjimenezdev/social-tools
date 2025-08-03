import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from './page';
import { tools } from '@lib/tools';

describe('homepage', () => {
  it('renders links for all tools', () => {
    render(<Page />);
    expect(screen.getAllByRole('link')).toHaveLength(tools.length);
  });
});
