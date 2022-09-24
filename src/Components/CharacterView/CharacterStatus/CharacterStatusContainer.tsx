import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { characterStatusData } from './../../Types/Character/CharacterStatusType';
import CharacterStatus from './CharacterStatus';

interface CharacterServerIdCharacterIdProps {
  serverId: string | null;
  characterId: string | null;
}
function CharacterStatusContainer({ serverId, characterId }: CharacterServerIdCharacterIdProps) {
  const [CharacterStatusData, setCharacterStatusData] = useState();

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/status?serverId=${serverId}&characterId=${characterId}`).then(characterStatus => {
      setCharacterStatusData(characterStatus.data);
    });
  }, []);
  console.log(CharacterStatusData);

  return (
    <div className="w-CharacterStatus mr-5">
      <CharacterStatus characterStatusData={CharacterStatusData} characterId={characterId} serverId={serverId} key={characterId} />
    </div>
  );
}

export default CharacterStatusContainer;
