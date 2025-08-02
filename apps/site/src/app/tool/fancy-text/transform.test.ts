/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { transform } from './fancy-generator';

describe('transform', () => {
  it('converts to bold', () => {
    expect(transform('Abc xyz 123', 'bold')).toBe('𝐀𝐛𝐜 𝐱𝐲𝐳 𝟏𝟐𝟑');
  });

  it('converts to italic', () => {
    expect(transform('Abc xyz 123', 'italic')).toBe('𝐴𝑏𝑐 𝑥𝑦𝑧 123');
  });
});
