import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterDataType } from '../../Types/Character/CharacterDataType';
import CharacterDetailView from './CharacterDetailView';

function CharacterDetailBodyContainer() {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');
  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState<CharacterDataType>();
  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/default?serverId=${CharacterserverId}&characterId=${CharacterId}`).then(result => {
      setCharacterData(result.data);
      setLoading(false);
    });
  }, []);

  return (
    <CharacterDetailView
      characterAvatarData={characterData?.avatar}
      characterDetailData={characterData?.character}
      characterTalismanData={characterData?.talismans}
      characterEquipmentData={characterData?.equipment}
      charactrCreatureData={characterData?.creature}
      characterFlagData={characterData?.flag}
      characterId={CharacterId}
      serverId={CharacterserverId}
      loading={loading}
    />
  );
}
export default CharacterDetailBodyContainer;
