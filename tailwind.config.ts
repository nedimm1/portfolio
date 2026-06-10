import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#111111", // main background (never pure black)
        surface: "#1A1A1A", // secondary background
        card: "#202020", // cards
        ink: "#F5F3EE", // primary text
        muted: "#B7B2A9", // secondary text
        accent: {
          DEFAULT: "#7DA87B", // primary accent — refined sage green
          light: "#A7C8A0", // secondary accent
        },
        success: "#87A96B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
      },
      fontSize: {
        hero: ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      boxShadow: {
        soft: "0 24px 70px -28px rgba(0, 0, 0, 0.7)",
        glow: "0 24px 60px -20px rgba(125, 168, 123, 0.25)",
      },
      animation: {
        blob: "blob 26s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -50px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.94)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
