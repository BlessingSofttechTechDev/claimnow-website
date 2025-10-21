'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        return prev === 5 ? 1 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stepData = {
    1: {
      title: 'Ingest',
      description: 'Upload documents via API, PDF, image, or e-form — ClaimNow instantly captures every data point using smart OCR and NLP.',
      image: '/images/document-ingestion.png'
    },
    2: {
      title: 'AI-Powered Extraction',
      description: 'Our multi-model AI core extracts data with 99.9% text recognition accuracy, even from complex or low-quality scans. It auto-detects billing codes, line items, and procedural charges — eliminating manual keying errors.',
      image: '/images/ai-powered-extraction.png'
    },
    3: {
      title: 'Confidence Scoring & Parallel Review',
      description: 'Every field includes a confidence indicator — highlighted in yellow whenever AI is less than 100% certain. With our parallel viewing interface, you can cross-check extracted data alongside the original PDF in real time.',
      image: '/images/confidence-scoring.png'
    },
    4: {
      title: 'Rules Engine & Adjudication',
      description: 'Built-in rulesets automatically validate claims against policy coverage, exclusions, and government guidelines — ensuring complete transparency.',
      image: '/images/rules-engine.png'
    },
    5: {
      title: 'Human-in-the-Loop',
      description: 'When necessary, reviewers can step in seamlessly without disrupting the automated pipeline. This AI + human synergy guarantees the perfect balance of speed, accuracy, and accountability.',
      image: '/images/human-in-loop.png'
    }
  };

  const currentStepData = stepData[activeStep as keyof typeof stepData];

  return (
    <section className="relative w-full min-h-screen bg-[#F0F5FF] overflow-hidden py-8 md:py-16 lg:py-20">
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/hero-background.png" 
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-[#F0F5FF] opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-gray-600 opacity-40 text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6" 
              style={{ fontFamily: 'Satoshi' }}>
            How ClaimNow Works
          </h2>
          
          {/* Dynamic step title */}
          <motion.h3
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-black text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: 'Satoshi' }}
          >
            {currentStepData.title}
          </motion.h3>
          <motion.p
            key={`desc-${activeStep}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'DM Sans' }}
          >
            {currentStepData.description}
          </motion.p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 mt-8 md:mt-16">
          <div className="hidden lg:block relative">
            <div className="relative w-96 h-96 xl:w-[500px] xl:h-[500px]">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(47, 95, 237, 0)" />
                    <stop offset="51%" stopColor="rgba(37, 74, 185, 0.2)" />
                    <stop offset="100%" stopColor="rgba(27, 54, 135, 0)" />
                  </linearGradient>
                </defs>
                <circle cx="250" cy="250" r="240" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
                <circle cx="250" cy="250" r="180" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
                <circle cx="250" cy="250" r="120" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
              </svg>
              {[1, 2, 3, 4, 5].map((step, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 160;
                const x = 250 + radius * Math.cos(angle);
                const y = 250 + radius * Math.sin(angle);
                
                return (
                  <motion.button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    className={`absolute w-16 h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 ${
                      activeStep === step 
                        ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-lg' 
                        : 'bg-transparent text-[rgba(29,36,51,0.8)] border border-gray-300'
                    }`}
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`,
                      fontFamily: 'DM Sans', 
                      fontSize: activeStep === step ? '18px' : '16px', 
                      fontWeight: activeStep === step ? 600 : 500
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    0{step}

                    {activeStep === step && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 rounded-full border-8 border-[rgba(201,220,105,0.24)]"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
          <div className="lg:hidden flex justify-center space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
              <motion.button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  activeStep === step 
                    ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-lg' 
                    : 'bg-transparent text-[rgba(29,36,51,0.8)] border border-gray-300'
                }`}
                style={{ 
                  fontFamily: 'DM Sans', 
                  fontSize: '14px', 
                  fontWeight: activeStep === step ? 600 : 500
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                0{step}
                {activeStep === step && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 rounded-full border-4 border-[rgba(201,220,105,0.24)]"
                  />
                )}
              </motion.button>
            ))}
          </div>
          <motion.div
            key={`step${activeStep}-image`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            <div className="relative aspect-[2/3] w-full">
              <Image 
                src={currentStepData.image}
                alt={`${currentStepData.title} Interface`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
