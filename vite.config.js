import { resolve } from 'path'
import { defineConfig } from 'vite'
import path from 'path';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
build: {
    rollupOptions: {
      input: {
        index: './index.html',
        about: './about.html',
        podcast: './podcast.html',
        newsletter: './newsletter.html',
        team: './team.html',
        sponsors: './sponsors.html',
        tutoring: './tutoring.html',
        tailwindConfig: './tailwind.config.js',
        prettierConfig: './prettier.config.cjs',
        postcssConfig:'./postcss.config.js',
        packagelock:'./package-lock.json',
        pacakge:'./package.json',
        package:'./src/css/tailwind.css',
        // List all files you want in your build
      }
    }
  }
})

