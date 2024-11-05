import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: {
          50: "#FFE4E6",
          100: "#FFB6C1",
          200: "#FF91A4",
          800: "#C2185B",
          900: "#880E4F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
