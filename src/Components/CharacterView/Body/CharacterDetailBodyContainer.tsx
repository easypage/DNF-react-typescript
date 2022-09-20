import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterDataType } from '../../Types/Character/CharacterDataType';
import CharacterDetailBody from './CharacterDetailBody';

function CharacterDetailBodyContainer() {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');

  const [characterData, setCharacterData] = useState<CharacterDataType>();
  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/default?serverId=${CharacterserverId}&characterId=${CharacterId}`).then(result => {
      setCharacterData(result.data);
    });
  }, []);
  console.log(characterData?.equipment);

  return (
    <CharacterDetailBody
      characterAvatarData={characterData?.avatar}
      characterDetailData={characterData?.character}
      characterTalismanData={characterData?.talismans}
      characterEquipmentData={characterData?.equipment}
    />
  );
}
export default CharacterDetailBodyContainer;
