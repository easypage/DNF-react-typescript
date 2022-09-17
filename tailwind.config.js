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
        VerticalBanner: '160px',
      },
      height: {
        VerticalBanner: '400px',
      },
      margin: {
        common: '24px',
      },
      spacing: {
        VerticalAdBannerRight: '-60px',
      },
    },
  },
  plugins: [],
};
