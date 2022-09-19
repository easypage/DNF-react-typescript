import React from 'react';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';

interface CharacterProps {
  characterInfomationData: CharacterDetailData | undefined;
}
function CharacterInfomation({ characterInfomationData }: CharacterProps) {
  return (
    <div>
      <p>{characterInfomationData?.adventureName}</p>
      <p>{characterInfomationData?.characterName}</p>
      <p>{characterInfomationData?.guildName}</p>
      <p>{characterInfomationData?.level}</p>
      <p>{characterInfomationData?.jobGrowName}</p>
    </div>
  );
}

export default CharacterInfomation;
