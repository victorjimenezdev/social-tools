import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  afterEach(() => cleanup());

  it('renders copyright and links', () => {
    const year = new Date().getFullYear();
    render(<Footer />);
    expect(
      screen.getByText(`© ${year} Social Tools Hub`, { exact: false })
    ).toBeTruthy();
    expect(
      screen.getByRole('link', { name: 'Privacy policy' })
    ).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeTruthy();
  });

  it('includes social links with labels', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeTruthy();
  });

  it('renders bottom layer stack', () => {
    render(<Footer />);
    const stack = screen.getByTestId('layer-stack');
    expect(stack.firstChild?.className.includes('rounded-b-lg')).toBe(true);
  });
});
