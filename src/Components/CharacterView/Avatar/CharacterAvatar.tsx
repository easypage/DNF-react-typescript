import React from 'react';
import { CharacterAvatarData } from '../../Types/Character/CharacterAvatarType';

interface characterAvatarProps {
  characterAvatarData: CharacterAvatarData[] | undefined;
}
function CharacterAvatar({ characterAvatarData }: characterAvatarProps) {
  return (
    <div className="flex flex-col ">
      {characterAvatarData?.length === 0 ? (
        <div className="mt-2">아바타가 없습니다</div>
      ) : (
        <div>
          {characterAvatarData &&
            characterAvatarData.map(avatarData => (
              <li className="" key={avatarData.itemId}>
                <div key={avatarData.itemId} className="flex items-center justify-start h-12  ">
                  <p className="text-center text-xs font-bold  w-20  border-solid border-r-2 border-gray-400 mr-4  ">{avatarData.slotName}</p>
                  <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${avatarData.itemId}`} alt={avatarData.itemName} className="mr-3" />
                  <p className="text-xs mr-2 font-bold w-52">{avatarData.itemName}</p>
                  <div className="">
                    <p className="text-xs">{avatarData.optionAbility}</p>
                  </div>
                </div>
              </li>
            ))}
        </div>
      )}
    </div>
  );
}
export default CharacterAvatar;
