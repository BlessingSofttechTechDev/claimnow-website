'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Activity, Brain, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export const Hero = () => {
  return (
    <section 
      className="relative -mt-16 overflow-hidden bg-gradient-to-b from-background via-background to-accent/20"
      aria-label="Hero section - ClaimNow AI medical claims processing"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-20 opacity-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Brain className="w-16 h-16 text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-40 opacity-10"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      >
        <Shield className="w-12 h-12 text-primary" />
      </motion.div>

      <motion.div
        className="absolute top-48 right-32 opacity-10"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      >
        <Zap className="w-14 h-14 text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 opacity-10"
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5 
        }}
      >
        <Activity className="w-10 h-10 text-primary" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image 
                src="/logo.svg" 
                alt="ClaimNow Logo" 
                width={144}
                height={144}
                className="h-36 w-auto mb-2"
                priority
              />
            </motion.div>

            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm font-medium text-foreground"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              AI-Powered Medical Claims Processing
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI that reads medical bills and settles{" "}
              <span className="text-primary text-green-700">claims in minutes</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Automate document intake, extraction, and adjudication with near-perfect accuracy— see what's covered, capped, or excluded in one click.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: "Claims/Hour", value: "10K+", icon: Zap },
                { label: "Uptime", value: "99.8%", icon: Shield },
                { label: "Accuracy", value: ">99%", icon: Activity },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* 3D Card Effect */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 z-10 pointer-events-none" />
              
              {/* Image */}
              <Image 
                src="/assets/hero-dashboard.jpeg" 
                alt="ClaimNow AI platform dashboard showing automated medical claims processing"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
              
              {/* Floating Labels with enhanced animations */}
              <motion.div 
                className="absolute top-8 left-8 bg-card/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-border hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-foreground">99%+ OCR Accuracy</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-32 right-8 bg-card/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-border hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-sm font-medium text-foreground">&lt;300s Process Time</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-border hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <span className="text-sm font-medium text-foreground">&gt;99% Accuracy</span>
                </div>
              </motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              />
            </motion.div>
            
            {/* Enhanced Decorative Elements with animation */}
            <motion.div 
              className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Orbiting particles */}
            <motion.div
              className="absolute top-1/4 -right-4 w-3 h-3 bg-primary/40 rounded-full"
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -left-4 w-2 h-2 bg-accent/40 rounded-full"
              animate={{ 
                y: [0, 30, 0],
                x: [0, -20, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Particles Effect */}
      <Particles count={30} />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <div className="h-12 w-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              className="h-2 w-2 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
