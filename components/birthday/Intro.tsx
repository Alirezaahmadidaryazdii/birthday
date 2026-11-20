
"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Stars } from "lucide-react";

import FloatingElements from "./FloatingElements";
import { MOM_NAME, SENDER_NAME } from "./birthday.config";

interface IntroProps {
  onContinue: () => void;
}

export default function Intro({ onContinue }: IntroProps) {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenGift = async () => {
    if (opened) return;

    setOpened(true);

    const audio = new Audio("/music/music.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    try {
      await audio.play();
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08182d] px-5 py-16">
      <FloatingElements />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(49,91,133,0.22),transparent_65%)]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Stars className="mx-auto mb-6 text-[#d8bc83]" size={38} />
          </motion.div>

          <p className="mb-4 text-xs tracking-[0.35em] text-[#a9c9e8] sm:text-sm">
            A SPECIAL SURPRISE
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-relaxed text-white sm:text-5xl">
            برای خاص‌ترین آدم زندگی من
          </h1>

          <p className="mb-14 text-base text-blue-100/70 sm:text-lg">
            یک سورپرایز کوچک، برای قلبی به بزرگی دریا
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="gift"
              initial={{ opacity: 0, scale: 0.7, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -30 }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex flex-col items-center"
            >
              <motion.button
                type="button"
                aria-label="باز کردن کارت هدیه"
                onClick={handleOpenGift}
                whileHover={{ scale: 1.06, rotate: -2 }}
                whileTap={{ scale: 0.96 }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="group relative h-64 w-72 cursor-pointer sm:h-72 sm:w-80"
                style={{ perspective: 1000 }}
              >
                <div className="absolute -inset-8 rounded-full bg-[#4779a8]/20 blur-3xl transition duration-700 group-hover:bg-[#d8bc83]/20" />

                <div className="absolute inset-x-5 bottom-0 h-8 rounded-full bg-black/40 blur-xl" />

                <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-[#f2dca8]/50 bg-gradient-to-br from-[#527fa9] via-[#315b85] to-[#142d4b] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%,rgba(0,0,0,0.15))]" />

                  <div className="absolute inset-3 rounded-[1.5rem] border border-white/15" />

                  <div className="absolute inset-y-0 left-1/2 w-7 -translate-x-1/2 bg-gradient-to-r from-[#b18c50] via-[#f3dda8] to-[#b18c50] shadow-[0_0_20px_rgba(216,188,131,0.2)]" />

                  <div className="absolute inset-x-0 top-1/2 h-7 -translate-y-1/2 bg-gradient-to-b from-[#b18c50] via-[#f3dda8] to-[#b18c50] shadow-md" />

                  <div className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f4dfb0] bg-gradient-to-br from-[#f6e5bd] to-[#c5a36c] shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#9b7949]/40 bg-gradient-to-br from-[#f8e9c9] to-[#d8bc83]">
                      <Heart
                        size={29}
                        fill="#9c4254"
                        color="#9c4254"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <motion.div
                    className="absolute left-1/2 top-5 z-30 -translate-x-1/2"
                    animate={{ y: [0, -3, 0], rotate: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -left-7 top-3 h-8 w-10 -rotate-[35deg] rounded-tl-full rounded-br-full border border-[#f5dfaa]/70 bg-gradient-to-br from-[#f8e7bd] to-[#bd985c] shadow-md" />
                      <div className="absolute -right-7 top-3 h-8 w-10 rotate-[35deg] rounded-tr-full rounded-bl-full border border-[#f5dfaa]/70 bg-gradient-to-bl from-[#f8e7bd] to-[#bd985c] shadow-md" />
                      <div className="relative z-10 h-5 w-5 rounded-full border border-[#fff0ce] bg-gradient-to-br from-[#fff0ce] to-[#bd985c] shadow-lg" />
                    </div>
                  </motion.div>

                  <Sparkles className="absolute right-7 top-8 text-[#f8e7bd]/80" size={17} />
                  <Sparkles className="absolute bottom-8 left-7 text-[#f8e7bd]/70" size={15} />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold tracking-[0.35em] text-[#fff0d0]/80">
                    MADE WITH LOVE
                  </div>
                </div>

                <motion.div
                  className="absolute -right-5 top-12 text-[#f3dca9]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Sparkles size={23} />
                </motion.div>

                <motion.div
                  className="absolute -left-6 bottom-16 text-[#f3dca9]"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                >
                  <Stars size={21} />
                </motion.div>
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <p className="mb-3 text-sm font-medium text-[#f0dcae]">
                  یک هدیه کوچک، با عشقی بی‌نهایت
                </p>

                <p className="text-sm text-blue-100/65">
                  برای باز کردن هدیه روی آن کلیک کن
                </p>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="mt-5 text-[#d8bc83]"
                >
                  ↓
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-xl rounded-3xl border border-[#d8bc83]/40 bg-gradient-to-br from-[#fffaf0] to-[#eee3d0] p-7 text-right shadow-2xl shadow-black/40 sm:p-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <Heart
                  className="mx-auto mb-7 text-[#9c4254]"
                  size={38}
                  fill="#9c4254"
                />
              </motion.div>

              <h2 className="mb-8 text-center text-2xl font-bold text-[#183553]">
                مامان {MOM_NAME} عزیزم...
              </h2>

              <div className="space-y-5 text-base leading-9 text-[#39485a] sm:text-lg">
                <p>
                  نمی‌دونم چطور می‌شه با چند تا کلمه، تمام عشقی رو که بهت دارم
                  بیان کنم.
                </p>

                <p>
                  فقط می‌خوام بدونی که بودنت یکی از قشنگ‌ترین نعمت‌های زندگی
                  منه. تو با مهربونی و قلب بزرگت، دنیا رو برای من جای قشنگ‌تری
                  کردی.
                </p>

                <p>
                  امروز بهونه‌ایه تا بیشتر از همیشه بهت بگم که چقدر دوستت دارم
                  و چقدر خوشحالم که تو رو دارم.
                </p>

                <p className="font-bold text-[#9c4254]">
                  تولدت مبارک بهترین مامان دنیا.
                </p>
              </div>

              <div className="mt-10 border-t border-[#d8bc83]/50 pt-6 text-center">
                <p className="mb-5 text-sm text-[#64748b]">
                  با تمام عشق دنیا،
                </p>

                <p className="text-2xl font-bold text-[#183553]">
                  {SENDER_NAME} ❤️
                </p>

                <button
                  type="button"
                  onClick={onContinue}
                  className="mt-8 rounded-xl bg-[#183553] px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-[#315b85]"
                >
                  ادامه سورپرایز
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
