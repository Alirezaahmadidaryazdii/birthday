"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 55 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 2 + (index % 5),
  size: index % 4 === 0 ? 3 : 2,
}));

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 13) % 100}%`,
  delay: index * 0.6,
  duration: 8 + (index % 5) * 2,
}));

export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 35, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -35, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d8bc83]/5 blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-100"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.7, 1.7, 0.7],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bottom-[-20px] h-1.5 w-1.5 rounded-full bg-[#d8bc83]/70 blur-[1px]"
          style={{ left: particle.left }}
          animate={{
            y: ["0vh", "-110vh"],
            opacity: [0, 0.8, 0],
            x: [0, 25, -15, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}