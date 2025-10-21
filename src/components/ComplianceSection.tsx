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

      {/* Card 1 - Protected by Global Standards (Top Left) */}
      <motion.div 
        className="absolute left-[80px] top-[204px] w-[454px] h-[347px] bg-white rounded-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h3 
          className="absolute left-[36px] top-[36px] w-[303px] h-[80px] text-black"
          style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}
        >
          Protected by Global Standards
        </h3>
        
        <p 
          className="absolute left-[36px] top-[136px] w-[267px] h-[135px] text-black"
          style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em', opacity: 0.7 }}
        >
          Fully compliant with HIPAA and GDPR — ensuring medical and personal data stays private, encrypted, and secure end-to-end.
        </p>

        {/* Image 1 - HIPAA/GDPR Badge (cropped) */}
        <div className="absolute left-[289px] top-[212px] w-[118px] h-[118px] rounded-[90px] overflow-hidden">
          <Image
            src="/images/compliance-hipaa-gdpr-3e0c6f.png"
            alt="HIPAA GDPR Compliance"
            width={118}
            height={118}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Compliance Badge */}
        <div className="absolute left-[348px] top-[113px] w-[88px] h-[88px]">
          <Image
            src="/images/compliance-badge.png"
            alt="Compliance Badge"
            width={88}
            height={88}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Circle 1 */}
        <div 
          className="absolute left-[365px] top-[258px] w-[71px] h-[71px] rounded-[60px]"
          style={{ background: 'linear-gradient(134deg, rgba(47, 95, 237, 1) 1%, rgba(84, 125, 245, 1) 100%)' }}
        ></div>

        {/* Gradient Circle 2 */}
        <div 
          className="absolute left-[344px] top-[103px] w-[45px] h-[45px] rounded-[60px]"
          style={{ background: 'linear-gradient(134deg, rgba(47, 95, 237, 1) 1%, rgba(84, 125, 245, 1) 100%)' }}
        ></div>
      </motion.div>

      {/* Card 2 - Certified for Data Confidence (Top Right - Large Blue) */}
      <motion.div 
        className="absolute left-[558px] top-[204px] w-[802px] h-[347px] rounded-[24px]"
        style={{ background: 'linear-gradient(152deg, rgba(84, 125, 245, 1) 0%, rgba(35, 71, 178, 1) 85%)' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 
          className="absolute left-[36px] top-[36px] w-[446px] h-[40px] text-white"
          style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}
        >
          Certified for Data Confidence
        </h3>
        
        <p 
          className="absolute left-[36px] top-[100px] w-[446px] h-[81px] text-white"
          style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em', opacity: 0.7 }}
        >
          Audited and certified under national insurance and data protection authorities for regulatory-grade reliability.
        </p>

        {/* Data Confidence Image */}
        <div className="absolute left-[512px] top-[56px] w-[300px] h-[300px]">
          <Image
            src="/images/data-confidence-cert.png"
            alt="Data Confidence Certification"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Circle 1 */}
        <div 
          className="absolute left-[521px] top-[269px] w-[35px] h-[35px] rounded-full border border-white"
          style={{ opacity: 0.3 }}
        ></div>

        {/* Decorative Circle 2 */}
        <div 
          className="absolute left-[722px] top-[45px] w-[11px] h-[11px] rounded-full border border-white"
          style={{ opacity: 0.3 }}
        ></div>

        {/* CTA Button */}
        <motion.button 
          className="absolute left-[36px] top-[271px] h-[40px] px-4 py-[10px] rounded-[40px] text-white"
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
      </motion.div>

      {/* Card 3 - Approved by Industry Leaders (Bottom Left - Large White) */}
      <motion.div 
        className="absolute left-[80px] top-[575px] w-[802px] h-[347px] bg-white rounded-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 
          className="absolute left-[36px] top-[36px] w-[459px] h-[40px] text-black"
          style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}
        >
          Approved by Industry Leaders
        </h3>
        
        <p 
          className="absolute left-[36px] top-[100px] w-[464px] h-[81px] text-black"
          style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}
        >
          Trusted and deployed by top insurance and healthcare networks powering millions of secure claim transactions daily.
        </p>

        {/* Industry Leaders Image */}
        <div className="absolute left-[543px] top-[147px] w-[218px] h-[218px]">
          <Image
            src="/images/industry-leaders.png"
            alt="Industry Leaders"
            width={218}
            height={218}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Circle 1 - Large */}
        <div 
          className="absolute left-[682px] top-[-62px] w-[203px] h-[203px] rounded-full border border-[#2F5FED]"
          style={{ opacity: 0.3 }}
        ></div>

        {/* Decorative Circle 2 - Small */}
        <div 
          className="absolute left-[485px] top-[252px] w-[19px] h-[19px] rounded-full border border-[#2F5FED]"
          style={{ opacity: 0.3 }}
        ></div>

        {/* CTA Button */}
        <motion.button 
          className="absolute left-[36px] top-[271px] h-[40px] px-4 py-[10px] rounded-[40px] border border-black text-[#1D2433]"
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
      </motion.div>

      {/* Card 4 - Government-Grade Scalability (Bottom Right - Yellow/Green) */}
      <motion.div 
        className="absolute left-[906px] top-[575px] w-[454px] h-[347px] bg-[#F9FFDC] border border-[#C9DC69] rounded-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 
          className="absolute left-[36px] top-[36px] w-[303px] h-[80px] text-[#424821]"
          style={{ fontFamily: 'Satoshi', fontSize: '32px', fontWeight: 700, lineHeight: '1.25em' }}
        >
          Government-Grade Scalability
        </h3>
        
        <p 
          className="absolute left-[36px] top-[136px] w-[229px] h-[108px] text-black"
          style={{ fontFamily: 'Satoshi', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em', opacity: 0.7 }}
        >
          Designed for enterprise and government environments with robust infrastructure and continuous uptime.
        </p>

        {/* Government Scalability Image */}
        <div className="absolute left-[257px] top-[156px] w-[180px] h-[180px]">
          <Image
            src="/images/government-scalability.png"
            alt="Government-Grade Scalability"
            width={180}
            height={180}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
