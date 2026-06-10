"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare, FaGooglePlay } from "react-icons/fa6";

import arabicFlashcarderIcon from "../_assets/arabic-flashcarder-icon.png";
import hifzerIcon from "../_assets/hifzer-icon.jpeg";
import { GITHUB, GOOGLE_PLAY } from "../config";
import FadeIn, { Stagger, Item } from "./FadeIn";

type Project = {
  image: StaticImageData;
  imageClass: string;
  tag: string;
  title: string;
  description: string;
  liveDemo?: { href: string; label: string; icon?: "play" };
  github?: string;
  privacy?: string;
};

const projects: Project[] = [
  {
    image: arabicFlashcarderIcon,
    imageClass:
      "object-cover object-[center_15%] transition-transform duration-700 ease-smooth group-hover:scale-110",
    tag: "iOS & Android",
    title: "Arabic Flashcarder",
    description:
      "A flashcard app for mastering Arabic vocabulary with spaced-repetition study, custom decks, and progress tracking — fully offline-first, so every bit of data stays on the device.",
    liveDemo: { href: GOOGLE_PLAY, label: "Live Demo", icon: "play" },
    github: GITHUB,
    privacy: "/privacy-policy/arabic-flashcarder",
  },
  {
    image: hifzerIcon,
    imageClass:
      "object-cover transition-transform duration-700 ease-smooth group-hover:scale-110",
    tag: "iOS & Android",
    title: "Hifzer — Quran Memorization",
    description:
      "A calm, focused Hifz companion for learning and retaining verses through structured review — track progress surah by surah, set goals, and revise with spaced repetition.",
    github: GITHUB,
    privacy: "/privacy-policy/hifzer",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-32 md:py-40">
      <FadeIn className="mb-20 max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Selected Work
        </span>
        <h2 className="mt-5 text-balance font-display text-[clamp(2.5rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-tightest text-ink">
          Things I&apos;ve designed &amp; shipped.
        </h2>
        <p className="mt-6 text-lg leading-[1.85] text-muted">
          A small, considered selection of apps — each built end to end, from the
          first idea to the App Store and Google Play.
        </p>
      </FadeIn>

      <Stagger className="grid gap-8 md:grid-cols-2" gap={0.16}>
        {projects.map((p, i) => (
          <Item key={p.title} className="h-full">
            <ProjectCard project={p} index={i} />
          </Item>
        ))}
      </Stagger>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="card group relative flex h-full flex-col overflow-hidden rounded-3xl backdrop-blur"
    >
      {/* screenshot */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-surface">
        {/* accent glow on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(125,168,123,0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-6 top-5 font-display text-sm font-bold text-muted/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative h-40 w-40 overflow-hidden rounded-3xl shadow-soft ring-1 ring-white/10">
          <Image
            src={p.image}
            alt={`${p.title} app`}
            fill
            className={p.imageClass}
            sizes="160px"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-9">
        <span className="chip inline-block w-fit rounded-full px-3 py-1 text-xs font-medium">
          {p.tag}
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-light">
          {p.title}
        </h3>
        <p className="mt-3 flex-1 text-[1.05rem] leading-[1.8] text-muted">
          {p.description}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {p.liveDemo && (
            <a
              href={p.liveDemo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {p.liveDemo.icon === "play" ? (
                <FaGooglePlay className="text-xs" />
              ) : (
                <FaArrowUpRightFromSquare className="text-xs" />
              )}
              {p.liveDemo.label}
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
          )}
          {p.privacy && (
            <Link
              href={p.privacy}
              className="btn-outline inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Privacy
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
