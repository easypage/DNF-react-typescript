import React from 'react';
import { CharactrCreatureData } from '../../Types/Character/CharacterCreatureType';
import ListContainer from './../../../DesignPattern/CharacterDetailList/ListContainer';

interface characterCreatureProps {
  charactrCreatureData: CharactrCreatureData | undefined;
}

function CharacterCreature({ charactrCreatureData }: characterCreatureProps) {
  console.log(charactrCreatureData);

  return (
    <ListContainer>
      <div className="flex flex-row items-center h-9">
        <p className="text-xs text-center font-bold border-r border-solid border-gray-400 w-14 mr-3">크리쳐</p>
        <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${charactrCreatureData?.itemId} `} alt={charactrCreatureData?.itemName} className="mr-2" />
        <p className="text-xs font-bold mr-2">{charactrCreatureData?.itemName}</p>
      </div>
    </ListContainer>
  );
}

export default CharacterCreature;
