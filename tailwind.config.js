/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Nanum Gothic': ['Nanum Gothic', 'cursive'],
      },
      width: {
        Container: '1080px',
        HoeizenBanner: '160px',
      },
      height: {
        HorizenBanner: '600px',
      },
      margin: {
        common: '24px',
      },
    },
  },
  plugins: [],
};
