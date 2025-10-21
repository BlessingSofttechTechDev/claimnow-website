'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function KeyHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Multiple slide configurations - exact Figma positioning with semi-circle layout
  const slides = [
    {
      id: 0,
      cards: [
        {
          title: "4x Smarter",
          subtitle: "AI Model Synergy",
          image: "/images/card-4xsmarter.png",
          position: { left: -108, top: 568, width: 424.26, height: 415.84 }
        },
        {
          title: "1-Click Reports",
          subtitle: "Ready for Download",
          image: "/images/card-1click.png",
          position: { left: 208, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "175 sec",
          subtitle: "Average Claim Completion Time",
          image: "/images/card-175sec.png",
          position: { left: 561, top: 453, width: 319, height: 296 }
        },
        {
          title: "99%+",
          subtitle: "Verified OCR Accuracy",
          image: "/images/card-99percent.png",
          position: { left: 852, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "4x Smarter",
          subtitle: "AI Model Synergy",
          image: "/images/card-4xsmarter.png",
          position: { left: 1131, top: 568, width: 424.26, height: 415.84 }
        }
      ]
    },
    {
      id: 1,
      cards: [
        {
          title: "1-Click Reports",
          subtitle: "Ready for Download",
          image: "/images/card-1click.png",
          position: { left: -108, top: 568, width: 424.26, height: 415.84 }
        },
        {
          title: "175 sec",
          subtitle: "Average Claim Completion Time",
          image: "/images/card-175sec.png",
          position: { left: 208, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "99%+",
          subtitle: "Verified OCR Accuracy",
          image: "/images/card-99percent.png",
          position: { left: 561, top: 453, width: 319, height: 296 }
        },
        {
          title: "4x Smarter",
          subtitle: "AI Model Synergy",
          image: "/images/card-4xsmarter.png",
          position: { left: 852, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "1-Click Reports",
          subtitle: "Ready for Download",
          image: "/images/card-1click.png",
          position: { left: 1131, top: 568, width: 424.26, height: 415.84 }
        }
      ]
    },
    {
      id: 2,
      cards: [
        {
          title: "175 sec",
          subtitle: "Average Claim Completion Time",
          image: "/images/card-175sec.png",
          position: { left: -108, top: 568, width: 424.26, height: 415.84 }
        },
        {
          title: "99%+",
          subtitle: "Verified OCR Accuracy",
          image: "/images/card-99percent.png",
          position: { left: 208, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "4x Smarter",
          subtitle: "AI Model Synergy",
          image: "/images/card-4xsmarter.png",
          position: { left: 561, top: 453, width: 319, height: 296 }
        },
        {
          title: "1-Click Reports",
          subtitle: "Ready for Download",
          image: "/images/card-1click.png",
          position: { left: 852, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "175 sec",
          subtitle: "Average Claim Completion Time",
          image: "/images/card-175sec.png",
          position: { left: 1131, top: 568, width: 424.26, height: 415.84 }
        }
      ]
    },
    {
      id: 3,
      cards: [
        {
          title: "99%+",
          subtitle: "Verified OCR Accuracy",
          image: "/images/card-99percent.png",
          position: { left: -108, top: 568, width: 424.26, height: 415.84 }
        },
        {
          title: "4x Smarter",
          subtitle: "AI Model Synergy",
          image: "/images/card-4xsmarter.png",
          position: { left: 208, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "1-Click Reports",
          subtitle: "Ready for Download",
          image: "/images/card-1click.png",
          position: { left: 561, top: 453, width: 319, height: 296 }
        },
        {
          title: "175 sec",
          subtitle: "Average Claim Completion Time",
          image: "/images/card-175sec.png",
          position: { left: 852, top: 463, width: 384.74, height: 368.48 }
        },
        {
          title: "99%+",
          subtitle: "Verified OCR Accuracy",
          image: "/images/card-99percent.png",
          position: { left: 1131, top: 568, width: 424.26, height: 415.84 }
        }
      ]
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative w-full h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Background blur elements */}
      <div 
        className="absolute left-[-290px] top-[457px] w-[561.94px] h-[686.36px] bg-[#F0F5FF]"
        style={{ filter: 'blur(134px)' }}
      />
      <div 
        className="absolute left-[1165px] top-[457px] w-[561.94px] h-[686.36px] bg-[#F0F5FF]"
        style={{ filter: 'blur(134px)' }}
      />

      {/* Section Header */}
      <motion.div 
        className="absolute left-[587px] top-[131px] w-[267px] h-[24px] text-black text-center"
        style={{ 
          fontFamily: 'Satoshi', 
          fontSize: '24px', 
          fontWeight: 500, 
          lineHeight: '1em', 
          letterSpacing: '0.24em' 
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        KEY HIGHLIGHTS
      </motion.div>

      {/* Highlight Pills */}
      <motion.div 
        className="absolute left-[425.5px] top-[179px] flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div 
          className="px-4 py-[10px] rounded-[60px]"
          style={{ 
            background: 'linear-gradient(134deg, rgb(47, 95, 237) 1%, rgb(84, 125, 245) 100%)' 
          }}
        >
          <span 
            className="text-white"
            style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 700, lineHeight: '1.125em' }}
          >
            Reduce claim turnaround by 80%
          </span>
        </div>
        <div className="px-4 py-[10px] rounded-[60px]">
          <span 
            className="text-black"
            style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.125em' }}
          >
            with enterprise-grade AI automation.
          </span>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        className="absolute left-[300px] top-[284px] w-[841px] h-[70px] text-black text-center"
        style={{ 
          fontFamily: 'Satoshi', 
          fontSize: '56px', 
          fontWeight: 700, 
          lineHeight: '1.25em' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Lightning-Fast Claim Processing
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="absolute left-[247px] top-[366px] w-[947px] h-[24px] text-black text-center"
        style={{ 
          fontFamily: 'Satoshi', 
          fontSize: '20px', 
          fontWeight: 500, 
          lineHeight: '1.2em' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Processes claims in just 175 seconds — faster than any manual or semi-automated system in the industry.
      </motion.p>

      {/* Cards in Semi-Circle Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        >
          {currentSlide.cards.map((card, index) => (
            <motion.div
              key={`${activeIndex}-${index}`}
              className="absolute bg-white border border-[#D8DDE7] rounded-3xl overflow-hidden"
              style={{
                left: `${card.position.left}px`,
                top: `${card.position.top}px`,
                width: `${card.position.width}px`,
                height: `${card.position.height}px`,
                boxShadow: '0px 4px 34px 0px rgba(0, 0, 0, 0.08)'
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card Image */}
              <div className="relative w-full h-[70%]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Footer */}
              <div className="absolute bottom-0 left-0 w-full bg-[#F9FFDC] px-6 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <h4 
                    className="text-black"
                    style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1.167em' }}
                  >
                    {card.title}
                  </h4>
                  <div className="w-5 h-5 bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4.5 6L5.5 7L7.5 5" stroke="#C9DC69" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="6" cy="6" r="5" stroke="#C9DC69" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>
                <p 
                  className="text-black text-right flex-1 uppercase"
                  style={{ 
                    fontFamily: 'Satoshi', 
                    fontSize: '10px', 
                    fontWeight: 500, 
                    lineHeight: '1.4em', 
                    letterSpacing: '-0.02em' 
                  }}
                >
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Custom Pagination Dots */}
      <motion.div
        className="absolute left-[665px] top-[821px] flex items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.1 }}
          >
            {index === activeIndex ? (
              <div className="w-[31px] h-[10px] relative">
                <div className="absolute top-0 left-0 w-[31px] h-[5px] bg-[#C9DC69] rounded-t-full" />
                <div className="absolute bottom-0 left-0 w-[31px] h-[5px] bg-[#C9DC69] rounded-b-full" />
              </div>
            ) : (
              <div className="w-[10px] h-[10px] relative">
                <div className="absolute top-0 left-0 w-[10px] h-[5px] bg-[#C9DC69] opacity-50 rounded-t-full" />
                <div className="absolute bottom-0 left-0 w-[10px] h-[5px] bg-[#C9DC69] opacity-50 rounded-b-full" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Buttons - Both Left and Right */}
      <motion.div
        className="absolute left-[622px] top-[857px] flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {/* Left Arrow */}
        <motion.button
          className="w-[40px] h-[40px] rounded-full bg-[#F9FFDC] border border-[#C9DC69] flex items-center justify-center hover:border-[#A4B852] transition-colors duration-200"
          onClick={handlePrev}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M16 12L8 12M8 12L12 16M8 12L12 8" 
              stroke="#000000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          className="w-[40px] h-[40px] rounded-full bg-[#F9FFDC] border border-[#C9DC69] flex items-center justify-center hover:border-[#A4B852] transition-colors duration-200"
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M8 12L16 12M16 12L12 8M16 12L12 16" 
              stroke="#000000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
