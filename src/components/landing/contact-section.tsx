"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteContact } from "@/lib/site-data";
import { FadeIn } from "./fade-in";
import { PortfolioImage } from "./portfolio-image";

const linkButtonClass = cn(
  buttonVariants({ variant: "default", size: "lg" }),
  "h-11 gap-2 rounded-full bg-ink px-5 text-[11px] font-semibold tracking-wider text-pink-hero uppercase hover:bg-ink/90 sm:h-12 sm:px-8 sm:text-sm"
);

const outlineLinkClass = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-11 gap-2 rounded-full border-ink/20 bg-transparent px-5 text-[11px] font-semibold tracking-wider text-ink uppercase hover:bg-ink/5 sm:h-12 sm:px-8 sm:text-sm"
);

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-pink-hero px-6 py-20 sm:py-28 lg:px-10 lg:py-40"
    >
      <motion.div
        aria-hidden
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full border border-ink/10"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-ink/8"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="text-center lg:text-left">
          <p className="section-eyebrow text-ink/50">05 — Contact</p>
          <h2 className="section-title mt-3 text-ink">
            Ready to make your brand{" "}
            <span className="italic">unforgettable?</span>
          </h2>
          <p className="section-body mt-5 max-w-lg text-ink/55 lg:mx-0 mx-auto">
            Whether you&apos;re launching fresh or scaling up — let&apos;s build a
            social presence that turns heads and drives results.
          </p>

          <div className="mt-4 flex flex-col items-center gap-1 text-sm text-ink/60 lg:items-start">
            <a
              href={`tel:${siteContact.phone[0]}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Phone size={14} />
              {siteContact.phone[0]} / {siteContact.phone[1]}
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <a href={`mailto:${siteContact.email}`} className={linkButtonClass}>
              <Mail size={16} />
              Email me
            </a>
            <a
              href={siteContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineLinkClass}
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
            <a
              href={siteContact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineLinkClass}
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mx-auto w-full max-w-md lg:max-w-none">
          <PortfolioImage
            src="/miracleb.jpg"
            alt="Miracle Bello — professional portrait"
            aspect="tall"
            className="ring-2 ring-ink/10"
          />
        </FadeIn>
      </div>
    </section>
  );
}
