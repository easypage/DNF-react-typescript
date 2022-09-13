import React from 'react';
import Header from '../../../DesignPattern/Header/Header';
import EventBanner from '../../../DesignPattern/EvemtBanner/EventBanner';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';

function HomeHeader() {
  return (
    <div>
      <Header />

      <div className="w-Container m-auto">
        <EventBannerContainer />
      </div>
    </div>
  );
}

export default HomeHeader;
