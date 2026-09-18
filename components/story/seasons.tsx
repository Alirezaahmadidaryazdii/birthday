"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, Sparkles } from "lucide-react";
import { useState } from "react";

const months = [
  {
    name: "مهر",
    number: "۰۱",
    feeling: "شروعی که بوی پاییز می‌ده.",
  },
  {
    name: "آبان",
    number: "۰۲",
    feeling: "هوا خنک‌تر می‌شه و شب‌ها قشنگ‌تر.",
  },
  {
    name: "آذر",
    number: "۰۳",
    feeling: "شب‌های طولانی و آرام.",
  },
  {
    name: "دی",
    number: "۰۴",
    feeling: "زمستون بالاخره خودش رو نشون می‌ده.",
  },
  {
    name: "بهمن",
    number: "۰۵",
    feeling: "سرد، آرام و کمی رویایی.",
  },
  {
    name: "اسفند",
    number: "۰۶",
    feeling: "آخرین صفحه‌های سال.",
  },
];

export default function Seasons() {
  const [selected, setSelected] = useState(0);

  const month = months[selected];

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24">
      <motion.div
        animate={{
          opacity: selected === 0 ? 0.16 : 0.08,
          scale: selected === 0 ? 1 : 1.15,
        }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-sm">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-2 text-blue-300"
          >
            <Sparkles size={14} />
            <span className="text-[10px] tracking-[0.3em]">
              OCTOBER → MARCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-medium"
          >
            نیمه‌ی دوست‌داشتنی سال
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm leading-7 text-muted"
          >
            از مهر تا اسفند؛ شش ماهی که حنا بیشتر دوستشون داره.
          </motion.p>
        </div>

        <div className="relative mb-10">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-foreground/10" />

          <div className="relative flex justify-between">
            {months.map((item, index) => {
              const active = selected === index;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-label={`ماه ${item.name}`}
                  className="relative flex flex-col items-center gap-2"
                >
                  <motion.span
                    animate={{
                      scale: active ? 1.25 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative z-10 h-3 w-3 rounded-full border ${
                      active
                        ? "border-blue-300 bg-blue-300"
                        : "border-blue-500/40 bg-background"
                    }`}
                  />

                  <span
                    className={`text-[10px] transition-colors ${
                      active ? "text-blue-300" : "text-muted"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={month.name}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs tracking-[0.25em] text-muted">
                  MONTH {month.number}
                </span>

                <h3 className="mt-2 text-2xl font-medium text-blue-300">
                  {month.name}
                </h3>
              </div>

              <motion.div
                animate={{ x: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronLeft
                  size={18}
                  className="text-muted"
                />
              </motion.div>
            </div>

            <p className="mt-7 text-sm leading-8 text-foreground/80">
              {month.feeling}
            </p>

            <div className="mt-6 h-px bg-foreground/10" />

            <p className="mt-5 text-xs text-muted">
              {selected === 0
                ? "و البته... تولد حنا هم همین حوالی اتفاق افتاده. 💙"
                : "یکی از شش ماه مورد علاقه‌ی حنا."}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-[11px] text-muted"
        >
          روی هر ماه بزن...
        </motion.p>
      </div>
    </section>
  );
}
