"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const VISIBLE = 4; // cards drawn in the stack
const fan = [0, -4, 3.5, -2.5]; // resting tilt of each layer (degrees)

type Motion = { dir: 1 | -1; flyKey: number | null; enterKey: number | null };

export default function TestimonialDeck() {
  const total = testimonials.length;
  const [order, setOrder] = useState(() => testimonials.map((_, i) => i));
  const [m, setM] = useState<Motion>({ dir: 1, flyKey: null, enterKey: null });
  const dragged = useRef(false);
  const deckRef = useRef<HTMLDivElement>(null);

  // Send the top card away and bring the next one up
  const next = useCallback((dir: 1 | -1 = 1) => {
    setOrder((o) => {
      setM({ dir, flyKey: o[0], enterKey: null });
      return [...o.slice(1), o[0]];
    });
  }, []);

  // Bring the last card back on top
  const prev = useCallback(() => {
    setOrder((o) => {
      const last = o[o.length - 1];
      setM({ dir: -1, flyKey: null, enterKey: last });
      return [last, ...o.slice(0, -1)];
    });
  }, []);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next(1);
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 500;
    if (swipe) next(info.offset.x > 0 ? 1 : -1);
    setTimeout(() => (dragged.current = false), 0);
  };

  const position = (total - order[0]) % total; // how many cards have been flicked
  const current = String(((order[0] ?? 0) % total) + 1).padStart(2, "0");

  return (
    <div className="deck-wrap">
      <Reveal className="deck-intro">
        <p className="eyebrow">Members</p>
        <h2 className="h2">
          <span className="accent">Testimonials</span>
        </h2>
        <p className="body deck-intro__copy">
          What the people who train here every day have to say.
        </p>
        <div className="deck-controls">
          <button className="deck-btn" onClick={prev} aria-label="Previous testimonial">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3m0 0 4-4M3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="deck-count" aria-live="polite">
            <strong>{current}</strong> / {String(total).padStart(2, "0")}
          </span>
          <button className="deck-btn deck-btn--primary" onClick={() => next(1)} aria-label="Next testimonial">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p className="deck-hint">Drag, swipe or tap the card to flick through</p>
      </Reveal>

      <Reveal delay={0.12}>
        <div
          className="deck"
          ref={deckRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Member testimonials. Use the left and right arrow keys to flick through."
          data-pos={position}
        >
          <AnimatePresence initial={false} custom={m}>
            {order
              .slice(0, VISIBLE)
              .map((idx, depth) => {
                const t = testimonials[idx];
                const top = depth === 0;
                return (
                  <motion.figure
                    key={idx}
                    className={`deck__card ${top ? "is-top" : ""}`}
                    style={{ zIndex: VISIBLE - depth }}
                    custom={m}
                    variants={{
                      enter: (c: Motion) =>
                        c.enterKey === idx
                          ? { x: -420, y: 0, rotate: -18, opacity: 0, scale: 1 }
                          : { x: 0, y: depth * 16 + 16, rotate: fan[depth] ?? 0, opacity: 0, scale: 1 - depth * 0.05 },
                      rest: {
                        x: 0,
                        y: depth * 16,
                        rotate: fan[depth] ?? 0,
                        scale: 1 - depth * 0.05,
                        opacity: depth < VISIBLE - 1 ? 1 : 0.6,
                        transition: { duration: 0.6, ease },
                      },
                      exit: (c: Motion) =>
                        c.flyKey === idx
                          ? { x: c.dir * 520, y: 40, rotate: c.dir * 22, opacity: 0, transition: { duration: 0.55, ease } }
                          : { opacity: 0, y: VISIBLE * 16, scale: 0.8, transition: { duration: 0.35 } },
                    }}
                    initial="enter"
                    animate="rest"
                    exit="exit"
                    drag={top ? "x" : false}
                    dragSnapToOrigin
                    dragElastic={0.9}
                    onDragStart={() => (dragged.current = true)}
                    onDragEnd={top ? onDragEnd : undefined}
                    onClick={() => top && !dragged.current && next(1)}
                    whileDrag={{ scale: 1.03, cursor: "grabbing" }}
                    aria-hidden={top ? undefined : true}
                  >
                    <span className="quote__mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <blockquote>{t.quote}</blockquote>
                    <figcaption className="deck__name">{t.name}</figcaption>
                  </motion.figure>
                );
              })
              .reverse()}
          </AnimatePresence>
        </div>
      </Reveal>
    </div>
  );
}
