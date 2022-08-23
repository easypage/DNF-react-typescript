import React from 'react';
import HeaderMenu from './HeaderMenu';
import logo from '../../asset/images/logo.png';
function Header() {
  return (
    <div className="bg-gray-900 h-28 flex items-center text-yellow-400">
      <img src={logo} alt="logoimg" />
      <HeaderMenu />
    </div>
  );
}

export default Header;
