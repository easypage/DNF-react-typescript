import React from 'react';
import mainLogo from './../../../asset/images/mainlogo.png';
import HomeNotice from './HomeNotice';
import HomeSearchForm from './HomeSearchForm';

function HomeBody() {
  return (
    <div className="flex flex-col  items-center">
      <img src={mainLogo} alt="mainlogo" />
      <HomeSearchForm />
      {/* <HomeNotice /> */}
    </div>
  );
}

export default HomeBody;
