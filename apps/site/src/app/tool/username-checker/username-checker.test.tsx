import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import UsernameChecker, { generateSuggestions } from './username-checker';

describe('generateSuggestions', () => {
  it('creates prefix, suffix and leet variants', () => {
    const result = generateSuggestions('test');
    expect(result).toContain('thetest');
    expect(result).toContain('test123');
    expect(result).toContain('7357');
  });
});

describe('UsernameChecker component', () => {
  it('fetches availability', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ available: true }), { status: 200 }) as any,
    );

    render(<UsernameChecker />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'ghost' },
    });
    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
      expect(screen.getByText(/available/)).toBeTruthy();
    });
  });
});
