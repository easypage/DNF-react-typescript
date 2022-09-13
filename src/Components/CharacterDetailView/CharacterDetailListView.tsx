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

  return (
    <div className="characterViewBox flex flex-row ">
      <div className="characterInfomation">
        <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${CharacterserverId}&characterId=${CharacterId}?zoom=1`} alt="characterImage" />
        <CharacterAvatar CharacterAvatar={characterData?.avatar} />
        {/* <CharacterAvatar characterAvatarData={characterData?.avatar} /> */}
        {/* <CharacterAvat&&ar characterAvatarData={characterData?.avatar} /> */}
      </div>
    </div>
  );
}

export default CharacterDetailListView;
