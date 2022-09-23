import React, { useState } from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';
import { CharactrCreatureData } from '../../Types/Character/CharacterCreatureType';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import CharacterInfomation from '../Character/CharacterInfomation';
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

function CharacterTab({ tabs }: tabsProps) {
  const [toggleState, setToggleState] = useState('');

  const toggleTab = (index: string) => {
    setToggleState(index);
  };

  return (
    <div className="w-CharacterCard mt-5 ">
      <div className="flex justify-center">
        {tabs.map(tabsMenu => (
          <div className="tabMenus">
            <button className={toggleState === `${tabsMenu.tabName}` ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(tabsMenu.tabName)}>
              {tabsMenu.tabName}
            </button>
          </div>
        ))}
      </div>
      <div className="contentss">
        <div className="w-CharacterCard h-full bg-[#f1f1f1]  ">
          <div className="w-full flex justify-center ">
            {tabs.map(contents => (
              <div className={toggleState === `${contents.tabName}` ? 'block bg-white  p-5' : 'hidden'}>{contents.tabAddress}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterTab;
