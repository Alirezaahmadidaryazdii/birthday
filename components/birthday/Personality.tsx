
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
  Moon,
  CloudRain,
  Flower2,
  Music2,
  CarFront,
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
      "بعضی آدم‌ها فقط با حضورشان دنیا را زیباتر می‌کنند. تو از همان آدم‌هایی هستی که مهربانی‌شان را می‌شود در کوچک‌ترین رفتارهایشان دید. همیشه برای آدم‌ها به یک اندازه ارزش قائلی و همین، یکی از قشنگ‌ترین ویژگی‌های توست.",
    accent: "#e7a5a5",
  },
  {
    number: "02",
    label: "THE SOUL",
    icon: Cat,
    title: "قلبی که برای همه جا دارد",
    description:
      "از آن قلب‌هایی که حتی برای یک گربه کوچک و بی‌پناه هم جا دارد. مهربانی تو فقط برای آدم‌ها نیست؛ در نگاهت به تمام موجودات زندگی پیداست. انگار دنیا با کمی مهربانی تو جای بهتری می‌شود.",
    accent: "#d8bc83",
  },
  {
    number: "03",
    label: "THE FREEDOM",
    icon: Bike,
    title: "روحی که عاشق آزادی است",
    description:
      "عاشق موتورهای سنگین، صدای جاده و حس رهایی. Kawasaki Ninja H2R موتور رؤیایی توست و BMW هم همیشه بین انتخاب‌های دوست‌داشتنی‌ات جا دارد. انگار بخشی از وجودت همیشه دنبال یک مسیر تازه و یک ماجراجویی جدید است.",
    accent: "#9cbdd8",
  },
  {
    number: "04",
    label: "THE EXPLORER",
    icon: MapPinned,
    title: "دلی همیشه مشتاق سفر",
    description:
      "از خاطرات شیرین شمال در روزهای کودکی تا رؤیای سفر به آمریکا؛ برای تو هنوز کلی جاده و شهر و تجربه تازه وجود دارد. امیدوارم روزی تمام جاهایی را که در ذهنت تصور کرده‌ای، از نزدیک ببینی.",
    accent: "#b9a7dc",
  },
  {
    number: "05",
    label: "THE UNIVERSE",
    icon: Moon,
    title: "دختری از جنس ماه و ستاره‌ها",
    description:
      "شب را بیشتر از روز دوست داری، عاشق ماهی و دلت می‌خواهد کهکشان‌ها را از نزدیک ببینی. شاید آرامش واقعی برای تو همان لحظه‌ای باشد که زیر آسمان شب به ستاره‌ها خیره می‌شوی.",
    accent: "#a9c9e8",
  },
  {
    number: "06",
    label: "THE AUTUMN",
    icon: CloudRain,
    title: "عاشق پاییز و صدای باران",
    description:
      "پاییز، ماه مهر و باران شدید؛ انگار تمام چیزهایی که دوست داری یک حال‌وهوای خاص و آرام دارند. رز آبی و لیلیوم هم گل‌های محبوب تو هستند؛ درست به زیبایی یک روز بارانی پاییزی.",
    accent: "#c5a5df",
  },
];

