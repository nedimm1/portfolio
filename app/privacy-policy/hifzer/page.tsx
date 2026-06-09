import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hifzer — Privacy Policy",
  description: "Privacy policy for the Hifzer Quran memorization mobile app.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 -left-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-bold gradient-text">
          Nedim.dev
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition"
        >
          ← Back to portfolio
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="glass rounded-3xl p-8 shadow-xl md:p-12">
          <header className="mb-8 border-b border-white/10 pb-6">
            <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-500/20">
              Hifzer
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: June 9, 2026
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
            <section>
              <p className="leading-relaxed">
                Hifzer (&quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) is
                a Quran memorization (hifz) app that helps you track recitation
                mistakes, save bookmarks, and listen to recitation audio. This
                policy explains what information the app handles and how.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">Summary</h2>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  We do <strong>not</strong> require you to create an account
                  or provide your name, email, or any personal contact
                  information.
                </li>
                <li>
                  Your study data (marked mistakes, notes, bookmarks, reading
                  position, and settings) is stored{" "}
                  <strong>locally on your device</strong>.
                </li>
                <li>
                  We use <strong>Firebase Analytics</strong> and{" "}
                  <strong>Firebase Crashlytics</strong> (provided by Google) to
                  understand how the app is used and to diagnose crashes. This
                  involves limited, non-personal usage and device data.
                </li>
                <li>
                  Recitation audio and Quran content may be loaded over the
                  internet, which means your device communicates with our
                  content/audio providers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Information stored on your device
              </h2>
              <p className="mt-2 leading-relaxed">
                The following is created and kept on your device and is{" "}
                <strong>not</strong> transmitted to us:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  <strong>Marked mistakes</strong> — the surah, ayah, word, and
                  any optional note you add.
                </li>
                <li>
                  <strong>Bookmarks</strong> — saved pages and ayahs.
                </li>
                <li>
                  <strong>Preferences</strong> — selected language, reciter,
                  theme, and other in-app settings.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                This data lives in the app&apos;s local storage. You can remove
                it at any time using the in-app &quot;clear&quot; actions
                (delete a mistake, clear by surah, clear all) or by
                uninstalling the app, which deletes all locally stored data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Information collected through Firebase Analytics
              </h2>
              <p className="mt-2 leading-relaxed">
                The app uses <strong>Google Firebase Analytics</strong> to
                collect anonymous, aggregated usage information that helps us
                improve the app. This may include:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  App events and feature usage — for example, when a mistake is
                  marked or deleted (recorded as anonymous events such as the
                  surah/ayah/word index and whether a note was added). These
                  events contain Quran reference numbers, <strong>not</strong>{" "}
                  personal information.
                </li>
                <li>
                  General device and app information such as device model,
                  operating system version, app version, language/region, and a
                  Firebase-generated installation/instance identifier.
                </li>
                <li>
                  Approximate, coarse usage and session information generated by
                  the Firebase SDK.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                This information is processed by Google as our service
                provider. We use it only in aggregate to understand usage
                patterns and prioritize improvements. We do not use it to
                identify you personally.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Information collected through Firebase Crashlytics
              </h2>
              <p className="mt-2 leading-relaxed">
                The app uses <strong>Google Firebase Crashlytics</strong> to
                detect and diagnose crashes and errors. When the app crashes or
                records a non-fatal error, Crashlytics may collect:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  Crash stack traces and error logs (breadcrumbs) generated by
                  the app.
                </li>
                <li>Device state and app version at the time of the crash.</li>
                <li>A Crashlytics installation identifier.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                This data is used solely to find and fix bugs and improve
                stability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                How the data is used
              </h2>
              <p className="mt-2 leading-relaxed">
                We use the information described above only to:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Operate and provide the app&apos;s features.</li>
                <li>
                  Understand how the app is used so we can improve it.
                </li>
                <li>Detect, diagnose, and fix crashes and bugs.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                We do <strong>not</strong> sell your information, and we do{" "}
                <strong>not</strong> use it for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Sharing and third parties
              </h2>
              <p className="mt-2 leading-relaxed">
                Usage and crash data is shared with <strong>Google</strong> as
                the provider of Firebase Analytics and Crashlytics, who process
                it on our behalf. Google&apos;s handling of this data is
                governed by its own privacy and security terms. We do not share
                your data with any other third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">Data retention</h2>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  Data stored on your device remains until you delete it or
                  uninstall the app.
                </li>
                <li>
                  Analytics and crash data is retained by Firebase according to
                  Google&apos;s retention settings for those services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Children&apos;s privacy
              </h2>
              <p className="mt-2 leading-relaxed">
                The app is intended for a general audience and does not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">Your choices</h2>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  You can clear your locally stored mistakes and bookmarks at
                  any time within the app.
                </li>
                <li>You can stop all data collection by uninstalling the app.</li>
                <li>
                  On most devices you can also limit ad/analytics identifiers
                  through your operating system&apos;s privacy settings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                Changes to this policy
              </h2>
              <p className="mt-2 leading-relaxed">
                We may update this policy from time to time. Material changes
                will be reflected by updating the &quot;Last updated&quot; date
                above.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">Contact</h2>
              <p className="mt-2 leading-relaxed">
                If you have any questions about this privacy policy, contact:
              </p>
              <a
                href="mailto:nedimmuminovic61@gmail.com"
                className="mt-3 inline-block font-semibold gradient-text"
              >
                nedimmuminovic61@gmail.com
              </a>
            </section>
          </div>
        </div>
      </article>

      <footer className="mx-auto max-w-4xl px-6 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nedim Muminovic
      </footer>
    </main>
  );
}
