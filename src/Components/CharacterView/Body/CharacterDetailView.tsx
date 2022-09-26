import React, { useState } from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';
import { CharactrCreatureData } from '../../Types/Character/CharacterCreatureType';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import CharacterDetailBannerContent from '../Character/CharacterDetailBannerContent';
import CharacterCreature from '../Creature/CharacterCreature';
import CharacterEquipment from '../Equipment/CharacterEquipment';
import CharacterTalisman from '../Talisman/CharacterTalisman';
import CharacteContainer from './CharacterDetailBodyContainer';
import CharacterFlag from '../Flag/CharacterFlag';
import { CharacterFlagData } from '../../Types/Character/CharacterFlagType';
import CharacterStatusContainer from '../CharacterStatus/CharacterStatusContainer';
import CharacterTab from './CharacterTabMenu';
import { testType } from '../../Types/Character/CharacterTabsType';
import LoadingBar from '../../../DesignPattern/Loding/LoadingBar';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import VerticalAdBanner from '../../../DesignPattern/AdBanner/VerticalAdBanner';

interface CharacterDetailViewProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
  characterDetailData: CharacterDetailData | undefined;
  characterTalismanData: CharacterTalismanData[] | undefined;
  characterEquipmentData: CharacterEquipmentData[] | undefined;
  charactrCreatureData: CharactrCreatureData | undefined;
  characterFlagData: CharacterFlagData | undefined;
  serverId: string | null;
  characterId: string | null;
  loading: boolean;
}

function CharacterDetailView({
  characterAvatarData,
  characterDetailData,
  characterTalismanData,
  characterEquipmentData,
  charactrCreatureData,
  characterFlagData,
  serverId,
  characterId,
  loading,
}: CharacterDetailViewProps) {
  const tabs = [
    { tabName: '장비', tabAddress: <CharacterEquipment characterEquipmentData={characterEquipmentData} characterId={characterId} /> },
    { tabName: '아바타', tabAddress: <CharacterAvatar characterAvatarData={characterAvatarData} /> },
    { tabName: '크리쳐', tabAddress: <CharacterCreature charactrCreatureData={charactrCreatureData} /> },
    { tabName: '휘장', tabAddress: <CharacterFlag characterFlagData={characterFlagData} /> },
    { tabName: '탈리스만', tabAddress: <CharacterTalisman characterTalismanData={characterTalismanData} /> },
  ];

  return (
    <div>
      <CharacterDetailBannerContent characterInfomationData={characterDetailData} serverId={serverId} characterId={characterId} loading={loading} />
      <div className="w-Container relative m-auto">
        <EventBannerContainer />
      </div>
      <div className="w-Container m-auto flex justify-center relative">
        <CharacterStatusContainer characterId={characterId} serverId={serverId} />
        <CharacterTab tabs={tabs} />
      </div>
    </div>
  );
}

export default CharacterDetailView;
