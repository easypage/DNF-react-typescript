import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { characterStatusData } from './../../Types/Character/CharacterStatusType';
import CharacterStatus from './CharacterStatus';

function CharacterStatusContainer() {
  const params = new URLSearchParams(window.location.search);
  const serverId = params.get('serverId');
  const characterName = params.get('characterId');
  const [CharacterStatusData, setCharacterStatusData] = useState();

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/status?serverId=${serverId}&characterId=${characterName}`).then(characterStatus => {
      setCharacterStatusData(characterStatus.data);
    });
  }, []);
  return (
    <div>
      <CharacterStatus characterStatusData={CharacterStatusData} />
    </div>
  );
}

export default CharacterStatusContainer;
