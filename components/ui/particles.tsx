import { motion } from "framer-motion";

interface ParticleProps {
  count?: number;
}

export const Particles = ({ count = 50 }: ParticleProps) => {
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};
