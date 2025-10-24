'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type CardType = 'faster-settlements' | 'accuracy' | 'efficiency' | 'satisfaction';

interface CardData {
  id: CardType;
  title: string;
  description: string;
  statValue: string;
  statDescription: string;
  icon: React.ReactNode;
}

interface ImageData {
  backgroundImage: string;
  analyticsImage: string;
}

// Helper functions for dynamic content
const getFeatureHighlights = (cardType: CardType): string[] => {
  const highlights = {
    'faster-settlements': [
      'AI-powered claim routing',
      'Real-time processing status',
      'Automated approval workflows'
    ],
    'accuracy': [
      '99% OCR precision rate',
      'Built-in confidence scoring',
      'Fraud detection algorithms'
    ],
    'efficiency': [
      'Automated data extraction',
      'Smart form pre-filling',
      'Reduced manual reviews'
    ],
    'satisfaction': [
      'Faster claim resolutions',
      'Transparent tracking',
      'Reduced claim rejections'
    ]
  };
  return highlights[cardType];
};

const getDemoTitle = (cardType: CardType): string => {
  const titles = {
    'faster-settlements': 'Instant Settlement Engine',
    'accuracy': 'Smart Validation System',
    'efficiency': 'Automated Workflow',
    'satisfaction': 'Member Experience Hub'
  };
  return titles[cardType];
};

const getDemoDescription = (cardType: CardType): string => {
  const descriptions = {
    'faster-settlements': 'Watch claims move from submission to approval in real-time',
    'accuracy': 'See our AI validate documents with 99% precision',
    'efficiency': 'Experience automated processing that saves 40% admin time',
    'satisfaction': 'Track member satisfaction through our dashboard'
  };
  return descriptions[cardType];
};

const cardData: (CardData & { images: ImageData })[] = [
  {
    id: 'faster-settlements',
    title: 'Faster Settlements, Greater Throughput',
    description: 'ClaimNow\'s AI-driven adjudication engine accelerates every stage of claim processing — from intake to approval — ensuring providers and policyholders receive payouts in record time.',
    statValue: '2X',
    statDescription: 'Faster claim settlements',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 8L7 11L12 5" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    images: {
      backgroundImage: '/images/results-faster-settlements-bg.png',
      analyticsImage: '/images/results-faster-settlements-analytics.png'
    }
  },
  {
    id: 'accuracy',
    title: 'Accuracy You Can Trust',
    description: 'With 99% OCR precision and built-in confidence scoring, ClaimNow ensures every extracted field is verified, validated, and traceable.',
    statValue: '99%',
    statDescription: 'Data accuracy & confidence tracking',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 8L7 11L12 5" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    images: {
      backgroundImage: '/images/results-accuracy-bg.png',
      analyticsImage: '/images/results-accuracy-analytics.png'
    }
  },
  {
    id: 'efficiency',
    title: 'Do More with Less',
    description: 'ClaimNow automates repetitive verification and form-filling tasks, reducing manual effort and operational costs by up to 40%.',
    statValue: '40%',
    statDescription: 'Reduction in admin overhead',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 8L7 11L12 5" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    images: {
      backgroundImage: '/images/results-efficiency-bg.png',
      analyticsImage: '/images/results-efficiency-analytics.png'
    }
  },
  {
    id: 'satisfaction',
    title: 'Happier Providers, Happier Members',
    description: 'With faster turnaround times and fewer claim reworks, ClaimNow enhances satisfaction across the ecosystem — from hospitals and TPAs to policyholders.',
    statValue: '90%+',
    statDescription: 'Provider & member satisfaction rate',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 8L7 11L12 5" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    images: {
      backgroundImage: '/images/results-satisfaction-bg.png',
      analyticsImage: '/images/results-satisfaction-analytics.png'
    }
  }
];

