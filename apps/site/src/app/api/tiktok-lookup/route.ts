import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

/**
 * Create a Ratelimit instance only when Upstash credentials are present.
 * This avoids Next.js Edge runtime errors from the Upstash client attempting
 * to fetch a relative URL ("/pipeline") when no URL is configured.
 */
const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: process.env.UPSTASH_REDIS_REST_URL,
          token: process.env.UPSTASH_REDIS_REST_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(10, '1 m'),
      })
    : undefined;

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';

  if (ratelimit) {
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return new Response('Too Many Requests', { status: 429 });
    }
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const username =
    typeof payload === 'object' && payload !== null && 'username' in payload
      ? (payload as { username: unknown }).username
      : undefined;

  if (typeof username !== 'string' || !/^[A-Za-z0-9._]{1,24}$/.test(username)) {
    return new Response('Invalid username', { status: 400 });
  }

  try {
    const res = await fetch(`https://www.tiktok.com/@${username}`, { method: 'HEAD' });
    const available = res.status === 404;
    return new Response(JSON.stringify({ available }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response('Lookup failed', { status: 500 });
  }
}

