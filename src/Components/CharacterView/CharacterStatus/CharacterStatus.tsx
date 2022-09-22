import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
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
      <div className="w-CharacterCard">
        <ListContainer>
          <div className="flex flex-wrap items-center justify-center ">
            {characterStatusData?.default.map(characterStatus => {
              if (characterStatus !== null) {
                return (
                  <div className="w-80 flex flex-wrap justify-center  border-2 border-solid border-gray-400 ml-3 mt-2 mb-2">
                    <p className="text-lg mr-2 mt-2">{characterStatus.name}</p>
                    <p className="text-lg mt-2">{characterStatus.value}</p>
                  </div>
                );
              } else {
                return <div className="w-80 h-10 flex flex-wrap items-center justify-center  border-2 border-solid border-gray-400 ml-3 mt-2 mb-2 ">null</div>;
              }
            })}
          </div>
        </ListContainer>
      </div>
    </div>
  );
}

export default CharacterStatus;
