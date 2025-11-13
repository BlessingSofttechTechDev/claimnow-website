'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p === 5 ? 1 : p + 1));
    }, 5000);
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
      className="relative overflow-hidden bg-[#F0F5FF] py-20 md:py-28"
    >
      {/* Subtle gradient & grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBF0FF] via-[#F7F9FF] to-[#FFFFFF]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-[#2E3B5B] text-lg md:text-xl font-semibold uppercase tracking-wide mb-2"
              style={{ fontFamily: 'Satoshi' }}
            >
              How ClaimNow Works
            </h2>
            <h3
              className="text-[#0E1117] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: 'Satoshi' }}
            >
              Intelligent Automation, Step by Step
            </h3>
            <p
              className="text-[#2E3B5B]/70 text-base md:text-lg leading-relaxed mt-4 max-w-lg"
              style={{ fontFamily: 'DM Sans' }}
            >
              Every claim moves through our intelligent pipeline — seamlessly combining AI automation with human insight for unmatched accuracy and transparency.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative mt-10 space-y-5">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9DC69] via-[#C9DC69]/30 to-transparent" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                onClick={() => setActive(i + 1)}
                whileHover={{ scale: 1.02 }}
                className={`relative flex items-start gap-5 p-5 pl-12 rounded-2xl cursor-pointer transition-all ${
                  active === i + 1
                    ? 'bg-white shadow-lg border border-[#C9DC69]/60'
                    : 'bg-white/70 hover:shadow-md border border-transparent'
                }`}
              >
                <div
                  className={`absolute left-0 top-6 w-12 h-12 flex items-center justify-center rounded-full font-semibold ${
                    active === i + 1
                      ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] text-[#1D2433] border border-[#C9DC69]'
                      : 'bg-[#EEF2FA] text-gray-600'
                  }`}
                >
                  0{i + 1}
                </div>

                <div className="space-y-1">
                  <h4
                    className={`text-lg font-semibold ${
                      active === i + 1 ? 'text-[#1D2433]' : 'text-[#2E3B5B]'
                    }`}
                    style={{ fontFamily: 'Satoshi' }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      active === i + 1
                        ? 'text-[#1D2433]/80'
                        : 'text-[#2E3B5B]/60'
                    }`}
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-[55%] flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/20 via-transparent to-transparent" />
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-[#C9DC69]/40 to-transparent blur-xl" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Step Indicators */}
      <div className="relative mt-16 flex justify-center gap-3">
        {steps.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(i + 1)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              active === i + 1
                ? 'bg-[#C9DC69] w-8'
                : 'bg-gray-400/40 w-3'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
