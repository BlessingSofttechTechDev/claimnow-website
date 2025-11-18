'use client';

import { TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    icon: TrendingUp,
    value: "99%+",
    label: "OCR Accuracy",
    description: "Industry-leading document recognition accuracy with advanced AI models",
  },
  {
    icon: CheckCircle2,
    value: ">99%",
    label: "Processing Accuracy",
    description: "Near-perfect accuracy in claim extraction and validation",
  },
  {
    icon: Zap,
    value: "<300s",
    label: "Process Time",
    description: "Lightning-fast claim processing from upload to final report",
  },
];

export const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Unmatched Performance Metrics
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results that transform claims processing
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-foreground">{metric.value}</div>
                <div className="text-xl font-semibold text-foreground">{metric.label}</div>
                <p className="text-muted-foreground leading-relaxed">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
