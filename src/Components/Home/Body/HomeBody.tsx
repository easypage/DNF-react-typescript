import React from 'react';
import CharSearch from '../../CharSearch/CharSearch';
import CharSearchData from '../../CharSearch/CharSearchData';
import BodyLogo from './../../../asset/images/mainlogo.png';
import HomeSearchForm from './HomeSearchForm';

function HomeBody() {
  const params = window.location.pathname;

  return (
    <div className="flex flex-col  items-center">
      <img src={BodyLogo} alt="mainlogo" />
      <HomeSearchForm />
    </div>
  );
}

export default HomeBody;
