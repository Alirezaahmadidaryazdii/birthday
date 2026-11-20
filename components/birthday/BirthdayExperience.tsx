"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./Intro";
import Personality from "./Personality";
import BirthdayCake from "./BirthdayCake";
import Celebration from "./Celebration";

type Stage = "intro" | "personality" | "cake" | "celebration";

export default function BirthdayExperience() {
  const [stage, setStage] = useState<Stage>("intro");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [stage]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08182d]">
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Intro onContinue={() => setStage("personality")} />
          </motion.div>
        )}

        {stage === "personality" && (
          <motion.div
            key="personality"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Personality onContinue={() => setStage("cake")} />
          </motion.div>
        )}

        {stage === "cake" && (
          <motion.div
            key="cake"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <BirthdayCake onComplete={() => setStage("celebration")} />
          </motion.div>
        )}

        {stage === "celebration" && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Celebration />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}