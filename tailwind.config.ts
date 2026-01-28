import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35', // Orange
          dark: '#E55A2B',
          light: '#FF8C5A',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Black
          light: '#2D2D2D',
          dark: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#4A90E2',
          light: '#6BA3E8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
