import React from 'react';
import VerticalAdBanner from '../../../DesignPattern/AdBanner/VerticalAdBanner';
import HomeBody from './HomeBody';
function HomeBodyContainer() {
  return (
    <div className="w-Container relative font-Nanum Gothic m-auto">
      <HomeBody />
      <VerticalAdBanner />
    </div>
  );
}

export default HomeBodyContainer;
