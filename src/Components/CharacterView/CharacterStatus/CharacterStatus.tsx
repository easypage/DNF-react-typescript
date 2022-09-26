import React from 'react';
import { characterStatusData } from '../../Types/Character/CharacterStatusType';
import './../../../css/characterStatus.css';
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

      {/* <ul className="flex flex-wrap justify-between items-center border border-solid border-gray-400"> */}
      <ul className="flex flex-wrap border-2 border-gray-400 border-solid rounded-md">
        {characterStatusData?.default.map((characterStatus, index) => {
          if (characterStatus !== null) {
            return (
              <li className="statusList" key={characterStatus.name}>
                <p className="w-2/4 h-9 text-xs font-bold  flex justify-center items-center ">{characterStatus.name}</p>
                <p className="w-2/4 h-9 text-xs flex justify-center items-center ">{characterStatus.value}</p>
              </li>
            );
          } else {
            return <div className="w-1/2 h-9  border-b border-solid border-gray-400 last:border-none " key={index}></div>;
          }
        })}
      </ul>
      {/* </ul> */}
    </div>
  );
}

export default CharacterStatus;
