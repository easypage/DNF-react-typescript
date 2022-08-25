import React from 'react';

import MenuList from './MenuList';
function HeaderMenu() {
  return (
    <div className="flex">
      <MenuList text="캐릭터 검색" />
      <MenuList text="랭킹" />
      <MenuList text="경매장" />
      <MenuList text="재질" />
      <MenuList text="커뮤니티" />
    </div>
  );
}

export default HeaderMenu;
