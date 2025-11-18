'use client';

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Testimonial */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="h-12 w-12 text-primary" />
            
            <blockquote className="space-y-6">
              <p className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                "ClaimNow has revolutionized our claims processing. We've achieved 99%+ accuracy and reduced processing time from days to minutes. The AI technology is truly game-changing."
              </p>
              
              <footer className="space-y-2">
                <div className="font-semibold text-lg text-foreground">Dr. Emily Chen</div>
                <div className="text-muted-foreground">Chief Medical Officer, HealthFirst Insurance</div>
              </footer>
            </blockquote>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/testimonial-person.jpg" 
                alt="Dr. Emily Chen, Chief Medical Officer"
                width={600}
                height={600}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-4 border-primary/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
