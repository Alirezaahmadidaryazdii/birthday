"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ChapterTransitionProps {
  chapter: string;
  title: string;
}

export default function ChapterTransition({
  chapter,
  title,
}: ChapterTransitionProps) {
  return (
    <div className="relative flex h-16 items-center justify-center overflow-hidden bg-background">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 bg-blue-500/30"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          type: "spring",
          stiffness: 100,
        }}
        className="relative z-10 flex flex-col items-center gap-1 bg-background px-4"
      >
        <div className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] text-blue-300">
          <Sparkles size={10} />
          {chapter}
        </div>

        <span className="text-[11px] text-muted">
          {title}
        </span>
      </motion.div>
    </div>
  );
}