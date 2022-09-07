import React from 'react';
import { CharacterCardInterface } from '../Types/CharacterObjectType';

interface CharacterDataProps {
  characterDataValue: CharacterCardInterface[] | undefined;
}
function CharacterCardList(props: CharacterDataProps) {
  const { characterDataValue } = props;
  return (
    <div className="flex flex-row ">
      {characterDataValue &&
        characterDataValue.map(data => (
          <div key={data.characterId} className="flex flex-col items-center">
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
export default CharacterCardList;
