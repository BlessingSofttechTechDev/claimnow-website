'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { 
  Cpu, 
  Database, 
  DollarSign, 
  Clock, 
  Shield, 
  Brain 
} from 'lucide-react';

type TabType = 'ai-power' | 'data-edge' | 'cost-edge' | '24x7-care' | 'secure' | 'smart-ai';

interface TabContent {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const tabContents: Record<TabType, TabContent> = {
  'ai-power': {
    title: 'Consistent, Fast & Reliable Processing',
    description: 'ClaimNow\'s redundant AI fallback mechanism ensures uninterrupted processing — even if one model faces delays or downtime.',
    features: [
      'Multiple AI engines process claims in parallel for uninterrupted workflow.',
      'Automatic fallback ensures zero downtime during model switchovers.',
      'Built-in load balancing keeps processing speed and accuracy intact.'
    ],
    image: '/images/ai-powered-extraction.png',
    icon: Cpu
  },
  'data-edge': {
    title: 'Advanced Data Intelligence',
    description: 'Leverage cutting-edge data processing capabilities to extract maximum insights from every claim document.',
    features: [
      'Real-time data analysis with 99.9% accuracy rates.',
      'Advanced pattern recognition for complex document structures.',
      'Intelligent data validation and cross-referencing.'
    ],
    image: '/images/confidence-scoring.png',
    icon: Database
  },
  'cost-edge': {
    title: 'Cost-Effective Operations',
    description: 'Reduce operational costs while maintaining high-quality claim processing through intelligent automation.',
    features: [
      'Up to 70% reduction in processing costs.',
      'Automated workflow optimization.',
      'Predictive cost analysis and budgeting.'
    ],
    image: '/images/rules-engine.png',
    icon: DollarSign
  },
  '24x7-care': {
    title: '24/7 Continuous Care',
    description: 'Round-the-clock claim processing and support to ensure your operations never stop.',
    features: [
      'Continuous processing without human intervention.',
      '24/7 system monitoring and health checks.',
      'Instant alerts and automated recovery systems.'
    ],
    image: '/images/human-in-loop.png',
    icon: Clock
  },
  'secure': {
    title: 'Enterprise-Grade Security',
    description: 'Bank-level security protocols protect your sensitive claim data with end-to-end encryption.',
    features: [
      'End-to-end encryption for all data transfers.',
      'HIPAA and SOC2 compliant infrastructure.',
      'Advanced threat detection and prevention.'
    ],
    image: '/images/secure-deployment-demo.png',
    icon: Shield
  },
  'smart-ai': {
    title: 'Intelligent AI Processing',
    description: 'Smart AI algorithms that learn and adapt to your specific claim processing requirements.',
    features: [
      'Machine learning models that improve over time.',
      'Custom AI training for specific use cases.',
      'Intelligent decision-making based on historical data.'
    ],
    image: '/images/triple-model-integration.png',
    icon: Brain
  }
};

export default function TechnologySection() {
  const [activeTab, setActiveTab] = useState<TabType>('ai-power');

  const tabs: Array<{ key: TabType; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }> = [
    { key: 'ai-power', label: 'AI Power', icon: Cpu },
    { key: 'data-edge', label: 'Data Edge', icon: Database },
    { key: 'cost-edge', label: 'Cost Edge', icon: DollarSign },
    { key: '24x7-care', label: '24×7 Care', icon: Clock },
    { key: 'secure', label: 'Secure', icon: Shield },
    { key: 'smart-ai', label: 'Smart AI', icon: Brain },
  ];

  const currentContent = tabContents[activeTab];
  const IconComponent = currentContent.icon;

  return (
    <section className="relative w-full bg-[#F0F5FF] py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2 
          className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: 'Satoshi' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technology That Sets ClaimNow Apart
        </motion.h2>

        {/* Main Content Card */}
        <motion.div 
          className="bg-white border border-[#D2D9E8] rounded-3xl p-4 md:p-6 lg:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Feature Tabs - Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative h-14 rounded-xl flex items-center justify-center gap-2 md:gap-3 px-2 md:px-4 transition-all duration-300 ${
                  activeTab === tab.key 
                    ? 'text-white overflow-hidden' 
                    : 'bg-[#F0F5FF] border border-[#D8DDE7] text-black hover:border-[#2F5FED30] hover:bg-[#F0F5FF]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active background gradient */}
                {activeTab === tab.key && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ 
                      background: 'linear-gradient(134deg, rgba(47, 95, 237, 1) 1%, rgba(84, 125, 245, 1) 100%)'
                    }}
                    layoutId="activeTabBackground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className="relative flex items-center gap-2 md:gap-3">
                  {/* Icon container */}
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${
                    activeTab === tab.key 
                      ? 'bg-[#F9FFDC] border border-[#C9DC69]' 
                      : 'bg-[#F0F5FF]'
                  }`}>
                    <tab.icon 
                      size={activeTab === tab.key ? 20 : 16}
                      className={activeTab === tab.key ? 'text-[#2F5FED]' : 'text-[#2F5FED]'}
                    />
                  </div>
                  
                  {/* Text - hidden on mobile for better fit */}
                  <span 
                    className={`hidden md:block font-medium text-sm lg:text-base ${
                      activeTab === tab.key ? 'text-white' : 'text-black'
                    }`}
                    style={{ fontFamily: 'Satoshi' }}
                  >
                    {tab.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Area - Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              
              {/* Title */}
              <motion.div
                key={`${activeTab}-title`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 md:mb-8"
              >
                <h3 
                  className="text-black text-2xl md:text-3xl lg:text-4xl font-bold"
                  style={{ fontFamily: 'Satoshi' }}
                >
                  {currentContent.title}
                </h3>
              </motion.div>

              {/* Features List */}
              <motion.div 
                key={`${activeTab}-features`}
                className="flex flex-col gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {currentContent.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent size={12} className="text-[#2F5FED]" />
                    </div>
                    <p 
                      className="text-black flex-1 text-sm md:text-base"
                      style={{ fontFamily: 'Satoshi', fontWeight: 500, lineHeight: '1.35em' }}
                    >
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div 
                key={`${activeTab}-desc`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <p 
                  className="text-black text-sm md:text-base"
                  style={{ fontFamily: 'Satoshi', fontWeight: 500, lineHeight: '1.35em' }}
                >
                  {currentContent.description}
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                key={`${activeTab}-cta`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
                  className="bg-[#2F5FED] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ fontFamily: 'Satoshi' }}
                >
                  Book a Live Demo
                </button>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div 
              key={`${activeTab}-image`}
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[420px] rounded-2xl overflow-hidden shadow-[0px_4px_44px_0px_rgba(0,0,0,0.25)]">
                {currentContent.image.includes('triple-model') ? (
                  <Image
                    src={currentContent.image}
                    alt={currentContent.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF] to-[#F0F5FF] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#2F5FED]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={32} className="text-[#2F5FED]" />
                      </div>
                      <div className="text-lg md:text-xl font-semibold text-[#2F5FED] mb-2">
                        {currentContent.title}
                      </div>
                      <div className="text-sm text-[#2F5FED]/60 px-4">
                        Technology visualization
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}