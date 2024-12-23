import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        fadeOut: 'fadeOut 0.2s ease-in-out',
      },
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
