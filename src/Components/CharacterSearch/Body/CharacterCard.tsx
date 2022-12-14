import React from 'react';
import { Link } from 'react-router-dom';
import { serverReName } from '../../../asset/ts/serverList';

import { CharacterSimpleData } from '../../Types/Character/CharacterType';

interface CharacterProps {
  CharacterSimpleData: CharacterSimpleData;
}

function CharacterCard({ CharacterSimpleData }: CharacterProps) {
  return (
    <Link to={`/characterView?serverId=${CharacterSimpleData.serverId}&characterId=${CharacterSimpleData.characterId}`}>
      <div className="w-52 h-72 relative shadow-lg rounded-xl flex flex-col text-center border-2 border-solid border-gray-400 hover:border-yellow-500  ">
        <div>
          <img
            className="mt-14"
            src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${CharacterSimpleData.serverId}&characterId=${CharacterSimpleData.characterId}?zoom=1`}
            alt="img"
          />
          <div className="absolute top-6 text-center w-full">
            <p className="text-2xl font-bold ">{CharacterSimpleData.characterName}</p>
            <p className="text-xs">{CharacterSimpleData.jobGrowName}</p>
            <p className="text-sm font-bold">{serverReName[CharacterSimpleData.serverId]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
