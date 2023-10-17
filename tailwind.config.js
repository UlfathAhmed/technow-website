/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    backgroundImage: {
      'homeback': "url('./src/assets/images/home-bg.png')",
      }
  },
  fontFamily: {
    worksansnormal : ['Work Sans'],
    worksansbold : ['Work Sans'],
    Inter :[ 'Inter' ]
  },
  },
  plugins: [],
}

