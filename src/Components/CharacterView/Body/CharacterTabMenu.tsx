import React, { useState } from 'react';

import './../../../css/tabMenu.css';
interface tabsProps {
  tabs: tabMenuProps[];
}
interface tabMenuProps {
  tabName: string;
  tabAddress: JSX.Element;
}

function CharacterTabMenu({ tabs }: tabsProps) {
  const [toggleState, setToggleState] = useState(tabs[0].tabName);

  const toggleTab = (index: string) => {
    setToggleState(index);
  };

  return (
    <div className="w-CharacterEquipment  mt-common bg-[#ffffff] border-2 rounded-md border-solid border-gray-400 ">
      <div className="flex justify-center">
        {tabs.map(tabsMenu => (
          <div className="tabMenus text-xs ml-1 mr-1 mt-3 shadow-md " key={tabsMenu.tabName}>
            <button className={toggleState === `${tabsMenu.tabName}` ? 'tabs active-tabs rounded-md' : 'tabs'} onClick={() => toggleTab(tabsMenu.tabName)}>
              {tabsMenu.tabName}
            </button>
          </div>
        ))}
      </div>

      <div className="w-CharacterEquipment ">
        <div className="w-CharacterContent flex justify-center items-center   bg-[#faf7f7] m-auto">
          {tabs.map(contents => (
            <div className={toggleState === `${contents.tabName}` ? 'block bg-white shadow-xl rounded-md w-CharacterContent mt-3 p-4 mb-3' : 'hidden'} key={contents.tabName}>
              <p className="font-bold">{contents.tabName}</p>
              {contents.tabAddress}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterTabMenu;
