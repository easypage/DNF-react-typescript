import React from 'react';

import CharacterDetailDataContainer from './CharacterDetailData';

function CharacterDetailCard() {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');
  return (
    <div>
      <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${CharacterserverId}&characterId=${CharacterId}?zoom=1`} alt="img" />
      <CharacterDetailDataContainer />
    </div>
  );
}
export default CharacterDetailCard;
