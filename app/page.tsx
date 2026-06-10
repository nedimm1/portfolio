import { FaGithub, FaEnvelope } from "react-icons/fa6";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { EMAIL, GITHUB } from "./config";

const socials = [
  { href: GITHUB, label: "GitHub", icon: FaGithub },
  { href: `mailto:${EMAIL}`, label: "Email", icon: FaEnvelope },
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Projects />
        <Contact />

        <footer className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
            <p className="font-semibold text-ink">
              Nedim<span className="accent-text">.dev</span>
            </p>
            <p>
              © {new Date().getFullYear()} Nedim Muminovic. Built with Next.js,
              Tailwind &amp; Framer Motion.
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition hover:text-ink"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
