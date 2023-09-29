/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./*.{js,ts,jsx,tsx,html}"],
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
        "dark-body": "rgb(var(--color-dark-body) / <alpha-value>)",
        header: "rgb(var(--color-header) / <alpha-value>)",
        "dark-header": "rgb(var(--color-dark-header) / <alpha-value>)",
        footer: "rgb(var(--color-footer) / <alpha-value>)",
        "dark-footer": "rgb(var(--color-dark-footer) / <alpha-value>)",

        "themepicker-icon":
          "rgb(var(--color-themepicker-icon) / <alpha-value>)",
        "themepicker-icon-bg":
          "rgb(var(--color-themepicker-icon-bg) / <alpha-value>)",
        "dark-themepicker-icon-bg":
          "rgb(var(--color-dark-themepicker-icon-bg) / <alpha-value>)",
        "themepicker-bg": "rgb(var(--color-themepicker-bg) / <alpha-value>)",
        "dark-themepicker-bg":
          "rgb(var(--color-dark-themepicker-bg) / <alpha-value>)",
        "themepicker-text-bg-hover":
          "rgb(var(--color-themepicker-text-bg-hover) / <alpha-value>)",
        "dark-themepicker-text-bg-hover":
          "rgb(var(--color-dark-themepicker-text-bg-hover) / <alpha-value>)",

        "menu-bg": "rgb(var(--color-menu-bg) / <alpha-value>)",
        "dark-menu-bg": "rgb(var(--color-dark-menu-bg) / <alpha-value>)",
        "menu-text-bg-hover":
          "rgb(var(--color-menu-text-bg-hover) / <alpha-value>)",
        "dark-menu-text-bg-hover":
          "rgb(var(--color-dark-menu-text-bg-hover) / <alpha-value>)",

        "menu-button-icon":
          "rgb(var(--color-menu-button-icon) / <alpha-value>)",
        "menu-button-bg": "rgb(var(--color-menu-button-bg) / <alpha-value>)",
        "menu-button-bg-hover":
          "rgb(var(--color-menu-button-bg-hover) / <alpha-value>)",

        "hero-blend": "rgb(var(--color-hero-blend) / <alpha-value>)",
        "dark-hero-blend": "rgb(var(--color-dark-hero-blend) / <alpha-value>)",

        heading: "rgb(var(--color-heading) / <alpha-value>)",
        "heading-inverted":
          "rgb(var(--color-heading-inverted) / <alpha-value>)",
        "text-hero": "rgb(var(--color-text-hero) / <alpha-value>)",
        "text-hero-inverted":
          "rgb(var(--color-text-hero-inverted) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        "text-inverted": "rgb(var(--color-text-inverted) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
        menu: "rgb(var(--color-menu) / <alpha-value>)",
        "menu-hover": "rgb(var(--color-menu-hover) / <alpha-value>)",
        "menu-inverted": "rgb(var(--color-menu-inverted) / <alpha-value>)",
        "menu-inverted-hover":
          "rgb(var(--color-menu-inverted-hover) / <alpha-value>)",
        submenu: "rgb(var(--color-submenu) / <alpha-value>)",
        "submenu-inverted":
          "rgb(var(--color-submenu-inverted) / <alpha-value>)",
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
