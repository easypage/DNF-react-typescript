import React from 'react';
import loadingss from './../../asset/images/loding.gif';
function LoadingBar() {
  return (
    <div className="w-CharacterCard m-auto">
      <div className="w-full flex justify-center items-center">
        <p className="mr-5">loading.....</p>
        <img src={loadingss} alt="asds" />
      </div>
    </div>
  );
}

export default LoadingBar;
