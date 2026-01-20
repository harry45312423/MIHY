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
        primary: {
          DEFAULT: '#8B7355',  // 월넛 브라운
          light: '#B8A089',    // 토프
        },
        background: {
          DEFAULT: '#FAFAF8',  // 웜 화이트
          secondary: '#F5F3EF', // 아이보리
        },
        text: {
          DEFAULT: '#2C2C2C',  // 차콜
          secondary: '#6B6B6B', // 미디엄 그레이
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
