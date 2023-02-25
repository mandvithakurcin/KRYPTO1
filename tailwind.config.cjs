/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// module.exports = {
//   content: [
   
//     './public/**/*.html',
//     './src/**/*.{js,jsx,ts,tsx,vue}',
//   ],
//   mode:'jit',
//   darkMode:false,
//   theme: {
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
    
//     extend: {
//       screens: {
//         md: "990px",
//       },
//       keyframes: {
//                 "slide-in": {
//                   "0%": {
//                     "-webkit-transform": "translateX(120%)",
//                     transform: "translateX(120%)",
//                   },
//                   "100%": {
//                     "-webkit-transform": "translateX(0%)",
//                     transform: "translateX(0%)",
//                   },
//                 },
//               },
//               animation: {
//                 "slide-in": "slide-in 0.5s ease-out",
//               },
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// }


// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/**/*.html'],
//   mode: "jit",
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     fontFamily: {
//       display: ["Open Sans", "sans-serif"],
//       body: ["Open Sans", "sans-serif"],
//     },
//     extend: {
//       screens: {
//         mf: "990px",
//       },
//       keyframes: {
//         "slide-in": {
//           "0%": {
//             "-webkit-transform": "translateX(120%)",
//             transform: "translateX(120%)",
//           },
//           "100%": {
//             "-webkit-transform": "translateX(0%)",
//             transform: "translateX(0%)",
//           },
//         },
//       },
//       animation: {
//         "slide-in": "slide-in 0.5s ease-out",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/forms")],
// };