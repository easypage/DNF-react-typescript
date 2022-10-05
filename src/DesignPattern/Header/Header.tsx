import React from 'react';
import HeaderMenu from './HeaderMenu';
import logo from '../../asset/images/logo.png';
function Header() {
  return (
    <div className="relative min-w-[1080px] flex items-center bg-gray-900 h-28  text-yellow-400  z-0 header-background-image">
      <a href="/">
        <img src={logo} alt="logoimg" />
      </a>
      <HeaderMenu />
    </div>
  );
}

export default Header;
