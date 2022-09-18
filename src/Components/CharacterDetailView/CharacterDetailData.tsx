import React from 'react';
import CharacterAvatar from './Avatar/CharacterAvatar';

import { CharacterDataType } from '../Types/Character/CharacterDataType';
import CharacterInfomation from './Character/CharacterInfomation';

interface characterDataProps {
  characterData: CharacterDataType | undefined;
}
function CharacterDetailData({ characterData }: characterDataProps) {
  return (
    <div>
      <CharacterAvatar characterAvatarData={characterData?.avatar} />
      {/* <CharacterInfomation characterInfomationData={characterData?.character} /> */}
    </div>
  );
}
export default CharacterDetailData;
