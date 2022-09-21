import React from 'react';
import { CharactrCreatureData } from '../../Types/Character/CharacterCreatureType';
import ListContainer from './../../../DesignPattern/CharacterDetailList/ListContainer';

interface characterCreatureProps {
  charactrCreatureData: CharactrCreatureData | undefined;
}

function CharacterCreature({ charactrCreatureData }: characterCreatureProps) {
  return (
    <div className="flex flex-row">
      <ListContainer>
        {/* {charactrCreatureData && <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${charactrCreatureData?.itemId} `} alt={charactrCreatureData?.itemName} />} */}
        <p className="text-sm font-bold">{charactrCreatureData?.itemName}</p>
        {charactrCreatureData?.artifact.map(artifact => (
          <div className="flex flex-row" key={artifact.itemName}>
            <p className="text-xs ml-3">{artifact.itemRarity}</p>
            <p className="text-xs">{artifact.itemName}</p>
          </div>
        ))}
      </ListContainer>
    </div>
  );
}

export default CharacterCreature;
