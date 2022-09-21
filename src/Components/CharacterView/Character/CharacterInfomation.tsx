import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import CharacterStatusContainer from '../CharacterStatus/CharacterStatusContainer';

interface CharacterProps {
  characterInfomationData: CharacterDetailData | undefined;
}
function CharacterInfomation({ characterInfomationData }: CharacterProps) {
  const params = new URLSearchParams(window.location.search);
  const serverId = params.get('serverId');
  return (
    <div className="flex">
      <ListContainer>
        <div className="flex flex-col items-start justify-start">
          <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterInfomationData?.characterId}?zoom=1`} alt="img" />
          <p className="text-base font-bold">{characterInfomationData?.characterName}</p>
          <p className="text-xs ">모험단 {characterInfomationData?.adventureName}</p>
          <p className="text-xs">길드 {characterInfomationData?.guildName}</p>
          <p className="text-xs">각성명 {characterInfomationData?.jobGrowName}</p>
          <p className="text-xs">레벨 {characterInfomationData?.level}</p>
        </div>
      </ListContainer>
    </div>
  );
}

export default CharacterInfomation;
