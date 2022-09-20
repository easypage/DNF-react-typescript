import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';

interface CharacterProps {
  characterInfomationData: CharacterDetailData | undefined;
}
function CharacterInfomation({ characterInfomationData }: CharacterProps) {
  const params = new URLSearchParams(window.location.search);
  const serverId = params.get('serverId');
  return (
    <div className="flex flex-row">
      <div className="flex items-center justify-start">
        <ListContainer>
          <img
            className="mt-14"
            src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterInfomationData?.characterId}?zoom=1`}
            alt="img"
          />
          <p className="text-xs">{characterInfomationData?.characterName}</p>
          <p className="text-xs">{characterInfomationData?.adventureName}</p>
          <p className="text-xs">{characterInfomationData?.guildName}</p>
          <p className="text-xs">{characterInfomationData?.jobGrowName}</p>
          <p className="text-xs">{characterInfomationData?.level}</p>
        </ListContainer>
      </div>
    </div>
  );
}

export default CharacterInfomation;
