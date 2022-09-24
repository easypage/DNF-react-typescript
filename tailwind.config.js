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
        CharacterCard: '860px',
        CharacterStatus: '500px',
        CharacterEquipment: '560px',
        CharacterDeatail: '960px',
        CharacterContent: '530px',
        VerticalBanner: '160px',
      },
      height: {
        VerticalBanner: '400px',
        15: '60px',
      },
      margin: {
        common: '24px',
      },
      spacing: {
        VerticalAdBannerRight: '-160px',
        CharacterDetailBannerImageTop: '-120px',
        CharacterDetailBannerImageRight: '-160px',
      },
    },
  },
  plugins: [],
};
