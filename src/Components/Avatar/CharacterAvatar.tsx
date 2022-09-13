import React from 'react';
import { CharacterAvatarData } from '../Types/Character/CharacterAvatarType';

interface characterAvatarProps {
  CharacterAvatar: CharacterAvatarData | undefined;
}

function CharacterAvatar({ CharacterAvatar }: characterAvatarProps) {
  return <div>{CharacterAvatar?.itemName}</div>;
}

export default CharacterAvatar;
