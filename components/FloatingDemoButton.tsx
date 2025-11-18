'use client';

import { Calendar } from "lucide-react";

export const FloatingDemoButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Hover trigger area - invisible but extends the hover zone */}
      <div className="absolute -inset-8 pointer-events-auto" />

      <button
        onClick={scrollToContact}
        className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-full shadow-2xl opacity-100 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-3"
        aria-label="Book a Demo"
      >
        <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-semibold text-base">Book a Demo</span>
      </button>
    </div>
  );
};
