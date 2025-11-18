'use client';

import { Cpu, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Efficiency",
    description: "Our multi-model AI engine processes and verifies claims in parallel, ensuring lightning-fast and reliable operations — even during peak loads.",
  },
  {
    icon: Database,
    title: "Data Intelligence at Scale",
    description: "We use NLP, OCR, and knowledge graphs to extract structured insights from even the most complex healthcare claim documents.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "With HIPAA, GDPR, and DPDPA compliance, every transaction is encrypted and every byte is monitored through real-time anomaly detection.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Technology That Drives{" "}
            <span className="text-primary">ClaimNow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on a foundation of AI precision, real-time automation, and enterprise-grade security, ClaimNow transforms claim handling into a fast, transparent, and intelligent process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary mb-2">10,000+</span>
            <span className="text-muted-foreground text-sm">Claims Processed / Hour</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary mb-2">99.8%</span>
            <span className="text-muted-foreground text-sm">Uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary mb-2">70%+</span>
            <span className="text-muted-foreground text-sm">Cost Reduction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary mb-2">&lt;200ms</span>
            <span className="text-muted-foreground text-sm">Avg Processing Speed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
