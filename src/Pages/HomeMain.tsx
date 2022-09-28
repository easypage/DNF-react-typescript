import React from 'react';
import HomeBodyContainer from '../Components/Home/Body/HomeBodyContainer';
import HomeFooter from '../Components/Home/Footer/HomeFooter';
import HomeHeader from '../Components/Home/Header/HomeHeader';

function HomeMain() {
  return (
    <div>
      <HomeHeader />
      <HomeBodyContainer />
      <HomeFooter />
    </div>
  );
}

export default HomeMain;
