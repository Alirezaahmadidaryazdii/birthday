"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export default function TheLastPage() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: opened ? [1, 1.15, 1] : 1,
            opacity: opened ? [0.15, 0.3, 0.15] : 0.12,
          }}
          transition={{
            duration: 5,
            repeat: opened ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]"
        />

        {Array.from({ length: 20 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: opened ? [0.1, 0.8, 0.1] : [0.1, 0.3, 0.1],
              y: opened ? [0, -15, 0] : 0,
              scale: opened ? [0.8, 1.2, 0.8] : 1,
            }}
            transition={{
              duration: 2.5 + (index % 4),
              repeat: Infinity,
              delay: (index % 5) * 0.3,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-300"
            style={{
              left: `${(index * 47) % 100}%`,
              top: `${(index * 71) % 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex max-w-sm flex-col items-center text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-blue-300 backdrop-blur-xl"
            >
              <Sparkles size={22} strokeWidth={1.5} />
            </motion.div>

            <span className="mb-4 text-[10px] tracking-[0.3em] text-blue-300">
              THE LAST PAGE
            </span>

            <h2 className="text-3xl font-light text-foreground">
              اینجا آخرین صفحه‌ست...
            </h2>

            <p className="mt-5 text-sm leading-8 text-muted">
              ولی قبل از اینکه تموم بشه،
              <br />
              یه چیز کوچیک دیگه مونده.
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              className="mt-9 flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm text-foreground backdrop-blur-xl transition hover:bg-foreground/10"
            >
              صفحه‌ی آخر رو باز کن
              <Sparkles size={15} />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex max-w-md flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120,
              }}
              className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-blue-300 backdrop-blur-xl"
            >
              <Heart size={25} fill="currentColor" strokeWidth={1.5} />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] tracking-[0.3em] text-blue-300"
            >
              ۰۷ · ۰۷ · ۱۳۸۷
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-4xl font-light text-foreground"
            >
              تولدت مبارک حنا 💙
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 space-y-5 text-sm leading-8 text-muted"
            >
              <p>
                امیدوارم امسال برات پر از اتفاق‌های قشنگ،
                <br />
                لبخندهای واقعی و لحظه‌هایی باشه
                <br />
                که دلت بخواد دوباره تجربه‌شون کنی.
              </p>

              <p>
                راستش، همه‌ی این چند ساعتی که برای ساختن
                <br />
                این دنیای کوچیک گذاشتم،
                <br />
                فقط برای این بود که شاید بتونم
                <br />
                یه گوشه‌ی کوچیک از امروزت رو قشنگ‌تر کنم.
              </p>

              <p className="text-foreground/90">
                امیدوارم وقتی به آخرش رسیدی،
                <br />
                حتی برای چند لحظه لبخند روی لبت نشسته باشه،
                <br />
                یه کم ذوق کرده باشی و دلت خوش شده باشه.
              </p>

              <p>
                اگر تونسته باشم همین‌قدر کوچیک،
                <br />
                حال دلت رو خوب کنم،
                <br />
                برای من کافیه. 💙
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-10 flex items-center gap-3 text-xs text-blue-300"
            >
              <span className="h-px w-8 bg-blue-500/30" />
              <span>پایان این داستان</span>
              <span className="h-px w-8 bg-blue-500/30" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              className="mt-5 text-xs text-muted"
            >
              بعضی داستان‌ها تموم نمی‌شن...
              <br />
              فقط به آخرین صفحه‌شون می‌رسن.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}