import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

/**
 * Instantiate Upstash Ratelimit only when credentials are configured to avoid
 * Next.js Edge runtime errors from a malformed URL ("/pipeline").
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

  if (typeof username !== 'string' || !/^[A-Za-z0-9._]{1,30}$/.test(username)) {
    return new Response('Invalid username', { status: 400 });
  }

  try {
    const res = await fetch(
      `https://r.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
    );
    if (!res.ok) {
      return new Response('User not found', { status: 404 });
    }
    const data = (await res.json()) as {
      data?: { user?: { is_private: boolean; profile_pic_url_hd: string } };
    };
    const user = data.data?.user;
    if (!user || user.is_private) {
      return new Response('Profile is private', { status: 403 });
    }
    return new Response(
      JSON.stringify({ profile_pic_url_hd: user.profile_pic_url_hd }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch {
    return new Response('Lookup failed', { status: 500 });
  }
}

