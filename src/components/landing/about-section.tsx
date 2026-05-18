"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./fade-in";
import { PortfolioImage } from "./portfolio-image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-cream px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-12 h-px max-w-6xl origin-left bg-pink-hot/30 sm:mb-16"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <FadeIn>
          <p className="section-eyebrow text-pink-hot">01 — About</p>
          <h2 className="section-title mt-3 text-ink">
            The feed
            <br />
            <span className="italic text-pink-deep">whisperer.</span>
          </h2>
        </FadeIn>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <FadeIn className="lg:col-span-5" delay={0.08}>
            <PortfolioImage
              src="/miraclea.JPG"
              alt="Miracle Bello — social media manager portrait"
              priority
            />
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.12}>
            <p className="section-body text-ink/70">
              I&apos;m{" "}
              <strong className="font-medium text-ink">Miracle Bello</strong> — a
              social media manager who believes every brand deserves a voice that
              feels human, bold, and impossible to ignore.
            </p>
            <p className="section-body mt-5 text-ink/55">
              From beauty brands to edtech to lifestyle channels, I build strategies
              that turn passive scrollers into loyal communities. Think less
              &ldquo;posting schedule&rdquo; and more of{" "}
              <em className="text-pink-deep font-medium not-italic">
                building culture.
              </em>
            </p>

            <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {["Strategy-first", "Trend-native", "Data-backed", "Brand-obsessed"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pink-hot/25 bg-pink-blush/50 px-3 py-1.5 text-[10px] font-medium tracking-wide text-ink/70 uppercase sm:px-4 sm:py-2 sm:text-xs"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
