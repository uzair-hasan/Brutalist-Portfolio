// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF3E0',
          100: '#FFF8DC',
          200: '#F5F5DC',
          300: '#E6D2AA',
          400: '#D2B48C',
          500: '#CD853F',
          600: '#A0522D',
          700: '#8B4513',
          800: '#6D4C41',
          900: '#5D4037',
        },
        beige: {
          100: '#FFF8DC',
          200: '#F5F5DC',
          300: '#E6D2AA',
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'brutal-bounce': 'brutalBounce 0.6s ease-in-out',
        'text-shake': 'textShake 0.5s ease-in-out',
      },
      keyframes: {
        brutalBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        textShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        }
      }
    },
  },
  plugins: [],
}