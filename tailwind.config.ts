import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#a9d293",
        "surface-container": "#f0ede9",
        "on-error-container": "#93000a",
        "error": "#ba1a1a",
        "tertiary-container": "#3f4b2c",
        "secondary": "#94492d",
        "surface": "#fcf9f4",
        "on-secondary-container": "#773319",
        "inverse-on-surface": "#f3f0eb",
        "outline": "#73796d",
        "on-tertiary-fixed": "#141f05",
        "surface-variant": "#e5e2dd",
        "tertiary-fixed": "#dae8be",
        "on-primary": "#ffffff",
        "primary": "#173809",
        "secondary-fixed": "#ffdbcf",
        "primary-container": "#2d4f1e",
        "secondary-fixed-dim": "#ffb59b",
        "surface-container-high": "#ebe8e3",
        "on-primary-fixed": "#062100",
        "on-surface-variant": "#43493e",
        "on-primary-container": "#98c083",
        "on-primary-fixed-variant": "#2d4f1e",
        "surface-container-highest": "#e5e2dd",
        "on-tertiary-container": "#adbb93",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-container-low": "#f6f3ee",
        "on-surface": "#1c1c19",
        "on-tertiary": "#ffffff",
        "background": "#fcf9f4",
        "secondary-container": "#fd9e7b",
        "surface-tint": "#446733",
        "inverse-surface": "#31302d",
        "on-background": "#1c1c19",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed-variant": "#3f4b2c",
        "inverse-primary": "#a9d293",
        "error-container": "#ffdad6",
        "primary-fixed": "#c5efad",
        "outline-variant": "#c3c8bb",
        "surface-bright": "#fcf9f4",
        "tertiary": "#293417",
        "on-secondary-fixed-variant": "#763318",
        "surface-dim": "#dcdad5",
        "on-secondary-fixed": "#380d00",
        "tertiary-fixed-dim": "#becca3"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
};
export default config;
