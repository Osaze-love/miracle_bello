"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/utils";

type PortfolioImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "portrait" | "tall";
  priority?: boolean;
};

export function PortfolioImage({
  src,
  alt,
  className,
  aspect = "portrait",
  priority = false,
}: PortfolioImageProps) {
  const hydrated = useHydrated();

  return (
    <motion.div
      initial={false}
      variants={{
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1 },
      }}
      whileInView={hydrated ? "visible" : undefined}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-ink shadow-xl shadow-pink-hot/10",
        aspect === "portrait" ? "aspect-[4/5]" : "aspect-[3/4] sm:aspect-[4/5]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-pink-hot/20 blur-2xl"
        aria-hidden
      />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
        className="object-cover object-top"
      />
    </motion.div>
  );
}
