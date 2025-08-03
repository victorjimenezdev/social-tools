import * as React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeSwitch } from './ThemeSwitch';

// Mock matchMedia for prefers-color-scheme
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

describe('ThemeSwitch', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it("toggles 'dark' class on html element", () => {
    render(<ThemeSwitch />);
    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(document.documentElement).not.toHaveClass('dark');
    fireEvent.click(button);
    expect(document.documentElement).toHaveClass('dark');
    fireEvent.click(button);
    expect(document.documentElement).not.toHaveClass('dark');
  });
});
