"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Anchor, Moon, Waves } from "lucide-react";
import { useState } from "react";

export default function South() {
  const [touched, setTouched] = useState(false);

  const waveX = useMotionValue(0);
  const waveY = useMotionValue(0);

  const springX = useSpring(waveX, {
    stiffness: 80,
    damping: 18,
  });

  const springY = useSpring(waveY, {
    stiffness: 80,
    damping: 18,
  });

  const handleTouch = () => {
    setTouched(true);

    waveX.set(Math.random() * 20 - 10);
    waveY.set(-8);

    setTimeout(() => {
      waveX.set(0);
      waveY.set(0);
    }, 500);
  };

  return (
    <section
      onClick={handleTouch}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600 blur-[130px]"
        />

        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          animate={{
            scaleX: [1, 1.04, 1],
            scaleY: [1, 0.97, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-[-10%] h-36 w-[120%] rounded-[50%] bg-blue-800/80 blur-sm"
        />

        <motion.div
          animate={{
            x: [-15, 10, -15],
            scaleX: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-[-15%] h-24 w-[130%] rounded-[50%] border-t border-blue-500/20"
        />

        <motion.div
          animate={{
            x: [10, -12, 10],
            scaleX: [1.02, 0.98, 1.02],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-[-20%] h-16 w-[140%] rounded-[50%] border-t border-blue-300/10"
        />

        <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-blue-300" />
        <div className="absolute right-[18%] top-[27%] h-1.5 w-1.5 rounded-full bg-blue-300" />
        <div className="absolute left-[32%] top-[13%] h-1 w-1 rounded-full bg-blue-300" />
        <div className="absolute right-[30%] top-[39%] h-1 w-1 rounded-full bg-blue-300" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-xs tracking-[0.25em] text-blue-300"
        >
          <Waves size={15} />
          CHAPTER THREE
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 70,
          }}
          className="relative mt-10"
        >
          <motion.div
            animate={{
              scale: touched ? [1, 1.25, 1] : 1,
              opacity: touched ? [0.2, 0.5, 0.2] : 0.2,
            }}
            transition={{ duration: 0.7 }}
            className="absolute -inset-8 rounded-full bg-blue-300/5 blur-2xl"
          />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md">
            <Moon size={38} strokeWidth={1.2} className="text-blue-300" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 text-sm text-muted"
        >
          Somewhere South
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-4 text-3xl font-semibold leading-10 text-foreground"
        >
          بعضی جاها
          <br />
          فقط باید دیده بشن.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xs text-sm leading-8 text-muted"
        >
          یه جایی نزدیک دریا،
          <br />
          زیر آسمون شب،
          <br />
          جایی حوالی بوشهر.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex items-center gap-2 text-xs text-blue-300"
        >
          <Anchor size={15} />
          <span>
            {touched ? "دریا هم یه لحظه تکون خورد." : "برای لمس دریا لمس کن"}
          </span>{" "}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-xs text-muted"
        >
          دریا هنوز ادامه دارد
        </motion.div>
      </div>
    </section>
  );
}
