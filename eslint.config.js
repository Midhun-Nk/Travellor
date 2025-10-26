import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
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
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
