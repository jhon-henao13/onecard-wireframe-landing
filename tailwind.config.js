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
        'onecard-dark': '#00253E', // Azul oscuro profundo del fondo
        'onecard-blue': '#005C94', // Azul medio de la marca
        'onecard-sky': '#0097DA',  // Azul cielo brillante de los acentos
        'onecard-accent': '#00b7eb' // Verde azulado/teal acento premium
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #00253E, #005C94)', // Degradado del Hero
      }
    },
  },
  plugins: [],
}