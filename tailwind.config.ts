// tailwind.config.ts
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
        'wareflow-primary': '#0D5D5E', // Darker teal from hexagon/text
        'wareflow-secondary': '#40E0D0', // Lighter cyan from circuits/O
        'wareflow-accent': '#6AF2F0', // A slightly brighter accent if needed
        'wareflow-dark': '#05161A',   // Very dark background
        'wareflow-light': '#E0F7FA',  // Light text/elements
        'wareflow-gray': '#8DA0A8',   // Muted text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A modern sans-serif font
      },
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config