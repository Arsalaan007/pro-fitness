"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { images } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const items = images.gallery;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => (i! - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, items.length]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Gallery</p>
          <h2 className="h2">
            Inside the <span className="accent">floor</span>
          </h2>
        </Reveal>

        <div className="gallery">
          {items.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.08} className={`gallery__item g${i + 1}`}>
              <button onClick={() => setActive(i)} aria-label={`Open photo: ${img.alt}`}>
                <Photo src={img.src} alt={img.alt} sizes="(max-width: 900px) 50vw, 33vw" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              key={active}
              className="lightbox__frame"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <Photo src={items[active].src} alt={items[active].alt} sizes="90vw" />
            </motion.div>
            <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
