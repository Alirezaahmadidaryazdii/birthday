
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Heart,
  Sparkles,
  Stars,
  Flower2,
  Crown,
} from "lucide-react";

import FloatingElements from "./FloatingElements";
import { MOM_NAME, SENDER_NAME } from "./birthday.config";

export default function Celebration() {
  useEffect(() => {
    const end = Date.now() + 6000;
    let animationFrame = 0;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.65 },
        colors: ["#d8bc83", "#9cbdd8", "#ffffff", "#e7a5a5"],
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.65 },
        colors: ["#d8bc83", "#9cbdd8", "#ffffff", "#e7a5a5"],
      });

      if (Date.now() < end) {
        animationFrame = requestAnimationFrame(frame);
      }
    };

    frame();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08182d]">
      <FloatingElements />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -25 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-[#d8bc83]/20 blur-3xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#d8bc83]/40 bg-[#d8bc83]/10 shadow-xl shadow-[#d8bc83]/10">
            <Crown size={46} className="text-[#d8bc83]" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-5 text-xs tracking-[0.4em] text-[#d8bc83] sm:text-sm"
        >
          A DAY MADE FOR YOU
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-5 text-4xl font-bold leading-relaxed text-white sm:text-6xl"
        >
          تولدت مبارک
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-2 block bg-gradient-to-l from-[#f5e3b6] via-[#d8bc83] to-[#f5e3b6] bg-clip-text text-transparent"
          >
            {MOM_NAME} عزیزم
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d8bc83]" />
          <Sparkles size={17} className="text-[#d8bc83]" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8bc83]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.4,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#d8bc83]/30 bg-gradient-to-br from-[#1c3b5a]/95 via-[#142e49]/95 to-[#10243b]/95 p-7 text-right shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#d8bc83]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="relative mb-8 flex justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e7a5a5]/30 bg-[#e7a5a5]/10">
              <Heart
                size={32}
                fill="#e7a5a5"
                className="text-[#e7a5a5]"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="relative mb-8 text-center text-2xl font-bold text-[#f5e3b6] sm:text-3xl"
          >
            چند کلمه از ته قلبم...
          </motion.h2>

          <div className="relative space-y-6 text-base leading-9 text-blue-50/90 sm:text-lg sm:leading-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              مامان قشنگم،
              <br />
              شاید هیچ کلمه‌ای نتونه اندازه تمام چیزی که توی قلبم دارم رو
              بیان کنه، اما دلم می‌خواد امروز بدونی که چقدر برام عزیزی.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              تو فقط مامان من نیستی؛ تو همون قلب مهربونی هستی که همیشه
              می‌شه بهش تکیه کرد. کسی که با وجود تمام سختی‌ها، هنوز
              برای زندگی رویاهای قشنگی داره و زیبایی‌های دنیا رو دوست داره.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
            >
              آرزو می‌کنم روزهای پیش روت پر از سفرهای هیجان‌انگیز،
              جاده‌های زیبا، خنده‌های بلند، آرامش و اتفاق‌هایی باشه
              که همیشه منتظرشون بودی.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="font-medium text-[#f5e3b6]"
            >
              امیدوارم هیچ‌وقت از آرزو کردن دست نکشی؛ چون هنوز کلی
              اتفاق قشنگ در انتظار توئه.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="my-10 h-px bg-gradient-to-r from-transparent via-[#d8bc83]/50 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.8, duration: 1 }}
            className="relative text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-5 flex justify-center"
            >
              <Flower2 size={32} className="text-[#d8bc83]" />
            </motion.div>

            <p className="mb-5 text-xl font-bold leading-9 text-white sm:text-2xl">
              دوستت دارم، بیشتر از چیزی که بشه نوشت.
            </p>

            <p className="mb-3 text-sm text-blue-100/60">
              با تمام عشق دنیا،
            </p>

            <p className="text-3xl font-bold text-[#d8bc83]">
              {SENDER_NAME}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5 }}
              className="mt-5 flex justify-center"
            >
              <Heart
                size={19}
                fill="#e7a5a5"
                className="text-[#e7a5a5]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.8, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 text-[#d8bc83]">
            <Stars size={19} />
            <span className="text-xs tracking-[0.35em]">
              MADE WITH LOVE
            </span>
            <Stars size={19} />
          </div>

          <p className="text-sm text-blue-100/40">
            برای تو، که همیشه لایق قشنگ‌ترین اتفاق‌هایی...
          </p>
        </motion.div>
      </section>
    </main>
  );
}
