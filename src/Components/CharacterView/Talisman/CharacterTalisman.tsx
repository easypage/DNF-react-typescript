import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';

interface characterTalismanProps {
  characterTalismanData: CharacterTalismanData[] | undefined;
}
function CharacterTalisman({ characterTalismanData }: characterTalismanProps) {
  return (
    <div className="flex flex-row">
      {characterTalismanData?.map(talisman => (
        <ListContainer>
          <div key={talisman.talisman.itemId}>
            {talisman.talisman.itemName}
            {talisman.runes.map(talismanRune => (
              <p key={talismanRune.itemId}>{talismanRune.itemName}</p>
            ))}
          </div>
        </ListContainer>
      ))}
    </div>
  );
}

export default CharacterTalisman;
