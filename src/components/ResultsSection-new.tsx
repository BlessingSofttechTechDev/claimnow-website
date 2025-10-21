'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className="relative w-full h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Main Content Card */}
      <motion.div 
        className="absolute left-[12px] top-0 w-[1416px] h-[223px] bg-white rounded-[24px] flex items-center justify-between px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute left-[68px] top-[42px] w-[727px] h-[140px]">
          <h2 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.25em' }}>
            Real Results That Redefine Claim Processing.
          </h2>
        </div>

        {/* CTA Button */}
        <motion.button 
          className="absolute left-[1253.62px] top-[42px] bg-transparent text-[#1D2433] px-4 py-[10px] rounded-[40px] border border-black hover:bg-black/5 transition-all duration-300 flex items-center gap-2"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </motion.button>
      </motion.div>

      {/* Background Image */}
      <div className="absolute left-[1026px] top-[231px] w-[402px] h-[752px]">
        <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF] to-[#F0F5FF] rounded-[24px] overflow-hidden relative">
          <div className="absolute left-0 top-0 w-[402px] h-[603px]">
            <div className="w-full h-full bg-gradient-to-br from-[#2F5FED]/10 to-[#547DF5]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#2F5FED]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#2F5FED] mb-2">Processing Results</div>
                <div className="text-lg text-[#2F5FED]/60">Real-time Analytics</div>
              </div>
            </div>
          </div>
          
          {/* Background blur effect */}
          <div className="absolute left-[-113px] top-[543px] w-[629px] h-[322px] bg-[#010C4A] blur-[64px]"></div>
        </div>
      </div>

      {/* Results Cards */}
      <div className="absolute left-[12px] top-[231px] w-[598px] flex flex-col gap-2">
        {/* Main Card - Faster Settlements */}
        <motion.div
          className="w-full h-[440px] bg-white rounded-[24px] p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute left-[68px] top-[36px] w-[462px] h-auto flex items-center justify-between mb-8">
            <h3 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}>
              Faster Settlements, Greater Throughput
            </h3>
            <div className="w-[40px] h-[40px] flex items-center justify-center opacity-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>

          <div className="absolute left-[68px] top-[132px] w-[462px] h-[210px]">
            <p className="text-black mb-8" style={{ fontFamily: 'Satoshi', fontSize: '28px', fontWeight: 500, lineHeight: '1.25em' }}>
              ClaimNow's AI-driven adjudication engine accelerates every stage of claim processing — from intake to approval — ensuring providers and policyholders receive payouts in record time.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button 
            className="absolute left-[68px] top-[364px] bg-black text-white px-4 py-[10px] rounded-[40px] hover:bg-black/90 transition-all duration-300"
            style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a live demo
          </motion.button>
        </motion.div>

        {/* Secondary Cards */}
        <div className="flex gap-2">
          {/* Accuracy Card */}
          <motion.div
            className="flex-1 h-[96px] bg-white rounded-[24px] p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}>
                Accuracy You Can Trust
              </h4>
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Efficiency Card */}
          <motion.div
            className="flex-1 h-[96px] bg-white rounded-[24px] p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}>
                Do More with Less
              </h4>
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Satisfaction Card */}
        <motion.div
          className="w-full h-[96px] bg-white rounded-[24px] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}>
              Happier Providers, Happier Members
            </h4>
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="absolute left-[618px] top-[231px] w-[402px] h-[752px] flex flex-col gap-2">
        {/* 2X Faster Card */}
        <motion.div
          className="w-full flex-1 bg-[#F9FFDC] border border-[#C9DC69] rounded-[24px] p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute left-[32px] top-[40px] w-[59px] h-[32px]">
            <span className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 500, lineHeight: '0.6666666666666666em' }}>
              2X
            </span>
          </div>
          
          <div className="absolute left-[32px] top-[86px] w-[224px] h-[24px]">
            <span className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '20px', fontWeight: 700, lineHeight: '1.2em' }}>
              Faster claim settlements
            </span>
          </div>

          <div className="absolute left-[97px] top-[38px] w-[24px] h-[24px] bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6L5 8L9 4" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          className="w-full flex-1 bg-white rounded-[24px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#F0F5FF] to-[#E3EDFF] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F5FED]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="text-lg font-semibold text-[#2F5FED] mb-2">Performance</div>
              <div className="text-sm text-[#2F5FED]/60">Analytics Dashboard</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
