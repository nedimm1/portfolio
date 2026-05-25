import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-bold gradient-text">
          Nedim.dev
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-12 pb-24 md:flex-row md:gap-16 md:pt-20"
      >
        <div className="relative shrink-0 animate-float">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 blur-md opacity-70" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl md:h-64 md:w-64">
            <Image
              src="/profile.jpeg"
              alt="Nedim Muminovic"
              fill
              priority
              className="object-cover translate-x-[-7%] translate-y-[28%] scale-[1.6]"
              sizes="(min-width: 768px) 256px, 224px"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan-300 shadow-sm ring-1 ring-cyan-500/30">
            👋 Available for new projects
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Hi, I'm <span className="gradient-text">Nedim Muminovic</span>
          </h1>
          <p className="mt-2 text-xl font-semibold text-slate-300 md:text-2xl">
            Mobile App Developer
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            I build beautiful, user-friendly mobile apps for iOS and Android.
            Passionate about clean code, smooth animations, and crafting
            experiences that people actually enjoy using.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="gradient-btn rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white/5 px-7 py-3 text-sm font-semibold text-slate-200 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400">
            Apps I've built and shipped to real users.
          </p>
        </div>

        <article className="glass group relative overflow-hidden rounded-3xl p-8 shadow-xl transition hover:shadow-2xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr,1.5fr] md:items-center">
            <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 shadow-xl md:h-64 md:w-64">
              <span className="text-7xl md:text-8xl">🇸🇦</span>
              <div className="absolute -bottom-3 -right-3 rounded-2xl bg-slate-900 px-4 py-2 text-xs font-bold text-cyan-300 shadow-lg ring-1 ring-white/10">
                Live on stores
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-500/20">
                Mobile App · iOS & Android
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                Arabic Flashcarder
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed">
                A flashcard learning app designed to help users master Arabic
                vocabulary. Features spaced-repetition study sessions, custom
                decks, progress tracking, and a clean offline-first experience
                — all your data stays on your device.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                <li className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Firebase Analytics
                </li>
                <li className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Offline-first
                </li>
                <li className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Spaced repetition
                </li>
                <li className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  Progress tracking
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/privacy-policy/arabic-flashcarder"
                  className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  Privacy policy →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="glass rounded-3xl p-10 text-center shadow-xl md:p-16">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Let's <span className="gradient-text">build something</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            Have an app idea or a project in mind? I'd love to hear about it.
          </p>
          <a
            href="mailto:nedimmuminovic61@gmail.com"
            className="gradient-btn mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
          >
            nedimmuminovic61@gmail.com
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nedim Muminovic · Built with Next.js
      </footer>
    </main>
  );
}
