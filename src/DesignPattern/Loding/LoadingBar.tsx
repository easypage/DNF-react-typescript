import React from 'react';
import loading from '../../asset/images/loading.gif';
import logo from '../../asset/images/logo.png';
function LoadingBar() {
  return (
    <div className="w-screen h-screen">
      <div className="fixed left-1/2 translate-x-LoadingTransLate top-1/2 translate-y-LoadingTransLate">
        <img src={loading} alt="" />
      </div>
    </div>
  );
}

export default LoadingBar;
