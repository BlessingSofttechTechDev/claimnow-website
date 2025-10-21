'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative w-[1440px] h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Background Image - positioned at x: -48, y: 0 */}
      <div className="absolute left-[-48px] top-0 w-[1536px] h-[1024px]">
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          width={1536}
          height={1024}
          className="object-cover"
          priority
        />
      </div>

      {/* Blur Rectangle - positioned at x: -725, y: -157 */}
      <div 
        className="absolute w-[2891px] h-[650px] bg-white"
        style={{
          left: '-725px',
          top: '-157px',
          filter: 'blur(540px)'
        }}
      />

      {/* Navigation */}
      <motion.nav 
        className="absolute top-0 left-0 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo - positioned at x: 80, y: 31 */}
        <div 
          className="absolute text-[#2F5FED] text-[20px] font-bold leading-[1.35] w-[97px] h-[27px]"
          style={{ left: '80px', top: '31px', fontFamily: 'Satoshi' }}
        >
          ClaimNow
        </div>
    
        {/* Navigation Links - positioned at x: 472.5, y: 35 */}
        <div 
          className="absolute flex items-center gap-[24px]"
          style={{ left: '472.5px', top: '35px' }}
        >
          <a href="#" className="text-[#1D2433] text-[14px] font-medium leading-[1.35] hover:text-[#2F5FED] transition-colors" style={{ fontFamily: 'Satoshi' }}>How it Works</a>
          <a href="#" className="text-[#1D2433] text-[14px] font-medium leading-[1.35] hover:text-[#2F5FED] transition-colors" style={{ fontFamily: 'Satoshi' }}>Product Demo</a>
          <a href="#" className="text-[#1D2433] text-[14px] font-medium leading-[1.35] hover:text-[#2F5FED] transition-colors" style={{ fontFamily: 'Satoshi' }}>Key Features</a>
          <a href="#" className="text-[#1D2433] text-[14px] font-medium leading-[1.35] hover:text-[#2F5FED] transition-colors" style={{ fontFamily: 'Satoshi' }}>Use Cases</a>
          <a href="#" className="text-[#1D2433] text-[14px] font-medium leading-[1.35] hover:text-[#2F5FED] transition-colors" style={{ fontFamily: 'Satoshi' }}>Testimonials</a>
        </div>

        {/* Book Demo Button - positioned at x: 1240, y: 24 */}
        <motion.button 
          className="absolute flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#2F5FED] to-[#547DF5] text-white rounded-[40px] text-[14px] font-bold border border-[#B8C6ED] w-auto h-[40px] px-[16px] py-[10px] hover:shadow-lg transition-all duration-300"
          style={{ left: '1240px', top: '24px', fontFamily: 'Satoshi' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.button>
      </motion.nav>

      {/* Hero Title - positioned at x: 214, y: 153 */}
      <motion.h1 
        className="absolute text-[56px] font-bold leading-[1.143] text-center text-black"
        style={{ 
          left: '214px', 
          top: '153px', 
          width: '1013px', 
          height: '128px',
          fontFamily: 'Satoshi'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        AI that reads medical bills and settles claims in minutes.
      </motion.h1>

      {/* Hero Subtitle - positioned at x: 315, y: 302 */}
      <motion.p 
        className="absolute text-[24px] font-normal leading-[1.5] text-center text-black"
        style={{ 
          left: '315px', 
          top: '302px', 
          width: '811px', 
          height: '72px',
          fontFamily: 'Satoshi'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Automate document intake, extraction, and adjudication with near-perfect accuracy—see what&apos;s covered, capped, or excluded in one click.
      </motion.p>

      {/* CTA Buttons - positioned at x: 566.5, y: 402 */}
      <motion.div 
        className="absolute flex items-center gap-[10px]"
        style={{ left: '566.5px', top: '402px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button 
          className="flex items-center justify-center gap-[10px] bg-white/10 backdrop-blur-sm text-[#1D2433] rounded-[40px] text-[14px] font-bold h-[40px] px-[16px] py-[10px] hover:bg-white/20 transition-all duration-300"
          style={{ fontFamily: 'Satoshi' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try a sample claim
        </motion.button>
        <motion.button 
          className="flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#2F5FED] to-[#547DF5] text-white rounded-[40px] text-[14px] font-bold h-[40px] px-[16px] py-[10px] hover:shadow-lg transition-all duration-300"
          style={{ fontFamily: 'Satoshi' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a live demo
        </motion.button>
      </motion.div>

      {/* Adobe Express Logo - positioned at x: 126, y: 423 */}
      <motion.div 
        className="absolute"
        style={{ left: '126px', top: '423px', width: '176.97px', height: '176.97px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Image
          src="/images/adobe-express-icon.png"
          alt="Adobe Express"
          width={177}
          height={177}
          className="object-cover"
        />
      </motion.div>

      {/* Partner Logo - positioned at x: 1093, y: 214 */}
      <motion.div 
        className="absolute"
        style={{ left: '1093px', top: '214px', width: '346.89px', height: '353.27px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Image
          src="/images/partner-logo.png"
          alt="Partner Logo"
          width={347}
          height={353}
          className="object-cover"
        />
      </motion.div>

      {/* Stats Card - positioned at x: 234, y: 482 */}
      <motion.div 
        className="absolute bg-white/[0.32] rounded-[20px]"
        style={{ left: '234px', top: '482px', width: '972px', height: '279px' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* 99%+ Stat - positioned at x: 27, y: 22 */}
        <div className="absolute" style={{ left: '27px', top: '22px', width: '91px', height: '44px' }}>
          <div className="text-[32px] font-medium text-[#1D2433] leading-[1.375]" style={{ fontFamily: 'Satoshi' }}>99%+</div>
        </div>
        <div className="absolute" style={{ left: '27px', top: '66px', width: '111px', height: '20px' }}>
          <div className="text-[12px] font-medium text-[#1D2433] tracking-[0.12em] leading-[1.667]" style={{ fontFamily: 'Satoshi' }}>OCR ACCURACY</div>
        </div>

        {/* 99.9% Stat - positioned at x: 187, y: 22 */}
        <div className="absolute" style={{ left: '187px', top: '22px', width: '96px', height: '44px' }}>
          <div className="text-[32px] font-medium text-[#1D2433] leading-[1.375]" style={{ fontFamily: 'Satoshi' }}>99.9%</div>
        </div>
        <div className="absolute" style={{ left: '187px', top: '66px', width: '75px', height: '20px' }}>
          <div className="text-[12px] font-medium text-[#1D2433] tracking-[0.12em] leading-[1.667]" style={{ fontFamily: 'Satoshi' }}>PRECISION</div>
        </div>

        {/* 2X Stat - positioned at x: 357, y: 22 */}
        <div className="absolute" style={{ left: '357px', top: '22px', width: '40px', height: '44px' }}>
          <div className="text-[32px] font-medium text-[#1D2433] leading-[1.375]" style={{ fontFamily: 'Satoshi' }}>2X</div>
        </div>
        <div className="absolute" style={{ left: '357px', top: '66px', width: '107px', height: '20px' }}>
          <div className="text-[12px] font-medium text-[#1D2433] tracking-[0.12em] leading-[1.667]" style={{ fontFamily: 'Satoshi' }}>FASTER CLAIMS</div>
        </div>

        {/* Icon placeholders with arrows - positioned at exact Figma coordinates */}
        <div className="absolute bg-[#F9FFDC] border border-[#C9DC69] rounded-[12px] flex items-center justify-center" style={{ left: '118px', top: '28px', width: '24px', height: '24px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#424821" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
        <div className="absolute bg-[#F9FFDC] border border-[#C9DC69] rounded-[12px] flex items-center justify-center" style={{ left: '288px', top: '28px', width: '24px', height: '24px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#424821" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
        <div className="absolute bg-[#F9FFDC] border border-[#C9DC69] rounded-[12px] flex items-center justify-center" style={{ left: '402px', top: '28px', width: '24px', height: '24px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#424821" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
        
        {/* Watch Demo Button - positioned at x: 771.62, y: 32 */}
        <motion.button 
          className="absolute bg-white/10 backdrop-blur-sm text-[#1D2433] rounded-[40px] text-[14px] font-bold flex items-center gap-2 h-[40px] px-[16px] py-[10px] hover:bg-white/20 transition-all duration-300"
          style={{ left: '771.62px', top: '32px', fontFamily: 'Satoshi' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Watch full Demo</span>
          <svg width="18.38" height="18.38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </motion.button>

        {/* Arrow Icon - positioned at x: 876, y: 42 */}
        {/* <div className="absolute" style={{ left: '876px', top: '42px', width: '33.94px', height: '33.94px' }}>
          <svg width="33.94" height="33.94" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div> */}
      </motion.div>

      {/* Demo Screenshot - positioned at x: 234, y: 591 */}
      <motion.div 
        className="absolute rounded-[20px] overflow-hidden shadow-[0px_4px_44px_0px_rgba(0,0,0,0.25)]"
        style={{ left: '234px', top: '591px', width: '972px', height: '691px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <Image
          src="/images/demo-screenshot.png"
          alt="ClaimNow Demo Screenshot"
          width={972}
          height={691}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  )
}

export default HeroSection
