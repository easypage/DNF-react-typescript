import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterCardInterface } from '../Types/Character/CharacterObjectType';

interface CharacterDataProps {
  characterDataValue: CharacterCardInterface[] | undefined;
}
function CharacterCard({ characterDataValue }: CharacterDataProps) {
  return (
    <div className="w-CharacterCard flex flex-wrap gap-2 text-xs mt-3 m-auto">
      {characterDataValue &&
        characterDataValue.map(data => (
          <Link to={`/charView?serverId=${data.serverId}&characterId=${data.characterId}`} key={data.characterId}>
            <div className="relative flex flex-col text-center border-2 border-solid border-gray-400 hover:border-yellow-500 ">
              <img className="mt-6" src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${data.serverId}&characterId=${data.characterId}?zoom=1`} alt="img" />
              <div className="absolute top-4 text-center w-full">
                <p>카인</p>
                <div className="flex justify-center items-center">
                  <p className="text-lg font-bold">{data.characterName}</p>
                  <p className="ml-2">{data.level}</p>
                </div>
                <p>{data.jobGrowName}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
export default CharacterCard;
