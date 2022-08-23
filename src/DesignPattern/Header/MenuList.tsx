import React from 'react';

interface MenuListProps {
  img: string;
  text: string;
}

function MenuList(props: MenuListProps) {
  return (
    <li className="flex mr-6 cursor-pointer">
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </li>
  );
}

export default MenuList;
