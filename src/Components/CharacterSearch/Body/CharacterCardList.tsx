import React from 'react';
import { CharacterSimpleData } from '../../Types/Character/CharacterType';

import CharacterCard from './CharacterCard';

interface CharacterDataProps {
  CharacterSimpleDataList: CharacterSimpleData[] | undefined;
}
function CharacterCardList({ CharacterSimpleDataList }: CharacterDataProps) {
  return (
    <div className="w-CharacterCard flex flex-row flex-wrap gap-3 m-auto text-xs mt-6">
      {CharacterSimpleDataList && CharacterSimpleDataList.map(characterData => <CharacterCard key={characterData.characterId} CharacterSimpleData={characterData} />)}
    </div>
  );
}
export default CharacterCardList;
