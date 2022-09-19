import React from 'react';
import CharacterAvatar from '../Avatar/CharacterAvatar';
import { CharacterDataType } from '../../Types/Character/CharacterDataType';
import CharacterInfomation from '../Character/CharacterInfomation';

interface characterDataProps {
  characterData: CharacterDataType | undefined;
}
function CharacterDetailContainer({ characterData }: characterDataProps) {
  console.log(characterData?.character);

  return (
    <div>
      <CharacterAvatar characterAvatarData={characterData?.avatar} />
      <CharacterInfomation characterInfomationData={characterData?.character} />
    </div>
  );
}
export default CharacterDetailContainer;
