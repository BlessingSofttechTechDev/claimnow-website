'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className="relative w-full h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Top Header Card */}
      <motion.div 
        className="absolute left-[12px] top-0 w-[1416px] h-[223px] bg-white rounded-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 
          className="absolute left-[68px] top-[42px] w-[727px] h-[140px] text-black"
          style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.25em' }}
        >
          Real Results That Redefine Claim Processing.
        </h2>

        {/* Let's Talk Button */}
        <motion.button 
          className="absolute left-[1253.62px] top-[42px] h-[40px] px-4 py-[10px] rounded-[40px] border border-black bg-transparent text-[#1D2433] flex items-center gap-[10px]"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.35em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Talk
          <svg width="18.38" height="18.38" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </motion.button>
      </motion.div>

      {/* Right Side - Background Image Card */}
      <div className="absolute left-[1026px] top-[231px] w-[402px] h-[752px] bg-white rounded-[24px] overflow-hidden">
        <Image
          src="/images/results-background-top.png"
          alt="Results Background"
          width={402}
          height={752}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Side - Main Cards Column */}
      <div className="absolute left-[12px] top-[231px] w-[598px] flex flex-col gap-2">
        {/* Main Card - Faster Settlements */}
        <motion.div
          className="w-full h-[440px] bg-white rounded-[24px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Header with arrow */}
          <div className="absolute left-[68px] top-[36px] w-[462px] flex items-center justify-between gap-[59px]">
            <h3 
              className="w-[301px] text-black"
              style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}
            >
              Faster Settlements, Greater Throughput
            </h3>
            <div className="w-[40px] h-[40px] opacity-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>

          {/* Description */}
          <p 
            className="absolute left-[68px] top-[132px] w-[462px] h-[210px] text-black"
            style={{ fontFamily: 'Satoshi', fontSize: '28px', fontWeight: 500, lineHeight: '1.25em' }}
          >
            ClaimNow&apos;s AI-driven adjudication engine accelerates every stage of claim processing — from intake to approval — ensuring providers and policyholders receive payouts in record time.
          </p>

          {/* Book a live demo Button */}
          <motion.button 
            className="absolute left-[68px] top-[364px] h-[40px] px-4 py-[10px] rounded-[40px] bg-black text-white flex items-center justify-center"
            style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.35em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a live demo
          </motion.button>
        </motion.div>

        {/* Accuracy You Can Trust Card */}
        <motion.div
          className="w-full h-[96px] bg-white rounded-[24px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute left-[68px] top-[28px] w-[462px] flex items-center justify-between gap-[59px]">
            <h4 
              className="text-black"
              style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}
            >
              Accuracy You Can Trust
            </h4>
            <div className="w-[40px] h-[40px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Do More with Less Card */}
        <motion.div
          className="w-full h-[96px] bg-white rounded-[24px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute left-[68px] top-[28px] w-[462px] flex items-center justify-between gap-[59px]">
            <h4 
              className="text-black"
              style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}
            >
              Do More with Less
            </h4>
            <div className="w-[40px] h-[40px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Happier Providers, Happier Members Card */}
        <motion.div
          className="w-full h-[96px] bg-white rounded-[24px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute left-[68px] top-[28px] w-[462px] flex items-center justify-between gap-[59px]">
            <h4 
              className="text-black"
              style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1em' }}
            >
              Happier Providers, Happier Members
            </h4>
            <div className="w-[40px] h-[40px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Middle Column - Stats Cards */}
      <div className="absolute left-[618px] top-[231px] w-[402px] h-[752px] flex flex-col gap-2">
        {/* 2X Faster Card */}
        <motion.div
          className="w-full flex-1 bg-[#F9FFDC] border border-[#C9DC69] rounded-[24px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div 
            className="absolute left-[32px] top-[40px] w-[59px] h-[32px] text-[#1D2433]"
            style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 500, lineHeight: '0.6666666666666666em' }}
          >
            2X
          </div>
          
          <div 
            className="absolute left-[32px] top-[86px] w-[224px] h-[24px] text-[#1D2433]"
            style={{ fontFamily: 'Satoshi', fontSize: '20px', fontWeight: 700, lineHeight: '1.2em' }}
          >
            Faster claim settlements
          </div>

          {/* Check Icon Badge */}
          <div className="absolute left-[97px] top-[38px] w-[24px] h-[24px] bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8L7 11L12 5" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Bottom Image Card */}
        <motion.div
          className="w-full flex-1 bg-white rounded-[24px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute left-0 top-[-30px] w-[402px] h-[402px]">
            <Image
              src="/images/results-background-bottom.png"
              alt="Results Analytics"
              width={402}
              height={402}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
