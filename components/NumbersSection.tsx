import { Clock, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    icon: Zap,
    value: "<5 min",
    label: "Average Claim Processing Time",
    description: "Transform claim processing from days to minutes with AI-powered automation",
    gradient: "from-teal to-primary",
  },
  {
    icon: TrendingUp,
    value: "80%",
    label: "Faster Claim Turnaround",
    description: "Reduce claim turnaround by 80% with enterprise-grade AI automation",
    gradient: "from-primary to-forest",
  },
  {
    icon: Clock,
    value: "<300s",
    label: "Zero-Error Processing",
    description: "Process complete insurance claims from upload to final report with zero errors",
    gradient: "from-forest to-teal",
  },
];

export const NumbersSection = () => {
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
            <span className="text-sm font-semibold uppercase tracking-wide">Key Highlights</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Fastest Claim Processing with 0 Errors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience fastest claim processing with 0 errors — combining the power of multiple AI models, enterprise security, and 24/7 reliability to transform your claim processing workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-3xl p-10 shadow-xl bg-gradient-to-br ${stat.gradient} text-forest-foreground`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="relative z-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="h-7 w-7" />
                </div>
                
                <div className="space-y-3">
                  <div className="text-6xl font-bold">{stat.value}</div>
                  <div className="text-2xl font-semibold">{stat.label}</div>
                  <p className="text-forest-foreground/90 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
