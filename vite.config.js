import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/




export default defineConfig({
  plugins: [react(), tailwindcss()],

  
  theme: {
    extend: {
      // 1. Add custom fonts
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'], // For stylish headings
        'body': ['"Inter"', 'sans-serif'],        // For clean body text
      },
      // 2. Add a new color palette
      colors: {
        'primary': '#047857',      // A deep, elegant green
        'secondary': '#fef3c7',    // A warm, sandy beige
        'accent': '#d97706',      // A rich, warm gold/amber
        'dark-text': '#1f2937',   // Dark gray, softer than black
        'light-text': '#f9fafb',
      }
    },
  },
 
})
