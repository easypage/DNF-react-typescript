import React from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';

interface characterAvatarProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
}
function CharacterAvatar({ characterAvatarData }: characterAvatarProps) {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');

  return (
    <div className="flex flex-col items-center">
      <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${CharacterserverId}&characterId=${CharacterId}?zoom=1`} alt="img" />
      {characterAvatarData &&
        characterAvatarData.map(avatarData => (
          <div key={avatarData.itemId}>
            <p> {avatarData.itemName}</p>
            <p>{avatarData.clone.itemName}</p>
            <p>{avatarData.optionAbility}</p>
          </div>
        ))}
    </div>
  );
}
export default CharacterAvatar;
