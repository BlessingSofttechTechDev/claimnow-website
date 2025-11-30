import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://claimnow.ai'),
  title: {
    default: 'ClaimNow AI - Best Insurance Automation Software | Medical Claims Processing',
    template: '%s | ClaimNow AI'
  },
  description: 'ClaimNow AI is the best insurance automation software for medical claims processing. AI-powered platform with 99%+ accuracy, 10x faster processing, and 24/7 automation.',
  keywords: [
    'ClaimNow',
    'ClaimNow AI',
    'best insurance automation software',
    'insurance automation software',
    'medical claims automation',
    'claims processing software',
    'AI insurance automation'
  ],
  authors: [{ name: 'ClaimNow AI', url: 'https://claimnow.ai' }],
  creator: 'ClaimNow AI',
  publisher: 'ClaimNow AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://claimnow.ai',
    siteName: 'ClaimNow AI',
    title: 'ClaimNow AI - Best Insurance Automation Software',
    description: 'ClaimNow AI is the best insurance automation software for medical claims processing with 99%+ accuracy and 10x faster processing.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'ClaimNow AI - Best Insurance Automation Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClaimNow AI - Best Insurance Automation Software',
    description: 'Transform medical claims processing with AI. 99%+ accuracy, 10x faster processing.',
    creator: '@claimnowai',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const jsonLd = {
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ClaimNow AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'ClaimNow AI is the best insurance automation software for medical claims processing with 99%+ accuracy and 10x faster processing.',
    url: 'https://claimnow.ai',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
    },
  },
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClaimNow AI',
    alternateName: 'ClaimNow',
    url: 'https://claimnow.ai',
    logo: 'https://claimnow.ai/logo.svg',
    description: 'Best insurance automation software for medical claims processing',
    sameAs: [
      'https://twitter.com/claimnowai',
      'https://linkedin.com/company/claimnowai',
    ],
  },
  faqPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [],
  },
}
