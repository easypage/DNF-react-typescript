import React from 'react';
import '../../css/header.css';

interface MenuListProps {
  text: string;
}

function MenuList(props: MenuListProps) {
  return (
    <li className="flex items-center  text-xl font-Nanum Gothic font-bold opacity-95  cursor-pointer  hoverMenu mr-4 last:mr-0">
      <p className="ml-2 shad">{props.text}</p>
    </li>
  );
}

export default MenuList;
