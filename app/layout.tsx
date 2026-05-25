import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nedim Muminovic — Mobile App Developer",
  description:
    "Portfolio of Nedim Muminovic, mobile app developer building beautiful, user-friendly apps for iOS and Android.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
