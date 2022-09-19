import React from 'react';
import { CharacterSimpleData } from '../../Types/Character/CharacterType';

import CharacterCard from './CharacterCard';

interface CharacterDataProps {
  CharacterSimpleDataList: CharacterSimpleData[] | undefined;
}
function CharacterCardList({ CharacterSimpleDataList }: CharacterDataProps) {
  return (
    <div className="w-full flex flex-row flex-wrap text-xs mt-3">
      {CharacterSimpleDataList && CharacterSimpleDataList.map(characterData => <CharacterCard key={characterData.characterId} CharacterSimpleData={characterData} />)}
    </div>
  );
}
export default CharacterCardList;
