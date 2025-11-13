'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <motion.button
      onClick={() => window.open('https://cal.com/claimnow-ai/demo', '_blank')}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-[#2F5FED] to-[#547DF5] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      style={{ fontFamily: 'Satoshi' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Calendar size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-bold text-sm">Book a Demo</span>
    </motion.button>
  );
}
