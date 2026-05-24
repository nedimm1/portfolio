import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arabic Flashcarder — Privacy Policy",
  description: "Privacy policy for the Arabic Flashcarder mobile app.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 -left-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-bold gradient-text">
          Nedim.dev
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-slate-700 hover:text-purple-600 transition"
        >
          ← Back to portfolio
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="glass rounded-3xl p-8 shadow-xl md:p-12">
          <header className="mb-8 border-b border-slate-200 pb-6">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Arabic Flashcarder
            </span>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: February 2026
            </p>
          </header>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">Overview</h2>
              <p className="mt-2 leading-relaxed">
                Arabic Flashcarder (&quot;we&quot;, &quot;our&quot;, or
                &quot;the app&quot;) is committed to protecting your privacy.
                This policy explains what information we collect and how we
                use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Information We Collect
              </h2>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                1. Analytics Data
              </h3>
              <p className="mt-2 leading-relaxed">
                We use Firebase Analytics to collect anonymous usage data,
                including:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>App opens and screen views</li>
                <li>
                  Study session statistics (cards reviewed, success rates,
                  time spent)
                </li>
                <li>Course and deck progress</li>
                <li>Device type and operating system</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                This data is anonymous and cannot be used to identify you
                personally.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                2. Locally Stored Data
              </h3>
              <p className="mt-2 leading-relaxed">
                Your flashcards, decks, and learning progress are stored
                locally on your device. This data is not transmitted to our
                servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Information We Do Not Collect
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Personal information (name, email, phone number)</li>
                <li>Location data</li>
                <li>Contacts</li>
                <li>Payment information</li>
                <li>Photos or media</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                How We Use Your Information
              </h2>
              <p className="mt-2 leading-relaxed">
                Analytics data helps us understand how users interact with the
                app so we can improve the learning experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Data Sharing
              </h2>
              <p className="mt-2 leading-relaxed">
                We do not sell, trade, or share your data with third parties,
                except:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  Firebase Analytics (Google) processes anonymous analytics
                  data according to Google&apos;s Privacy Policy
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Data Retention
              </h2>
              <p className="mt-2 leading-relaxed">
                Analytics data is retained according to Firebase&apos;s
                standard retention policies. Local data remains on your device
                until you uninstall the app or clear app data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Children&apos;s Privacy
              </h2>
              <p className="mt-2 leading-relaxed">
                This app is not directed at children under 13. We do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Changes to This Policy
              </h2>
              <p className="mt-2 leading-relaxed">
                We may update this policy from time to time. Changes will be
                posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact Us</h2>
              <p className="mt-2 leading-relaxed">
                If you have questions about this privacy policy, contact us
                at:
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
