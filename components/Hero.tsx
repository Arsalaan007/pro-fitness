"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, site, tel } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = ["Stronger", "every", "single rep."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div
        className="hero__glow"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      />
      <div className="hero__grid" aria-hidden="true" />

      <motion.div className="hero__content container" style={{ opacity: fade }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          <span className="dot" /> {site.area}
        </motion.p>

        <h1 className="hero__title">
          {lines.map((line, i) => (
            <span className="mask" key={line}>
              <motion.span
                className={i === 2 ? "accent" : ""}
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, ease, delay: 0.5 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero__bottom"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.05 }}
        >
          <p className="lead">
            A fully air-conditioned gym on Yari Road, with serious equipment and coaches who care
            about your form. Open 6 AM to midnight, Monday to Saturday, and 9 AM to 3 PM on Sundays.
          </p>
          <div className="hero__ctas">
            <a className="btn" href={tel}>
              Call to book <Arrow />
            </a>
            <a className="btn btn--ghost" href="#programs">
              Explore programs
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span />
      </motion.a>
    </section>
  );
}

export function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
