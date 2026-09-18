"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WorldBackground() {
  const { scrollYProgress } = useScroll();

  const glowY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);

  const starsY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const starsOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.5, 0.8, 0.45, 0.7, 0.35]
  );

  const moonY = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const moonScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [1, 1.1, 0.8, 1.25]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{
          y: glowY,
          scale: glowScale,
        }}
        className="absolute left-1/2 top-[25%] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]"
      />

      <motion.div
        style={{
          y: starsY,
          opacity: starsOpacity,
        }}
        className="absolute inset-0"
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              repeat: Infinity,
              delay: (index % 6) * 0.4,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-300"
            style={{
              left: `${(index * 43) % 100}%`,
              top: `${(index * 67) % 100}%`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{
          y: moonY,
          scale: moonScale,
        }}
        className="absolute right-[12%] top-[18%]"
      >
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full bg-foreground/5 blur-2xl" />

          <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-foreground/80" />

          <div className="absolute right-[-5px] top-[-3px] h-16 w-16 translate-x-4 rounded-full bg-background" />
        </div>
      </motion.div>

      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -350]),
        }}
        className="absolute bottom-[-10%] left-[-20%] h-64 w-[140%] rounded-[50%] bg-blue-800/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70" />
    </div>
  );
}