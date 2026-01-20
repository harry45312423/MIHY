import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A86C',
          light: '#E8D4B8',
        },
        navy: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
