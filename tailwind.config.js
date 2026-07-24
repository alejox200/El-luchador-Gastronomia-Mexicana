/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luchador: {
          bg: '#0d0c0e',
          card: '#16141a',
          cardBorder: '#292532',
          red: '#dc2626',
          redHover: '#b91c1c',
          gold: '#d97706',
          goldLight: '#f59e0b',
          agave: '#0d9488',
          agaveLight: '#14b8a6',
          cream: '#fef3c7',
          muted: '#9ca3af',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(217, 119, 6, 0.3)',
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
        'glow-agave': '0 0 25px -5px rgba(13, 148, 136, 0.3)',
      }
    },
  },
  plugins: [],
}
