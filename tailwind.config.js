/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Nanum Gothic': ['Nanum Gothic', 'cursive'],
        Jua: ['Jua', 'sans-serif'],
        Noto: ['Noto Sans KR', 'sans-serif'],
      },
      variants: {
        margin: ['first'],
      },
      width: {
        Pc: '1920px',
        AuctionSearchForm: '806px',
        Container: '1080px',
        CharacterCard: '900px',
        CharacterStatus: '500px',
        CharacterEquipment: '560px',
        CharacterDetail: '960px',
        CharacterContent: '530px',
        VerticalBanner: '160px',
        AuctionContainer: '540px',
        AuctionItem: '350px',
      },
      height: {
        VerticalBanner: '400px',
        15: '60px',
      },
      margin: {
        common: '24px',
      },
      spacing: {
        VerticalAdBannerRight: '-180px',
        CharacterDetailBannerImageTop: '-120px',
        CharacterDetailBannerImageRight: '-160px',
        LoadingTransLate: '-50%',
      },
    },
  },
  plugins: [],
};
