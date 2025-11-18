'use client';

import { Upload, ScanLine, GitBranch, FileCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Upload,
    title: "Ingest",
    description: "Upload documents via API, PDF, image, or e-form. ClaimNow instantly captures every data point using smart OCR and NLP.",
  },
  {
    icon: ScanLine,
    title: "AI-Powered Extraction",
    description: "Our multi-model AI extracts data with 99.9% accuracy, even from poor-quality scans. It detects billing codes, line items, and procedural charges automatically.",
  },
  {
    icon: GitBranch,
    title: "Confidence Scoring & Review",
    description: "Each field includes a confidence indicator. Review uncertain fields alongside the original PDF in our parallel viewer — in real time.",
  },
  {
    icon: FileCheck,
    title: "Rules Engine & Adjudication",
    description: "Built-in validation rules check every claim against coverage, exclusions, and compliance guidelines — ensuring accuracy and fairness.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    description: "When needed, human reviewers can step in seamlessly. The synergy between AI and humans guarantees speed and accountability.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-accent/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wide">How ClaimNow Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Intelligent Automation,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every claim moves through our intelligent pipeline — seamlessly combining AI automation with human insight for unmatched accuracy and transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow h-full group hover:border-primary/50">
                <div className="space-y-6">
                  {/* Step number */}
                  <div className="flex items-start justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-5xl font-bold text-primary/20">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
