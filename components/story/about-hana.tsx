"use client";

import { motion } from "framer-motion";
import { BookOpen, CloudSun, MapPin, Palette, Sparkles } from "lucide-react";

const facts = [
  {
    icon: Palette,
    label: "رنگ مورد علاقه",
    value: "آبی",
  },
  {
    icon: BookOpen,
    label: "چیزی که زیاد دوست داره",
    value: "کتاب و کتابخونه",
  },
  {
    icon: CloudSun,
    label: "نیمه‌ی دوست‌داشتنی سال",
    value: "از مهر تا اسفند",
  },
  {
    icon: MapPin,
    label: "جایی که دوست داره",
    value: "بوشهر و جنوب",
  },
  {
    icon: Sparkles,
    label: "چیزی که دوست داره ببینه",
    value: "شفق قطبی",
  },
];

export default function AboutHana() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600 blur-[130px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-md flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.25em] text-blue-300">
            A FEW THINGS
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-10 text-foreground">
            قبل از ادامه‌ی داستان...
          </h2>

          <p className="mt-5 text-sm leading-8 text-muted">
            چند تا چیز کوچیک درباره‌ی حنا هست که بد نیست بدونی.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {facts.map((fact, index) => {
            const Icon = fact.icon;

            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-4 backdrop-blur-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700/50 text-blue-300">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-muted">{fact.label}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {fact.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 text-center text-xs leading-7 text-muted"
        >
          و این تازه اولشه...
        </motion.div>
      </div>
    </section>
  );
}