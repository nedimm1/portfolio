"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  once?: boolean;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its FadeIn children when scrolled into view. */
export function Stagger({
  children,
  className,
  gap = 0.12,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** A single staggered item — use inside <Stagger>. */
export function Item({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
