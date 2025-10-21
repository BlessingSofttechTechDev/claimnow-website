'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function KeyHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    [
      {
        title: '1-Click Reports',
        subtitle: 'Ready for Download',
        image: '/images/card-1click.png',
      },
      {
        title: '175 sec',
        subtitle: 'Average Claim Completion Time',
        image: '/images/card-175sec.png',
      },
      {
        title: '99%+',
        subtitle: 'Verified OCR Accuracy',
        image: '/images/card-99percent.png',
      },
      {
        title: '4x Smarter',
        subtitle: 'AI Model Synergy',
        image: '/images/card-4xsmarter.png',
      },
    ],
    [
      {
        title: '175 sec',
        subtitle: 'Average Claim Completion Time',
        image: '/images/card-175sec.png',
      },
      {
        title: '99%+',
        subtitle: 'Verified OCR Accuracy',
        image: '/images/card-99percent.png',
      },
      {
        title: '4x Smarter',
        subtitle: 'AI Model Synergy',
        image: '/images/card-4xsmarter.png',
      },
      {
        title: '1-Click Reports',
        subtitle: 'Ready for Download',
        image: '/images/card-1click.png',
      },
    ],
    [
      {
        title: '99%+',
        subtitle: 'Verified OCR Accuracy',
        image: '/images/card-99percent.png',
      },
      {
        title: '4x Smarter',
        subtitle: 'AI Model Synergy',
        image: '/images/card-4xsmarter.png',
      },
      {
        title: '1-Click Reports',
        subtitle: 'Ready for Download',
        image: '/images/card-1click.png',
      },
      {
        title: '175 sec',
        subtitle: 'Average Claim Completion Time',
        image: '/images/card-175sec.png',
      },
    ],
    [
      {
        title: '4x Smarter',
        subtitle: 'AI Model Synergy',
        image: '/images/card-4xsmarter.png',
      },
      {
        title: '1-Click Reports',
        subtitle: 'Ready for Download',
        image: '/images/card-1click.png',
      },
      {
        title: '175 sec',
        subtitle: 'Average Claim Completion Time',
        image: '/images/card-175sec.png',
      },
      {
        title: '99%+',
        subtitle: 'Verified OCR Accuracy',
        image: '/images/card-99percent.png',
      },
    ],
  ];

  const handleNext = () => setActiveIndex((p) => (p + 1) % slides.length);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + slides.length) % slides.length);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((p) => (p + 1) % slides.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  const cards = slides[activeIndex];

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
          <span className="px-5 py-2.5 rounded-full text-white font-bold text-base bg-gradient-to-r from-[#2F5FED] to-[#547DF5]">
            Reduce claim turnaround by 80%
          </span>
          <span className="px-5 py-2.5 rounded-full text-black font-medium text-base bg-transparent">
            with enterprise-grade AI automation.
          </span>
        </motion.div>

        <motion.h2
          className="font-bold text-[2.4rem] md:text-[3.5rem] text-black leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lightning-Fast Claim Processing
        </motion.h2>

        <motion.p
          className="text-[1.125rem] md:text-[1.25rem] text-black font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Processes claims in just <strong>175 seconds</strong> — faster than any manual or semi-automated system in the industry.
        </motion.p>
      </div>

      {/* Cards carousel */}
      <div className="relative mt-20 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="flex gap-6 md:gap-10 flex-wrap justify-center max-w-[1280px] px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="relative bg-white rounded-3xl border border-[#D8DDE7] overflow-hidden shadow-[0_4px_34px_rgba(0,0,0,0.08)] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_6px_40px_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  flex: '1 1 260px',
                  maxWidth: '300px',
                  transform: `rotateY(${(i - 1.5) * 10}deg) scale(${1 - Math.abs(i - 1.5) * 0.1})`,
                }}
              >
                <div className="relative h-56 md:h-64 w-full">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="bg-[#F9FFDC] px-5 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-lg text-black">{card.title}</h4>
                    <div className="w-5 h-5 border border-[#C9DC69] rounded-xl flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M4.5 6L5.5 7L7.5 5"
                          stroke="#C9DC69"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="6"
                          cy="6"
                          r="5"
                          stroke="#C9DC69"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="uppercase text-[10px] font-medium text-black text-right flex-1 ml-2 tracking-tight">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center gap-3">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {i === activeIndex ? (
              <div className="w-[31px] h-[10px] bg-[#C9DC69] rounded-full" />
            ) : (
              <div className="w-[10px] h-[10px] bg-[#C9DC69]/50 rounded-full" />
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
