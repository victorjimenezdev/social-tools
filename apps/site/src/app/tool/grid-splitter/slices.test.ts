/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { calcSlices } from './slices';

describe('calcSlices', () => {
  it('splits 300x200 into 3x2', () => {
    const slices = calcSlices('3x2', 300, 200);
    expect(slices).toHaveLength(6);
    expect(slices[0]).toEqual({ sx: 0, sy: 0, sw: 100, sh: 100 });
  });

  it('creates panorama squares', () => {
    const slices = calcSlices('panorama', 900, 400);
    expect(slices).toHaveLength(3);
    expect(slices[0].sw).toBe(slices[0].sh);
  });
});
