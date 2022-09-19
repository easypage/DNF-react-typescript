import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterSimpleData } from '../../Types/Character/CharacterType';

interface CharacterProps {
  CharacterSimpleData: CharacterSimpleData;
}
function CharacterCard({ CharacterSimpleData }: CharacterProps) {
  return (
    <Link to={`/characterView?serverId=${CharacterSimpleData.serverId}&characterId=${CharacterSimpleData.characterId}`}>
      <div className="relative flex flex-col text-center border-2 border-solid border-gray-400 hover:border-yellow-500 ">
        <img
          className="mt-6"
          src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${CharacterSimpleData.serverId}&characterId=${CharacterSimpleData.characterId}?zoom=1`}
          alt="img"
        />
        <div className="absolute top-4 text-center w-full">
          <p>카인</p>
          <div className="flex justify-center items-center">
            <p className="text-lg font-bold">{CharacterSimpleData.characterName}</p>
            <p className="ml-2">{CharacterSimpleData.level}</p>
          </div>
          <p>{CharacterSimpleData.jobGrowName}</p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
