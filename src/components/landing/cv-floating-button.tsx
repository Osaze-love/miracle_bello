"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { cvUrl } from "@/lib/site-data";

const RING_TEXT = "MIRACLE BELLO ✦ MIRACLE BELLO ✦ MIRACLE BELLO ✦ ";

const POSITION_CLASSES = {
  /** Inside hero (pink) — scrolls away with that section */
  hero: "absolute left-4 top-[calc(4rem+1rem)] z-20 sm:left-6 lg:top-[calc(4.5rem+1rem)]",
  /** Fixed site-wide */
  "bottom-right": "fixed right-4 bottom-4 z-60 sm:right-6 sm:bottom-6",
} as const;

export type CvFloatingButtonPosition = keyof typeof POSITION_CLASSES;

function CvFloatingButtonInstance({
  position,
}: {
  position: CvFloatingButtonPosition;
}) {
  const ringPathId = `cv-ring-path-${position}`;

  return (
    <motion.div
      className={`pointer-events-none ${POSITION_CLASSES[position]}`}
      aria-hidden={false}
    >
      <motion.div className="pointer-events-auto relative h-[7.5rem] w-[7.5rem] sm:h-[8.5rem] sm:w-[8.5rem]">
        <motion.div
          className="absolute inset-0 motion-reduce:animate-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full"
            role="img"
            aria-label="Miracle Bello"
          >
            <defs>
              <path
                id={ringPathId}
                d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
              />
            </defs>
            <text
              fill="currentColor"
              className="fill-ink text-[9.5px] font-medium tracking-[0.28em] uppercase sm:text-[10px]"
            >
              <textPath href={`#${ringPathId}`} startOffset="0%">
                {RING_TEXT}
              </textPath>
            </text>
          </svg>
        </motion.div>

        <motion.a
          href={cvUrl}
          download
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="absolute top-1/2 left-1/2 z-10 flex h-[3.25rem] w-[3.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full bg-ink text-pink-hero shadow-lg shadow-pink-hot/25 ring-2 ring-pink-hot/40 transition-colors hover:bg-pink-deep sm:h-14 sm:w-14"
          aria-label="Download Miracle Bello CV"
        >
          <FileDown size={16} strokeWidth={2} />
          <span className="text-[10px] font-bold tracking-[0.2em]">CV</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export function CvFloatingButton({
  position = "bottom-right",
}: {
  position?: CvFloatingButtonPosition;
}) {
  return <CvFloatingButtonInstance position={position} />;
}
