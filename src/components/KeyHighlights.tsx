'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function KeyHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  const allCards = [
    {
      title: '175 sec',
      subtitle: 'Average Claim Completion Time',
      description: 'Process complete insurance claims from document upload to final report generation in under 3 minutes.',
      image: '/images/card-175sec.png',
      metric: '80% Faster',
      category: 'Speed',
      headerTitle: 'Lightning-Fast Claim Processing',
      headerDescription: 'Processes claims in just <strong>175 seconds</strong> with <strong>99.7% accuracy</strong> — combining the power of multiple AI models, enterprise security, and 24/7 reliability to transform your claim processing workflow.'
    },
    {
      title: '99.7%',
      subtitle: 'Document Recognition Accuracy',
      description: 'Industry-leading OCR accuracy with advanced AI models that understand complex medical and insurance documents.',
      image: '/images/card-99percent.png',
      metric: '99.7% Accuracy',
      category: 'Precision',
      headerTitle: 'Unmatched Document Accuracy',
      headerDescription: 'Achieve <strong>99.7% recognition accuracy</strong> on complex insurance documents — our advanced AI models understand medical terminology, handwriting, and varied document formats with unprecedented precision.'
    },
    {
      title: '4x Smarter',
      subtitle: 'Multi-AI Model Integration',
      description: 'Combines GPT-4, Claude, and Gemini for redundant processing and maximum reliability across all document types.',
      image: '/images/card-4xsmarter.png',
      metric: '3 AI Models',
      category: 'Intelligence',
      headerTitle: 'Revolutionary AI Intelligence',
      headerDescription: 'Powered by <strong>3 leading AI models</strong> working in parallel — GPT-4, Claude, and Gemini ensure maximum reliability, accuracy, and intelligent decision-making for every claim.'
    },
    {
      title: '1-Click',
      subtitle: 'Instant Report Generation',
      description: 'Generate comprehensive claim reports, summaries, and compliance documents with a single click.',
      image: '/images/card-1click.png',
      metric: '15+ Formats',
      category: 'Efficiency',
      headerTitle: 'Effortless Report Generation',
      headerDescription: 'Generate professional reports in <strong>15+ formats</strong> with a single click — from detailed claim summaries to compliance documents, everything is automated and ready instantly.'
    },
    {
      title: 'Real-Time',
      subtitle: 'Live Processing Dashboard',
      description: 'Monitor claim processing status, view confidence scores, and track progress with live updates and notifications.',
      image: '/images/ai-powered-extraction.png',
      metric: 'Live Updates',
      category: 'Monitoring',
      headerTitle: 'Real-Time Processing Intelligence',
      headerDescription: 'Track every claim with <strong>live updates</strong> and confidence scores — monitor processing status, view AI decisions, and get instant notifications as claims move through the pipeline.'
    },
    {
      title: '24/7/365',
      subtitle: 'Continuous Operations',
      description: 'Automated claim processing that never stops, with built-in failover systems and 99.9% uptime guarantee.',
      image: '/images/human-in-loop.png',
      metric: '99.9% Uptime',
      category: 'Reliability',
      headerTitle: 'Always-On Claim Processing',
      headerDescription: 'Never stop processing claims with <strong>99.9% uptime guarantee</strong> — our redundant systems and automated failover ensure continuous operations, day and night.'
    },
    {
      title: 'Zero Setup',
      subtitle: 'Cloud-Native Deployment',
      description: 'Start processing claims immediately with our cloud infrastructure. No software installation or IT setup required.',
      image: '/images/confidence-scoring.png',
      metric: '< 5 min Setup',
      category: 'Deployment',
      headerTitle: 'Instant Cloud Deployment',
      headerDescription: 'Get started in <strong>under 5 minutes</strong> — no software to install, no servers to manage. Our cloud-native platform is ready to process your claims immediately.'
    },
    {
      title: 'Enterprise',
      subtitle: 'Security & Compliance',
      description: 'HIPAA, SOC2, and GDPR compliant with bank-level encryption, audit trails, and enterprise security controls.',
      image: '/images/compliance-hipaa-gdpr-3e0c6f.png',
      metric: 'SOC2 + HIPAA',
      category: 'Security',
      headerTitle: 'Enterprise-Grade Security',
      headerDescription: 'Protect sensitive data with <strong>SOC2 and HIPAA compliance</strong> — bank-level encryption, comprehensive audit trails, and enterprise security controls keep your claims secure.'
    },
  ];

  // Create slides with 2 cards each
  const slides = [];
  for (let i = 0; i < allCards.length; i += 2) {
    slides.push(allCards.slice(i, i + 2));
  }

  const handleNext = () => setActiveIndex((p) => (p + 1) % slides.length);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + slides.length) % slides.length);

  // Auto-rotate carousel every 7 seconds (slower for bigger cards)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((p) => (p + 1) % slides.length);
    }, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  const cards = slides[activeIndex];
  // Get the first card of the current slide for header content
  const currentHeaderCard = cards[0];

  return (
    <section className="relative w-full bg-[#F0F5FF] overflow-hidden py-28 md:py-40">
      {/* Background blur */}
      <div
        className="absolute -left-60 bottom-0 w-[500px] h-[600px] bg-[#F0F5FF] blur-[130px] rounded-full"
      />
      <div
        className="absolute -right-60 bottom-0 w-[500px] h-[600px] bg-[#F0F5FF] blur-[130px] rounded-full"
      />

      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <motion.h5
          className="tracking-[0.24em] font-medium text-lg text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          KEY HIGHLIGHTS
        </motion.h5>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-4xl px-1 py-1">
            <span className="px-5 py-2.5 rounded-full text-white font-bold text-base bg-gradient-to-r from-[#2F5FED] to-[#547DF5]">
              Reduce claim turnaround by 80%
            </span>
            <span className="px-5 py-2.5 rounded-full text-black font-medium text-base bg-transparent">
              with enterprise-grade AI automation.
            </span>
          </div>
        </motion.div>

        <motion.h2
          key={`header-title-${activeIndex}`}
          className="font-bold text-[2.4rem] md:text-[3.5rem] text-black leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {currentHeaderCard.headerTitle}
        </motion.h2>

        <motion.p
          key={`header-desc-${activeIndex}`}
          className="text-[1.125rem] md:text-[1.25rem] text-black font-medium max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: currentHeaderCard.headerDescription }}
        />
      </div>

      {/* Cards carousel */}
      <div className="relative mt-20 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 justify-center items-stretch max-w-[1400px] px-6 md:px-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="relative bg-white rounded-3xl border border-[#D8DDE7] overflow-hidden shadow-[0_4px_34px_rgba(0,0,0,0.08)] flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_8px_50px_rgba(0,0,0,0.12)] w-full max-w-lg md:max-w-xl lg:max-w-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                style={{
                  minHeight: '550px',
                }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#2F5FED] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                    {card.category}
                  </span>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-[#F9FFDC] border border-[#C9DC69] text-black text-xs font-semibold rounded-full">
                    {card.metric}
                  </span>
                </div>

                {/* Card Image */}
                <div className="relative h-80 md:h-96 lg:h-[400px] w-full">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover" 
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                
                {/* Card Content */}
                <div className="bg-[#F9FFDC] px-6 py-6 flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black mb-2 leading-tight">
                          {card.title}
                        </h4>
                        <p className="uppercase text-sm font-semibold text-black/70 tracking-wide leading-relaxed mb-3">
                          {card.subtitle}
                        </p>
                        <p className="text-black/80 text-sm md:text-base leading-relaxed mb-4">
                          {card.description}
                        </p>
                        
                        {/* CTA Button */}
                        <button
                          onClick={() => window.open('https://cal.com/blessing-softtech-development-gtbop7/claim-now-demo', '_blank')}
                          className="bg-[#2F5FED] hover:bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 w-fit"
                          style={{ fontFamily: 'Satoshi' }}
                        >
                          Book a Live Demo
                        </button>
                      </div>

                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center gap-4">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            className="cursor-pointer relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {i === activeIndex ? (
              <div className="w-12 h-3 bg-[#C9DC69] rounded-full shadow-lg" />
            ) : (
              <div className="w-3 h-3 bg-[#C9DC69]/40 rounded-full hover:bg-[#C9DC69]/60 transition-colors" />
            )}
          </motion.div>
        ))}
      </div>


      {/* Navigation buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <motion.button
          className="w-10 h-10 rounded-full bg-[#F9FFDC] border border-[#C9DC69] flex items-center justify-center hover:border-[#A4B852] transition-all"
          onClick={handlePrev}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M16 12H8M8 12l4 4m-4-4l4-4"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
        <motion.button
          className="w-10 h-10 rounded-full bg-[#F9FFDC] border border-[#C9DC69] flex items-center justify-center hover:border-[#A4B852] transition-all"
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 12h8m0 0l-4-4m4 4l-4 4"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
