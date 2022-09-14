import React from 'react';
import { CharacterAvatarData } from '../Types/Character/CharacterAvatarType';

interface characterAvatarProps {
  characterAvatarData: CharacterAvatarData | undefined;
}

function CharacterAvatar({ characterAvatarData }: characterAvatarProps) {
  return (
    <div>
      {characterAvatarData?.itemName}
      <div></div>
    </div>
  );
}

export default CharacterAvatar;
