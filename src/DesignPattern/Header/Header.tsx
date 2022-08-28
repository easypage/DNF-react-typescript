import React from 'react';
import HeaderMenu from './HeaderMenu';
import logo from '../../asset/images/logo.png';
import Footer from './Footer';
function Header() {
  return (
    <div className="relative flex items-center bg-gray-900 h-28  text-yellow-400  z-0 header-background-image">
      <img src={logo} alt="logoimg" />
      <HeaderMenu />
      {/* <Footer /> */}
    </div>
  );
}

export default Header;
