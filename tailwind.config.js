/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-hover": "rgb(var(--color-primary-hover) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-hover": "rgb(var(--color-secondary-hover) / <alpha-value>)",
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
        "menu-button-icon":
          "rgb(var(--color-menu-button-icon) / <alpha-value>)",
        "menu-button-bg": "rgb(var(--color-menu-button-bg) / <alpha-value>)",
        "menu-button-bg-hover":
          "rgb(var(--color-menu-button-bg-hover) / <alpha-value>)",
        "themepicker-icon":
          "rgb(var(--color-themepicker-icon) / <alpha-value>)",
        "themepicker-icon-bg":
          "rgb(var(--color-themepicker-icon-bg) / <alpha-value>)",
        "themepicker-bg": "rgb(var(--color-themepicker-bg) / <alpha-value>)",
        "themepicker-text":
          "rgb(var(--color-themepicker-text) / <alpha-value>)",
        "themepicker-text-bg-hover":
          "rgb(var(--color-themepicker-text-bg-hover) / <alpha-value>)",
        "hero-blend": "rgb(var(--color-hero-blend) / <alpha-value>)",
        "dark-themepicker-icon-bg":
          "rgb(var(--color-dark-themepicker-icon-bg) / <alpha-value>)",
        "dark-themepicker-bg":
          "rgb(var(--color-dark-themepicker-bg) / <alpha-value>)",
        "dark-themepicker-text":
          "rgb(var(--color-dark-themepicker-text) / <alpha-value>)",
        "dark-themepicker-text-bg-hover":
          "rgb(var(--color-dark-themepicker-text-bg-hover) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        heading: ["--var(--font-heading)"],
        accent: ["var(--font-accent)"],
      },
    },
  },
  plugins: [],
};
