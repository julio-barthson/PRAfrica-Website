import "server-only"

/**
 * Minimal fixed-window rate limiter, held in module memory.
 *
 * ⚠️ Scope: this is per-instance. On a serverless platform each cold start gets
 * its own map, so a determined sender can exceed the limit by spreading requests
 * across instances. It stops casual form spam, which is the realistic threat for
 * a marketing site. If enquiry volume ever justifies it, swap the two functions
 * below for Upstash/Redis — nothing else needs to change.
 */

const WINDOW_MS = 60_000
const MAX_REQUESTS = 3

const hits = new Map<string, { count: number; expires: number }>()

export function checkRateLimit(key: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now()
  const entry = hits.get(key)

  if (!entry || now > entry.expires) {
    hits.set(key, { count: 1, expires: now + WINDOW_MS })
    // Opportunistic cleanup so the map can't grow without bound.
    if (hits.size > 5_000) {
      for (const [k, v] of hits) if (now > v.expires) hits.delete(k)
    }
    return { allowed: true, retryAfter: 0 }
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((entry.expires - now) / 1000) }
  }

  entry.count += 1
  return { allowed: true, retryAfter: 0 }
}
