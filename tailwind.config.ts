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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "text-primary": 'white', // Example gray shade for primary text
        "text-accent": 'black', // Example red shade for accent text
      },
    },
    fontFamily:{
      sans:['Inter','sans-serif'],
    }
  },
  plugins: [],
} satisfies Config;
