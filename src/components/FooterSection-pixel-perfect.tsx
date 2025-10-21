'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FooterSection() {
  const navItems = [
    "How it Works",
    "Product Demo", 
    "Key Features",
    "Use Cases",
    "Testimonials"
  ];

  return (
    <section className="relative w-full h-[964px] bg-[#F0F5FF] overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-[-48px] top-0 w-[1536px] h-[1024px]">
        <Image
          src="/images/footer-background-figma.png"
          alt="Footer Background"
          width={1536}
          height={1024}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blue Blur Overlay */}
      <div 
        className="absolute left-[189px] top-[-20px] w-[1062px] h-[747px] rounded-full bg-[#1B1D92]"
        style={{ filter: 'blur(394px)' }}
      ></div>

      {/* Logo at Top */}
      <motion.div 
        className="absolute left-[641px] top-[94px] w-[158px] h-[210px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/footer-logo.png"
          alt="ClaimNow Logo"
          width={158}
          height={210}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Heading */}
      <motion.h2 
        className="absolute left-[272px] top-[318px] w-[896px] h-[70px] text-white text-center"
        style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.25em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ready to start your claim process?
      </motion.h2>

      {/* Subheading */}
      <motion.p 
        className="absolute left-[302px] top-[418px] w-[837px] h-[24px] text-white text-center"
        style={{ fontFamily: 'Satoshi', fontSize: '20px', fontWeight: 500, lineHeight: '1.2em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Reads and understands every medical bill, printed or handwritten, across multiple languages.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="absolute left-[567px] top-[486px] flex items-center gap-[10px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Try a sample claim Button */}
        <motion.button 
          className="h-[40px] px-4 py-[10px] rounded-[40px] text-white flex items-center justify-center"
          style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            fontFamily: 'Satoshi', 
            fontSize: '14px', 
            fontWeight: 700, 
            lineHeight: '1.35em' 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try a sample claim
        </motion.button>

        {/* Book a live demo Button */}
        <motion.button 
          className="h-[40px] px-4 py-[10px] rounded-[40px] bg-[#F9FFDC] text-[#1D2433] flex items-center justify-center"
          style={{ 
            fontFamily: 'Satoshi', 
            fontSize: '14px', 
            fontWeight: 700, 
            lineHeight: '1.35em' 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a live demo
        </motion.button>
      </motion.div>

      {/* Navigation and Divider */}
      <motion.div 
        className="absolute left-[272px] top-[622px] w-[896px] flex flex-col gap-[21px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Navigation Links */}
        <nav className="flex items-center justify-between w-full gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-white"
              style={{ 
                fontFamily: 'Satoshi', 
                fontSize: '14px', 
                fontWeight: 500, 
                lineHeight: '1.35em' 
              }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        {/* Divider Line */}
        <div className="w-full h-0 border-t border-white opacity-30" />
      </motion.div>

      {/* Large ClaimNow Text */}
      <motion.div 
        className="absolute left-[261px] top-[683px] w-[965px] h-[261px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h1 
          className="text-[#020A3D]"
          style={{ 
            fontFamily: 'Satoshi', 
            fontSize: '193.1958770751953px', 
            fontWeight: 900, 
            lineHeight: '1.35em' 
          }}
        >
          ClaimNow
        </h1>
      </motion.div>
    </section>
  );
}
