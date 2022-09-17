import React from 'react';
import { CharacterCardInterface } from '../Types/Character/CharacterObjectType';

interface CharacterDataProps {
  characterDataValue: CharacterCardInterface[] | undefined;
}
function CharacterCard({ characterDataValue }: CharacterDataProps) {
  return (
    <div className="w-CharacterCard flex flex-wrap gap-2 text-xs mt-3 m-auto">
      {characterDataValue &&
        characterDataValue.map(data => (
          <div key={data.characterId} className="flex flex-col text-center border-2 border-solid border-gray-400 hover:border-yellow-500 ">
            <a href={`charView?serverId=${data.serverId}&characterId=${data.characterId}`}>
              <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${data.serverId}&characterId=${data.characterId}?zoom=1`} alt="img" />
            </a>
            <p>{data.characterName}</p>
            <p>{data.level}</p>
            <p>{data.jobName}</p>
            <p>{data.jobGrowName}</p>
          </div>
        ))}
    </div>
  );
}
export default CharacterCard;
