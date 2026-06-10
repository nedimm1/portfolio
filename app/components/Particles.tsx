"use client";

import { motion } from "framer-motion";

// Deterministic pseudo-random so server and client markup match (static export).
const DOTS = Array.from({ length: 18 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.7621;
  const c = Math.sin(i * 3.123) * 9999.123;
  const frac = (n: number) => n - Math.floor(n);
  return {
    left: frac(a) * 100,
    top: frac(b) * 100,
    size: 1.5 + frac(c) * 2.5,
    duration: 10 + frac(a * 2) * 12,
    delay: frac(b * 3) * 6,
    drift: 14 + frac(c * 2) * 22,
  };
});

/** Gentle floating accent motes — deliberately faint. */
export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {DOTS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -p.drift, 0], opacity: [0, 0.5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
