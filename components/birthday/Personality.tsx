
"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Cat,
  Bike,
  MapPinned,
  Scale,
  Sparkles,
  ArrowLeft,
  Star,
} from "lucide-react";

import FloatingElements from "./FloatingElements";
import { MOM_NAME } from "./birthday.config";

interface PersonalityProps {
  onContinue: () => void;
}

const qualities = [
  {
    number: "01",
    label: "THE HEART",
    icon: Heart,
    title: "قلبی از جنس مهربانی",
    description:
      "بعضی آدم‌ها فقط با حضورشان دنیا را زیباتر می‌کنند. تو از همان آدم‌هایی هستی که مهربانی‌شان را می‌شود در کوچک‌ترین رفتارهایشان دید.",
    accent: "#e7a5a5",
  },
  {
    number: "02",
    label: "THE SOUL",
    icon: Cat,
    title: "قلبی که برای همه جا دارد",
    description:
      "از آن قلب‌هایی که حتی برای یک گربه کوچک و بی‌پناه هم جا دارد. مهربانی تو فقط برای آدم‌ها نیست؛ در نگاهت به تمام موجودات زندگی پیداست.",
    accent: "#d8bc83",
  },
  {
    number: "03",
    label: "THE FREEDOM",
    icon: Bike,
    title: "روحی که عاشق آزادی است",
    description:
      "عاشق موتورهای سنگین، صدای جاده و حس رهایی. انگار بخشی از وجودت همیشه دنبال یک مسیر تازه و یک ماجراجویی جدید است.",
    accent: "#9cbdd8",
  },
  {
    number: "04",
    label: "THE EXPLORER",
    icon: MapPinned,
    title: "دلی همیشه مشتاق سفر",
    description:
      "از جاده‌های پرپیچ‌وخم تا شهرهای دور و نزدیک ایران؛ برای تو هر سفر فرصتی است برای دیدن زیبایی‌هایی که هنوز کشف نشده‌اند.",
    accent: "#b9a7dc",
  },
];

export default function Personality({ onContinue }: PersonalityProps) {
  return (
    <main className="relative overflow-hidden bg-[#08182d] text-white">
      <FloatingElements />

      <div className="relative z-10">
        <section className="flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Sparkles
              className="mx-auto mb-8 text-[#d8bc83]"
              size={42}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-xs tracking-[0.4em] text-[#a9c9e8]"
          >
            BEYOND WORDS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-3xl font-bold leading-relaxed sm:text-5xl"
          >
            می‌دونی چی تو رو
            <span className="mt-3 block text-[#d8bc83]">
              خاص و متفاوت می‌کنه؟
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-xl text-base leading-9 text-blue-100/65 sm:text-lg"
          >
            بیا کمی بیشتر درباره چیزهایی حرف بزنیم که تو رو می‌سازن...
            چیزهایی که شاید خودت هم ندونی چقدر زیبان.
          </motion.p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 flex flex-col items-center gap-3 text-blue-100/50"
          >
            <span className="text-xs tracking-widest">
              SCROLL TO DISCOVER
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-[#d8bc83] to-transparent" />
          </motion.div>
        </section>

        {qualities.map((quality, index) => {
          const Icon = quality.icon;

          return (
            <section
              key={quality.number}
              className="relative flex min-h-[85vh] items-center justify-center px-6 py-28"
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="h-80 w-80 rounded-full blur-[120px]"
                  style={{
                    backgroundColor: `${quality.accent}12`,
                  }}
                />
              </div>

              <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
                    <div
                      className="absolute inset-0 rounded-full border"
                      style={{ borderColor: `${quality.accent}35` }}
                    />

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-5 rounded-full border border-dashed border-white/10"
                    />

                    <div
                      className="flex h-36 w-36 items-center justify-center rounded-full border shadow-2xl backdrop-blur-xl sm:h-44 sm:w-44"
                      style={{
                        backgroundColor: `${quality.accent}15`,
                        borderColor: `${quality.accent}45`,
                        boxShadow: `0 0 80px ${quality.accent}15`,
                      }}
                    >
                      <Icon
                        size={65}
                        strokeWidth={1.2}
                        style={{ color: quality.accent }}
                      />
                    </div>

                    <div
                      className="absolute right-7 top-9 h-3 w-3 rounded-full"
                      style={{ backgroundColor: quality.accent }}
                    />

                    <div
                      className="absolute bottom-10 left-8 h-2 w-2 rounded-full"
                      style={{ backgroundColor: quality.accent }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  className="text-center md:text-right"
                >
                  <div className="mb-7 flex items-center justify-center gap-4 md:justify-start">
                    <span
                      className="text-5xl font-light"
                      style={{ color: `${quality.accent}70` }}
                    >
                      {quality.number}
                    </span>

                    <div className="h-px w-14 bg-white/20" />

                    <span className="text-xs tracking-[0.3em] text-blue-100/50">
                      {quality.label}
                    </span>
                  </div>

                  <h2 className="mb-7 text-3xl font-bold leading-relaxed sm:text-4xl">
                    {quality.title}
                  </h2>

                  <p className="text-base leading-10 text-blue-100/65 sm:text-lg">
                    {quality.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-9 h-1 rounded-full"
                    style={{ backgroundColor: quality.accent }}
                  />
                </motion.div>
              </div>
            </section>
          );
        })}

        <section className="relative flex min-h-screen items-center justify-center px-5 py-28">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-96 w-96 rounded-full bg-[#d8bc83]/10 blur-[130px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <Scale
              className="mx-auto mb-9 text-[#d8bc83]"
              size={58}
              strokeWidth={1.2}
            />

            <p className="mb-5 text-xs tracking-[0.35em] text-[#a9c9e8]">
              A DREAM WORTH REMEMBERING
            </p>

            <h2 className="mb-9 text-3xl font-bold leading-relaxed sm:text-5xl">
              و اما رویایی که
              <span className="mt-3 block text-[#d8bc83]">
                همیشه در قلبت بوده...
              </span>
            </h2>

            <p className="text-base leading-10 text-blue-100/75 sm:text-lg">
              می‌دونم روزی رویای پوشیدن لباس وکالت رو داشتی. رویایی که نشون
              می‌ده همیشه چقدر به عدالت و قدرت ایستادن پای حق اهمیت می‌دادی.
              اما می‌خوام بدونی ارزش تو هیچ‌وقت به یک عنوان یا جایگاه محدود
              نبوده. شخصیت قوی و قلب مهربونت، چیزهایی هستن که تو رو واقعاً
              ارزشمند می‌کنن.
            </p>

            <div className="my-12 flex items-center justify-center gap-4 text-[#d8bc83]">
              <Star size={15} />
              <Star size={22} />
              <Star size={15} />
            </div>

            <p className="mb-12 text-xl font-bold leading-9 text-[#d8bc83]">
              امیدوارم هنوز هم کلی رویای قشنگ برای زندگی داشته باشی.
            </p>

            <p className="mb-10 text-blue-100/60">
              و این تازه شروع سورپرایزته...
            </p>

            <motion.button
              type="button"
              onClick={onContinue}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-xl bg-[#d8bc83] px-9 py-4 font-bold text-[#10233c] transition hover:bg-[#ead4a7]"
            >
              بریم سراغ جشن تولد
              <ArrowLeft size={20} />
            </motion.button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
