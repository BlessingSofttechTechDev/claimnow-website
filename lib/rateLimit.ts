// Simple in-memory rate limiter
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export const rateLimit = (
  identifier: string,
  maxRequests: number,
  windowMs: number
): { success: boolean; resetTime: number } => {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Clean up expired entries
  if (entry && now > entry.resetTime) {
    rateLimitMap.delete(identifier);
  }

  const currentEntry = rateLimitMap.get(identifier);

  if (!currentEntry) {
    // First request
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, resetTime: now + windowMs };
  }

  if (currentEntry.count >= maxRequests) {
    // Rate limit exceeded
    return { success: false, resetTime: currentEntry.resetTime };
  }

  // Increment count
  currentEntry.count++;
  return { success: true, resetTime: currentEntry.resetTime };
};

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 60 * 1000);
