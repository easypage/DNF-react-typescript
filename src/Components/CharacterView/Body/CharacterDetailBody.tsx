import React from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import CharacterInfomation from '../Character/CharacterInfomation';
import CharacterEquipment from '../Equipment/CharacterEquipment';
import CharacterTalisman from '../Talisman/CharacterTalisman';
import CharacteContainer from './CharacterDetailBodyContainer';

interface CharacterDetailBodyProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
  characterDetailData: CharacterDetailData | undefined;
  characterTalismanData: CharacterTalismanData[] | undefined;
  characterEquipmentData: CharacterEquipmentData[] | undefined;
}
function CharacterDetailBody({ characterAvatarData, characterDetailData, characterTalismanData, characterEquipmentData }: CharacterDetailBodyProps) {
  return (
    <div className="w-Container m-auto flex justify-center ">
      {/* <CharacterAvatar characterAvatarData={characterAvatarData} /> */}
      {/* <CharacterInfomation characterInfomationData={characterDetailData} /> */}
      {/* <CharacterTalisman characterTalismanData={characterTalismanData} /> */}
      <CharacterEquipment characterEquipmentData={characterEquipmentData} />
    </div>
  );
}

export default CharacterDetailBody;
