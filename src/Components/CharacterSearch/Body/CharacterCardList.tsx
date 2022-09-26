import React from 'react';
import LoadingBar from '../../../DesignPattern/Loding/LoadingBar';
import { CharacterSimpleData } from '../../Types/Character/CharacterType';

import CharacterCard from './CharacterCard';

interface CharacterDataProps {
  CharacterSimpleDataList: CharacterSimpleData[] | undefined;
  loading: boolean;
}
function CharacterCardList({ CharacterSimpleDataList, loading }: CharacterDataProps) {
  return (
    <div className="w-CharacterCard flex flex-wrap gap-3 m-auto text-xs mt-6">
      {loading ? <LoadingBar /> : CharacterSimpleDataList?.map(characterData => <CharacterCard key={characterData.characterId} CharacterSimpleData={characterData} loading={loading} />)}
    </div>
  );
}
export default CharacterCardList;