const OrbitTrack = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#9cbdd8]/10 to-transparent" />

      <div className="absolute left-1/2 top-0 h-full w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#315b85]/[0.035] to-transparent blur-2xl" />

      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
          className="absolute left-1/2"
          style={{
            top: 0,
            marginLeft: item === 0 ? -7 : item === 1 ? 9 : -3,
          }}
          animate={{
            top: ["-5%", "105%"],
            x: item === 1 ? [0, 15, -10, 0] : [0, -12, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            top: {
              duration: 28 + item * 9,
              repeat: Infinity,
              ease: "linear",
              delay: item * 8,
            },
            x: {
              duration: 7 + item * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 22 + item * 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: item === 1 ? 42 : 30,
              height: item === 1 ? 42 : 30,
              background:
                item === 0
                  ? "radial-gradient(circle at 35% 30%, #d8bc83, #806a8d 55%, #263e63)"
                  : item === 1
                    ? "radial-gradient(circle at 35% 30%, #b5d8ed, #476b9b 55%, #172b4c)"
                    : "radial-gradient(circle at 35% 30%, #e7a5a5, #79547e 55%, #263e63)",
              boxShadow: "0 0 25px rgba(156,189,216,0.25)",
            }}
          >
            <div className="absolute -inset-3 rounded-full border border-[#9cbdd8]/20" />
            <div className="absolute -inset-5 rounded-full border border-dashed border-[#d8bc83]/15" />

            <div className="h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_12px_4px_rgba(255,255,255,0.5)]" />
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-1/2 top-[18%] -translate-x-1/2"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#d8bc83]/15 bg-[#315b85]/10 backdrop-blur-sm">
          <div className="absolute inset-2 rounded-full border border-dashed border-[#9cbdd8]/20" />
          <Sparkles className="text-[#d8bc83]/50" size={27} />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[68%] -translate-x-1/2"
        animate={{
          y: [0, -25, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#9cbdd8]/15 bg-[#315b85]/10">
          <div className="absolute -inset-3 rounded-full border border-dashed border-[#d8bc83]/15" />
          <Star className="text-[#9cbdd8]/50" size={20} />
        </div>
      </motion.div>
      <motion.div
  className="absolute left-1/2 top-0"
  animate={{
    y: ["-5vh", "105vh"],
    x: [0, 12, -8, 0],
  }}
  transition={{
    y: {
      duration: 38,
      repeat: Infinity,
      ease: "linear",
      delay: 5,
    },
    x: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#d8bc83]/30 bg-[#d8bc83]/10 shadow-[0_0_35px_rgba(216,188,131,0.2)]">
    <Moon
      size={42}
      fill="#f3dda8"
      color="#f3dda8"
      strokeWidth={1}
      className="rotate-[-25deg]"
    />

    <div className="absolute -right-2 top-1 h-2 w-2 rounded-full bg-white shadow-[0_0_12px_white]" />
    <div className="absolute -left-3 bottom-1 h-1.5 w-1.5 rounded-full bg-[#d8bc83] shadow-[0_0_10px_#d8bc83]" />
  </div>
</motion.div>
    </div>
  );
};

export default function Personality({ onContinue }: PersonalityProps) {
  return (
    <main className="relative overflow-hidden bg-[#08182d] text-white">
      <FloatingElements />
      <OrbitTrack />

      <div className="relative z-10">
        <section className="relative flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#d8bc83]/20 bg-[#315b85]/10 shadow-[0_0_70px_rgba(156,189,216,0.12)]">
              <Moon
                className="text-[#d8bc83]"
                size={43}
                strokeWidth={1.2}
              />
              <Sparkles
                className="absolute -right-3 top-1 text-[#9cbdd8]"
                size={20}
              />
            </div>
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

        <section className="relative flex min-h-[85vh] items-center justify-center px-6 py-28">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-96 w-96 rounded-full bg-[#d8bc83]/10 blur-[130px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20"
          >
            <div className="flex justify-center">
              <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
                <div className="absolute inset-0 rounded-full border border-[#d8bc83]/30" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-dashed border-white/10"
                />

                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#d8bc83]/40 bg-[#d8bc83]/10 shadow-[0_0_80px_rgba(216,188,131,0.12)] sm:h-44 sm:w-44">
                  <Scale
                    className="text-[#d8bc83]"
                    size={65}
                    strokeWidth={1.2}
                  />
                </div>

                <Star
                  className="absolute right-7 top-9 text-[#d8bc83]"
                  size={15}
                />
                <Star
                  className="absolute bottom-10 left-8 text-[#d8bc83]"
                  size={11}
                />
              </div>
            </div>

            <div className="text-center md:text-right">
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
                می‌دونم روزی رویای پوشیدن لباس وکالت رو داشتی. رویایی که
                نشون می‌ده همیشه چقدر به عدالت و قدرت ایستادن پای حق اهمیت
                می‌دادی. اما می‌خوام بدونی ارزش تو هیچ‌وقت به یک عنوان یا
                جایگاه محدود نبوده. شخصیت قوی و قلب مهربونت، چیزهایی هستن
                که تو رو واقعاً ارزشمند می‌کنن.
              </p>

              <div className="my-12 flex items-center justify-center gap-4 text-[#d8bc83] md:justify-start">
                <Star size={15} />
                <Star size={22} />
                <Star size={15} />
              </div>

              <p className="mb-12 text-xl font-bold leading-9 text-[#d8bc83]">
                امیدوارم هنوز هم کلی رویای قشنگ برای زندگی داشته باشی.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="relative flex min-h-[70vh] items-center justify-center px-5 py-28">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8bc83]/30 bg-[#d8bc83]/10">
                <Flower2
                  size={38}
                  className="text-[#d8bc83]"
                  strokeWidth={1.2}
                />
              </div>
            </div>

            <p className="mb-5 text-xs tracking-[0.35em] text-[#a9c9e8]">
              MADE WITH LOVE
            </p>

            <h2 className="mb-8 text-3xl font-bold leading-relaxed sm:text-5xl">
              این تازه گوشه‌ای از دنیای تو بود،
              <span className="mt-3 block text-[#d8bc83]">
                مامان {MOM_NAME} عزیزم...
              </span>
            </h2>

            <p className="mb-10 text-base leading-10 text-blue-100/70 sm:text-lg">
              امیدوارم همیشه فرصت زندگی کردن تمام چیزهایی رو داشته باشی
              که خوشحالت می‌کنن؛ از شب‌های پرستاره و جاده‌های طولانی
              گرفته تا آرزوهایی که هنوز منتظرن به حقیقت تبدیل بشن.
            </p>

            <p className="mb-12 text-xl font-bold leading-9 text-[#d8bc83]">
              تو لایق قشنگ‌ترین اتفاق‌های دنیایی ❤️
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
