"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { EMAIL, GITHUB } from "../config";
import FadeIn, { Stagger, Item } from "./FadeIn";

const cards = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "@nedimm1",
    href: GITHUB,
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* secondary background */}
      <div className="absolute inset-0 -z-10 bg-surface" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-content px-6 py-32 text-center md:py-40">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Contact
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.04] tracking-tightest text-ink">
            Let&apos;s create something{" "}
            <span className="accent-text">exceptional.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-[1.85] text-muted">
            Have an idea worth building, or just want to talk? I&apos;m always
            happy to hear about new projects and good problems to solve.
          </p>
        </FadeIn>

        <Stagger
          className="mx-auto mt-16 grid max-w-2xl gap-5 sm:grid-cols-2"
          gap={0.12}
        >
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Item key={c.label}>
                <motion.a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-card px-6 py-10 transition-shadow duration-300 hover:border-accent/30 hover:shadow-glow"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-ink">{c.value}</span>
                </motion.a>
              </Item>
            );
          })}
        </Stagger>

        <FadeIn delay={0.2} className="mt-16">
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="btn-accent inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold"
          >
            Get In Touch <FaArrowRight className="text-sm" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
