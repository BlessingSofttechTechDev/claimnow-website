import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

export const SEO = ({
  title = "ClaimNow AI - Medical Claims Processing Automation | 99%+ Accuracy in Minutes",
  description = "AI-powered medical claims processing that reads bills and settles claims in under 5 minutes. 99%+ OCR accuracy, 80% faster turnaround, HIPAA compliant. Process 10,000+ claims/hour with ClaimNow AI.",
  keywords = "medical claims processing, AI claims automation, healthcare claims software, insurance claims processing, medical billing automation, OCR medical claims, HIPAA compliant claims, automated adjudication, claims management software, health insurance automation, ClaimNow, ClaimNow AI",
  image = "https://claimnow.ai/og-image.png",
  url = "https://claimnow.ai/",
  type = "website",
  schemaData
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};
