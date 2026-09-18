"use client";

import { motion } from "framer-motion";
import {
  Music2,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || !audioRef.current.duration) return;

    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  const restart = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;

    if (!playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24">
      <audio
        ref={audioRef}
        src="/music/music.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: playing ? [1, 1.25, 1] : [1, 1.08, 1],
            opacity: playing ? [0.08, 0.24, 0.08] : [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: playing ? 3 : 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600 blur-[140px]"
        />

        {Array.from({ length: 12 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: playing ? [0, -20 - index * 2, 0] : 0,
              opacity: playing ? [0.1, 0.7, 0.1] : 0.2,
            }}
            transition={{
              duration: 2 + index * 0.15,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-300"
            style={{
              left: `${10 + ((index * 17) % 80)}%`,
              top: `${20 + ((index * 29) % 60)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-xs tracking-[0.25em] text-blue-300"
        >
          <Music2 size={15} />
          CHAPTER TWO
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-3xl font-semibold leading-10 text-foreground"
        >
          بعضی حس‌ها
          <br />
          با موسیقی گفته می‌شن.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 max-w-xs text-sm leading-8 text-muted"
        >
          این یکی رو فقط برای چند دقیقه گوش کن.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 w-full"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/5 p-7 backdrop-blur-xl">
            <motion.div
              animate={{
                rotate: playing ? 360 : 0,
                scale: playing ? [1, 1.04, 1] : 1,
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: playing ? Infinity : 0,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-blue-500/30 bg-blue-800/70"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-foreground/10 bg-blue-700/60">
                <Music2
                  size={30}
                  strokeWidth={1.4}
                  className="text-blue-300"
                />
              </div>
            </motion.div>

            <p className="mt-8 text-xs text-muted">برای حنا</p>

            <h3 className="mt-2 text-xl font-semibold text-foreground">
              PARASTO ve AJENEH
            </h3>

            <div className="mt-8">
              <div className="h-1 overflow-hidden rounded-full bg-foreground/10">
                <motion.div
                  className="h-full origin-right rounded-full bg-blue-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={restart}
                aria-label="شروع دوباره"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/5 text-muted transition active:scale-90"
              >
                <RotateCcw size={17} />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "توقف موسیقی" : "پخش موسیقی"}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-foreground shadow-lg transition active:scale-90"
              >
                {playing ? <Pause size={23} /> : <Play size={23} />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "فعال کردن صدا" : "بی‌صدا کردن"}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/5 text-muted transition active:scale-90"
              >
                {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>
            </div>

            <motion.p
              animate={{
                opacity: playing ? [0.4, 1, 0.4] : 0.6,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-6 text-xs text-muted"
            >
              {playing ? "در حال پخش..." : "برای شنیدن لمس کن"}
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 text-xs leading-7 text-muted"
        >
          بعضی آهنگ‌ها رو فقط گوش نمی‌دیم...
          <br />
          یه جایی ازشون رو با خودمون می‌بریم.
        </motion.p>
      </div>
    </section>
  );
}