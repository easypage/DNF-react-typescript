import React from 'react';
import { characterStatusData } from '../../Types/Character/CharacterStatusType';
import CharacterImage from './CharacterImage';
interface characterStatusProps {
  characterStatusData: characterStatusData | undefined;
  serverId: string | null;
  characterId: string | null;
}
function CharacterStatus({ characterStatusData, serverId, characterId }: characterStatusProps) {
  return (
    <div>
      <CharacterImage serverId={serverId} characterId={characterId} />
      <div className="flex flex-col w-full">
        {characterStatusData?.default.map(characterStatus => {
          if (characterStatus !== null) {
            return (
              <div className="flex flex-wrap " key={characterStatus.value}>
                <p>{characterStatus.name}</p>
                <p>{characterStatus.value}</p>
              </div>
            );
          } else {
            return <div>null</div>;
          }
        })}
      </div>
    </div>
  );
}

export default CharacterStatus;
