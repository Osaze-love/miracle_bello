"use client";

import { motion } from "framer-motion";
import { AtSign, Globe, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to";
import { siteContact } from "@/lib/site-data";

const footerLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Experience", id: "work" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { icon: AtSign, href: siteContact.instagram, label: "Instagram" },
  { icon: Globe, href: siteContact.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteContact.email}`, label: "Email" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-12 lg:gap-12"
        >
          <motion.div
            className="lg:col-span-5"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-3xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Miracle
              <br />
              <span className="text-pink-soft italic">Bello.</span>
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-cream/45 sm:text-sm">
              Social media manager crafting bold digital narratives for brands
              that dare to stand out.
            </p>
            <p className="mt-3 text-xs text-cream/40">
              {siteContact.phone[0]} · {siteContact.phone[1]}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-3 text-[9px] font-medium tracking-[0.3em] text-pink-soft uppercase sm:mb-4 sm:text-[10px]">
                Navigate
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="text-xs text-cream/55 transition-colors hover:text-pink-soft sm:text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="mb-3 text-[9px] font-medium tracking-[0.3em] text-pink-soft uppercase sm:mb-4 sm:text-[10px]">
                Based in
              </p>
              <p className="text-xs text-cream/55 sm:text-sm">
                Lagos, Nigeria
                <br />
                Available worldwide
              </p>
            </motion.div>

            <div>
              <p className="mb-3 text-[9px] font-medium tracking-[0.3em] text-pink-soft uppercase sm:mb-4 sm:text-[10px]">
                Connect
              </p>
              <motion.div
                className="flex gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,107,157,0.2)",
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-colors hover:text-pink-soft sm:h-10 sm:w-10"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-10 h-px origin-left bg-white/10 sm:my-12"
        />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-cream/35 sm:text-xs">
            © {year} Miracle Bello. All rights reserved.
          </p>
          <p className="text-[10px] tracking-widest text-cream/25 uppercase sm:text-xs">
            Designed with intention ✦ Built to convert
          </p>
        </div>
      </div>
    </footer>
  );
}
