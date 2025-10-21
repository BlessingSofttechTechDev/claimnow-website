'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section className="relative w-full bg-[#F0F5FF] py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <motion.div 
          className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 mb-6 lg:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex-1 max-w-2xl"
            style={{ fontFamily: 'Satoshi' }}
          >
            Real Results That Redefine Claim Processing.
          </h2>

          {/* Let's Talk Button */}
          <motion.button 
            className="flex-shrink-0 px-6 py-3 rounded-full border border-black bg-transparent text-[#1D2433] flex items-center gap-3 text-sm font-bold"
            style={{ fontFamily: 'Satoshi' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </motion.button>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column - Main Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
            
            {/* Main Card - Faster Settlements */}
            <motion.div
              className="bg-white rounded-3xl p-6 md:p-8 lg:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Header with arrow */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 
                  className="text-black text-xl md:text-2xl font-medium flex-1"
                  style={{ fontFamily: 'Satoshi' }}
                >
                  Faster Settlements, Greater Throughput
                </h3>
                <div className="w-10 h-10 opacity-0">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-black text-lg md:text-xl lg:text-2xl font-medium mb-8 leading-tight"
                style={{ fontFamily: 'Satoshi' }}
              >
                ClaimNow&apos;s AI-driven adjudication engine accelerates every stage of claim processing — from intake to approval — ensuring providers and policyholders receive payouts in record time.
              </p>

              {/* Book a live demo Button */}
              <motion.button 
                onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
                className="px-6 py-3 rounded-full bg-black text-white text-sm font-bold"
                style={{ fontFamily: 'Satoshi' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a live demo
              </motion.button>
            </motion.div>

            {/* Secondary Cards */}
            <div className="space-y-3 lg:space-y-4">
              {/* Accuracy You Can Trust Card */}
              <motion.div
                className="bg-white rounded-3xl p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 
                    className="text-black text-xl md:text-2xl font-medium"
                    style={{ fontFamily: 'Satoshi' }}
                  >
                    Accuracy You Can Trust
                  </h4>
                  <div className="w-10 h-10">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Do More with Less Card */}
              <motion.div
                className="bg-white rounded-3xl p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 
                    className="text-black text-xl md:text-2xl font-medium"
                    style={{ fontFamily: 'Satoshi' }}
                  >
                    Do More with Less
                  </h4>
                  <div className="w-10 h-10">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Happier Providers, Happier Members Card */}
              <motion.div
                className="bg-white rounded-3xl p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 
                    className="text-black text-xl md:text-2xl font-medium"
                    style={{ fontFamily: 'Satoshi' }}
                  >
                    Happier Providers, Happier Members
                  </h4>
                  <div className="w-10 h-10">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Middle Column - Stats Card */}
          <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6">
            
            {/* 2X Faster Card */}
            <motion.div
              className="bg-[#F9FFDC] border border-[#C9DC69] rounded-3xl p-6 md:p-8 lg:p-10 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="text-[#1D2433] text-4xl md:text-5xl lg:text-6xl font-medium"
                  style={{ fontFamily: 'Satoshi' }}
                >
                  2X
                </div>
                
                {/* Check Icon Badge */}
                <div className="bg-[#F9FFDC] border border-[#C9DC69] rounded-xl p-2 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8L7 11L12 5" stroke="#C9DC69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div 
                className="text-[#1D2433] text-lg md:text-xl font-bold mt-4"
                style={{ fontFamily: 'Satoshi' }}
              >
                Faster claim settlements
              </div>
            </motion.div>

            {/* Bottom Analytics Image Card */}
            <motion.div
              className="bg-white rounded-3xl overflow-hidden flex-1 min-h-[250px] md:min-h-[300px] lg:min-h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/results-background-bottom.png"
                  alt="Results Analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Background Image */}
          <div className="lg:col-span-4 order-first lg:order-last">
            <motion.div
              className="bg-white rounded-3xl overflow-hidden h-64 md:h-80 lg:h-full lg:min-h-[600px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/results-background-top.png"
                  alt="Results Background"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
