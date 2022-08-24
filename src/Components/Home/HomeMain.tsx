import React from 'react';
import HomeHeader from './Header/HomeHeader';
import SearchForm from './Body/SearchForm';
import MainLogo from './Body/MainImg';

function HomeMain() {
  return (
    <div>
      <HomeHeader />
      <MainLogo />
      <SearchForm />
    </div>
  );
}

export default HomeMain;
