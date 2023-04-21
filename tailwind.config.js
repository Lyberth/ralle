/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: { 'hero-pattern': "url(./assets/img/pexels-joni-tuohimaa-16171186.jpg)" } },

  },
  plugins: [],
}




