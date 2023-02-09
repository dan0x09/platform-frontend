/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        scgreen: '#718351',
        scblue: '#2c3d41',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
};
