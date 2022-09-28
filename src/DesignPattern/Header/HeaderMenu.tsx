import React from 'react';

import MenuList from './MenuList';

function HeaderMenu() {
  return (
    <div className="flex">
      <MenuList navMenu="캐릭터검색" />
      <MenuList navMenu="경매장" />
    </div>
  );
}

export default HeaderMenu;
