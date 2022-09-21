import React from 'react';
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
import CharacterFlag from './../Flag/CharacterFlag';
import { CharacterFlagData } from '../../Types/Character/CharacterFlagType';
import CharacterStatusContainer from '../CharacterStatus/CharacterStatusContainer';

interface CharacterDetailBodyProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
  characterDetailData: CharacterDetailData | undefined;
  characterTalismanData: CharacterTalismanData[] | undefined;
  characterEquipmentData: CharacterEquipmentData[] | undefined;
  charactrCreatureData: CharactrCreatureData | undefined;
  characterFlagData: CharacterFlagData | undefined;
  serverId: string | null;
  characterId: string | null;
}
function CharacterDetailBody({
  characterAvatarData,
  characterDetailData,
  characterTalismanData,
  characterEquipmentData,
  charactrCreatureData,
  characterFlagData,
  serverId,
  characterId,
}: CharacterDetailBodyProps) {
  return (
    <div className="w-Container m-auto flex justify-center ">
      {/* <CharacterAvatar characterAvatarData={characterAvatarData} /> */}
      {/* <CharacterInfomation characterInfomationData={characterDetailData} /> */}
      {/* <CharacterTalisman characterTalismanData={characterTalismanData} /> */}
      {/* <CharacterEquipment characterEquipmentData={characterEquipmentData} /> */}
      {/* <CharacterCreature charactrCreatureData={charactrCreatureData} /> */}
      {/* <CharacterFlag characterFlagData={characterFlagData} /> */}
      <CharacterStatusContainer characterId={characterId} serverId={serverId} />
    </div>
  );
}

export default CharacterDetailBody;
