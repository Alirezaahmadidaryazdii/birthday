"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Droplets,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { useState } from "react";

const things = [
  {
    id: 1,
    icon: BookOpen,
    title: "کتاب",
    hidden: "کتاب‌ها رو فقط نمی‌خونه؛ انگار واقعاً واردشون می‌شه.",
  },
  {
    id: 2,
    icon: MapPin,
    title: "جنوب",
    hidden: "یه جایی حوالی جنوب و بوی دریا، همیشه یه حس خوب منتظرشه.",
  },
  {
    id: 3,
    icon: Star,
    title: "یه آرزو",
    hidden: "یه روز می‌خواد شفق قطبی رو از نزدیک ببینه.",
  },
  {
    id: 4,
    icon: Droplets,
    title: "انتخاب ساده",
    hidden: "بین کلی نوشیدنی، آب هنوز یکی از امن‌ترین انتخاب‌هاست. 😄",
  },
];

export default function LittleThings() {
  const [opened, setOpened] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpened((current) => (current === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24">
      <motion.div
        animate={{
          scale: opened ? 1.15 : 1,
          opacity: opened ? 0.14 : 0.08,
        }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
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
              LITTLE DETAILS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-medium"
          >
            چیزهای کوچیک
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm leading-8 text-muted"
          >
            چیزهایی که شاید کوچیک باشن، ولی باعث می‌شن حنا، حنا باشه.
          </motion.p>
        </div>

        <div className="space-y-3">
          {things.map((thing, index) => {
            const Icon = thing.icon;
            const isOpen = opened === thing.id;

            return (
              <motion.button
                key={thing.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOpen(thing.id)}
                className={`w-full overflow-hidden rounded-3xl border text-right transition ${
                  isOpen
                    ? "border-blue-500/30 bg-blue-500/10"
                    : "border-foreground/10 bg-foreground/5"
                }`}
              >
                <div className="flex items-center gap-4 p-5">
                  <motion.div
                    animate={{
                      scale: isOpen ? 1.1 : 1,
                      rotate: isOpen ? 5 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                      isOpen
                        ? "bg-blue-500/15 text-blue-300"
                        : "bg-foreground/5 text-muted"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.4} />
                  </motion.div>

                  <div className="flex-1">
                    <span
                      className={`text-sm ${
                        isOpen ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {thing.title}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-lg font-light text-muted"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="mx-5 h-px bg-foreground/10" />

                      <p className="px-5 pb-6 pt-5 text-xs leading-7 text-foreground/70">
                        {thing.hidden}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-[11px] text-muted">
            روی هر کدوم بزن...
          </p>
        </motion.div>
      </div>
    </section>
  );
}