export default function ResultsSection() {
  const [expandedCard, setExpandedCard] = useState<CardType>('faster-settlements');
  const currentCardData = cardData.find(card => card.id === expandedCard) || cardData[0];

  return (
    <section className="w-full bg-[#F0F5FF] py-12">
      {/* Container with exact Figma measurements */}
      <div className="w-full max-w-[1440px] mx-auto px-3">
        
        {/* Header Card - Pixel Perfect */}
        <motion.div 
          className="bg-white rounded-3xl mb-2 w-full max-w-[1416px] h-[223px] relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center justify-between px-[68px] py-[42px]">
            <h2 className="text-black font-bold text-[56px] leading-[70px] max-w-[727px] font-['Satoshi']">
              Real Results That Redefine Claim Processing.
            </h2>
            
            <motion.button 
              className="flex items-center gap-2.5 px-4 py-2 h-10 rounded-full border border-black bg-transparent text-[#1D2433] font-bold text-sm font-['Satoshi'] shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://cal.com/blessing-softtech-development-gtbop7/claim-now-demo', '_blank')}
            >
              Let&apos;s Talk
              <svg width="18.38" height="18.38" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Layout - Pixel Perfect Grid */}
        <div className="flex gap-2">
          
          {/* Left Column - Expandable Cards */}
          <div className="w-[598px] flex flex-col gap-2">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                className="bg-white rounded-3xl cursor-pointer transition-all duration-500 ease-out overflow-hidden relative"
                style={{ height: expandedCard === card.id ? '440px' : '96px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setExpandedCard(card.id)}
              >
                {/* Card Header */}
                <div 
                  className="flex items-center justify-between w-[462px] mx-[68px]"
                  style={{
                    paddingTop: expandedCard === card.id ? '36px' : '28px',
                    paddingBottom: expandedCard === card.id ? '0px' : '28px'
                  }}
                >
                  <h3 className="text-black font-medium text-2xl leading-6 w-[301px] font-['Satoshi']">
                    {card.title}
                  </h3>
                  
                  <motion.div 
                    className="w-10 h-10 shrink-0"
                    animate={{ opacity: expandedCard === card.id ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCard === card.id && (
                    <motion.div
                      className="px-[68px] pt-24"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <div className="w-[462px]">
                        <p className="text-black font-medium text-[28px] leading-[35px] mb-8 font-['Satoshi'] h-[140px] overflow-hidden">
                          {card.description}
                        </p>

                        <motion.button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://cal.com/blessing-softtech-development-gtbop7/claim-now-demo', '_blank');
                          }}
                          className="bg-black text-white font-bold text-sm px-4 py-2 h-10 rounded-full font-['Satoshi']"
                          whileHover={{ scale: 1.05, backgroundColor: '#1f1f1f' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book a live demo
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Dynamic Stats & Visual */}
          <div className="w-[818px] flex flex-col gap-2">
            
            {/* Large Stats Display */}
            <motion.div
              key={`main-stats-${expandedCard}`}
              className="bg-gradient-to-br from-[#F9FFDC] to-[#E8F5B8] border border-[#C9DC69] rounded-3xl h-[376px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 right-8 w-32 h-32 border border-[#C9DC69] rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 border border-[#C9DC69] rounded-full"></div>
              </div>

              <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                <div className="mb-8">
                  <motion.div 
                    className="text-[#1D2433] font-bold text-[120px] leading-none font-['Satoshi']"
                    key={`stat-${expandedCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {currentCardData.statValue}
                  </motion.div>
                  <motion.div 
                    className="text-[#1D2433] font-medium text-2xl leading-7 mt-4 font-['Satoshi']"
                    key={`stat-desc-${expandedCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {currentCardData.statDescription}
                  </motion.div>
                </div>

                {/* Feature Highlights */}
                <motion.div 
                  className="space-y-3"
                  key={`features-${expandedCard}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {getFeatureHighlights(expandedCard).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#C9DC69] rounded-full flex items-center justify-center shrink-0">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8L7 11L12 5" stroke="#1D2433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#1D2433] font-medium text-lg font-['Satoshi']">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Interactive Demo Preview */}
            <motion.div
              key={`demo-${expandedCard}`}
              className="bg-white rounded-3xl h-[374px] relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-[#1D2433] font-bold text-xl font-['Satoshi'] mb-2">
                      See It In Action
                    </h4>
                    <p className="text-gray-600 font-medium text-sm font-['Satoshi']">
                      Interactive demo showcasing {currentCardData.title.toLowerCase()}
                    </p>
                  </div>
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Demo Visual Placeholder */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl h-[220px] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      key={`demo-content-${expandedCard}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {currentCardData.icon}
                      </div>
                      <h5 className="text-[#1D2433] font-semibold text-lg font-['Satoshi'] mb-2">
                        {getDemoTitle(expandedCard)}
                      </h5>
                      <p className="text-gray-600 font-medium text-sm font-['Satoshi'] max-w-[300px]">
                        {getDemoDescription(expandedCard)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Animated Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>

                {/* CTA Button */}
                <motion.button
                  className="absolute bottom-6 right-6 bg-[#1D2433] text-white font-semibold text-sm px-6 py-3 rounded-full font-['Satoshi'] flex items-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: '#2a3441' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://cal.com/blessing-softtech-development-gtbop7/claim-now-demo', '_blank')}
                >
                  Try Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
