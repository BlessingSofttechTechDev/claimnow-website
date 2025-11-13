'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Product Demo', href: '#results' },
    { name: 'Key Features', href: '#technology' },
    { name: 'Use Cases', href: '#key-highlights' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#F0F5FF] overflow-hidden flex flex-col items-center justify-start px-6 sm:px-12 md:px-20 py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Blur Rectangle */}
      <div
        className="absolute w-[200vw] h-[60vh] bg-white blur-[540px] top-[-20vh] left-[-50vw]"
      />

      {/* Navigation - Desktop & Mobile */}
      <motion.nav
        className="w-full flex justify-between items-center py-6 relative z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ClaimNow"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1D2433] text-sm font-medium hover:text-[#2F5FED] transition-colors cursor-pointer"
              style={{ fontFamily: 'Satoshi' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-[#1D2433]" />
          ) : (
            <Menu size={24} className="text-[#1D2433]" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <Image
                      src="/logo.svg"
                      alt="ClaimNow"
                      width={100}
                      height={28}
                      className="h-7 w-auto"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-[#1D2433]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col p-6 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-[#1D2433] text-base font-medium hover:text-[#2F5FED] transition-colors py-3 border-b border-gray-100 cursor-pointer"
                      style={{ fontFamily: 'Satoshi' }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug text-black max-w-5xl"
          style={{ fontFamily: 'Satoshi' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI that reads medical bills and settles claims in minutes.
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-2xl font-normal leading-relaxed text-black max-w-3xl"
          style={{ fontFamily: 'Satoshi' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Automate document intake, extraction, and adjudication with near-perfect accuracy—
          see what&apos;s covered, capped, or excluded in one click.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={() => {
              const element = document.querySelector('#key-highlights');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#2F5FED] to-[#547DF5] backdrop-blur-sm rounded-full border-2 border-white/50 text-white hover:from-[#1e4edc] hover:to-[#4369e3] hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -4, 0],
            }}
            transition={{ 
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className="group-hover:translate-y-1 transition-transform duration-300"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-between items-center w-full max-w-6xl  flex-wrap gap-6">
        <motion.div
          className="w-32 sm:w-44 md:w-52"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src="/images/adobe-express-icon.png"
            alt="Adobe Express"
            width={200}
            height={200}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <motion.div
          className="w-60 sm:w-72 md:w-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src="/images/partner-logo.png"
            alt="Partner Logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 bg-white/30 rounded-2xl  p-6 w-full max-w-5xl backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-wrap justify-around items-center gap-6 text-center">
          {[
            { value: '99%+', label: 'OCR ACCURACY' },
            { value: '>99%', label: 'ACCURACY' },
            { value: '<300s', label: 'PROCESS TIME' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-3xl font-medium text-[#1D2433]" style={{ fontFamily: 'Satoshi' }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium tracking-widest text-[#1D2433]" style={{ fontFamily: 'Satoshi' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>


        <motion.div
          className="mt-8 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <Image
            src="/images/demo-screenshot.png"
            alt="ClaimNow Demo Screenshot"
            width={972}
            height={691}
            className="object-cover w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
