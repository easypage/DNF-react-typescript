import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';

interface characterAvatarProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
}
function CharacterAvatar({ characterAvatarData }: characterAvatarProps) {
  return (
    <div className="flex flex-col ">
      {characterAvatarData &&
        characterAvatarData.map(avatarData => (
          <ListContainer>
            <div key={avatarData.itemId} className="flex items-center">
              <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${avatarData.itemId}`} alt={avatarData.itemName} />
              <p className="text-lg">{avatarData.itemName}</p>
              <p className="text-sm ml-4">{avatarData.clone.itemName}</p>
              <p className="text-sm ml-4">{avatarData.optionAbility}</p>
            </div>
          </ListContainer>
        ))}
    </div>
  );
}
export default CharacterAvatar;
