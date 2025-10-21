'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-rotation functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        return prev === 5 ? 1 : prev + 1;
      });
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Step data based on Figma nodes
  const stepData = {
    1: {
      title: 'Ingest',
      description: 'Upload documents via API, PDF, image, or e-form — ClaimNow instantly captures every data point using smart OCR and NLP.',
      image: '/images/document-ingestion.png',
      stepPositions: {
        step1: { x: 680, y: 44, active: true },
        step2: { x: 1137, y: 441, active: false },
        step3: { x: 1022, y: 791, active: false },
        step4: { x: 547, y: 914, active: false },
        step5: { x: 244, y: 491, active: false }
      }
    },
    2: {
      title: 'AI-Powered Extraction',
      description: 'Our multi-model AI core extracts data with 99.9% text recognition accuracy, even from complex or low-quality scans. It auto-detects billing codes, line items, and procedural charges — eliminating manual keying errors.',
      image: '/images/ai-powered-extraction.png',
      stepPositions: {
        step1: { x: 699, y: 43, active: false },
        step2: { x: 1124, y: 466, active: true },
        step3: { x: 1022, y: 791, active: false },
        step4: { x: 547, y: 914, active: false },
        step5: { x: 244, y: 491, active: false }
      }
    },
    3: {
      title: 'Confidence Scoring & Parallel Review',
      description: 'Every field includes a confidence indicator — highlighted in yellow whenever AI is less than 100% certain. With our parallel viewing interface, you can cross-check extracted data alongside the original PDF in real time.',
      image: '/images/confidence-scoring.png',
      stepPositions: {
        step1: { x: 699, y: 43, active: false },
        step2: { x: 1137, y: 441, active: false },
        step3: { x: 1010, y: 778, active: true },
        step4: { x: 547, y: 914, active: false },
        step5: { x: 244, y: 491, active: false }
      }
    },
    4: {
      title: 'Rules Engine & Adjudication',
      description: 'Built-in rulesets automatically validate claims against policy coverage, exclusions, and government guidelines — ensuring complete transparency.',
      image: '/images/rules-engine.png',
      stepPositions: {
        step1: { x: 699, y: 43, active: false },
        step2: { x: 1137, y: 441, active: false },
        step3: { x: 1022, y: 791, active: false },
        step4: { x: 535, y: 903, active: true },
        step5: { x: 244, y: 491, active: false }
      }
    },
    5: {
      title: 'Human-in-the-Loop',
      description: 'When necessary, reviewers can step in seamlessly without disrupting the automated pipeline. This AI + human synergy guarantees the perfect balance of speed, accuracy, and accountability.',
      image: '/images/human-in-loop.png',
      stepPositions: {
        step1: { x: 699, y: 43, active: false },
        step2: { x: 1137, y: 441, active: false },
        step3: { x: 1022, y: 791, active: false },
        step4: { x: 547, y: 914, active: false },
        step5: { x: 232, y: 479, active: true }
      }
    }
  };

  const currentStepData = stepData[activeStep as keyof typeof stepData];

  return (
    <section className="relative w-full h-[1062px] bg-[#F0F5FF] overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-[2px] top-[693px] w-[1437px] h-[369px]">
        <Image 
          src="/images/hero-background.png" 
          alt="Background"
          width={1437}
          height={369}
          className="object-cover"
        />
      </div>
      
      {/* Blur overlay */}
      <div className="absolute -left-[725px] top-[221px] w-[2891px] h-[711px] bg-[#F0F5FF] blur-[300px]" />

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-[591px] top-[193px] w-[259px] h-[32px] text-gray-600 text-center opacity-40"
        style={{ fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 900, lineHeight: '1.3500000635782878em' }}
      >
        How ClaimNow Works
      </motion.div>

      {/* Dynamic step title based on Figma data */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`absolute text-black text-center ${
          activeStep === 1 ? 'left-[640px] top-[251px] w-[160px]' :
          activeStep === 2 ? 'left-[232px] top-[251px] w-[976px]' :
          activeStep === 3 ? 'left-[232px] top-[251px] w-[976px]' :
          activeStep === 4 ? 'left-[356px] top-[251px] w-[729px]' :
          'left-[459px] top-[251px] w-[523px]'
        } h-[76px]`}
        style={{ fontFamily: 'Satoshi', fontSize: '56px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
      >
        {currentStepData.title}
      </motion.div>
      <motion.div
        key={`desc-${activeStep}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`absolute text-black text-center ${
          activeStep === 3 ? 'left-[279px] top-[341px] w-[883px] h-[90px]' :
          activeStep === 4 ? 'left-[324px] top-[341px] w-[792px] h-[60px]' :
          activeStep === 5 ? 'left-[277px] top-[341px] w-[886px] h-[60px]' :
          'left-[296px] top-[341px] w-[848px] h-[60px]'
        }`}
        style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 400, lineHeight: '1.5em' }}
      >
        {currentStepData.description}
      </motion.div>

      {/* Concentric circles background */}
      <div className="absolute left-[65px] top-[-136px] w-[1310px] h-[1310px]">
        <svg className="w-full h-full" viewBox="0 0 1310 1310">
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(47, 95, 237, 0)" />
              <stop offset="51%" stopColor="rgba(37, 74, 185, 0.4)" />
              <stop offset="100%" stopColor="rgba(27, 54, 135, 0)" />
            </linearGradient>
          </defs>
          <circle cx="655" cy="655" r="655" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute left-[272px] top-[71px] w-[896px] h-[896px]">
        <svg className="w-full h-full" viewBox="0 0 896 896">
          <circle cx="448" cy="448" r="448" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute left-[448px] top-[247px] w-[544px] h-[544px]">
        <svg className="w-full h-full" viewBox="0 0 544 544">
          <circle cx="272" cy="272" r="272" fill="none" stroke="url(#circleGradient)" strokeWidth="1" />
        </svg>
      </div>      {/* Step indicators with dynamic positioning based on Figma data */}
      {/* Step 1 */}
      <motion.button
        onClick={() => setActiveStep(1)}
        className={`absolute w-[80px] h-[80px] rounded-[52px] flex items-center justify-center ${
          activeStep === 1 
            ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' 
            : 'bg-transparent text-[rgba(29,36,51,0.8)]'
        }`}
        style={{ 
          left: `${currentStepData.stepPositions.step1.x}px`, 
          top: `${currentStepData.stepPositions.step1.y}px`,
          fontFamily: 'DM Sans', 
          fontSize: '24px', 
          fontWeight: activeStep === 1 ? 600 : 500, 
          lineHeight: '1.3020000457763672em' 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        01
        {/* Active outer ring for step 1 */}
        {activeStep === 1 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 rounded-[52px] border-[12px] border-[rgba(201,220,105,0.24)]"
          />
        )}
      </motion.button>

      {/* Step 2 */}
      <motion.button
        onClick={() => setActiveStep(2)}
        className={`absolute w-[80px] h-[80px] rounded-[52px] flex items-center justify-center ${
          activeStep === 2 
            ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' 
            : 'bg-transparent text-[rgba(29,36,51,0.8)]'
        }`}
        style={{ 
          left: `${currentStepData.stepPositions.step2.x}px`, 
          top: `${currentStepData.stepPositions.step2.y}px`,
          fontFamily: 'DM Sans', 
          fontSize: '24px', 
          fontWeight: activeStep === 2 ? 600 : 500, 
          lineHeight: '1.3020000457763672em' 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        02
        {/* Active outer ring for step 2 */}
        {activeStep === 2 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 rounded-[52px] border-[12px] border-[rgba(201,220,105,0.24)]"
          />
        )}
      </motion.button>

      {/* Step 3 */}
      <motion.button
        onClick={() => setActiveStep(3)}
        className={`absolute w-[80px] h-[80px] rounded-[52px] flex items-center justify-center ${
          activeStep === 3 
            ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' 
            : 'bg-transparent text-[rgba(29,36,51,0.8)]'
        }`}
        style={{ 
          left: `${currentStepData.stepPositions.step3.x}px`, 
          top: `${currentStepData.stepPositions.step3.y}px`,
          fontFamily: 'DM Sans', 
          fontSize: '24px', 
          fontWeight: activeStep === 3 ? 600 : 500, 
          lineHeight: '1.3020000457763672em' 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        03
        {/* Active outer ring for step 3 */}
        {activeStep === 3 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 rounded-[52px] border-[12px] border-[rgba(201,220,105,0.24)]"
          />
        )}
      </motion.button>

      {/* Step 4 */}
      <motion.button
        onClick={() => setActiveStep(4)}
        className={`absolute w-[80px] h-[80px] rounded-[52px] flex items-center justify-center ${
          activeStep === 4 
            ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' 
            : 'bg-transparent text-[rgba(29,36,51,0.8)]'
        }`}
        style={{ 
          left: `${currentStepData.stepPositions.step4.x}px`, 
          top: `${currentStepData.stepPositions.step4.y}px`,
          fontFamily: 'DM Sans', 
          fontSize: '24px', 
          fontWeight: activeStep === 4 ? 600 : 500, 
          lineHeight: '1.3020000457763672em' 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        04
        {/* Active outer ring for step 4 */}
        {activeStep === 4 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 rounded-[52px] border-[12px] border-[rgba(201,220,105,0.24)]"
          />
        )}
      </motion.button>

      {/* Step 5 */}
      <motion.button
        onClick={() => setActiveStep(5)}
        className={`absolute w-[80px] h-[80px] rounded-[52px] flex items-center justify-center ${
          activeStep === 5 
            ? 'bg-gradient-to-br from-[#F9FFDC] to-[#FDFFF4] border border-[#C9DC69] text-[#1D2433] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]' 
            : 'bg-transparent text-[rgba(29,36,51,0.8)]'
        }`}
        style={{ 
          left: `${currentStepData.stepPositions.step5.x}px`, 
          top: `${currentStepData.stepPositions.step5.y}px`,
          fontFamily: 'DM Sans', 
          fontSize: '24px', 
          fontWeight: activeStep === 5 ? 600 : 500, 
          lineHeight: '1.3020000457763672em' 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        05
        {/* Active outer ring for step 5 */}
        {activeStep === 5 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 rounded-[52px] border-[12px] border-[rgba(201,220,105,0.24)]"
          />
        )}
      </motion.button>

      {/* Step-specific images based on Figma data */}
      {activeStep === 1 && (
        <motion.div
          key="step1-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[563px] top-[367px] w-[314px] h-[471px]"
        >
          <Image 
            src="/images/document-ingestion.png"
            alt="Document Ingestion Interface"
            width={314}
            height={471}
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}

      {activeStep === 2 && (
        <motion.div
          key="step2-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[566px] top-[382px] w-[308px] h-[463px]"
        >
          <Image 
            src="/images/ai-powered-extraction.png"
            alt="AI-Powered Extraction Interface"
            width={308}
            height={463}
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}

      {activeStep === 3 && (
        <motion.div
          key="step3-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[558px] top-[368px] w-[323px] h-[484px]"
        >
          <Image 
            src="/images/confidence-scoring.png"
            alt="Confidence Scoring Interface"
            width={323}
            height={484}
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}

      {activeStep === 4 && (
        <motion.div
          key="step4-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[554px] top-[348px] w-[333px] h-[499px]"
        >
          <Image 
            src="/images/rules-engine.png"
            alt="Rules Engine Interface"
            width={333}
            height={499}
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}

      {activeStep === 5 && (
        <motion.div
          key="step5-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[558px] top-[350px] w-[324px] h-[486px]"
        >
          <Image 
            src="/images/human-in-loop.png"
            alt="Human-in-the-Loop Interface"
            width={324}
            height={486}
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}

      {/* Step 1 specific CTA button */}
      {activeStep === 1 && (
        <motion.button 
          className="absolute left-[644px] top-[812px] bg-white/10 backdrop-blur-sm text-[#1D2433] px-4 py-[10px] rounded-[40px] border border-black hover:bg-white/20 transition-all duration-300 h-[40px] flex items-center justify-center"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Try a sample claim
        </motion.button>
      )}

      {/* Step 2 specific CTA button */}
      {activeStep === 2 && (
        <motion.button 
          className="absolute left-[644px] top-[812px] bg-white/10 backdrop-blur-sm text-[#1D2433] px-4 py-[10px] rounded-[40px] border border-black hover:bg-white/20 transition-all duration-300 h-[40px] flex items-center justify-center"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Try a sample claim
        </motion.button>
      )}

      {/* General CTA Button for other steps */}
      {activeStep !== 1 && activeStep !== 2 && (
        <motion.button 
          className="absolute left-[644px] top-[812px] bg-white/10 backdrop-blur-sm text-[#1D2433] px-4 py-[10px] rounded-[40px] border border-black hover:bg-white/20 transition-all duration-300 h-[40px] flex items-center justify-center"
          style={{ fontFamily: 'Satoshi', fontSize: '14px', fontWeight: 700, lineHeight: '1.3499999727521623em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Try a sample claim
        </motion.button>
      )}
    </section>
  );
}
