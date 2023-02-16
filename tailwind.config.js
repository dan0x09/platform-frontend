/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scgreen: '#718351',
        scblue: '#2c3d41',
        sc1: '#528f78',
        sc2: '#a5c48b',
        sc3: '#b8c081',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#718351',
          secondary: '#2c3d41',
          accent: '#F7F9CA',
          neutral: '#191A3F',
          'base-100': '#FFFFFF',
          info: '#C8E1E7',
          success: '#DEF29F',
          warning: '#F7E589',
          error: '#F2B6B5',
        },
      },
    ],
  },
};
