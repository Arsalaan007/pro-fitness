"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Lets an image drift slightly slower than the page as you scroll. The frame stays put; only the picture moves inside it. */
export default function Parallax({ children, amount = 8 }: { children: React.ReactNode; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className="parallax">
      <motion.div className="parallax__inner" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
