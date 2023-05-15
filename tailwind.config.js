/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['"Gotham Ultra"', "sans-serif"],
        hugme: ["Hugme", "serif"],
      },
    },
  },
  plugins: [],
};
