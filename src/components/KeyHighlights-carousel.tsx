'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function KeyHighlights() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "175 sec",
      subtitle: "Average Claim Completion Time",
      image: "/images/card-175sec.png",
      position: { left: 561, top: 453, width: 319, height: 296 }
    },
    {
      title: "99%+",
      subtitle: "Verified OCR Accuracy",
      image: "/images/card-99percent.png",
      position: { left: 852, top: 463, width: 384.74, height: 368.48 }
    },
    {
      title: "4x Smarter",
      subtitle: "AI Model Synergy",
      image: "/images/card-4xsmarter.png",
      position: { left: 1131, top: 568, width: 424.26, height: 415.84 }
    },
    {
      title: "1-Click Reports",
      subtitle: "Ready for Download",
      image: "/images/card-1click.png",
      position: { left: 208, top: 463, width: 384.74, height: 368.48 }
    }
  ];

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative w-full h-[1024px] bg-[#F0F5FF] overflow-hidden">
      {/* Background blur elements */}
      <div 
        className="absolute left-[-290px] top-[457px] w-[561.94px] h-[686.36px] bg-[#F0F5FF]"
        style={{ filter: 'blur(134px)' }}
      />
      <div 
        className="absolute left-[1165px] top-[457px] w-[561.94px] h-[686.36px] bg-[#F0F5FF]"
        style={{ filter: 'blur(134px)' }}
      />

      {/* Section Header */}
      <motion.div 
        className="absolute left-[587px] top-[131px] w-[267px] h-[24px] text-black text-center"
        style={{ 
          fontFamily: 'Satoshi', 
          fontSize: '24px', 
          fontWeight: 500, 
          lineHeight: '1em', 
          letterSpacing: '0.24em' 
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        KEY HIGHLIGHTS
      </motion.div>

      {/* Highlight Pills */}
      <motion.div 
        className="absolute left-[425.5px] top-[179px] flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div 
          className="px-4 py-[10px] rounded-[60px]"
          style={{ 
            background: 'linear-gradient(134deg, rgb(47, 95, 237) 1%, rgb(84, 125, 245) 100%)' 
          }}
        >
          <span 
            className="text-white"
            style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 700, lineHeight: '1.125em' }}
          >
            Reduce claim turnaround by 80%
          </span>
        </div>
        <div className="px-4 py-[10px] rounded-[60px]">
          <span 
            className="text-black"
            style={{ fontFamily: 'Satoshi', fontSize: '16px', fontWeight: 500, lineHeight: '1.125em' }}
          >
            with enterprise-grade AI automation.
          </span>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        className="absolute left-[300px] top-[284px] w-[841px] h-[70px] text-black text-center"
        style={{ 
          fontFamily: 'Satoshi', 
          fontSize: '56px', 
          fontWeight: 700, 
          lineHeight: '1.25em' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Lightning-Fast Claim Processing
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="absolute left-[247px] top-[366px] w-[947px] h-[24px] text-black text-center"
        style={{ 
          fontFamily: 'Satoshi', 
          fontSize: '20px', 
          fontWeight: 500, 
          lineHeight: '1.2em' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Processes claims in just 175 seconds — faster than any manual or semi-automated system in the industry.
      </motion.p>

      {/* Carousel Container */}
      <div className="absolute left-0 top-[453px] w-full h-[416px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full h-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              {({ isActive }) => (
                <motion.div
                  className="relative bg-white border border-[#D8DDE7] rounded-3xl overflow-hidden"
                  style={{
                    width: isActive ? `${card.position.width}px` : `${card.position.width * 0.85}px`,
                    height: isActive ? `${card.position.height}px` : `${card.position.height * 0.85}px`,
                    boxShadow: '0px 4px 34px 0px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.5s ease-in-out'
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.6
                  }}
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[70%]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="absolute bottom-0 left-0 w-full bg-[#F9FFDC] px-6 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <h4 
                        className="text-black"
                        style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 500, lineHeight: '1.167em' }}
                      >
                        {card.title}
                      </h4>
                      <div className="w-5 h-5 bg-[#F9FFDC] border border-[#C9DC69] rounded-xl flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M4.5 6L5.5 7L7.5 5" stroke="#C9DC69" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="6" cy="6" r="5" stroke="#C9DC69" strokeWidth="1"/>
                        </svg>
                      </div>
                    </div>
                    <p 
                      className="text-black text-right flex-1 uppercase"
                      style={{ 
                        fontFamily: 'Satoshi', 
                        fontSize: '10px', 
                        fontWeight: 500, 
                        lineHeight: '1.4em', 
                        letterSpacing: '-0.02em' 
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots */}
      <motion.div
        className="absolute left-[665px] top-[821px] flex items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {cards.map((_, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideToLoop(index)}
            whileHover={{ scale: 1.1 }}
          >
            {index === activeIndex ? (
              <div className="w-[31px] h-[10px] relative">
                <div className="absolute top-0 left-0 w-[31px] h-[5px] bg-[#C9DC69] rounded-t-full" />
                <div className="absolute bottom-0 left-0 w-[31px] h-[5px] bg-[#C9DC69] rounded-b-full" />
              </div>
            ) : (
              <div className="w-[10px] h-[10px] relative">
                <div className="absolute top-0 left-0 w-[10px] h-[5px] bg-[#C9DC69] opacity-50 rounded-t-full" />
                <div className="absolute bottom-0 left-0 w-[10px] h-[5px] bg-[#C9DC69] opacity-50 rounded-b-full" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Button */}
      <motion.button
        className="absolute left-[674px] top-[857px] w-[40px] h-[40px] rounded-full bg-[#F9FFDC] border border-[#C9DC69] flex items-center justify-center hover:border-[#A4B852] transition-colors duration-200"
        onClick={handleNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M8 12L16 12M16 12L12 8M16 12L12 16" 
            stroke="#424821" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <style jsx global>{`
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
