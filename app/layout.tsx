import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClaimNow AI - Advanced Medical Claims Automation Platform",
  description: "ClaimNow AI provides the most advanced AI-powered platform for medical claims automation. Achieve 99%+ accuracy, 10x faster processing, and 24/7 automation for hospitals, TPAs, and insurance partners.",
  keywords: "medical claims, AI automation, healthcare, claims processing, insurance automation, medical billing, TPA, health insurance",
  authors: [{ name: "ClaimNow AI" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "ClaimNow AI - Advanced Medical Claims Automation",
    description: "Transform your medical claims process with AI. 99%+ accuracy, 10x faster processing.",
    url: "https://claimnow.ai",
    siteName: "ClaimNow AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaimNow AI - Advanced Medical Claims Automation",
    description: "Transform your medical claims process with AI. 99%+ accuracy, 10x faster processing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
