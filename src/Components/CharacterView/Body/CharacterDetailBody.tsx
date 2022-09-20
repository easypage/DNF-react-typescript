import React from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import CharacteContainer from './CharacterDetailBodyContainer';

interface CharacterDetailBodyProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
  characterDetailData: CharacterDetailData | undefined;
}
function CharacterDetailBody({ characterAvatarData, characterDetailData }: CharacterDetailBodyProps) {
  return (
    <div className="w-Container m-auto flex justify-center ">
      <CharacterAvatar characterAvatarData={characterAvatarData} />
    </div>
  );
}

export default CharacterDetailBody;
