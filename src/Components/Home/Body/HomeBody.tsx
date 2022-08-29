import React from 'react';
import BodyLogo from './../../../asset/images/mainlogo.png';
import HomeSearchForm from './HomeSearchForm';

function HomeBody() {
  return (
    <div className="flex flex-col  items-center">
      <img src={BodyLogo} alt="mainlogo" />
      <HomeSearchForm />
    </div>
  );
}

export default HomeBody;
