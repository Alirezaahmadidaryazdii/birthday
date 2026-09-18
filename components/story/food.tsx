"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Beef, Droplets, Leaf, Sparkles } from "lucide-react";
import { useState } from "react";

const foods = [
  {
    id: "ghormeh",
    name: "قورمه‌سبزی",
    label: "FAVORITE FOOD",
    icon: Leaf,
    description: "یکی از اون غذاهایی که هیچ توضیح اضافه‌ای لازم نداره.",
    note: "انتخابی که معمولاً نمی‌شه باهاش بحث کرد.",
  },
  {
    id: "gheimeh",
    name: "قیمه",
    label: "ALSO FAVORITE",
    icon: Beef,
    description: "اگه قورمه‌سبزی نباشه، قیمه هم جای خودش رو داره.",
    note: "مخصوصاً وقتی سیب‌زمینی‌ها درست سرخ شده باشن.",
  },
  {
    id: "water",
    name: "آب",
    label: "THE SAFE CHOICE",
    icon: Droplets,
    description: "و در بین همه‌ی نوشیدنی‌ها، انتخاب حنا خیلی ساده‌ست.",
    note: "آب؛ همیشه قابل اعتماد. 😄",
  },
];

export default function Food() {
  const [selected, setSelected] = useState("ghormeh");

  const activeFood =
    foods.find((food) => food.id === selected) ?? foods[0];

  const Icon = activeFood.icon;

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24">
      <motion.div
        animate={{
          scale: selected === "water" ? 1.2 : 1,
          opacity: selected === "water" ? 0.18 : 0.1,
        }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[110px]"
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
              SIMPLE PLEASURES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-medium"
          >
            چیزهای خوشمزه
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm leading-8 text-muted"
          >
            بعضی انتخاب‌ها خیلی ساده‌ان.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {foods.map((food) => {
            const FoodIcon = food.icon;
            const active = selected === food.id;

            return (
              <motion.button
                key={food.id}
                type="button"
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelected(food.id)}
                className={`relative flex min-h-28 flex-col items-center justify-center rounded-3xl border p-3 transition ${
                  active
                    ? "border-blue-500/40 bg-blue-500/10"
                    : "border-foreground/10 bg-foreground/5"
                }`}
              >
                <motion.div
                  animate={{
                    scale: active ? 1.12 : 1,
                    y: active ? -3 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 15,
                  }}
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl ${
                    active
                      ? "bg-blue-500/15 text-blue-300"
                      : "bg-foreground/5 text-muted"
                  }`}
                >
                  <FoodIcon size={20} strokeWidth={1.5} />
                </motion.div>

                <span
                  className={`text-xs ${
                    active ? "text-foreground" : "text-muted"
                  }`}
                >
                  {food.name}
                </span>

                {active && (
                  <motion.span
                    layoutId="food-dot"
                    className="absolute bottom-2 h-1 w-1 rounded-full bg-blue-300"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFood.id}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="relative mt-5 overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/5 p-7 backdrop-blur-xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.7, rotate: -8 }}
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
                  <p className="text-[10px] tracking-[0.25em] text-muted">
                    {activeFood.label}
                  </p>

                  <h3 className="mt-1 text-xl font-medium">
                    {activeFood.name}
                  </h3>
                </div>
              </div>

              <p className="mt-8 text-base leading-8 text-blue-300">
                {activeFood.description}
              </p>

              <div className="mt-6 h-px bg-foreground/10" />

              <p className="mt-5 text-xs leading-7 text-muted">
                {activeFood.note}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-7 text-center text-[11px] text-muted">
          یکی رو انتخاب کن...
        </p>
      </div>
    </section>
  );
}