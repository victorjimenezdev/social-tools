import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StoryTemplates from './story-templates';

vi.mock('html2canvas', () => ({
  __esModule: true,
  default: vi.fn().mockResolvedValue(document.createElement('canvas')),
}));

describe('StoryTemplates', () => {
  it('renders controls and ad slot', () => {
    render(<StoryTemplates />);
    expect(screen.getByLabelText(/grid size/i)).toBeTruthy();
    expect(screen.getByLabelText(/title/i)).toBeTruthy();
    expect(
      screen.getByRole('button', { name: /download png/i })
    ).toBeTruthy();
    expect(screen.getByTestId('ad-slot')).toBeTruthy();
  });
});
