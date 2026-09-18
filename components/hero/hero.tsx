"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/30 blur-[110px]"
        />

        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[18%] top-[13%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_12px_4px_var(--blue-glow)]"
        />

        <div className="absolute left-[12%] top-[22%] h-1 w-1 rounded-full bg-blue-300" />

        <div className="absolute left-[72%] top-[34%] h-1.5 w-1.5 rounded-full bg-blue-300" />

        <div className="absolute right-[12%] top-[44%] h-1 w-1 rounded-full bg-blue-300" />

        <div className="absolute left-[28%] top-[55%] h-1 w-1 rounded-full bg-blue-300" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-1/2 top-[12%] translate-x-1/2"
      >
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full bg-foreground/5 blur-xl" />

          <div className="absolute right-2 top-0 h-20 w-20 rounded-full bg-foreground" />

          <div className="absolute right-[-4px] top-[-2px] h-20 w-20 translate-x-4 rounded-full bg-background" />
        </div>
      </motion.div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-xs text-blue-300 backdrop-blur-md"
        >
          <BookOpen size={15} />
          <span>صفحه‌ی اول این داستان</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-sm text-muted"
        >
          ۷ مهر ۱۳۸۷
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-5xl font-semibold tracking-tight text-foreground"
        >
          تولدت مبارک
          <br />
          <span className="text-blue-300">حنا 💙</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-6 max-w-xs text-sm leading-8 text-muted"
        >
          بعضی آدم‌ها رو نمی‌شه توی چند جمله تعریف کرد.
          <br />
          پس یه داستان کوچیک براشون می‌سازیم.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-3 text-muted"
        >
          <span className="text-xs">داستان از اینجا شروع می‌شه</span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-2px] left-0 right-0 h-20 bg-blue-800"
        style={{
          clipPath:
            "polygon(0 55%, 8% 48%, 16% 57%, 25% 43%, 34% 54%, 43% 46%, 52% 58%, 61% 45%, 70% 53%, 80% 42%, 90% 55%, 100% 45%, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}