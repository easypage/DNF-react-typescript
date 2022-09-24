import React, { useState } from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';
import { CharactrCreatureData } from '../../Types/Character/CharacterCreatureType';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import CharacterInfomation from '../Character/CharacterDetailBannerContent';
import CharacterCreature from '../Creature/CharacterCreature';
import CharacterEquipment from '../Equipment/CharacterEquipment';
import CharacterTalisman from '../Talisman/CharacterTalisman';
import CharacteContainer from './CharacterDetailBodyContainer';
import CharacterFlag from '../Flag/CharacterFlag';
import { CharacterFlagData } from '../../Types/Character/CharacterFlagType';
import CharacterStatusContainer from '../CharacterStatus/CharacterStatusContainer';
import { testType } from '../../Types/Character/CharacterTabsType';
import './../../../css/tabMenu.css';
interface tabsProps {
  tabs: tabMenuProps[];
}
interface tabMenuProps {
  tabName: string;
  tabAddress: JSX.Element;
}

function CharacterTabMenu({ tabs }: tabsProps) {
  const [toggleState, setToggleState] = useState('');

  const toggleTab = (index: string) => {
    setToggleState(index);
  };

  return (
    <div className="w-CharacterEquipment  mt-common bg-[#f1f1f1] border border-solid border-gray-400 ">
      <div className="flex justify-center">
        {tabs.map(tabsMenu => (
          <div className="tabMenus text-xs ml-1 mr-1 mt-3 shadow-md">
            <button className={toggleState === `${tabsMenu.tabName}` ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(tabsMenu.tabName)}>
              {tabsMenu.tabName}
            </button>
          </div>
        ))}
      </div>

      <div className="w-CharacterEquipment">
        <div className="w-CharacterContent flex justify-center items-center  bg-[#f1f1f1] m-auto">
          {tabs.map(contents => (
            <div className={toggleState === `${contents.tabName}` ? 'block bg-white shadow-xl w-CharacterContent mt-3 p-4' : 'hidden'}>
              <p>{contents.tabName}</p>
              {contents.tabAddress}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterTabMenu;
