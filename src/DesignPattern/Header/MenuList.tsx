import React from 'react';

interface MenuListProps {
  img: string;
  text: string;
}

function MenuList(props: MenuListProps) {
  return (
    <li className="flex items-center ml-14 cursor-pointer text-5xl">
      <img src={props.img} alt={props.text} />
      <p className="ml-4">{props.text}</p>
    </li>
  );
}

export default MenuList;
