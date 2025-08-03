import { describe, it, expect } from 'vitest';
import { getBioIdeas } from './mdx';

describe('getBioIdeas', () => {
  it('loads ideas from mdx files', async () => {
    const result = await getBioIdeas();
    const categories = result.map((c) => c.category);
    expect(categories).toContain('funny');
    const funny = result.find((c) => c.category === 'funny');
    expect(funny?.ideas).toContain(
      'Life is short; smile while you still have teeth.',
    );
  });
});
