import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClaimNow AI - Best Insurance Automation Software | Medical Claims Processing",
  description: "ClaimNow AI is the best insurance automation software for medical claims processing. AI-powered platform with 99%+ accuracy, 10x faster processing, and 24/7 automation for hospitals, TPAs, and insurance partners. Transform your insurance operations with ClaimNow.",
  keywords: [
    "ClaimNow",
    "ClaimNow AI",
    "best insurance automation software",
    "insurance automation software",
    "medical claims automation",
    "claims processing software",
    "AI insurance automation",
    "healthcare claims automation",
    "insurance claims processing",
    "medical billing automation",
    "TPA automation software",
    "health insurance automation",
    "claims management software",
    "insurance workflow automation",
    "automated claims processing",
    "AI claims processing",
    "insurance technology",
    "insurtech software",
    "claims adjudication software",
    "medical claims management"
  ],
  authors: [{ name: "ClaimNow AI" }],
  creator: "ClaimNow AI",
  publisher: "ClaimNow AI",
  applicationName: "ClaimNow AI",
  category: "Insurance Technology",
  classification: "Insurance Automation Software",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://claimnow.ai'),
  alternates: {
    canonical: '/',
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
  openGraph: {
    title: "ClaimNow AI - Best Insurance Automation Software",
    description: "ClaimNow AI is the best insurance automation software for medical claims processing. AI-powered automation with 99%+ accuracy and 10x faster processing.",
    url: "https://claimnow.ai",
    siteName: "ClaimNow AI",
    locale: "en_US",
    type: "website",
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
    card: "summary_large_image",
    title: "ClaimNow AI - Best Insurance Automation Software",
    description: "Transform your medical claims process with ClaimNow AI. 99%+ accuracy, 10x faster processing. The best insurance automation software.",
    site: "@claimnowai",
    creator: "@claimnowai",
    images: ['/logo.svg'],
  },
  verification: {
    google: 'P-lkrPlkchGcS6VJDFg4xg61BInJ9g0_jEB73jMraOg',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://claimnow.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        {/* Business/Organization Tags */}
        <meta name="classification" content="Insurance Technology, Healthcare Software" />
        <meta name="category" content="Insurance Automation Software, Medical Claims Processing" />
        <meta name="subject" content="ClaimNow AI - Best Insurance Automation Software" />
        <meta name="abstract" content="ClaimNow AI provides the best insurance automation software for medical claims processing with 99%+ accuracy and 10x faster processing." />
        <meta name="topic" content="Insurance Automation, Medical Claims, AI Healthcare" />
        <meta name="summary" content="Best insurance automation software for medical claims processing" />
        
        {/* Brand Protection */}
        <meta name="copyright" content="ClaimNow AI" />
        <meta name="owner" content="ClaimNow AI" />
        <meta name="url" content="https://claimnow.ai" />
        <meta name="identifier-URL" content="https://claimnow.ai" />
        
        {/* Referrer Policy */}
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ClaimNow AI",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150"
              },
              "description": "ClaimNow AI is the best insurance automation software for medical claims processing with 99%+ accuracy and 10x faster processing."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ClaimNow AI",
              "url": "https://claimnow.ai",
              "logo": "https://claimnow.ai/logo.svg",
              "description": "Best insurance automation software for medical claims processing",
              "sameAs": [
                "https://twitter.com/claimnowai",
                "https://linkedin.com/company/claimnowai"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ClaimNow AI",
              "alternateName": "ClaimNow",
              "url": "https://claimnow.ai",
              "description": "Best insurance automation software for medical claims processing",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://claimnow.ai/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://claimnow.ai"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://claimnow.ai/#features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "How It Works",
                  "item": "https://claimnow.ai/#how-it-works"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
