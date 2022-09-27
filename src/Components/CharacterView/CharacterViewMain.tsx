import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterDataType } from '../Types/Character/CharacterDataType';
import CharacterViewHeader from './Header/CharacterViewHeader';
import CharacterViewBody from './Body/CharacterViewBody';
import CharacterViewFooter from './Footer/CharacterViewFooter';
import { characterStatusData } from './../Types/Character/CharacterStatusType';
import LoadingBar from './../../DesignPattern/Loding/LoadingBar';

function CharacterViewMain() {
  const params = new URLSearchParams(window.location.search);
  const CharacterserverId = params.get('serverId');
  const CharacterId = params.get('characterId');
  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState<CharacterDataType>();
  const [CharacterStatusData, setCharacterStatusData] = useState<characterStatusData>();
  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/default?serverId=${CharacterserverId}&characterId=${CharacterId}`).then(result => {
      setCharacterData(result.data);
      axios.get(`https://dnf-react-typescript.herokuapp.com/character/status?serverId=${CharacterserverId}&characterId=${CharacterId}`).then(characterStatus => {
        setCharacterStatusData(characterStatus.data);
        setLoading(false);
      });
    });
  }, []);

  return loading ? (
    <LoadingBar />
  ) : (
    <div>
      <CharacterViewHeader />
      <CharacterViewBody
        characterAvatarData={characterData?.avatar}
        characterDetailData={characterData?.character}
        characterTalismanData={characterData?.talismans}
        characterEquipmentData={characterData?.equipment}
        charactrCreatureData={characterData?.creature}
        characterFlagData={characterData?.flag}
        characterId={CharacterId}
        serverId={CharacterserverId}
        loading={loading}
        CharacterStatusData={CharacterStatusData}
      />
      <CharacterViewFooter />
    </div>
  );
}

export default CharacterViewMain;
