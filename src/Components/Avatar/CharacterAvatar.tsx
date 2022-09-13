import React from 'react';
import { CharacterAvatarData } from '../Types/Character/CharacterAvatarType';

interface characterDataProps {
  characterAvatarData: CharacterAvatarData | undefined;
}

function CharacterAvatar({ characterAvatarData }: characterDataProps) {
  return <div>{characterAvatarData?.itemName}</div>;
}

export default CharacterAvatar;
