import React from 'react';
import '../../css/header.css';
import rankIcon from '../../asset/images/rank.png';
import serarchIcon from '../../asset/images/search.png';
import MenuList from './MenuList';
function HeaderMenu() {
  return (
    <div className="flex textshadow">
      <MenuList img={rankIcon} text="캐릭터 검색" />
      <MenuList img={serarchIcon} text="랭킹" />

      {/* <li className="mr-6 cursor-pointer ">awe</li>
      <li className="mr-6 cursor-pointer ">awe</li>
      <li className="cursor-pointer ">awe</li> */}
    </div>
  );
}

export default HeaderMenu;
