/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#1a365d', // Bleu foncé pour le texte
          secondary: '#2d3748', // Gris bleuté
          background: '#f8fafc', // Blanc bleuté très léger
          accent: '#3b82f6' // Bleu vif
        },
        // Palette dark existante
        dark: {
          primary: '#f8fafc', // Blanc bleuté
          secondary: '#cbd5e1', // Gris clair
          background: '#0b0f19', // Fond sombre d'origine
          accent: '#3b82f6' // Même bleu pour la cohérence
        },
        },
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite'
      },
      keyframes: {
        blink: {
          'to': { visibility: 'hidden' }
        }
      },
      html: {
        scrollBehavior: 'smooth'
      },


      fontFamily: {
        sans: ["Inner", "sans-serif"],
    },
  },
  plugins: [],
}

