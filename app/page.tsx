"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Hero from "@/components/hero/hero";
import AboutHana from "@/components/story/about-hana";
import Books from "@/components/story/books";
import Music from "@/components/story/musics";
import South from "@/components/story/south";
import Aurora from "@/components/story/aurora";
import Seasons from "@/components/story/seasons";
import Pets from "@/components/story/pets";
import Food from "@/components/story/food";
import LittleThings from "@/components/little-things";
import TheLastPage from "@/components/story/the-last-page";
import StoryProgress from "@/components/story-progress";
import ChapterTransition from "@/components/story/chapter-transition";
import WorldBackground from "@/components/story/world-background";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <StoryProgress />
      <WorldBackground />
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1 }}
            className="relative flex min-h-screen items-center justify-center px-6"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/30 blur-[120px]"
              />

              <div className="absolute inset-0 opacity-40">
                {Array.from({ length: 35 }).map((_, index) => (
                  <motion.span
                    key={index}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2 + (index % 3),
                      repeat: Infinity,
                      delay: (index % 5) * 0.3,
                    }}
                    className="absolute h-1 w-1 rounded-full bg-blue-300"
                    style={{
                      left: `${(index * 37) % 100}%`,
                      top: `${(index * 61) % 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex max-w-sm flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-5 text-sm tracking-[0.3em] text-muted"
              >
                ۰۷ · ۰۷ · ۱۳۸۷
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-5xl font-light tracking-tight text-foreground"
              >
                حنا...
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="mt-5 text-base leading-8 text-muted"
              >
                یه دنیای کوچیک برای تو ساختم.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                onClick={() => setStarted(true)}
                className="mt-10 flex items-center gap-3 rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm text-foreground backdrop-blur-xl transition active:scale-95"
              >
                بریم؟
                <ArrowLeft size={17} />
              </motion.button>
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <Hero />

            <ChapterTransition
              chapter="CHAPTER ONE"
              title="چیزهایی که درباره‌ی حنا می‌دونیم"
            />

            <AboutHana />

            <ChapterTransition
              chapter="CHAPTER TWO"
              title="داستان‌هایی که روی کاغذ موندن"
            />

            <Books />

            <ChapterTransition
              chapter="CHAPTER THREE"
              title="چیزی که با موسیقی گفته می‌شه"
            />

            <Music />

            <ChapterTransition chapter="CHAPTER FOUR" title="جایی حوالی جنوب" />

            <South />

            <ChapterTransition chapter="CHAPTER FIVE" title="آسمونِ شفق" />

            <Aurora />

            <ChapterTransition
              chapter="CHAPTER SIX"
              title="نیمه‌ی دوست‌داشتنی سال"
            />

            <Seasons />

            <ChapterTransition
              chapter="CHAPTER SEVEN"
              title="رفیق‌های چهارپا"
            />

            <Pets />

            <ChapterTransition chapter="CHAPTER EIGHT" title="چیزهای خوشمزه" />

            <Food />

            <ChapterTransition chapter="LITTLE THINGS" title="چیزهای کوچیک" />

            <LittleThings />

            <ChapterTransition chapter="THE LAST PAGE" title="آخرین صفحه" />

            <TheLastPage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
