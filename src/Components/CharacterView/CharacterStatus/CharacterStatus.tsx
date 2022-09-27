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
    <div className="w-CharacterStatus mr-5">
      <CharacterImage serverId={serverId} characterId={characterId} />

      {/* <ul className="flex flex-wrap justify-between items-center border border-solid border-gray-400"> */}
      <ul className="flex flex-wrap border-2 border-gray-400 border-solid rounded-md">
        {characterStatusData?.default.map((characterStatus, index) => {
          if (characterStatus !== null) {
            return (
              <li className="statusList" key={characterStatus.name}>
                <p className="flex items-center justify-center w-14 h-9">
                  <img src={require(`../../../asset/images/characterStatusImages/${characterStatus.name}.png`)} alt="" className="w-3 h-3 " />
                </p>
                <p className="w-24 h-9 text-xs font-bold  flex justify-center items-center ">{characterStatus.name}</p>
                <p className="w-24 h-9 text-xs flex justify-center items-center ">{characterStatus.value}</p>
              </li>
            );
          } else {
            return <div className="w-2/4 h-9  border-b border-solid border-gray-400 last:border-none " key={index}></div>;
          }
        })}
      </ul>
      {/* </ul> */}
    </div>
  );
}

export default CharacterStatus;
