import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://claimnow.ai'),
  title: {
    default: "ClaimNow AI - AI-Powered Medical Claims Processing",
    template: "%s | ClaimNow AI"
  },
  description: "Transform claims processing with AI. Process medical bills and settle insurance claims in minutes with 99%+ accuracy. HIPAA, GDPR, and DPDPA compliant.",
  keywords: [
    "medical claims processing",
    "AI claims automation",
    "insurance claims AI",
    "medical bill processing",
    "healthcare claims management",
    "claims adjudication",
    "OCR medical bills",
    "HIPAA compliant claims",
    "automated claims processing",
    "health insurance AI"
  ],
  authors: [{ name: "Blessing Softtech", url: "https://blessingsofttech.com" }],
  creator: "Blessing Softtech",
  publisher: "ClaimNow AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claimnow.ai",
    title: "ClaimNow AI - AI-Powered Medical Claims Processing",
    description: "Transform claims processing with AI. Process medical bills and settle insurance claims in minutes with 99%+ accuracy.",
    siteName: "ClaimNow AI",
    images: [
      {
        url: "/main.png",
        width: 1200,
        height: 630,
        alt: "ClaimNow AI - Automated Medical Claims Processing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaimNow AI - AI-Powered Medical Claims Processing",
    description: "Transform claims processing with AI. Process medical bills and settle insurance claims in minutes with 99%+ accuracy.",
    images: ["/main.png"],
    creator: "@claimnow_ai",
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
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://claimnow.ai",
  },
  category: "Healthcare Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional Meta Tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2F5FED" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ClaimNow AI" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ClaimNow AI",
              "applicationCategory": "HealthcareApplication",
              "operatingSystem": "Web",
              "description": "AI-powered medical claims processing platform that automates document intake, extraction, and adjudication with 99%+ accuracy.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "250"
              },
              "creator": {
                "@type": "Organization",
                "name": "Blessing Softtech",
                "url": "https://blessingsofttech.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
