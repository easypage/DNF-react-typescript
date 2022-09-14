import React from 'react';
import CharacterAvatar from './Avatar/CharacterAvatar';

import { CharacterDataType } from '../Types/Character/CharacterDataType';

interface characterDataProps {
  characterData: CharacterDataType | undefined;
}
function CharacterDetailListView({ characterData }: characterDataProps) {
  return (
    <div>
      <CharacterAvatar characterAvatarData={characterData?.avatar} />
    </div>
  );
}

export default CharacterDetailListView;
