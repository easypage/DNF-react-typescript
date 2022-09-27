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

      <ul className="flex flex-wrap border-2 border-gray-400 border-solid rounded-md box-size">
        {characterStatusData?.default.map((characterStatus, index) => {
          if (characterStatus !== null) {
            return (
              <li className="statusList" key={characterStatus.name}>
                <p className="flex items-center justify-center w-14 h-10">
                  <img src={require(`../../../asset/images/characterStatusImages/${characterStatus.name}.png`)} alt="" className="w-3 h-3 " />
                </p>
                <p className="w-24 h-10 text-xs font-bold  flex justify-center items-center ">{characterStatus.name}</p>
                <p className="w-24 h-10 text-xs flex justify-center items-center ">{characterStatus.value}</p>
              </li>
            );
          } else {
            return <div className="w-2/4 nullList border-b border-solid border-gray-400 last:border-none " key={index}></div>;
          }
        })}
      </ul>
    </div>
  );
}

export default CharacterStatus;
