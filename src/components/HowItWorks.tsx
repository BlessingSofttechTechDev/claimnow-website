'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p === 5 ? 1 : p + 1));
    }, 9000); // Changed to 9 seconds
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: 'Ingest',
      desc: 'Upload documents via API, PDF, image, or e-form. ClaimNow instantly captures every data point using smart OCR and NLP.',
      image: '/images/document-ingestion.png',
    },
    {
      title: 'AI-Powered Extraction',
      desc: 'Our multi-model AI extracts data with 99.9% accuracy, even from poor-quality scans. It detects billing codes, line items, and procedural charges automatically.',
      image: '/images/ai-powered-extraction.png',
    },
    {
      title: 'Confidence Scoring & Review',
      desc: 'Each field includes a confidence indicator. Review uncertain fields alongside the original PDF in our parallel viewer — in real time.',
      image: '/images/confidence-scoring.png',
    },
    {
      title: 'Rules Engine & Adjudication',
      desc: 'Built-in validation rules check every claim against coverage, exclusions, and compliance guidelines — ensuring accuracy and fairness.',
      image: '/images/rules-engine.png',
    },
    {
      title: 'Human-in-the-Loop',
      desc: 'When needed, human reviewers can step in seamlessly. The synergy between AI and humans guarantees speed and accountability.',
      image: '/images/human-in-loop.png',
    },
  ];

  const current = steps[active - 1];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F7FAFF] to-[#FFFFFF] py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF0FF]/60 via-[#F7F9FF]/40 to-[#FFFFFF]/80" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9DC69]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2F5FED]/5 rounded-full blur-3xl" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23C9DC69' fill-opacity='0.03'><circle cx='30' cy='30' r='1'/></g></g></svg>")`
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9DC69]/10 border border-[#C9DC69]/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#C9DC69] rounded-full animate-pulse" />
            <span className="text-[#2E3B5B] text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'Satoshi' }}>
              How ClaimNow Works
            </span>
          </div>
          
          <h2 className="text-[#0E1117] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto" style={{ fontFamily: 'Satoshi' }}>
            Intelligent Automation,
            <br />
            <span className="bg-gradient-to-r from-[#2F5FED] to-[#C9DC69] bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>
          
          <p className="text-[#2E3B5B]/70 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'DM Sans' }}>
            Every claim moves through our intelligent pipeline — seamlessly combining AI automation with human insight for unmatched accuracy and transparency.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Steps */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative space-y-4">
              {/* Connecting line */}
              <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#C9DC69] via-[#C9DC69]/30 to-[#C9DC69]/10" />
              
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActive(i + 1)}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    active === i + 1 ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className={`relative flex items-start gap-6 p-6 lg:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                    active === i + 1
                      ? 'bg-white shadow-xl border border-[#C9DC69]/40 shadow-[#C9DC69]/10'
                      : 'bg-white/60 hover:bg-white/80 border border-white/20 hover:shadow-lg'
                  }`}>
                    
                    {/* Step Number */}
                    <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-all duration-300 ${
                      active === i + 1
                        ? 'bg-gradient-to-br from-[#C9DC69] to-[#B8CC5A] text-[#1D2433] shadow-lg'
                        : 'bg-gradient-to-br from-[#EEF2FA] to-[#E5E9F0] text-[#2E3B5B]/60 group-hover:from-[#C9DC69]/20 group-hover:to-[#C9DC69]/10'
                    }`} style={{ fontFamily: 'Satoshi' }}>
                      {i + 1}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300 ${
                        active === i + 1 ? 'text-[#1D2433]' : 'text-[#2E3B5B] group-hover:text-[#1D2433]'
                      }`} style={{ fontFamily: 'Satoshi' }}>
                        {step.title}
                      </h4>
                      
                      <p className={`text-base lg:text-lg leading-relaxed transition-colors duration-300 ${
                        active === i + 1 ? 'text-[#1D2433]/80' : 'text-[#2E3B5B]/60 group-hover:text-[#2E3B5B]/80'
                      }`} style={{ fontFamily: 'DM Sans' }}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Active indicator */}
                    {active === i + 1 && (
                      <motion.div 
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#C9DC69] rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center lg:justify-start gap-2 mt-8">
              {steps.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i + 1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i + 1
                      ? 'bg-[#C9DC69] w-8 shadow-sm'
                      : 'bg-[#C9DC69]/30 w-3 hover:bg-[#C9DC69]/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95, x: 40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Main image container */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/10 via-transparent to-transparent" />
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#C9DC69]/20 to-[#C9DC69]/5 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#2F5FED]/10 to-[#2F5FED]/5 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />

                  {/* Step indicator on image */}
                  <motion.div 
                    className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-[#C9DC69] rounded-full animate-pulse" />
                    <span className="text-[#1D2433] font-semibold text-sm" style={{ fontFamily: 'Satoshi' }}>
                      Step {active}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
