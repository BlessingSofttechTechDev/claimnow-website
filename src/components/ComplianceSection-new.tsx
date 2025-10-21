'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComplianceSection() {
  return (
    <section className="relative w-full h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Section Header */}
      <motion.h2 
        className="absolute left-[80px] top-[60px] w-[909px] h-[70px] text-black"
        style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.25em' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Trusted, Certified, and Compliant
      </motion.h2>

      {/* Card 1 - Protected by Global Standards */}
      <motion.div 
        className="absolute left-[80px] top-[204px] w-[454px] h-[347px] bg-white rounded-[24px] p-9"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="absolute left-[36px] top-[36px] w-[303px] h-[80px]">
          <h3 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}>
            Protected by Global Standards
          </h3>
        </div>
        
        <div className="absolute left-[36px] top-[136px] w-[267px] h-[135px]">
          <p className="text-black opacity-70" style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}>
            Fully compliant with HIPAA and GDPR — ensuring medical and personal data stays private, encrypted, and secure end-to-end.
          </p>
        </div>

        {/* Compliance badges */}
        <div className="absolute left-[289px] top-[212px] w-[118px] h-[118px]">
          <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF] to-[#F0F5FF] rounded-[90px] flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute left-[348px] top-[113px] w-[88px] h-[88px]">
          <div className="w-full h-full bg-gradient-to-br from-[#F0F5FF] to-[#E3EDFF] rounded-full flex items-center justify-center">
            <span className="text-[#2F5FED] font-bold text-sm">GDPR</span>
          </div>
        </div>

        {/* HIPAA and GDPR badges */}
        <div className="absolute left-[365px] top-[258px] w-[71px] h-[71px] bg-gradient-to-r from-[#2F5FED] to-[#547DF5] rounded-[60px]"></div>
        <div className="absolute left-[344px] top-[103px] w-[45px] h-[45px] bg-gradient-to-r from-[#2F5FED] to-[#547DF5] rounded-[60px]"></div>
      </motion.div>

      {/* Card 2 - Government-Grade Scalability */}
      <motion.div 
        className="absolute left-[906px] top-[575px] w-[454px] h-[347px] bg-[#F9FFDC] border border-[#C9DC69] rounded-[24px] p-9"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute left-[36px] top-[36px] w-[303px] h-[80px]">
          <h3 className="text-[#424821]" style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}>
            Government-Grade Scalability
          </h3>
        </div>
        
        <div className="absolute left-[36px] top-[136px] w-[229px] h-[108px]">
          <p className="text-black opacity-70" style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}>
            Designed for enterprise and government environments with robust infrastructure and continuous uptime.
          </p>
        </div>

        <div className="absolute left-[257px] top-[156px] w-[180px] h-[180px]">
          <div className="w-full h-full bg-gradient-to-br from-[#C9DC69]/20 to-[#F9FFDC]/30 rounded-2xl flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-[#424821]">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Card 3 - Certified for Data Confidence */}
      <motion.div 
        className="absolute left-[558px] top-[204px] w-[802px] h-[347px] bg-gradient-to-br from-[#547DF5] to-[#2347B2] rounded-[24px] p-9"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute left-[36px] top-[36px] w-[446px] h-[40px]">
          <h3 className="text-white" style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}>
            Certified for Data Confidence
          </h3>
        </div>
        
        <div className="absolute left-[36px] top-[100px] w-[446px] h-[81px]">
          <p className="text-white opacity-70" style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}>
            Audited and certified under national insurance and data protection authorities for regulatory-grade reliability.
          </p>
        </div>

        <div className="absolute left-[512px] top-[56px] w-[300px] h-[300px]">
          <div className="w-full h-full bg-gradient-to-br from-[#E3EDFF]/20 to-[#F0F5FF]/10 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="text-lg font-semibold text-white mb-2">Certified</div>
              <div className="text-sm text-white/60">Data Protection Authority</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-[521px] top-[269px] w-[35px] h-[35px] border border-white border-opacity-30 rounded-full"></div>
        <div className="absolute left-[722px] top-[45px] w-[11px] h-[11px] border border-white border-opacity-30 rounded-full"></div>

        {/* CTA Button */}
        <motion.button 
          className="absolute left-[36px] top-[271px] bg-white/10 backdrop-blur-sm text-white px-4 py-[10px] rounded-[40px] border border-white/20 hover:bg-white/20 transition-all duration-300"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try a sample claim
        </motion.button>
      </motion.div>

      {/* Card 4 - Approved by Industry Leaders */}
      <motion.div 
        className="absolute left-[80px] top-[575px] w-[802px] h-[347px] bg-white rounded-[24px] p-9"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="absolute left-[36px] top-[36px] w-[459px] h-[40px]">
          <h3 className="text-black" style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}>
            Approved by Industry Leaders
          </h3>
        </div>
        
        <div className="absolute left-[36px] top-[100px] w-[464px] h-[81px]">
          <p className="text-black opacity-70" style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}>
            Trusted and deployed by top insurance and healthcare networks powering millions of secure claim transactions daily.
          </p>
        </div>

        <div className="absolute left-[543px] top-[147px] w-[218px] h-[218px]">
          <div className="w-full h-full bg-gradient-to-br from-[#F0F5FF] to-[#E3EDFF] rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2F5FED]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#2F5FED]">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/>
                  <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/>
                  <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-lg font-semibold text-[#2F5FED] mb-2">Industry Leader</div>
              <div className="text-sm text-[#2F5FED]/60">Trusted Partner</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-[682px] top-[-62px] w-[203px] h-[203px] border border-[#2F5FED] border-opacity-30 rounded-full"></div>
        <div className="absolute left-[485px] top-[252px] w-[19px] h-[19px] border border-[#2F5FED] border-opacity-30 rounded-full"></div>

        {/* CTA Button */}
        <motion.button 
          className="absolute left-[36px] top-[271px] bg-white/10 backdrop-blur-sm text-black px-4 py-[10px] rounded-[40px] border border-black hover:bg-black/5 transition-all duration-300"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try a sample claim
        </motion.button>
      </motion.div>
    </section>
  );
}
