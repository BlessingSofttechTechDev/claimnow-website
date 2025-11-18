import { useState } from "react";
import { Heart, Stethoscope, FileText, Users, Hospital, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  {
    id: "claims",
    name: "Claims Processing",
    icon: FileText,
    title: "Lightning-Fast Claim Settlement",
    description: "Transform claim processing from days to minutes. Our AI-powered adjudication engine accelerates every stage — from document ingestion to final approval — delivering settlements at unprecedented speed.",
    features: [
      "Instant document verification",
      "Automated approval workflows",
      "Real-time status tracking",
      "Immediate payout initiation"
    ]
  },
  {
    id: "accuracy",
    name: "Document Recognition",
    icon: ClipboardCheck,
    title: "Unmatched Precision & Reliability",
    description: "Achieve industry-leading accuracy with our multi-model AI system. Every data point is extracted, validated, and confidence-scored to ensure zero-error claim processing.",
    features: [
      ">99% document accuracy",
      "Multi-language support",
      "Handwritten text recognition",
      "Complex medical terminology parsing"
    ]
  },
  {
    id: "providers",
    name: "Provider Networks",
    icon: Hospital,
    title: "Seamless Provider Integration",
    description: "Connect with healthcare providers, TPAs, and networks effortlessly. Automate eligibility checks, pre-authorizations, and claims submissions.",
    features: [
      "Real-time eligibility verification",
      "Automated pre-authorization",
      "Direct provider portal access",
      "Network status updates"
    ]
  },
  {
    id: "patients",
    name: "Patient Experience",
    icon: Users,
    title: "Exceptional Experience for All",
    description: "Faster approvals, fewer errors, and transparent tracking create superior experiences for providers, TPAs, and policyholders alike.",
    features: [
      "Mobile-friendly claim submission",
      "Real-time claim status updates",
      "Transparent coverage information",
      "Instant reimbursement processing"
    ]
  },
];

export const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState("claims");
  const activeUseCase = useCases.find((i) => i.id === activeTab) || useCases[0];
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wide">Medical Insurance Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive Healthcare Claims{" "}
            <span className="text-primary">Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purpose-built AI solutions for every aspect of medical insurance claims processing
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {useCases.map((useCase, index) => (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === useCase.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-foreground hover:bg-accent border border-border"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: activeTab === useCase.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <useCase.icon className="h-5 w-5" />
                {useCase.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div 
            className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <motion.div 
                  className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <activeUseCase.icon className="h-8 w-8 text-primary" />
                </motion.div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {activeUseCase.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {activeUseCase.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  {activeUseCase.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className="relative h-96 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <activeUseCase.icon className="h-32 w-32 text-primary/40" />
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-20 h-20 rounded-full bg-primary/10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-accent/20"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
