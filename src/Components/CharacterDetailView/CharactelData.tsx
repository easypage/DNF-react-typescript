import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterDataType } from '../Types/Character/CharacterDataType';
import CharacterAvatarData from './CharacterDetailData';

function CharactelData() {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');

  const [characterData, setCharacterData] = useState<CharacterDataType>();
  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/default?serverId=${CharacterserverId}&characterId=${CharacterId}`).then(result => {
      setCharacterData(result.data);
      console.log(result.data);
    });
  }, []);
  return <CharacterAvatarData characterData={characterData} />;
}
export default CharactelData;
