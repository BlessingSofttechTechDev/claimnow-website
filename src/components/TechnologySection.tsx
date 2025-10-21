'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type TabType = 'parallel' | 'triple' | 'secure';

interface TabContent {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const tabContents: Record<TabType, TabContent> = {
  parallel: {
    title: 'Consistent, Fast, and Fail-Safe',
    description: 'ClaimNow&apos;s redundant AI fallback mechanism ensures uninterrupted claim processing — even if one AI model encounters latency or downtime.',
    features: [
      'Multiple AI engines process documents simultaneously.',
      'Automatic fallback ensures no delays during model downtime.',
      'Intelligent load balancing keeps accuracy and speed intact.'
    ],
    image: '/images/parallel-processing-demo.png'
  },
  triple: {
    title: 'Three Models. One Intelligent System.',
    description: 'ClaimNow leverages the combined intelligence of OpenAI, Gemini, Sonnet 4.5, and our proprietary ML engine — enabling deeper comprehension of handwritten, printed, or semi-structured documents.',
    features: [
      'OpenAI for contextual understanding and text logic.',
      'Gemini for semantic precision in data classification.',
      'Sonnet 4.5 for advanced OCR field interpretation and ClaimNow ML fusion.'
    ],
    image: '/images/triple-model-integration.png'
  },
  secure: {
    title: 'Enterprise-Grade Security & Deployment',
    description: 'Deploy ClaimNow in your environment with complete control over data residency, security protocols, and compliance requirements.',
    features: [
      'On-premise or private cloud deployment options.',
      'Zero-trust security architecture with end-to-end encryption.',
      'HIPAA, SOC2, and enterprise compliance out-of-the-box.'
    ],
    image: '/images/secure-deployment-demo.png'
  }
};

export default function TechnologySection() {
  const [activeTab, setActiveTab] = useState<TabType>('triple');

  return (
    <section className="relative w-full h-[963px] bg-[#F0F5FF] overflow-hidden">
      {/* Section Header */}
      <motion.h2 
        className="absolute left-[48px] top-[95px] w-[1001px] h-[70px] text-black"
        style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.25em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Technology That Sets ClaimNow Apart
      </motion.h2>

      {/* Main Content Card */}
      <motion.div 
        className="absolute left-[48px] top-[218px] w-[1344px] h-[673px] bg-white border border-[#D2D9E8] rounded-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Feature Tabs */}
        <div className="absolute left-[20px] top-[20px] w-[1304px] h-auto flex gap-4">
          {/* Tab 1: Parallel AI Processing */}
          <motion.button
            onClick={() => setActiveTab('parallel')}
            className={`flex-1 h-[56px] rounded-[14px] flex items-center px-4 transition-all duration-300 ${
              activeTab === 'parallel' 
                ? 'bg-gradient-to-r from-[#2F5FED] to-[#547DF5]' 
                : 'bg-[#F0F5FF] border border-[#D8DDE7] hover:border-[#2F5FED30]'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-[48px] h-[48px] rounded-xl flex items-center justify-center ${
                activeTab === 'parallel' 
                  ? 'bg-[#F9FFDC] border border-[#C9DC69]' 
                  : 'bg-[#F0F5FF]'
              }`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="#2F5FED"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="#2F5FED"/>
                </svg>
              </div>
              <span 
                className={`font-medium ${activeTab === 'parallel' ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}
              >
                Parallel AI Processing
              </span>
            </div>
          </motion.button>

          {/* Tab 2: Triple Model Integration */}
          <motion.button
            onClick={() => setActiveTab('triple')}
            className={`flex-1 h-[56px] rounded-[14px] flex items-center justify-center px-4 transition-all duration-300 ${
              activeTab === 'triple' 
                ? 'bg-gradient-to-r from-[#2F5FED] to-[#547DF5]' 
                : 'bg-[#F0F5FF] border border-[#D8DDE7] hover:border-[#2F5FED30]'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-[48px] h-[48px] rounded-xl flex items-center justify-center ${
                activeTab === 'triple' 
                  ? 'bg-[#F9FFDC] border border-[#C9DC69]' 
                  : 'bg-[#F0F5FF]'
              }`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="#2F5FED" fillOpacity="0.6"/>
                  <circle cx="12" cy="6" r="2" fill="#2F5FED" fillOpacity="0.8"/>
                  <circle cx="12" cy="18" r="2" fill="#2F5FED" fillOpacity="0.8"/>
                </svg>
              </div>
              <span 
                className={`font-medium text-center ${activeTab === 'triple' ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}
              >
                Triple Model Integration
              </span>
            </div>
          </motion.button>

          {/* Tab 3: Secure & Flexible Deployment */}
          <motion.button
            onClick={() => setActiveTab('secure')}
            className={`flex-1 h-[56px] rounded-[14px] flex items-center justify-center px-4 transition-all duration-300 ${
              activeTab === 'secure' 
                ? 'bg-gradient-to-r from-[#2F5FED] to-[#547DF5]' 
                : 'bg-[#F0F5FF] border border-[#D8DDE7] hover:border-[#2F5FED30]'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-[48px] h-[48px] rounded-xl flex items-center justify-center ${
                activeTab === 'secure' 
                  ? 'bg-[#F9FFDC] border border-[#C9DC69]' 
                  : 'bg-[#F0F5FF]'
              }`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="20" height="12" rx="2" stroke="#2F5FED" strokeWidth="1.5" fill="none"/>
                  <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#2F5FED" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span 
                className={`font-medium text-center ${activeTab === 'secure' ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}
              >
                Secure & Flexible Deployment
              </span>
            </div>
          </motion.button>
        </div>

        {/* Dynamic Content Area */}
        <motion.div 
          key={activeTab}
          className="absolute left-[32px] top-[132px] w-[399px] h-[108px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '40px', fontWeight: 700, lineHeight: '1.35em' }}>
            {tabContents[activeTab].title}
          </h3>
        </motion.div>

        <motion.div 
          key={`${activeTab}-desc`}
          className="absolute left-[32px] top-[553px] w-[465px] h-[88px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em', textAlign: 'left', verticalAlign: 'bottom' }}>
            {tabContents[activeTab].description}
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div 
          key={`${activeTab}-features`}
          className="absolute left-[32px] top-[268px] w-[465px] flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabContents[activeTab].features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-[11px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="2" fill="#2F5FED"/>
                </svg>
              </div>
              <p className="text-black flex-1" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Image */}
        <motion.div 
          key={`${activeTab}-image`}
          className="absolute left-[532px] top-[90px] w-[792px] h-[563px] rounded-[20px] overflow-hidden shadow-[0px_4px_44px_0px_rgba(0,0,0,0.25)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {activeTab === 'triple' ? (
            <Image
              src="/images/triple-model-integration.png"
              alt="Triple Model Integration"
              width={792}
              height={563}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF] to-[#F0F5FF] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2F5FED]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'parallel' ? (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                      <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                      <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                      <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                      <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                      <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  )}
                </div>
                <div className="text-xl font-semibold text-[#2F5FED] mb-2">
                  {activeTab === 'parallel' ? 'AI Processing Engine' : 'Secure Deployment'}
                </div>
                <div className="text-sm text-[#2F5FED]/60">
                  {activeTab === 'parallel' ? 'Parallel processing visualization' : 'Enterprise security visualization'}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
