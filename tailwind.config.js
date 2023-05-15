/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      },
      fontFamily: {
        gotham: ['"Gotham Ultra"', "sans-serif"],
        hugme: ["Hugme", "serif"],
      },
    },
  },
  plugins: [],
};
