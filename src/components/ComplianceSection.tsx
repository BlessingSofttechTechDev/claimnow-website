'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComplianceSection() {
  return (
    <section className="relative w-full bg-[#F0F5FF] py-12 sm:py-16 lg:py-20 xl:py-24">
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
          Trusted, Certified, and Compliant
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 - Protected by Global Standards */}
          <motion.div 
            className="bg-white rounded-3xl p-6 md:p-8 lg:p-9 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative z-10">
              <h3 
                className="text-black text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                style={{ fontFamily: 'Satoshi' }}
              >
                Protected by Global Standards
              </h3>
              
              <p 
                className="text-black text-base md:text-lg opacity-70 mb-6 max-w-xs"
                style={{ fontFamily: 'Satoshi', lineHeight: '1.5em' }}
              >
                Fully compliant with HIPAA and GDPR — ensuring medical and personal data stays private, encrypted, and secure end-to-end.
              </p>
            </div>

            {/* Badges and decorative elements */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
              <div className="relative">
                {/* HIPAA/GDPR Badge */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative z-20">
                  <Image
                    src="/images/compliance-hipaa-gdpr-3e0c6f.png"
                    alt="HIPAA GDPR Compliance"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Compliance Badge - positioned above */}
                <div className="absolute -top-8 -right-4 w-16 h-16 md:w-20 md:h-20 z-30">
                  <Image
                    src="/images/compliance-badge.png"
                    alt="Compliance Badge"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gradient Circles */}
                <div 
                  className="absolute -bottom-4 -right-2 w-12 h-12 md:w-16 md:h-16 rounded-full z-10"
                  style={{ background: 'linear-gradient(134deg, rgba(47, 95, 237, 1) 1%, rgba(84, 125, 245, 1) 100%)' }}
                />
                
                <div 
                  className="absolute -top-6 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full z-10"
                  style={{ background: 'linear-gradient(134deg, rgba(47, 95, 237, 1) 1%, rgba(84, 125, 245, 1) 100%)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Certified for Data Confidence */}
          <motion.div 
            className="lg:col-span-2 rounded-3xl p-6 md:p-8 lg:p-9 relative overflow-hidden"
            style={{ background: 'linear-gradient(152deg, rgba(84, 125, 245, 1) 0%, rgba(35, 71, 178, 1) 85%)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full">
              <div className="flex-1 relative z-10 mb-6 lg:mb-0 lg:pr-8">
                <h3 
                  className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                  style={{ fontFamily: 'Satoshi' }}
                >
                  Certified for Data Confidence
                </h3>
                
                <p 
                  className="text-white text-base md:text-lg opacity-70 mb-6 max-w-lg"
                  style={{ fontFamily: 'Satoshi', lineHeight: '1.5em' }}
                >
                  Audited and certified under national insurance and data protection authorities for regulatory-grade reliability.
                </p>

                {/* CTA Button */}
                <motion.button 
                  onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
                  className="px-6 py-3 rounded-full text-white text-sm font-bold"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontFamily: 'Satoshi'
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a live demo
                </motion.button>
              </div>

              {/* Data Confidence Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 relative">
                  <Image
                    src="/images/data-confidence-cert.png"
                    alt="Data Confidence Certification"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Decorative Circles */}
                <div 
                  className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 rounded-full border border-white opacity-30"
                />
                
                <div 
                  className="absolute top-2 right-8 w-2 h-2 md:w-3 md:h-3 rounded-full border border-white opacity-30"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Approved by Industry Leaders */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 lg:p-9 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full">
              <div className="flex-1 relative z-10 mb-6 lg:mb-0 lg:pr-8">
                <h3 
                  className="text-black text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                  style={{ fontFamily: 'Satoshi' }}
                >
                  Approved by Industry Leaders
                </h3>
                
                <p 
                  className="text-black text-base md:text-lg mb-6 max-w-lg"
                  style={{ fontFamily: 'Satoshi', lineHeight: '1.5em' }}
                >
                  Trusted and deployed by top insurance and healthcare networks powering millions of secure claim transactions daily.
                </p>

                {/* CTA Button */}
                <motion.button 
                  onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
                  className="px-6 py-3 rounded-full border border-black text-[#1D2433] text-sm font-bold"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontFamily: 'Satoshi'
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(0, 0, 0, 0.05)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a live demo
                </motion.button>
              </div>

              {/* Industry Leaders Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
                  <Image
                    src="/images/industry-leaders.png"
                    alt="Industry Leaders"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Decorative Circles */}
                <div 
                  className="absolute -top-12 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#2F5FED] opacity-30"
                />
                
                <div 
                  className="absolute bottom-8 -left-4 w-4 h-4 md:w-5 md:h-5 rounded-full border border-[#2F5FED] opacity-30"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Government-Grade Scalability */}
          <motion.div 
            className="bg-[#F9FFDC] border border-[#C9DC69] rounded-3xl p-6 md:p-8 lg:p-9 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <h3 
                className="text-[#424821] text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                style={{ fontFamily: 'Satoshi' }}
              >
                Government-Grade Scalability
              </h3>
              
              <p 
                className="text-black text-base md:text-lg opacity-70 mb-6 max-w-xs"
                style={{ fontFamily: 'Satoshi', lineHeight: '1.5em' }}
              >
                Designed for enterprise and government environments with robust infrastructure and continuous uptime.
              </p>
            </div>

            {/* Government Scalability Image */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <Image
                src="/images/government-scalability.png"
                alt="Government-Grade Scalability"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
