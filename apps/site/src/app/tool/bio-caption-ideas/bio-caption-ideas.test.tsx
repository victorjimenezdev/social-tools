import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BioCaptionIdeas from './bio-caption-ideas';

const categories = [
  {
    category: 'funny',
    ideas: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
];

describe('BioCaptionIdeas', () => {
  it('shows ad after five ideas', () => {
    render(<BioCaptionIdeas categories={categories} />);
    const button = screen.getByText(/random idea/i);
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
    }
    expect(screen.getByTestId('ad-slot')).toBeTruthy();
  });
});
