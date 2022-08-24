import React from 'react';
import mainLogo from './../../../asset/images/mainlogo.png';

function MainImg() {
  return (
    <div className="flex justify-center mt-16">
      <img src={mainLogo} alt="mainlogo" />
    </div>
  );
}

export default MainImg;
