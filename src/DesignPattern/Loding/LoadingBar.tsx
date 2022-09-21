import React from 'react';
import loadingss from './../../asset/images/loding.gif';
function LoadingBar() {
  return (
    <div>
      <p>loading.....</p>
      <img src={loadingss} alt="asds" />
    </div>
  );
}

export default LoadingBar;
