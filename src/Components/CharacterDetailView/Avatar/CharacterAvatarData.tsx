import React from 'react';
import CharacterAvatar from './CharacterAvatar';

import { CharacterDataType } from '../../Types/Character/CharacterDataType';

interface characterDataProps {
  characterData: CharacterDataType | undefined;
}
function CharacterAvatarData({ characterData }: characterDataProps) {
  return <CharacterAvatar characterAvatarData={characterData?.avatar} />;
}
export default CharacterAvatarData;
