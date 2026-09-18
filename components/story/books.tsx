"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Books() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600 blur-[140px]"
        />

        <div className="absolute left-[15%] top-[18%] h-1 w-1 rounded-full bg-blue-300" />
        <div className="absolute right-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-blue-300" />
        <div className="absolute left-[25%] bottom-[25%] h-1 w-1 rounded-full bg-blue-300" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-xs tracking-[0.25em] text-blue-300"
        >
          <BookOpen size={15} />
          CHAPTER ONE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-3xl font-semibold leading-10 text-foreground"
        >
          بعضی آدم‌ها
          <br />
          با کتاب‌هاشون حرف می‌زنن.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 max-w-xs text-sm leading-8 text-muted"
        >
          و بعضی داستان‌ها اون‌قدر نزدیک می‌شن که دیگه فقط یک داستان نیستن.
        </motion.p>

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 1,
            delay: 0.45,
            type: "spring",
            stiffness: 80,
          }}
          className="relative mt-14 w-full max-w-[320px] text-right"
          aria-label="باز کردن کتاب"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotateZ: [-0.5, 0.5, -0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            <div className="relative grid grid-cols-2 overflow-hidden rounded-2xl border border-foreground/10 bg-blue-800/70 shadow-2xl backdrop-blur-xl">
              <div className="relative flex min-h-48 items-center justify-center border-l border-foreground/10 bg-blue-700/30 p-6">
                <div className="absolute inset-y-5 left-0 w-px bg-foreground/10" />

                <div className="text-center">
                  <p className="text-[10px] tracking-[0.2em] text-blue-300">
                    A STORY
                  </p>

                  <p className="mt-4 text-sm leading-7 text-foreground">
                    بعضی قصه‌ها
                    <br />
                    ماندگار می‌شن.
                  </p>
                </div>
              </div>

              <div className="relative flex min-h-48 items-center justify-center bg-blue-800/80 p-6">
                <div className="absolute inset-y-5 right-0 w-px bg-foreground/10" />

                <div className="text-center">
                  <p className="text-xs text-muted">کتاب مورد علاقه</p>

                  <p className="mt-4 text-lg font-semibold leading-8 text-foreground">
                    پایی که
                    <br />
                    جا ماند
                  </p>

                  <div className="mx-auto mt-5 h-px w-12 bg-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="mt-6 text-center text-xs text-blue-300"
          >
            برای باز کردن لمس کن
          </motion.p>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 px-6 backdrop-blur-md"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 90,
                }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-foreground/10 bg-blue-900 p-7 text-right shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="بستن"
                  className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-muted transition active:scale-90"
                >
                  <X size={17} />
                </button>

                <div className="mt-4">
                  <p className="text-[10px] tracking-[0.25em] text-blue-300">
                    A PAGE FROM HER WORLD
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold leading-9 text-foreground">
                    پایی که جا ماند
                  </h3>

                  <div className="mt-6 h-px w-16 bg-blue-500" />

                  <p className="mt-7 text-sm leading-9 text-muted">
                    شاید دلیل دوست داشتن یک کتاب،
                    <br />
                    فقط خود داستانش نباشه.
                    <br />
                    <br />
                    شاید بعضی کتاب‌ها
                    <br />
                    یه تکه از دنیای آدم‌ها رو
                    <br />
                    با خودشون نگه می‌دارن.
                  </p>

                  <div className="mt-8 rounded-2xl border border-foreground/10 bg-foreground/5 p-4">
                    <p className="text-xs leading-7 text-blue-300">
                      حالا می‌تونی صفحه رو ببندی
                      <br />
                      و داستان رو ادامه بدی.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 max-w-xs text-sm leading-8 text-muted"
        >
          شاید بعضی داستان‌ها رو نمی‌خونیم؛
          <br />
          باهاشون زندگی می‌کنیم.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-col items-center gap-3 text-muted"
        >
          <span className="text-xs">داستان ادامه داره</span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}