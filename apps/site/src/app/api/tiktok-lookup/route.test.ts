import { describe, expect, it, vi } from 'vitest';
import { POST } from './route';

vi.mock('@upstash/ratelimit', () => ({
  Ratelimit: class {
    static slidingWindow() {
      return {} as any;
    }
    limit() {
      return Promise.resolve({ success: true });
    }
    constructor() {}
  },
}));

vi.mock('@upstash/redis', () => ({
  Redis: { fromEnv: () => ({}) },
}));

describe('tiktok lookup route', () => {
  it('returns available when user not found', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(null, { status: 404 }) as any,
    );
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ username: 'ghost' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ available: true });
  });

  it('returns taken when user exists', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(null, { status: 200 }) as any,
    );
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ username: 'real' }),
    });
    const res = await POST(req);
    expect(await res.json()).toEqual({ available: false });
  });
});
