import React from 'react';
import { characterCreatureData } from '../../Types/Character/CharacterCreatureType';

interface characterCreatureProps {
  characterCreatureData: characterCreatureData | undefined;
}

function CharacterCreature({ characterCreatureData }: characterCreatureProps) {
  return (
    <div className="flex flex-row items-center h-9 borderContainer">
      {characterCreatureData === null ? (
        <div>크리쳐가 존재하지 않습니다.</div>
      ) : (
        <div className="flex flex-row items-center">
          <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${characterCreatureData?.itemId} `} alt={characterCreatureData?.itemName} className="mr-2" />
          <p className="text-xs font-bold mr-2">{characterCreatureData?.itemName}</p>
        </div>
      )}
    </div>
  );
}

export default CharacterCreature;
