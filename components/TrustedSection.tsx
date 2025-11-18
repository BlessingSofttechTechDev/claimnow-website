'use client';

import { Building2, Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    icon: Shield,
    title: "HIPAA & GDPR Compliant",
    description: "Protected by Global Standards",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Certified for Data Confidence",
  },
  {
    icon: CheckCircle,
    title: "Trusted by Leaders",
    description: "Approved by Industry Leaders",
  },
];

export const TrustedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-sage/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Trusted, Certified, and Compliant
          </motion.h3>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Fully compliant with HIPAA and GDPR — ensuring medical and personal data stays private, encrypted, and secure end-to-end.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-8 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all border border-border"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground mb-1">{cert.title}</div>
                    <div className="text-sm text-muted-foreground">{cert.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
