'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function KeyHighlights() {
  const [activeSection, setActiveSection] = useState(0);

  const carouselSections = [
    {
      id: 0,
      title: "Lightning-Fast Claim Processing",
      subtitle: "KEY HIGHLIGHTS",
      description: "Processes claims in just 175 seconds — faster than any manual or semi-automated system in the industry.",
      pillText: "Reduce claim turnaround by 80%",
      pillSecondText: "with enterprise-grade AI automation.",
      cards: [
        {
          title: "175 sec",
          subtitle: "Average Claim Completion Time",
          position: { left: 561, top: 453, width: 319, height: 296 },
          icon: "clock"
        },
        {
          title: "99%+",
          subtitle: "Verified OCR Accuracy",
          position: { left: 852, top: 463, width: 384.74, height: 368.48 },
          icon: "check"
        },
        {
          title: "4x Smarter",
          subtitle: "AI Model Synergy",
          position: { left: 1131, top: 568, width: 424.26, height: 415.84 },
          icon: "star"
        },
        {
          title: "1-Click Reports",
          subtitle: "Ready for Download",
          position: { left: 208, top: 463, width: 384.74, height: 368.48 },
          icon: "document"
        }
      ]
    },
    {
      id: 1,
      title: "How ClaimNow Works",
      subtitle: "",
      description: "Upload documents via API, PDF, image, or e-form — ClaimNow instantly captures every data point using smart OCR and NLP.",
      activeStep: "Ingest",
      cards: []
    },
    {
      id: 2,
      title: "Technology That Sets ClaimNow Apart",
      subtitle: "",
      description: "ClaimNow's redundant AI fallback mechanism ensures uninterrupted claim processing — even if one AI model encounters latency or downtime.",
      activeFeature: "Parallel AI Processing",
      cards: []
    }
  ];

  const currentSection = carouselSections[activeSection];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'clock':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#C9DC69" strokeWidth="2"/>
            <path d="M12 6v6l4 2" stroke="#C9DC69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'check':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4" stroke="#C9DC69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="#C9DC69" strokeWidth="2"/>
          </svg>
        );
      case 'star':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 8.5L22 9L16.5 14L18 21L12 18L6 21L7.5 14L2 9L9 8.5L12 2Z" stroke="#C9DC69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'document':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="2" width="18" height="20" rx="2" ry="2" stroke="#C9DC69" strokeWidth="2"/>
            <path d="M7 7h10M7 11h10M7 15h6" stroke="#C9DC69" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute -left-[290px] top-[457px] w-[561.94px] h-[686.36px] bg-[#F0F5FF] blur-[134px]" />
      <div className="absolute left-[1165px] top-[457px] w-[561.94px] h-[686.36px] bg-[#F0F5FF] blur-[134px]" />

      {/* Semi-Circle Navigation Pills */}
      <motion.div
        className="absolute left-[665px] top-[821px] flex items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {carouselSections.map((_, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer"
            onClick={() => setActiveSection(index)}
            whileHover={{ scale: 1.1 }}
          >
            {/* Semi-circle background for active state */}
            {index === activeSection ? (
              <div className="w-[31px] h-[10px] relative">
                {/* Top semi-circle */}
                <div className="absolute top-0 left-0 w-[31px] h-[5px] bg-[#C9DC69] rounded-t-full" />
                {/* Bottom semi-circle */}
                <div className="absolute bottom-0 left-0 w-[31px] h-[5px] bg-[#C9DC69] rounded-b-full" />
              </div>
            ) : (
              <div className="w-[10px] h-[10px] relative">
                {/* Small semi-circle for inactive state */}
                <div className="absolute top-0 left-0 w-[10px] h-[5px] bg-[#C9DC69] opacity-50 rounded-t-full" />
                <div className="absolute bottom-0 left-0 w-[10px] h-[5px] bg-[#C9DC69] opacity-50 rounded-b-full" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Carousel Navigation Button */}
      <motion.div
        className="absolute left-[674px] top-[857px] flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.button
          className="w-[40px] h-[40px] rounded-full bg-[#F9FFDC] border border-[#C9DC69] flex items-center justify-center cursor-pointer hover:bg-[#F9FFDC] hover:border-[#A4B852] transition-colors duration-200"
          onClick={() => setActiveSection((prev) => (prev + 1) % carouselSections.length)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Arrow pointing right */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M8 12L16 12M16 12L12 8M16 12L12 16" 
              stroke="#424821" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Section Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute w-full h-full"
      >
        {/* Section Header */}
        {currentSection.subtitle && (
          <div 
            className="absolute text-black text-center"
            style={{ 
              left: '587px', 
              top: '131px', 
              width: '267px', 
              height: '24px',
              fontFamily: 'Satoshi', 
              fontSize: '24px', 
              fontWeight: 500, 
              lineHeight: '1em', 
              letterSpacing: '24%' 
            }}
          >
            {currentSection.subtitle}
          </div>
        )}

        <div 
          className="absolute text-black text-center"
          style={{ 
            left: '300px', 
            top: '284px', 
            width: '841px', 
            height: '70px',
            fontFamily: 'Satoshi', 
            fontSize: '56px', 
            fontWeight: 700, 
            lineHeight: '1.25em' 
          }}
        >
          {currentSection.title}
        </div>

        <div 
          className="absolute text-black text-center"
          style={{ 
            left: '247px', 
            top: '366px', 
            width: '947px', 
            height: '24px',
            fontFamily: 'Satoshi', 
            fontSize: '20px', 
            fontWeight: 500, 
            lineHeight: '1.2em' 
          }}
        >
          {currentSection.description}
        </div>

        {/* Highlight Pills for first section */}
        {activeSection === 0 && (
          <div className="absolute left-[425.5px] top-[179px] flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#2F5FED] to-[#547DF5] px-4 py-[10px] rounded-[60px]">
              <span className="text-white font-bold" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 700, lineHeight: '1.125em' }}>
                {currentSection.pillText}
              </span>
            </div>
            <div className="px-4 py-[10px] rounded-[60px]">
              <span className="text-black font-medium" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.125em' }}>
                {currentSection.pillSecondText}
              </span>
            </div>
          </div>
        )}

        {/* Active Step for How It Works section */}
        {activeSection === 1 && currentSection.activeStep && (
          <div
            className="absolute text-black text-center"
            style={{ 
              left: '640px', 
              top: '251px', 
              width: '160px', 
              height: '76px',
              fontFamily: 'Satoshi', 
              fontSize: '56px', 
              fontWeight: 700, 
              lineHeight: '1.35em' 
            }}
          >
            {currentSection.activeStep}
          </div>
        )}

        {/* Feature Tab for Technology section */}
        {activeSection === 2 && currentSection.activeFeature && (
          <div className="absolute left-[48px] top-[218px] w-[1344px] h-[673px] bg-white border border-[#D2D9E8] rounded-[24px]">
            <div className="absolute left-[20px] top-[20px] w-[235px] h-[56px] bg-gradient-to-r from-[#2F5FED] to-[#547DF5] rounded-[14px] flex items-center px-4">
              <div className="flex items-center gap-4">
                <div className="w-[48px] h-[48px] bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="#2F5FED"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" fill="#2F5FED"/>
                  </svg>
                </div>
                <span className="text-white font-medium" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.35em' }}>
                  {currentSection.activeFeature}
                </span>
              </div>
            </div>
            
            {/* Feature Content */}
            <div className="absolute left-[32px] top-[132px] w-[399px] h-[108px]">
              <h3 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '40px', fontWeight: 700, lineHeight: '1.35em' }}>
                Consistent, Fast, and Fail-Safe
              </h3>
            </div>
            
            {/* Feature List */}
            <div className="absolute left-[32px] top-[268px] w-[465px] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.35em' }}>
                  Multiple AI engines process documents simultaneously.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.35em' }}>
                  Automatic fallback ensures no delays during model downtime.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.35em' }}>
                  Intelligent load balancing keeps accuracy and speed intact.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards - only for first section */}
        {activeSection === 0 && currentSection.cards && currentSection.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
            className="absolute bg-white border border-[#D8DDE7] rounded-3xl shadow-[0px_4px_34px_0px_rgba(0,0,0,0.08)]"
            style={{
              left: `${card.position.left}px`,
              top: `${card.position.top}px`,
              width: `${card.position.width}px`,
              height: `${card.position.height}px`
            }}
          >
            {/* Background gradient area */}
            <div className="absolute left-[-1px] top-[-35px] w-full h-[320px] bg-gradient-to-br from-[#2F5FED]/10 to-[#547DF5]/20 rounded-t-3xl flex items-center justify-center">
              <div className="w-20 h-20 bg-[#F9FFDC] border border-[#C9DC69] rounded-2xl flex items-center justify-center">
                {renderIcon(card.icon)}
              </div>
            </div>
            
            {/* Bottom stats area */}
            <div className="absolute bottom-0 left-0 w-full h-auto bg-[#F9FFDC] px-6 py-2 flex items-center justify-between gap-12 rounded-b-3xl">
              <div className="flex items-center gap-1">
                <h4 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1.167em' }}>
                  {card.title}
                </h4>
                <div className="w-5 h-5 bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 6L5.5 7L7.5 5" stroke="#C9DC69" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="6" r="5" stroke="#C9DC69" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
              <p className="text-black text-right flex-1" style={{ fontFamily: 'Satoshi', fontSize: '10px', fontWeight: 500, lineHeight: '1.4em', letterSpacing: '-2%', textTransform: 'uppercase' }}>
                {card.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
