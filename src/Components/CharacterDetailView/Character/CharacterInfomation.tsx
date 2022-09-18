import React from 'react';
import { CharacterDetailData } from '../../Types/Character/CharacterType';

interface CharacterProps {
  characterInfomationData: CharacterDetailData;
}
function CharacterInfomation({ characterInfomationData }: CharacterProps) {
  return <div>{characterInfomationData.adventureName}</div>;
}

export default CharacterInfomation;
