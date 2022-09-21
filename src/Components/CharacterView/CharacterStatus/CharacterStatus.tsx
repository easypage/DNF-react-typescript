import React from 'react';
import { characterStatusData } from '../../Types/Character/CharacterStatusType';
interface characterStatusProps {
  characterStatusData: characterStatusData[] | undefined;
}
function CharacterStatus({ characterStatusData }: characterStatusProps) {
  return <div className="">{characterStatusData && characterStatusData.map(characterStatus => <p>{characterStatus.name}</p>)}</div>;
}

export default CharacterStatus;
