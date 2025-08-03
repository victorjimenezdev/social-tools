import { afterEach, describe, expect, it, vi } from 'vitest';

let limitSuccess = true;

vi.mock('@upstash/ratelimit', () => ({
  Ratelimit: class {
    static slidingWindow() {
      return {} as any;
    }
    limit() {
      return Promise.resolve({ success: limitSuccess });
    }
    constructor() {}
  },
}));

vi.mock('@upstash/redis', () => ({
  Redis: class {
    constructor() {}
  },
}));

afterEach(() => {
  vi.clearAllMocks();
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
  limitSuccess = true;
  vi.resetModules();
});

describe('tiktok lookup route', () => {
  it('returns available when user not found', async () => {
    const { POST } = await import('./route');
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
    const { POST } = await import('./route');
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

  it('returns 429 when rate limit exceeded', async () => {
    process.env.UPSTASH_REDIS_REST_URL = 'https://example.upstash.io';
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token';
    limitSuccess = false;
    const { POST } = await import('./route');
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ username: 'ghost' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(429);
  });
});

