import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 10,
      },
    ],
    sitemap: 'https://claimnow.ai/sitemap.xml',
  }
}
