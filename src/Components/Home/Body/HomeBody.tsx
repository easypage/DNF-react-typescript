import React from 'react';
import BodyLogo from './../../../asset/images/mainlogo.png';
import HomeCharacterSearchForm from './HomeCharacterSearchForm';

function HomeBody() {
  return (
    <div className="flex flex-col  items-center">
      <img src={BodyLogo} className="mt-6 mb-6" alt="mainlogo" />
      <HomeCharacterSearchForm />
    </div>
  );
}

export default HomeBody;
