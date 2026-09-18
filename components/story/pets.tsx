"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cat, Dog, Heart } from "lucide-react";
import { useState } from "react";

const pets = [
  {
    id: "cat",
    name: "گربه",
    icon: Cat,
    title: "موجودی که همیشه یه جایی منتظره.",
    text: "آروم، کنجکاو، مستقل و البته کمی غیرقابل پیش‌بینی.",
  },
  {
    id: "dog",
    name: "ژرمن شپرد مشکی",
    icon: Dog,
    title: "اون یکی رفیق قدرتمند.",
    text: "وفادار، باابهت و از اونایی که حضورشون خودش یه حس امنه.",
  },
];

export default function Pets() {
  const [selected, setSelected] = useState("cat");

  const activePet = pets.find((pet) => pet.id === selected) ?? pets[0];
  const Icon = activePet.icon;

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-background px-6 py-24">
      <motion.div
        animate={{
          scale: selected === "cat" ? 1 : 1.2,
          opacity: selected === "cat" ? 0.12 : 0.2,
        }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-sm">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-2 text-blue-300"
          >
            <Heart size={14} />
            <span className="text-[10px] tracking-[0.3em]">
              LITTLE FRIENDS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-medium"
          >
            رفیق‌های چهارپا
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm leading-8 text-muted"
          >
            بعضی رفیق‌ها حرف نمی‌زنن، ولی خوب بلدن کنارت باشن.
          </motion.p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3">
          {pets.map((pet) => {
            const PetIcon = pet.icon;
            const active = selected === pet.id;

            return (
              <motion.button
                key={pet.id}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelected(pet.id)}
                className={`relative overflow-hidden rounded-3xl border p-5 text-right transition ${
                  active
                    ? "border-blue-500/40 bg-blue-500/10"
                    : "border-foreground/10 bg-foreground/5"
                }`}
              >
                <motion.div
                  animate={{
                    y: active ? -3 : 0,
                    rotate: active ? 3 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl ${
                    active
                      ? "bg-blue-500/15 text-blue-300"
                      : "bg-foreground/5 text-muted"
                  }`}
                >
                  <PetIcon size={22} strokeWidth={1.5} />
                </motion.div>

                <span
                  className={`text-sm ${
                    active ? "text-foreground" : "text-muted"
                  }`}
                >
                  {pet.name}
                </span>

                {active && (
                  <motion.div
                    layoutId="pet-indicator"
                    className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-blue-300"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePet.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/5 p-7 backdrop-blur-xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.7, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300"
                >
                  <Icon size={28} strokeWidth={1.3} />
                </motion.div>

                <div>
                  <p className="text-xs text-muted">
                    حیوون مورد علاقه
                  </p>
                  <h3 className="mt-1 text-lg font-medium">
                    {activePet.name}
                  </h3>
                </div>
              </div>

              <h4 className="mt-8 text-base leading-7 text-blue-300">
                {activePet.title}
              </h4>

              <p className="mt-3 text-sm leading-8 text-foreground/70">
                {activePet.text}
              </p>

              <div className="mt-7 h-px bg-foreground/10" />

              <p className="mt-5 text-[11px] leading-6 text-muted">
                حالا یکی دیگه رو انتخاب کن و ببین اون چه حسی داره.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
