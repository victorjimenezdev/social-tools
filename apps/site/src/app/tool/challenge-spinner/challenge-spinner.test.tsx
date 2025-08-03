import { describe, expect, it, vi } from 'vitest';
import { chooseChallenge } from './challenge-spinner';

const challenges = [
  { slug: 'a', title: 'A' },
  { slug: 'b', title: 'B' },
  { slug: 'c', title: 'C' },
  { slug: 'd', title: 'D' },
];

describe('chooseChallenge', () => {
  it('selects challenge based on rng', () => {
    const rng = vi.fn().mockReturnValue(0.5); // index 2
    const result = chooseChallenge(challenges, rng);
    expect(result.slug).toBe('c');
    expect(rng).toHaveBeenCalled();
  });
});
