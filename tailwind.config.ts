import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Electrolize'", "sans-serif"],
        body: ["'Roboto Mono'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
