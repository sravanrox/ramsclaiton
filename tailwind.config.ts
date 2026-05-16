import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f3ea",
        petal: "#f3c8d2",
        blush: "#ef8fa3",
        rosewood: "#6f4654",
        cocoa: "#4b333e",
        sage: "#d7deaa",
        butter: "#eadfbd",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(75, 51, 62, 0.14)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Avenir Next", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
