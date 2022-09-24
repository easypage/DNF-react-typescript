import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';

interface characterTalismanProps {
  characterTalismanData: CharacterTalismanData[] | undefined;
}

function CharacterTalisman({ characterTalismanData }: characterTalismanProps) {
  console.log(characterTalismanData);
  return (
    <div className="flex flex-col ">
      {characterTalismanData?.map(talisman => (
        <ListContainer>
          <div key={talisman.talisman.itemId} className="flex flex-col items-center justify-center">
            <p className="text-sm font-bold text-[#FF00FF]"> {talisman.talisman.itemName}</p>
            {talisman.runes.map(talismanRune => (
              <p className="text-xs" key={talismanRune.itemId}>
                {talismanRune.itemName}
              </p>
            ))}
          </div>
        </ListContainer>
      ))}
    </div>
  );
}

export default CharacterTalisman;
