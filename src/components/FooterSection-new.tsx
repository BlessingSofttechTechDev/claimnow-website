'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <section className="relative w-full h-[964px] bg-[#F0F5FF] overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/images/footer-background.png"
          alt="Footer Background"
          width={1440}
          height={964}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Blue blur overlay */}
      <div className="absolute left-[189px] top-[-20px] w-[1062px] h-[747px] bg-[#1B1D92] blur-[394px]"></div>

      {/* Main Heading */}
      <motion.h2 
        className="absolute left-[272px] top-[318px] w-[896px] h-[70px] text-white text-center"
        style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.25em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Ready to start your claim process?
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="absolute left-[302px] top-[418px] w-[837px] h-[24px] text-white text-center"
        style={{ fontFamily: 'Satoshi', fontSize: '20px', fontWeight: 500, lineHeight: '1.2em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
        <motion.button 
          className="bg-white/10 backdrop-blur-sm text-white px-4 py-[10px] rounded-[40px] border border-white/20 hover:bg-white/20 transition-all duration-300"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try a sample claim
        </motion.button>

        <motion.button 
          className="bg-[#F9FFDC] text-[#1D2433] px-4 py-[10px] rounded-[40px] hover:bg-white transition-all duration-300"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a live demo
        </motion.button>
      </motion.div>

      {/* Large ClaimNow Text */}
      <motion.div
        className="absolute left-[261px] top-[683px] w-[965px] h-[261px] text-[#020A3D] text-left"
        style={{ fontFamily: 'Satoshi', fontSize: '193.1958770751953px', fontWeight: 900, lineHeight: '1.3500000987261562em' }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        ClaimNow
      </motion.div>

      {/* Footer Navigation */}
      <motion.div 
        className="absolute left-[272px] top-[622px] w-[896px] flex flex-col gap-[21px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex items-center justify-between w-full">
          <a href="#" className="text-white hover:text-[#F9FFDC] transition-colors" style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 500, lineHeight: '1.3499999727521623em' }}>
            How it Works
          </a>
          <a href="#" className="text-white hover:text-[#F9FFDC] transition-colors" style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 500, lineHeight: '1.3499999727521623em' }}>
            Product Demo
          </a>
          <a href="#" className="text-white hover:text-[#F9FFDC] transition-colors" style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 500, lineHeight: '1.3499999727521623em' }}>
            Key Features
          </a>
          <a href="#" className="text-white hover:text-[#F9FFDC] transition-colors" style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 500, lineHeight: '1.3499999727521623em' }}>
            Use Cases
          </a>
          <a href="#" className="text-white hover:text-[#F9FFDC] transition-colors" style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 500, lineHeight: '1.3499999727521623em' }}>
            Testimonials
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-0 border-t border-white/30"></div>
      </motion.div>

      <Image
        src="/images/footer-top.png"
        alt="ClaimNow Logo"
        width={158}
        height={210}
        className="absolute left-[641px] top-[94px] w-[158px] h-[210px]"
      />

      {/* Adobe Express Logo */}
      {/* <motion.div
        className="absolute left-[641px] top-[94px] w-[158px] h-[210px]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#F9FFDC]/20 to-[#C9DC69]/10 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="text-lg font-semibold text-white mb-2">Trusted</div>
            <div className="text-sm text-white/60">Enterprise Solution</div>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
