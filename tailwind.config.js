/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'watchdogs-blue': '#00A8FF',
        'watchdogs-dark': '#1A1A1A',
        'watchdogs-gray': '#2D2D2D',
        'watchdogs-light-gray': '#404040',
        'watchdogs-accent': '#FF6B35',
        'watchdogs-green': '#00FF41',
        'watchdogs-red': '#FF0040',
      },
      fontFamily: {
        'hacker': ['Courier New', 'monospace'],
        'modern': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00A8FF, 0 0 10px #00A8FF, 0 0 15px #00A8FF' },
          '100%': { boxShadow: '0 0 10px #00A8FF, 0 0 20px #00A8FF, 0 0 30px #00A8FF' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
} 