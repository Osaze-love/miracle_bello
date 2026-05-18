"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Camera,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "./fade-in";

const services = [
  {
    icon: Sparkles,
    title: "Content Strategy",
    description:
      "Editorial calendars, pillar content, and platform-native storytelling that keeps your brand consistently iconic.",
  },
  {
    icon: Camera,
    title: "Creative Direction",
    description:
      "Visual systems, reel concepts, and UGC briefs — every frame aligned with your aesthetic and audience.",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description:
      "Real conversations, fast replies, and a tone of voice that makes followers feel like insiders, not numbers.",
  },
  {
    icon: BarChart3,
    title: "Growth & Analytics",
    description:
      "Performance dashboards and insights that turn likes into leads and followers into fans.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-ink px-6 py-20 text-cream sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-eyebrow text-pink-soft">02 — Services</p>
          <h2 className="section-title mt-3 max-w-xl">
            What I bring to your{" "}
            <span className="text-pink-soft italic">timeline.</span>
          </h2>
        </FadeIn>

        <motion.div
          className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-5 transition-colors hover:border-pink-soft/40 hover:bg-white/8 sm:p-8"
            >
              <span className="absolute top-4 right-4 font-display text-3xl font-light text-white/5 sm:top-6 sm:right-6 sm:text-5xl">
                0{i + 1}
              </span>
              <service.icon
                className="text-pink-soft mb-4 sm:mb-6"
                size={24}
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg text-cream sm:text-2xl">{service.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-cream/55 sm:mt-3 sm:text-sm">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
