
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function Aurora() {
  const [activated, setActivated] = useState(false);

  const handleTouch = () => {
    setActivated(true);

    setTimeout(() => {
      setActivated(false);
    }, 3500);
  };

  return (
    <section
      onClick={handleTouch}
      className="relative flex min-h-[85vh] cursor-pointer items-center justify-center overflow-hidden bg-background px-6"
    >
      <motion.div
        animate={{
          opacity: activated ? 0.9 : 0.45,
          scale: activated ? 1.2 : 1,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-1/2 top-[18%] h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-blue-600/20 blur-[80px]"
      />

      <motion.div
        animate={{
          opacity: activated ? 0.75 : 0.3,
          rotate: activated ? 3 : 0,
          scale: activated ? 1.08 : 1,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-[-20%] top-[20%] h-48 w-[140%] -rotate-3 rounded-[50%] bg-blue-500/20 blur-[55px]"
      />

      <motion.div
        animate={{
          opacity: activated ? 0.55 : 0.18,
          rotate: activated ? -4 : 0,
          scale: activated ? 1.12 : 1,
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute left-[-15%] top-[30%] h-40 w-[130%] rotate-2 rounded-[50%] bg-blue-300/10 blur-[50px]"
      />

      <div className="absolute inset-0">
        {Array.from({ length: 45 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: activated
                ? [0.3, 1, 0.3]
                : [0.15, 0.55, 0.15],
              scale: activated
                ? [0.8, 1.5, 0.8]
                : [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: activated ? 1.2 + (index % 3) : 2.5 + (index % 4),
              repeat: Infinity,
              delay: (index % 7) * 0.25,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-300"
            style={{
              left: `${(index * 47) % 100}%`,
              top: `${(index * 71) % 85}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex max-w-sm flex-col items-center text-center">
        <motion.div
          animate={{
            y: activated ? -8 : 0,
            rotate: activated ? 8 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Sparkles
            size={28}
            strokeWidth={1.3}
            className="text-blue-300"
          />
        </motion.div>

        <motion.div
          animate={{
            scale: activated ? 1.05 : 1,
          }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-[10px] tracking-[0.35em] text-blue-300">
            AURORA BOREALIS
          </p>

          <h2 className="text-3xl font-medium text-foreground">
            یه آرزوی دور
          </h2>

          <p className="mt-5 text-sm leading-8 text-muted">
            شفق قطبی رو می‌خواد یه روز از نزدیک ببینه.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activated ? "active" : "idle"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-10 text-xs text-blue-300/80"
          >
            {activated
              ? "شاید یه تکه از اون آسمون همین‌جا باشه..."
              : "آسمون رو لمس کن"}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        animate={{
          y: activated ? -15 : 0,
          opacity: activated ? 0.5 : 0.2,
        }}
        transition={{ duration: 1 }}
        className="absolute bottom-[-15%] left-[-10%] h-56 w-[120%] rounded-[50%] bg-blue-700/20 blur-3xl"
      />
    </section>
  );
}
