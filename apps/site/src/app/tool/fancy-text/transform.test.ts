/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { transform } from './transforms';
import type { TransformOptions } from './transforms';

describe('transform', () => {
  const base: TransformOptions = {
    unicodeStyle: 'normal',
    underline: false,
    strikethrough: false,
    superscript: false,
    subscript: false,
    case: 'none',
    emojify: false,
    reverse: false,
    zalgo: false,
    markdown: false,
  };

  it('converts to bold', () => {
    expect(transform('Abc xyz 123', { ...base, unicodeStyle: 'bold' })).toBe('𝐀𝐛𝐜 𝐱𝐲𝐳 𝟏𝟐𝟑');
  });

  it('adds underline', () => {
    expect(transform('abc', { ...base, underline: true })).toBe('a̲b̲c̲');
  });

  it('emojifies words', () => {
    expect(transform('I love code', { ...base, emojify: true })).toBe('I ❤️ code');
  });

  it('superscripts text', () => {
    expect(transform('a1', { ...base, superscript: true })).toBe('ᵃ¹');
  });
});
