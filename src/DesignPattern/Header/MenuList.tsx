import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/header.css';

interface MenuListProps {
  navMenu: '캐릭터검색' | '경매장';
}

interface RouterMapping {
  캐릭터검색: string;
  경매장: string;
}

function MenuList(props: MenuListProps) {
  const RouterMapping: RouterMapping = { 캐릭터검색: '/characterSearch', 경매장: '/auction' };

  return (
    <li className="flex items-center text-xl font-Nanum Gothic font-bold opacity-95 cursor-pointer hoverMenu mr-4 last:mr-0">
      <NavLink to={RouterMapping[props.navMenu]}>
        <p className="ml-2">{props.navMenu}</p>
      </NavLink>
    </li>
  );
}

export default MenuList;
