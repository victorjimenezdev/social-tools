import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'),
});

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return new Response('Too Many Requests', { status: 429 });
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

