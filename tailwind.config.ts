import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./apps/site/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        gray: {
          900: "#111827",
        },
        primary: {
          DEFAULT: "#1d4ed8",
          foreground: "#ffffff",
        },
        surface: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        accent: {
          DEFAULT: "#9333ea",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.surface.foreground"),
            "--tw-prose-headings": theme("colors.surface.foreground"),
            "--tw-prose-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-bold": theme("colors.surface.foreground"),
            "--tw-prose-counters": theme("colors.surface.foreground"),
            "--tw-prose-bullets": theme("colors.surface.foreground"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
