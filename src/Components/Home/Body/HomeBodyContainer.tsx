import React from 'react';
import HorizenAdBanner from '../../../DesignPattern/AdBanner/HorizenAdBanner';
import HomeBody from './HomeBody';
function HomeBodyContainer() {
  return (
    <div className="w-Container relative font-Nanum Gothic m-auto">
      <HomeBody />
      <HorizenAdBanner />
    </div>
  );
}

export default HomeBodyContainer;
