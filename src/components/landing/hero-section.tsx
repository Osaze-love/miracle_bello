"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-pink-hero"
    >
      <Parallax speed={-20} className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full border border-ink/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-24 h-[520px] w-[520px] rounded-full border border-ink/8"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-ink/20"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-1/3 bottom-1/3 h-2 w-2 rounded-full bg-ink/15"
        />
      </Parallax>

      <div className="relative z-10 flex w-full max-w-[min(96vw,1200px)] flex-col items-center px-4 text-center">
        <Parallax speed={-6}>
          <p className="section-eyebrow hero-fade-up mb-4 text-ink/60 sm:mb-6">
            Social Media Manager
          </p>
        </Parallax>

        <Parallax speed={-3}>
          <div className="hero-display w-full leading-[0.82]">
            <h1 className="flex flex-wrap items-end justify-center gap-0">
              <span className="hero-letter -mr-[0.04em]">M</span>
              <span className="hero-letter hero-letter--thin -mr-[0.06em]">i</span>
              <span className="hero-letter -mr-[0.05em]">R</span>
              <span className="hero-letter hero-o-outline -mr-[0.08em]">A</span>
              <span className="hero-letter hero-o-outline -mr-[0.08em]">C</span>
              <span className="hero-letter hero-o-outline -mr-[0.06em]">L</span>
              <span className="hero-letter hero-flourish -mr-[0.1em]">E</span>
            </h1>
          </div>
        </Parallax>

        <Parallax speed={8}>
          <div className="hero-display -mt-2 w-full leading-[0.82] sm:-mt-4">
            <h1 className="flex flex-wrap items-end justify-center gap-0">
              <span className="hero-letter -mr-[0.05em]">B</span>
              <span className="hero-letter hero-o-outline -mr-[0.1em]">E</span>
              <span className="hero-letter hero-o-outline -mr-[0.1em]">L</span>
              <span className="hero-letter hero-o-outline -mr-[0.1em]">L</span>
              <span className="hero-letter hero-o-solid">O</span>
            </h1>
          </div>
        </Parallax>

        <Parallax speed={14}>
          <p className="section-body hero-fade-in mt-6 max-w-md text-ink/55 sm:mt-10">
            Crafting scroll-stopping stories &amp; communities that convert.
          </p>
        </Parallax>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="hero-scroll-cue absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/50 transition-colors hover:text-ink"
        aria-label="Scroll to about"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase sm:text-[10px]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
    </section>
  );
}
