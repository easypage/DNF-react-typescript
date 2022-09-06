import React from 'react';
import Header from '../../../DesignPattern/Header/Header';
import HomeHeaderEventBanner from './SwiperEventBanner/HomeHeaderEventBanner';

function HomeHeader() {
  return (
    <div>
      <Header />
      <HomeHeaderEventBanner />
    </div>
  );
}

export default HomeHeader;
