import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
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
        light: {
          surface: "#FFFBF7",
          surfaceAlt: "#FFFFFF",
          primary: "#EB5675",
          accent: "#6554FF",
          muted: "#F9EDEF",
          text: "#26252D",
        },
        dark: {
          surface: "#14131A",
          surfaceAlt: "#1E1D24",
          primary: "#F06A82",
          accent: "#8B84FF",
          muted: "#1A1A20",
          text: "#E5E4EA",
        },
        surface: "#FFFBF7",
        surfaceAlt: "#FFFFFF",
        primary: "#EB5675",
        accent: "#6554FF",
        muted: "#F9EDEF",
        text: "#26252D",
      },
      boxShadow: {
        card: "0 3px 8px rgba(0,0,0,0.04)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text"),
            "--tw-prose-headings": theme("colors.text"),
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-bold": theme("colors.text"),
            "--tw-prose-counters": theme("colors.text"),
            "--tw-prose-bullets": theme("colors.text"),
          },
        },
        dark: {
          css: {
            "--tw-prose-body": theme("colors.dark.text"),
            "--tw-prose-headings": theme("colors.dark.text"),
            "--tw-prose-links": theme("colors.dark.primary"),
            "--tw-prose-bold": theme("colors.dark.text"),
            "--tw-prose-counters": theme("colors.dark.text"),
            "--tw-prose-bullets": theme("colors.dark.text"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
