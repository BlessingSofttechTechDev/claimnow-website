'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TechnologySection() {
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
          {/* Active Tab - Parallel AI Processing */}
          <motion.div
            className="w-[235px] h-[56px] bg-gradient-to-r from-[#2F5FED] to-[#547DF5] rounded-[14px] flex items-center px-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="#2F5FED"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="#2F5FED"/>
                </svg>
              </div>
              <span className="text-white font-medium" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
                Parallel AI Processing
              </span>
            </div>
          </motion.div>

          {/* Inactive Tab - Triple Model Integration */}
          <motion.div
            className="flex-1 h-[56px] bg-[#F0F5FF] border border-[#D8DDE7] rounded-[14px] flex items-center justify-center px-4"
            whileHover={{ scale: 1.02, borderColor: '#2F5FED30' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] bg-[#F0F5FF] rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="#2F5FED" fillOpacity="0.2"/>
                  <circle cx="12" cy="6" r="2" fill="#2F5FED" fillOpacity="0.4"/>
                  <circle cx="12" cy="18" r="2" fill="#2F5FED" fillOpacity="0.4"/>
                </svg>
              </div>
              <span className="text-black font-medium text-center" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
                Triple Model Integration
              </span>
            </div>
          </motion.div>

          {/* Inactive Tab - Secure & Flexible Deployment */}
          <motion.div
            className="flex-1 h-[56px] bg-[#F0F5FF] border border-[#D8DDE7] rounded-[14px] flex items-center justify-center px-4"
            whileHover={{ scale: 1.02, borderColor: '#2F5FED30' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] bg-[#F0F5FF] rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="20" height="12" rx="2" stroke="#2F5FED" strokeWidth="1.5" fill="none"/>
                  <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#2F5FED" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="text-black font-medium text-center" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
                Secure & Flexible Deployment
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="absolute left-[32px] top-[132px] w-[399px] h-[108px]">
          <h3 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '40px', fontWeight: 700, lineHeight: '1.35em' }}>
            Consistent, Fast, and Fail-Safe
          </h3>
        </div>

        <div className="absolute left-[32px] top-[575px] w-[457px] h-[66px]">
          <p className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
            ClaimNow's redundant AI fallback mechanism ensures uninterrupted claim processing — even if one AI model encounters latency or downtime.
          </p>
        </div>

        {/* Benefits List */}
        <div className="absolute left-[32px] top-[268px] w-[465px] flex flex-col gap-3">
          <motion.div
            className="flex items-start gap-[11px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
              </svg>
            </div>
            <p className="text-black flex-1" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
              Multiple AI engines process documents simultaneously.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-[11px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
              </svg>
            </div>
            <p className="text-black flex-1" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
              Automatic fallback ensures no delays during model downtime.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start gap-[11px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="#2F5FED"/>
              </svg>
            </div>
            <p className="text-black flex-1" style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.350000023841858em' }}>
              Intelligent load balancing keeps accuracy and speed intact.
            </p>
          </motion.div>
        </div>

        {/* Demo Image */}
        <motion.div 
          className="absolute left-[532px] top-[90px] w-[792px] h-[563px] rounded-[20px] overflow-hidden shadow-[0px_4px_44px_0px_rgba(0,0,0,0.25)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF] to-[#F0F5FF] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2F5FED]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-xl font-semibold text-[#2F5FED] mb-2">AI Processing Engine</div>
              <div className="text-sm text-[#2F5FED]/60">Parallel processing visualization</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
