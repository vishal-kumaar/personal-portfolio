/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brownish: "#212428",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        bottomToTop: {
          "0%": { opacity: "0" },
          "5%": { 
            opacity: "0",
            transform: "translateY(5px)"
          },
          "10%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "25%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "30%": {
            opacity: "0",
            transform: "translateY(5px)",
          },
          "80%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s linear",
        bottomToTop: "bottomToTop 6s linear infinite 0s",
      },
      fontFamily: {
        mono: ["Cutive Mono", "monospace"],
        signika: ["Signika", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        firasans: ["Fira Sans", "sans-serif"],
        cursive: ["Cedarville Cursive", "cursive"],
      },
    },
  },
  plugins: [],
};
