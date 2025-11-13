'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


type CardType = 'faster-settlements' | 'accuracy' | 'efficiency' | 'satisfaction';

interface CardData {
  id: CardType;
  title: string;
  description: string;
  statValue: string;
  statDescription: string;
  benefits: string[];
  images: {
    backgroundImage: string;
    analyticsImage: string;
  };
}

const cardData: CardData[] = [
  {
    id: 'faster-settlements',
    title: 'Lightning-Fast Claim Settlement',
    description: 'Transform claim processing from days to minutes. Our AI-powered adjudication engine accelerates every stage — from document ingestion to final approval — delivering settlements at unprecedented speed.',
    statValue: '<5 min',
    statDescription: 'Average claim processing time',
    benefits: [
      'Instant document verification',
      'Automated approval workflows',
      'Real-time status tracking',
      'Immediate payout initiation'
    ],
    images: {
      backgroundImage: '/images/results-faster-settlements-bg.png',
      analyticsImage: '/images/results-faster-settlements-analytics.png'
    }
  },
  {
    id: 'accuracy',
    title: 'Unmatched Precision & Reliability',
    description: 'Achieve industry-leading accuracy with our multi-model AI system. Every data point is extracted, validated, and confidence-scored to ensure zero-error claim processing.',
    statValue: '> 99%',
    statDescription: 'Data extraction accuracy',
    benefits: [
      'Multi-model AI verification',
      'Confidence scoring on every field',
      'Built-in fraud detection',
      'Comprehensive audit trails'
    ],
    images: {
      backgroundImage: '/images/results-accuracy-bg.png',
      analyticsImage: '/images/results-accuracy-analytics.png'
    }
  },
  {
    id: 'efficiency',
    title: 'Maximize Efficiency, Minimize Costs',
    description: 'Eliminate manual data entry and repetitive verification tasks. ClaimNow automates the entire claims workflow, dramatically reducing operational overhead while improving throughput.',
    statValue: '70%+',
    statDescription: 'Reduction in processing costs',
    benefits: [
      'Automated data extraction',
      'Smart form pre-filling',
      'Reduced manual reviews',
      'Streamlined workflows'
    ],
    images: {
      backgroundImage: '/images/results-efficiency-bg.png',
      analyticsImage: '/images/results-efficiency-analytics.png'
    }
  },
  {
    id: 'satisfaction',
    title: 'Exceptional Experience for All',
    description: 'Faster approvals, fewer errors, and transparent tracking create superior experiences for providers, TPAs, and policyholders alike. See satisfaction scores soar across your ecosystem.',
    statValue: '95%+',
    statDescription: 'Stakeholder satisfaction rate',
    benefits: [
      'Faster claim resolutions',
      'Transparent status tracking',
      'Fewer claim rejections',
      'Improved communication'
    ],
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
    <section id="results" className="w-full bg-[#F0F5FF] py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="bg-white rounded-2xl lg:rounded-3xl mb-6 lg:mb-8 p-6 sm:p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9DC69]/10 border border-[#C9DC69]/20 rounded-full mb-4">
                <div className="w-2 h-2 bg-[#C9DC69] rounded-full animate-pulse" />
                <span className="text-[#2E3B5B] text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'Satoshi' }}>
                  Real Results
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0E1117] mb-4" style={{ fontFamily: 'Satoshi' }}>
                Transforming Claims Processing
              </h2>
              
              <p className="text-base lg:text-lg text-[#2E3B5B]/70 max-w-3xl" style={{ fontFamily: 'Satoshi' }}>
                See how ClaimNow delivers measurable improvements across speed, accuracy, efficiency, and satisfaction
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid - Fully Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Left Side - Card Selectors */}
          <div className="lg:col-span-5 space-y-3 lg:space-y-4">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                onClick={() => setExpandedCard(card.id)}
                className={`cursor-pointer rounded-2xl lg:rounded-3xl p-4 sm:p-6 transition-all duration-300 ${
                  expandedCard === card.id
                    ? 'bg-white shadow-xl border-2 border-[#C9DC69]'
                    : 'bg-white/60 hover:bg-white/80 border border-gray-200'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: expandedCard === card.id ? 1 : 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                        expandedCard === card.id ? 'bg-[#C9DC69]' : 'bg-gray-200'
                      }`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8L7 11L12 5" stroke={expandedCard === card.id ? '#1D2433' : '#666'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                        expandedCard === card.id ? 'text-[#0E1117]' : 'text-[#2E3B5B]'
                      }`} style={{ fontFamily: 'Satoshi' }}>
                        {card.title}
                      </h3>
                    </div>
                    
                    <p className={`text-sm sm:text-base transition-colors duration-300 line-clamp-2 ${
                      expandedCard === card.id ? 'text-[#2E3B5B]' : 'text-[#2E3B5B]/60'
                    }`} style={{ fontFamily: 'Satoshi' }}>
                      {card.description}
                    </p>
                  </div>
                  
                  {expandedCard === card.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex-shrink-0"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="#C9DC69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Expanded Card Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={expandedCard}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl h-full"
              >
                {/* Stat Display */}
                <div className="mb-6 lg:mb-8">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#2F5FED] to-[#C9DC69] bg-clip-text text-transparent mb-3" style={{ fontFamily: 'Satoshi' }}>
                    {currentCardData.statValue}
                  </div>
                  <div className="text-lg sm:text-xl text-[#2E3B5B] font-semibold" style={{ fontFamily: 'Satoshi' }}>
                    {currentCardData.statDescription}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base lg:text-lg text-[#2E3B5B]/80 mb-6 lg:mb-8 leading-relaxed" style={{ fontFamily: 'Satoshi' }}>
                  {currentCardData.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-6 lg:mb-8">
                  {currentCardData.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9DC69]/20 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#C9DC69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm lg:text-base text-[#2E3B5B]" style={{ fontFamily: 'Satoshi' }}>
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Representation */}
                {/* <div className="relative rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-[#F0F5FF] to-[#E8EEFF] aspect-video">
                  <Image
                    src={currentCardData.images.analyticsImage}
                    alt={currentCardData.title}
                    fill
                    className="object-contain p-4 sm:p-6"
                  />
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
