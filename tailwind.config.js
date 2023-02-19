/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brownish': "#212428"
      },
      keyframes: {
        fadeInLeft: {
          '0%': { transform: 'translatex(-100%)' },
          '100%': { transform: 'translatex(0)' },
        }
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s linear',
      },
      fontFamily: {
        mono: ['Cutive Mono', 'monospace'],
        signika: ['Signika', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        firasans: ['Fira Sans', 'sans-serif'],
        cursive: ['Cedarville Cursive', 'cursive'],
      },
    }
  },
  plugins: [],
}
