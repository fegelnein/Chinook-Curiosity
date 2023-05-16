/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        header: "rgb(var(--color-header) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
        heading: "rgb(var(--color-heading) / <alpha-value>)",
        "heading-hover": "rgb(var(--color-heading-hover) / <alpha-value>)",
        "heading-inverted":
          "rgb(var(--color-heading-inverted) / <alpha-value>)",
        "heading-inverted-hover":
          "rgb(var(--color-heading-inverted-hover) / <alpha-value>)",
        "menu-button-bg": "rgb(var(--color-menu-button-bg) / <alpha-value>)",
        "menu-button-bg-hover":
          "rgb(var(--color-menu-button-bg-hover) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        gotham: ['"Gotham Ultra"', "sans-serif"],
        hugme: ["Hugme", "serif"],
      },
    },
  },
  plugins: [],
};
