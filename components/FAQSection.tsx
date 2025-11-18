'use client';

import Script from "next/script";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is ClaimNow AI?",
    answer: "ClaimNow AI is an advanced medical claims processing platform that uses artificial intelligence to automate document intake, extraction, and adjudication. Our AI reads medical bills and settles claims in minutes with over 99% accuracy, helping insurance companies process claims faster and more efficiently."
  },
  {
    question: "How accurate is ClaimNow's AI technology?",
    answer: "ClaimNow achieves over 99% OCR accuracy in document extraction and over 99% processing accuracy in claims adjudication. Our AI-powered system has been trained on millions of medical claims and continuously improves its accuracy through machine learning."
  },
  {
    question: "How fast can ClaimNow process medical claims?",
    answer: "ClaimNow processes medical claims in under 5 minutes on average, with zero-error processing completed in less than 300 seconds. Our platform can handle over 10,000 claims per hour, making it 80% faster than traditional manual processing methods."
  },
  {
    question: "Is ClaimNow HIPAA compliant?",
    answer: "Yes, ClaimNow is fully HIPAA compliant and meets all healthcare data security requirements. We also comply with GDPR and DPDPA regulations, ensuring enterprise-grade security and data protection for all medical information processed through our platform."
  },
  {
    question: "What types of medical documents can ClaimNow process?",
    answer: "ClaimNow can process all types of medical documents including medical bills, invoices, receipts, EOBs (Explanation of Benefits), provider statements, diagnostic reports, and insurance claim forms. Our OCR technology accurately extracts data from both structured and unstructured documents."
  },
  {
    question: "How does ClaimNow integrate with existing systems?",
    answer: "ClaimNow offers two integration options: a RESTful API for seamless connectivity with your existing systems, and custom software integration tailored to your specific needs. Our platform can easily integrate with major insurance management systems and EMR/EHR platforms."
  },
  {
    question: "What is the confidence scoring feature?",
    answer: "ClaimNow's confidence scoring provides real-time assessment of data extraction accuracy. When the AI is uncertain about extracted information, it flags items for human review, ensuring a human-in-the-loop approach that maintains high accuracy while maximizing automation."
  },
  {
    question: "Can ClaimNow reduce operational costs?",
    answer: "Yes, ClaimNow customers typically see over 70% reduction in operational costs through automation. By reducing manual processing time by 80% and minimizing errors, organizations can significantly lower labor costs while improving claim processing efficiency."
  },
  {
    question: "Does ClaimNow support multiple languages?",
    answer: "Yes, ClaimNow's AI technology supports multiple languages for document processing. Our OCR and NLP engines can accurately extract information from medical documents in various languages commonly used in healthcare documentation."
  },
  {
    question: "What kind of customer support does ClaimNow provide?",
    answer: "ClaimNow provides comprehensive customer support including 24/7 technical assistance, dedicated account management, onboarding training, and ongoing optimization consultations. We maintain 99.8% uptime and ensure your claims processing operations run smoothly."
  }
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="py-24 bg-accent/20" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about ClaimNow AI medical claims processing
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 hover:bg-accent/50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
