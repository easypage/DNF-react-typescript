import React from 'react';

import characterBackImage from '../../../asset/images/characterBackgroundImage.png';
interface CharacterImageProps {
  serverId: string | null;
  characterId: string | null;
}
function CharacterImage({ serverId, characterId }: CharacterImageProps) {
  return (
    <div className="flex justify-center mt-common ">
      <div className="w-[500px] mb-2 ">
        <img className="opacity-80  rounded-lg" src={characterBackImage} alt="" />
        <img
          className="absolute top-5 left-[150px] m-auto"
          src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterId}?zoom=1`}
          alt="img"
        />
      </div>
    </div>
  );
}

export default CharacterImage;
