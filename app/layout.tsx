import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nedim Muminovic — Mobile App Developer",
  description:
    "Portfolio of Nedim Muminovic, a mobile app developer crafting beautiful, user-friendly apps for iOS and Android.",
  openGraph: {
    title: "Nedim Muminovic — Mobile App Developer",
    description:
      "Portfolio of Nedim Muminovic, a mobile app developer crafting beautiful, user-friendly apps for iOS and Android.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
