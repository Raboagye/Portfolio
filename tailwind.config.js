/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {

      fontFamily: {
        body: ["Mongolian Baiti"]
      },

      // keyframes: {
      //   rotate: {
      //     from: {
      //       transform: 'rotateX(0deg) rotateY(0deg)',
      //     },
      //     to: {
      //       transform: 'rotateX(369deg) rotateY(360deg)',
      //     },
      //   },
      // },

      // animation: {
      //   'rotate': 'rotate'
      // }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ]  
}

