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

      <ListContainer>
        <div className=" flex flex-wrap justify-center items-center">
          {characterStatusData?.default.map(characterStatus => {
            if (characterStatus !== null) {
              return (
                <div className=" w-56 flex border-2 border-solid border-gray-400 ml-3 mt-2 mb-2">
                  <p className="w-24 h-7 text-xs flex justify-center items-center border-r border-solid border-gray-400">{characterStatus.name}</p>
                  <p className="w-16 h-7 text-xs flex justify-center items-center m-auto">{characterStatus.value}</p>
                </div>
              );
            } else {
              return <div className=" w-56 h-7 flex flex-wrap items-center justify-center  border-2 border-solid border-gray-400 ml-3 mt-2 mb-2 "></div>;
            }
          })}
        </div>
      </ListContainer>
    </div>
  );
}

export default CharacterStatus;
