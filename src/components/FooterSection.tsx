'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F0F5FF] overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/footer-background.png"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1D92]/30 via-[#1B1D92]/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          className="mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-52">
            <Image
              src="/images/footer-top.png"
              alt="ClaimNow Logo"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center mb-16 md:mb-20 lg:mb-24">
          
          {/* Main Heading */}
          <motion.h2 
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 max-w-4xl"
            style={{ fontFamily: 'Satoshi' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to start your claim process?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-8 md:mb-10 max-w-4xl leading-relaxed"
            style={{ fontFamily: 'Satoshi' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reads and understands every medical bill, printed or handwritten, across multiple languages.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            <motion.button 
              onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
              className="bg-[#F9FFDC] text-[#1D2433] px-6 py-3 rounded-full hover:bg-white transition-all duration-300 text-sm font-bold"
              style={{ fontFamily: 'Satoshi' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a live demo
            </motion.button>
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <motion.div 
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-8">
            <a 
              href="#" 
              className="text-white hover:text-[#F9FFDC] transition-colors text-sm font-medium"
              style={{ fontFamily: 'Satoshi' }}
            >
              How it Works
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#F9FFDC] transition-colors text-sm font-medium"
              style={{ fontFamily: 'Satoshi' }}
            >
              Product Demo
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#F9FFDC] transition-colors text-sm font-medium"
              style={{ fontFamily: 'Satoshi' }}
            >
              Key Features
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#F9FFDC] transition-colors text-sm font-medium"
              style={{ fontFamily: 'Satoshi' }}
            >
              Use Cases
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white/30 mb-8 md:mb-12"></div>
        </motion.div>

        {/* Large ClaimNow Text */}
        <motion.div
          className="text-[#8b92c0] font-black text-center overflow-hidden"
          style={{ 
            fontFamily: 'Satoshi', 
            fontSize: 'clamp(4rem, 12vw, 12rem)',
            lineHeight: '1.1'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          ClaimNow
        </motion.div>
      </div>
    </section>
  );
}
