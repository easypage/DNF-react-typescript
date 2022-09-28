import React from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';
import { characterCreatureData } from '../../Types/Character/CharacterCreatureType';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import CharacterDetailBannerContent from '../Character/CharacterDetailBannerContent';
import CharacterCreature from '../Creature/CharacterCreature';
import CharacterEquipment from '../Equipment/CharacterEquipment';
import CharacterTalisman from '../Talisman/CharacterTalisman';
import CharacterFlag from '../Flag/CharacterFlag';
import { CharacterFlagData } from '../../Types/Character/CharacterFlagType';
import CharacterTab from './CharacterTabMenu';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import CharacterStatus from './../CharacterStatus/CharacterStatus';
import { characterStatusData } from './../../Types/Character/CharacterStatusType';

interface CharacterDetailViewProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
  characterDetailData: CharacterDetailData | undefined;
  characterTalismanData: CharacterTalismanData[] | undefined;
  characterEquipmentData: CharacterEquipmentData[] | undefined;
  characterCreatureData: characterCreatureData | undefined;
  characterFlagData: CharacterFlagData | undefined;
  CharacterStatusData: characterStatusData | undefined;
  serverId: string | null;
  characterId: string | null;
  loading: boolean;
}

function CharacterViewBody({
  characterAvatarData,
  characterDetailData,
  characterTalismanData,
  characterEquipmentData,
  characterCreatureData,
  characterFlagData,
  serverId,
  characterId,
  CharacterStatusData,
}: CharacterDetailViewProps) {
  const tabs = [
    { tabName: '장비', tabAddress: <CharacterEquipment characterEquipmentData={characterEquipmentData} /> },
    { tabName: '아바타', tabAddress: <CharacterAvatar characterAvatarData={characterAvatarData} /> },
    { tabName: '크리쳐', tabAddress: <CharacterCreature characterCreatureData={characterCreatureData} /> },
    { tabName: '휘장', tabAddress: <CharacterFlag characterFlagData={characterFlagData} /> },
    { tabName: '탈리스만', tabAddress: <CharacterTalisman characterTalismanData={characterTalismanData} /> },
  ];

  return (
    <div>
      <CharacterDetailBannerContent characterInfomationData={characterDetailData} serverId={serverId} characterId={characterId} />
      <div className="w-Container relative m-auto">
        <EventBannerContainer />
      </div>
      <div className="w-Container m-auto flex justify-center relative">
        <CharacterStatus characterStatusData={CharacterStatusData} serverId={serverId} characterId={characterId} />
        <CharacterTab tabs={tabs} />
      </div>
    </div>
  );
}

export default CharacterViewBody;
