"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll-to";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Experience", id: "work" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 48));

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={false}
        className={cn(
          "nav-enter",
          "fixed top-0 right-0 left-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-pink-200/60 bg-white/85 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-18 lg:px-10">
          <button
            type="button"
            onClick={() => handleNav("home")}
            className={cn(
              "font-display text-sm font-semibold tracking-[0.2em] uppercase transition-colors",
              scrolled ? "text-ink" : "text-ink"
            )}
          >
            M.B
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    "text-xs font-medium tracking-widest uppercase transition-colors hover:text-pink-hot",
                    scrolled ? "text-ink/70" : "text-ink/80"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => handleNav("contact")}
            className={cn(
              "hidden rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all md:inline-flex",
              scrolled
                ? "bg-pink-hot text-white hover:bg-pink-deep"
                : "bg-ink text-pink-hero hover:bg-ink/90"
            )}
          >
            Let&apos;s talk
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="text-ink md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" as const },
          closed: { opacity: 0, pointerEvents: "none" as const },
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-pink-hero md:hidden"
      >
        {links.map((link, i) => (
          <motion.button
            key={link.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: open ? i * 0.06 : 0 }}
            onClick={() => handleNav(link.id)}
            className="font-display text-3xl font-medium tracking-wide text-ink"
          >
            {link.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}
