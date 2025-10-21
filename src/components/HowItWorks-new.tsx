'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative w-full h-[1062px] bg-[#F0F5FF] overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-[2px] top-[693px] w-[1437px] h-[369px]">
        <Image 
          src="/images/hero-background.png" 
          alt="Background"
          width={1437}
          height={369}
          className="object-cover"
        />
      </div>
      
      {/* Blur overlay */}
      <div className="absolute -left-[725px] top-[221px] w-[2891px] h-[711px] bg-[#F0F5FF] blur-[300px]" />

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-[591px] top-[193px] w-[259px] h-[32px] text-black text-center opacity-40"
        style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 900, lineHeight: '1.3500000635782878em' }}
      >
        How ClaimNow Works
      </motion.div>

      {/* Active step title */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-[640px] top-[251px] w-[160px] h-[76px] text-black text-center"
        style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
      >
        {activeStep === 1 ? 'Ingest' : 
         activeStep === 2 ? 'Extract' : 
         activeStep === 3 ? 'Validate' : 
         activeStep === 4 ? 'Process' : 'Settle'}
      </motion.div>

      {/* Active step description */}
      <motion.div
        key={`desc-${activeStep}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-[296px] top-[341px] w-[848px] h-[60px] text-black text-center"
        style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 400, lineHeight: '1.5em' }}
      >
        {activeStep === 1 ? 'Upload documents via API, PDF, image, or e-form — ClaimNow instantly captures every data point using smart OCR and NLP.' :
         activeStep === 2 ? 'Advanced AI models extract and structure data from medical documents with 99%+ accuracy across multiple formats and languages.' :
         activeStep === 3 ? 'Triple-verification system ensures data accuracy and compliance with policy guidelines and regulatory requirements.' :
         activeStep === 4 ? 'AI-powered adjudication engine processes claims according to policy terms, identifying coverage, exclusions, and approvals.' :
         'Automated settlement and payment processing with complete audit trails and regulatory compliance reporting.'}
      </motion.div>

      {/* Concentric circles background */}
      <div className="absolute left-[65px] top-[-136px] w-[1310px] h-[1310px]">
        <svg className="w-full h-full" viewBox="0 0 1310 1310">
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(47, 95, 237, 0)" />
              <stop offset="51%" stopColor="rgba(37, 74, 185, 0.4)" />
              <stop offset="100%" stopColor="rgba(27, 54, 135, 0)" />
            </linearGradient>
          </defs>
          <circle cx="655" cy="655" r="655" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute left-[272px] top-[71px] w-[896px] h-[896px]">
        <svg className="w-full h-full" viewBox="0 0 896 896">
          <circle cx="448" cy="448" r="448" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute left-[448px] top-[247px] w-[544px] h-[544px]">
        <svg className="w-full h-full" viewBox="0 0 544 544">
          <circle cx="272" cy="272" r="272" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
        </svg>
      </div>

      {/* Step indicators */}
      {/* Active step (Step 1) */}
      <motion.button
        onClick={() => setActiveStep(1)}
        className={`absolute left-[680px] top-[44px] w-[80px] h-[80px] rounded-[52px] flex items-center justify-center text-2xl font-semibold shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] ${
          activeStep === 1 
            ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433]' 
            : 'bg-transparent text-[#1D2433]'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ fontFamily: 'DM Sans', fontSize: '24px', fontWeight: 600, lineHeight: '1.3020000457763672em' }}
      >
        01
      </motion.button>

      {/* Other step indicators */}
      <motion.button
        onClick={() => setActiveStep(2)}
        className={`absolute left-[1137px] top-[441px] w-[56px] h-[56px] rounded-[50px] flex items-center justify-center text-2xl font-medium ${
          activeStep === 2 ? 'bg-white/20 text-[#1D2433]' : 'bg-transparent text-[#1D2433]/80'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ fontFamily: 'DM Sans', fontSize: '24px', fontWeight: 500, lineHeight: '1.3020000457763672em' }}
      >
        02
      </motion.button>

      <motion.button
        onClick={() => setActiveStep(3)}
        className={`absolute left-[1022px] top-[791px] w-[56px] h-[56px] rounded-[50px] flex items-center justify-center text-2xl font-medium ${
          activeStep === 3 ? 'bg-white/20 text-[#1D2433]' : 'bg-transparent text-[#1D2433]/80'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ fontFamily: 'DM Sans', fontSize: '24px', fontWeight: 500, lineHeight: '1.3020000457763672em' }}
      >
        03
      </motion.button>

      <motion.button
        onClick={() => setActiveStep(4)}
        className={`absolute left-[547px] top-[914px] w-[56px] h-[56px] rounded-[50px] flex items-center justify-center text-2xl font-medium ${
          activeStep === 4 ? 'bg-white/20 text-[#1D2433]' : 'bg-transparent text-[#1D2433]/80'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ fontFamily: 'DM Sans', fontSize: '24px', fontWeight: 500, lineHeight: '1.3020000457763672em' }}
      >
        04
      </motion.button>

      <motion.button
        onClick={() => setActiveStep(5)}
        className={`absolute left-[244px] top-[491px] w-[56px] h-[56px] rounded-[50px] flex items-center justify-center text-2xl font-medium ${
          activeStep === 5 ? 'bg-white/20 text-[#1D2433]' : 'bg-transparent text-[#1D2433]/80'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ fontFamily: 'DM Sans', fontSize: '24px', fontWeight: 500, lineHeight: '1.3020000457763672em' }}
      >
        05
      </motion.button>

      {/* Process visualization */}
      <motion.div 
        className="absolute left-[563px] top-[367px] w-[314px] h-[471px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF] to-[#F0F5FF] rounded-[20px] overflow-hidden relative shadow-lg">
          <div className="absolute inset-0 bg-[#2F5FED]/5 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F5FED]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="text-lg font-semibold text-[#1D2433] mb-2">Processing...</div>
              <div className="text-sm text-[#1D2433]/60">Step {activeStep} of 5</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button 
        className="absolute left-[644px] top-[812px] bg-white/10 backdrop-blur-sm text-[#1D2433] px-4 py-[10px] rounded-[40px] border border-black hover:bg-white/20 transition-all duration-300"
        style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Try a sample claim
      </motion.button>
    </section>
  );
}
