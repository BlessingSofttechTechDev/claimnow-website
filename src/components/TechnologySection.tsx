'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Database, Shield } from 'lucide-react';

export default function TechnologySection() {
  const stats = [
    { label: 'Claims Processed / Hour', value: '10,000+' },
    { label: 'Uptime', value: '99.8%' },
    { label: 'Cost Reduction', value: 'More than 70%' },
    { label: 'Average Processing Speed', value: '<200ms' },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: 'AI-Powered Efficiency',
      desc: 'Our multi-model AI engine processes and verifies claims in parallel, ensuring lightning-fast and reliable operations — even during peak loads.',
    },
    {
      icon: Database,
      title: 'Data Intelligence at Scale',
      desc: 'We use NLP, OCR, and knowledge graphs to extract structured insights from even the most complex healthcare claim documents.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      desc: 'With HIPAA, GDPR, and DPDPA compliance, every transaction is encrypted and every byte is monitored through real-time anomaly detection.',
    },
  ];

  return (
    <section className="relative w-full bg-[#F9FAFF] py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6ECFF] via-[#F9FAFF] to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6"
            style={{ fontFamily: 'Satoshi' }}
          >
            Technology That Drives <span className="text-[#2F5FED]">ClaimNow</span>
          </h2>
          <p
            className="max-w-3xl mx-auto text-[#4B5563] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'Satoshi' }}
          >
            Built on a foundation of AI precision, real-time automation, and enterprise-grade security, ClaimNow transforms claim handling into a fast, transparent, and intelligent process.
          </p>
        </motion.div>

        {/* Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E8EEFF] rounded-2xl flex items-center justify-center mb-5">
                <item.icon size={36} className="text-[#2F5FED]" />
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold mb-3 text-[#111827]"
                style={{ fontFamily: 'Satoshi' }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#4B5563] text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'Satoshi' }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative w-full h-72 md:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/ai-powered-extraction.png"
              alt="AI Visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <p
            className="text-center mt-6 text-[#4B5563] text-sm md:text-base italic"
            style={{ fontFamily: 'Satoshi' }}
          >
            A seamless orchestration of AI, automation, and intelligence — built to scale across every claim.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.span
                className="text-3xl md:text-4xl font-bold text-[#2F5FED]"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-[#4B5563] text-sm md:text-base mt-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
