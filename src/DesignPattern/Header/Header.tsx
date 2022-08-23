import React from 'react';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <div className="bg-gray-900 h-28 flex items-center text-yellow-400">
      <p className="text-4xl text-yellow-400 mr-8 ">LOGO</p>
      <HeaderMenu />
    </div>
  );
}

export default Header;
