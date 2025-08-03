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

describe('ig profile pic route', () => {
  it('returns profile pic url', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({ data: { user: { is_private: false, profile_pic_url_hd: 'pic' } } }),
        { status: 200 },
      ) as any,
    );
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ username: 'publicuser' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ profile_pic_url_hd: 'pic' });
  });

  it('handles not found', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(null, { status: 404 }) as any,
    );
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ username: 'ghost' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(404);
  });
});

