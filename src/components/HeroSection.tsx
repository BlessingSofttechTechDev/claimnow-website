'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F0F5FF] overflow-hidden flex flex-col items-center justify-start px-6 sm:px-12 md:px-20">
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

      {/* Navigation */}
      <motion.nav
        className="w-full flex justify-between items-center py-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div
          className="text-[#2F5FED] text-xl font-bold"
          style={{ fontFamily: 'Satoshi' }}
        >
          ClaimNow
        </div>

        {/* Links (hidden on small) */}
        <div className="hidden md:flex gap-6">
          {['How it Works', 'Product Demo', 'Key Features', 'Use Cases'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#1D2433] text-sm font-medium hover:text-[#2F5FED] transition-colors"
              style={{ fontFamily: 'Satoshi' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2F5FED] to-[#547DF5] text-white rounded-full text-sm font-bold px-5 py-2.5 border border-[#B8C6ED] hover:shadow-lg transition-all duration-300"
          style={{ fontFamily: 'Satoshi' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.button>
      </motion.nav>

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
          {/* <motion.button
            onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
            className="bg-white/10 backdrop-blur-sm text-[#1D2433] rounded-full text-sm font-bold px-5 py-2.5 hover:bg-white/20 transition-all duration-300"
            style={{ fontFamily: 'Satoshi' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a live demo
          </motion.button> */}

          <motion.button
            onClick={() => window.open('https://cal.com/manas-singhal-f6q5cy/demo', '_blank')}
            className="bg-gradient-to-r from-[#2F5FED] to-[#547DF5] text-white rounded-full text-sm font-bold px-5 py-2.5 hover:shadow-lg transition-all duration-300"
            style={{ fontFamily: 'Satoshi' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a live demo
          </motion.button>
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-between items-center w-full max-w-6xl mt-16 flex-wrap gap-6">
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
        className="relative z-10 bg-white/30 rounded-2xl mt-16 p-6 w-full max-w-5xl backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-wrap justify-around items-center gap-6 text-center">
          {[
            { value: '99%+', label: 'OCR ACCURACY' },
            { value: '99.9%', label: 'PRECISION' },
            { value: '7X', label: 'FASTER CLAIMS' },
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
