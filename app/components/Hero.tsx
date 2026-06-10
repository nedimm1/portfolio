"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Particles from "./Particles";
import profileImg from "../_assets/profile.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease },
  }),
};

export default function Hero() {
  // soft mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const b1x = useTransform(sx, (v) => v * 26);
  const b1y = useTransform(sy, (v) => v * 26);
  const b2x = useTransform(sx, (v) => v * -20);
  const b2y = useTransform(sy, (v) => v * -20);
  const pX = useTransform(sx, (v) => v * 16);
  const pY = useTransform(sy, (v) => v * 16);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="grain relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* ---- background ---- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ x: b1x, y: b1y }}
          className="absolute left-1/2 top-[18%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[150px] animate-blob"
        />
        <motion.div
          style={{ x: b2x, y: b2y }}
          className="absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent-light/[0.04] blur-[150px] animate-blob [animation-delay:8s]"
        />
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/[0.04] blur-[150px] animate-blob [animation-delay:14s]" />
      </div>
      <Particles />

      {/* ---- content ---- */}
      <div className="relative z-10 mx-auto grid w-full max-w-content items-center gap-10 pt-24 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8 lg:pt-0">
        {/* text */}
        <div className="text-center lg:text-left">
          <motion.p
            custom={0}
            variants={rise}
            initial="hidden"
            animate="show"
            className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
          >
            Software &amp; Mobile Developer
          </motion.p>

          <motion.h1
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-5 text-balance font-display text-[clamp(2.25rem,5.2vw,4.25rem)] font-extrabold leading-[1.04] tracking-tightest text-ink"
          >
            Crafting digital experiences with{" "}
            <span className="accent-text">simplicity</span> and purpose.
          </motion.h1>

          <motion.p
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mx-auto mt-7 max-w-xl text-lg leading-[1.85] text-muted lg:mx-0"
          >
            I&apos;m Nedim Muminovic — a software and mobile developer who
            designs and builds refined, privacy-minded products for iOS, Android,
            and the web. I own the whole journey, from the first idea to a
            polished release, sweating the details that make software feel
            effortless.
          </motion.p>

          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="btn-accent inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
            >
              View Projects <FaArrowRight className="text-xs" />
            </a>
            <a
              href="#contact"
              className="btn-outline inline-flex items-center rounded-full px-8 py-4 text-sm font-semibold"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* picture */}
        <motion.div style={{ x: pX, y: pY }} className="flex justify-center lg:justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="relative animate-float"
          >
            <div className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative aspect-square w-64 overflow-hidden rounded-full ring-1 ring-white/15 shadow-soft sm:w-72 lg:w-80">
              <Image
                src={profileImg}
                alt="Nedim Muminovic"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 288px"
                className="object-cover translate-x-[-7%] translate-y-[28%] scale-[1.6]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-muted/70" />
        </span>
      </a>
    </section>
  );
}
