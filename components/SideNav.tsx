'use client';

import { useEffect, useState } from "react";
import { Home, BarChart3, Settings, Zap, Link2, Shield, HelpCircle, Mail } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "metrics", label: "Metrics", icon: BarChart3 },
  { id: "how-it-works", label: "How It Works", icon: Settings },
  { id: "features", label: "Features", icon: Zap },
  { id: "integrations", label: "Integrations", icon: Link2 },
  { id: "trusted", label: "Trust & Security", icon: Shield },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "contact", label: "Contact", icon: Mail },
];

export const SideNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isAutoVisible, setIsAutoVisible] = useState(true); // Show on page load

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          const newSection = navItems[i].id;
          if (newSection !== activeSection) {
            setActiveSection(newSection);
            // Show nav when section changes
            setIsAutoVisible(true);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // Auto-hide after 4 seconds when section changes
  useEffect(() => {
    if (isAutoVisible) {
      const timer = setTimeout(() => {
        setIsAutoVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isAutoVisible, activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50 group/nav">
      {/* Hover trigger area - extends to make it easy to trigger */}
      <div className="absolute -inset-y-32 -left-0 w-16 pointer-events-auto" />
      
      {/* The actual nav - shows automatically for 4s on section change, then only on hover */}
      <nav className={`relative left-8 transition-all duration-300 ${
        isAutoVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8 group-hover/nav:opacity-100 group-hover/nav:translate-x-0'
      }`}>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative flex items-center gap-3 group cursor-pointer"
              >
                {/* Line indicator */}
                <div
                  className={`h-10 w-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-green-700 shadow-lg shadow-green-500/50'
                      : 'bg-gray-300 group-hover:bg-gray-500 group-hover:h-12'
                  }`}
                />
                
                {/* Always visible label */}
                <span
                  className={`text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-green-700 font-bold translate-x-1'
                      : 'text-gray-500 group-hover:text-gray-800 group-hover:translate-x-1'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Progress indicator line behind */}
        <div className="absolute left-0 top-0 w-1 h-full pointer-events-none -z-10">
          <div
            className="w-full bg-gradient-to-b from-green-700/30 to-green-500/30 rounded-full transition-all duration-500 ease-out"
            style={{
              height: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`,
            }}
          />
        </div>
      </nav>
    </div>
  );
};
