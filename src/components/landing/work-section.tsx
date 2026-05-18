"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./fade-in";
import { experiences, workStats } from "@/lib/site-data";

const platforms = [
  "Instagram",
  "YouTube",
  "LinkedIn",
  "TikTok",
  "Community",
  "Paid Ads",
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-20 overflow-hidden bg-pink-blush px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FadeIn>
          <p className="section-eyebrow text-pink-hot">03 — Experience</p>
          <h2 className="section-title mt-3 text-ink">
            Brands I&apos;ve{" "}
            <span className="italic text-pink-deep">grown.</span>
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {workStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm sm:p-6 lg:p-8"
              >
                <p className="font-display text-2xl text-pink-hot sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[9px] leading-snug tracking-wide text-ink/50 uppercase sm:mt-2 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <motion.div
          className="mt-10 overflow-hidden border-y border-pink-hot/15 py-4 sm:mt-14 sm:py-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-8 whitespace-nowrap sm:gap-12"
          >
            {[...platforms, ...platforms].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="font-display text-sm tracking-wide text-ink/30 uppercase sm:text-lg lg:text-xl"
              >
                {p}
                <span className="mx-4 text-pink-hot sm:mx-6">✦</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          {experiences.map((job, i) => (
            <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.08}>
              <article className="rounded-2xl border border-pink-hot/10 bg-white/60 p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-pink-hot/10 pb-4">
                  <div>
                    <span className="text-[9px] font-medium tracking-widest text-pink-hot uppercase sm:text-[10px]">
                      {job.tag} · {job.period}
                    </span>
                    <h3 className="font-display mt-1 text-lg text-ink sm:text-xl lg:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-ink/70 sm:text-base">
                      {job.company}
                    </p>
                  </div>
                  <p className="max-w-xs text-right text-xs text-pink-deep italic sm:text-sm">
                    {job.highlight}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="flex gap-2.5 text-xs leading-relaxed text-ink/60 sm:text-sm"
                    >
                      <span className="mt-1.5 shrink-0 text-pink-hot">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
