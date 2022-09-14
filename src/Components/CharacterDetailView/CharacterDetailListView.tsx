import React from 'react';
import CharacterAvatar from '../Avatar/CharacterAvatar';

import { CharacterDataType } from '../Types/Character/CharacterDataType';

interface characterDataProps {
  characterData: CharacterDataType | undefined;
}
function CharacterDetailListView({ characterData }: characterDataProps) {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');
  console.log(characterData?.avatar);

  return (
    <div className="characterViewBox flex flex-row ">
      <div className="characterInfomation">
        <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${CharacterserverId}&characterId=${CharacterId}?zoom=1`} alt="characterImage" />
        {characterData?.avatar.map(avatar => (
          <CharacterAvatar characterAvatarData={avatar} key={avatar.itemId} />
        ))}
      </div>
    </div>
  );
}

export default CharacterDetailListView;
