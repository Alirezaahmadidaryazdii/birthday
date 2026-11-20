
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Wind } from "lucide-react";

import { MOM_NAME } from "./birthday.config";
import FloatingElements from "./FloatingElements";

interface BirthdayCakeProps {
  onComplete: () => void;
}

export default function BirthdayCake({ onComplete }: BirthdayCakeProps) {
  const [blown, setBlown] = useState(false);

  const extinguishCandles = () => {
    if (blown) return;
    setBlown(true);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#08182d] px-5 py-16 text-center">
      <FloatingElements />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <Sparkles className="mx-auto mb-5 text-[#d8bc83]" size={35} />

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
            وقت جشن گرفتنه!
          </h2>

          <p className="text-blue-100/70">
            یک آرزو کن، {MOM_NAME} جان...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="relative mb-12 flex flex-col items-center"
        >
          <div className="absolute bottom-0 h-8 w-80 rounded-full bg-black/30 blur-xl sm:w-[420px]" />

          <div className="relative z-20 mb-[-2px] flex h-24 items-end justify-center gap-8">
            {[1, 2, 3].map((candle, index) => (
              <div
                key={candle}
                className="relative flex h-20 w-3 flex-col items-center"
              >
                <AnimatePresence>
                  {!blown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [0.9, 1.1, 0.9],
                        rotate: [-4, 4, -4],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        y: -25,
                        transition: { duration: 0.25 },
                      }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                      className="absolute -top-7 h-6 w-4 rounded-full bg-gradient-to-t from-orange-500 to-yellow-200 shadow-lg shadow-orange-400/50"
                    />
                  )}
                </AnimatePresence>

                <div className="h-16 w-3 rounded-t-sm bg-gradient-to-r from-[#d8bc83] to-[#f5e3b6]" />

                <AnimatePresence>
                  {blown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.3, y: 0 }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1.2, 1.7],
                        y: -35,
                        x: [0, 5, -5, 3],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.12,
                      }}
                      className="absolute -top-3 h-7 w-4 rounded-full bg-gray-300/40 blur-[4px]"
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="relative z-10 h-20 w-64 rounded-t-2xl border-b-4 border-[#b96b72] bg-gradient-to-b from-[#e7a5a5] to-[#c97883] shadow-xl sm:w-80">
            <div className="absolute inset-x-0 top-5 flex justify-around">
              {[1, 2, 3, 4, 5].map((item) => (
                <Heart
                  key={item}
                  size={15}
                  fill="#fff0e7"
                  color="#fff0e7"
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 h-7 w-72 rounded-b-2xl bg-gradient-to-b from-[#d8bc83] to-[#a9824f] shadow-xl sm:w-96">
            <div className="absolute inset-x-4 top-2 h-1 rounded-full bg-white/40" />
          </div>

          <div className="relative z-10 mt-2 h-3 w-80 rounded-full bg-[#d8bc83]/80 shadow-lg sm:w-[420px]" />
        </motion.div>

        <AnimatePresence mode="wait">
          {!blown ? (
            <motion.div
              key="before"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mx-auto flex max-w-md flex-col items-center"
            >
              <p className="mb-6 leading-7 text-blue-100/80">
                وقتشه شمع‌ها رو خاموش کنی و آرزوت رو به زبون بیاری.
              </p>

              <motion.button
                type="button"
                onClick={extinguishCandles}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 rounded-xl bg-[#d8bc83] px-8 py-4 font-bold text-[#10233c] shadow-lg shadow-black/20 transition hover:bg-[#ead4a7]"
              >
                <Wind size={22} />
                خاموش کردن شمع‌ها
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-7"
            >
              <div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  <Sparkles
                    className="mx-auto mb-4 text-[#d8bc83]"
                    size={34}
                  />
                </motion.div>

                <h3 className="mb-3 text-3xl font-bold text-[#d8bc83]">
                  تولدت مبارک {MOM_NAME} جان!
                </h3>

                <p className="text-blue-100/75">
                  امیدوارم تمام آرزوهای قشنگت به حقیقت تبدیل بشن.
                </p>
              </div>

              <motion.button
                type="button"
                onClick={onComplete}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-xl bg-white px-8 py-4 font-bold text-[#183553] shadow-xl transition"
              >
                دیدن پیام حنا
                <Heart className="mr-2 inline-block" size={17} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
