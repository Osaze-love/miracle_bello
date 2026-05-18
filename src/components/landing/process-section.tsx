"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./fade-in";

const steps = [
  {
    num: "01",
    title: "Discover",
    text: "Deep-dive into your brand, audience, competitors, and the whitespace only you can own.",
  },
  {
    num: "02",
    title: "Strategize",
    text: "Build the content pillars, voice guide, and channel mix that align with your goals.",
  },
  {
    num: "03",
    title: "Create",
    text: "Produce scroll-stopping content — reels, carousels, copy — crafted for each platform.",
  },
  {
    num: "04",
    title: "Amplify",
    text: "Launch, engage, measure, and iterate. Every post is a lesson; every month, a leap.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-20 bg-cream px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FadeIn>
          <p className="section-eyebrow text-pink-hot">04 — Process</p>
          <h2 className="section-title mt-3 max-w-lg text-ink">
            How we go from{" "}
            <span className="italic text-pink-deep">idea</span> to impact.
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-0 sm:mt-16">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <motion.div
                className="group grid gap-3 border-t border-ink/10 py-7 sm:grid-cols-[80px_1fr_2fr] sm:items-start sm:gap-8 sm:py-10"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span className="font-display text-2xl text-pink-hot/30 transition-colors group-hover:text-pink-hot sm:text-4xl">
                  {step.num}
                </span>
                <h3 className="font-display text-xl text-ink sm:text-3xl">
                  {step.title}
                </h3>
                <p className="section-body text-ink/55">
                  {step.text}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
